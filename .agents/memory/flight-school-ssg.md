---
name: Flight school SSG / pre-rendering
description: How the flight-school SPA is pre-rendered to static HTML for crawlability, and the helmet/route gotchas that constrain it.
---

# Flight school static pre-rendering (SSG)

The flight-school artifact is a Vite CSR SPA that is pre-rendered to real static HTML at build time so every page is crawlable. Production deploy is `serve="static"` from `dist/public` with an SPA fallback rewrite `/* → /index.html`.

## How it works
- `build` script chains three steps: client `vite build` → SSR build `vite build --ssr src/entry-server.tsx --outDir dist/server` → `node prerender.mjs`.
- `prerender.mjs` reads `dist/public/index.html` as a template (must contain `<!--app-head-->` and `<!--app-html-->` placeholders), renders each route, writes `dist/public/<route>/index.html`. Static host serves the existing file before applying the catch-all rewrite.
- `App` accepts optional `ssrPath` + `helmetContext` props (passed to wouter `Router ssrPath` and `HelmetProvider context`). `entry-server.tsx` renders App and extracts helmet head.

## Decisions / gotchas
- **MUST use `react-helmet-async@2.0.5`, NOT 3.0.0.** 3.0.0 is a React-19 fork that relies on React's native metadata hoisting (it ships a `React19Dispatcher`); with `renderToString` it leaves `helmetContext.helmet` EMPTY and dumps every SEO tag inline inside `<body><div id="root">` instead of `<head>`. View-Source then shows NO meta in `<head>` — the exact bug a user will report. Fix is 2.0.5 + the noExternal line below. **Don't "upgrade" helmet back to 3.x.**
- **2.0.5 ships CJS**, so its named-export ESM import breaks the SSR bundle unless Vite bundles it: `vite.config.ts` has `ssr: { noExternal: ["react-helmet-async"] }`. Keep it.
- **helmet 2.0.5 dedupes meta by name/property and dedupes identical `<link>`/title across separate `<Helmet>` instances**, but does NOT dedupe two canonicals with *different* hrefs. **Rule:** a given tag type must have exactly one source. Pages are the sole source of `<title>` + description; the global `SeoSchema` is the sole source of canonical, og:*, twitter:*, og:url, and the Organization JSON-LD. Don't reintroduce overlap (FaqPage adds a 2nd JSON-LD of a *different* @type, FAQPage — that's fine, distinct schemas).
- **Prerender route list = `public/sitemap.xml` `<loc>` entries (canonical URLs).** Short alias routes also exist in the router (e.g. `/pricing`, `/contact`, `/cfi-training`) but are intentionally NOT prerendered (avoids duplicate content). **Therefore every internal `<Link>` must point at a canonical (sitemap) URL**, or that page won't be crawlable. After adding routes, re-check internal links resolve to sitemap URLs.
- **`main.tsx` deliberately keeps `createRoot` (not `hydrateRoot`).** Avoids hydration-mismatch fragility across 85 pages given the helmet quirk; the prerendered HTML serves crawlers/first paint and the client re-renders identically. **Why:** correctness/robustness over the minor re-render cost.
- `index.html` holds only global non-duplicated tags (charset, viewport, gtag G-MF17HGD9C9, favicon, fonts) plus the two placeholders. All SEO title/meta come from helmet.
- Build/prerender needs `PORT` + `BASE_PATH` env (vite.config throws otherwise); the production workflow provides them (`BASE_PATH="/"`).

## URL consolidation & canonicals (static host = no server 301)
- Production is `serve="static"`; there is **no HTTP 301**. To retire/merge a duplicate URL: drop it from `landingPages`/sitemap, add the old→canonical pair to `src/data/redirects.ts`, have `App` route it through a wouter `<Redirect replace>`, and have `prerender.mjs` emit a stub `<old>/index.html` with `rel=canonical` to the target + `<meta name="robots" content="noindex,follow">` + `<meta http-equiv="refresh">`. This is a *soft* redirect (weaker/slower equity transfer than a real 301) but is the best available on a static host. Build log shows `N pages written, M redirect stubs`.
- **Canonical + og:url are centralized in `SeoSchema.tsx` (single source), computed from wouter `useLocation`** → `canonicalUrl = SITE_URL + (location==="/" ? "/" : location)` with `SITE_URL="https://acceleratedflightschool.net"` (no trailing slash). Pages no longer emit their own canonical — don't add per-page canonicals back (would duplicate). SeoSchema renders in `Layout` (inside the router), so the hook resolves the current path on every page including SSR. An `ALIAS_CANONICAL` map in SeoSchema maps the client-only alias routes (`/pricing`, `/contact`, `/cfi-training`, etc., NOT in sitemap) to their canonical sitemap URL so a direct hit still canonicalizes correctly.
- Per-page unique prose lives in slug-keyed `Record<string,UniqueSection>` maps split across files (`landingUniqueAreas`/`landingUniqueTopics`/`airTourUnique`, merged in `landingUnique.ts`) so multiple subagents can populate them in parallel without clobbering the 1000+-line `landingPages.ts`. **Why:** concurrent edits to one big data file collide; separate files keyed by slug don't.
