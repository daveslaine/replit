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
- **react-helmet-async@3.0.0 does NOT dedupe tags across separate `<Helmet>` instances in SSR `toString()`.** Two Helmet components each emitting `<title>`/`<meta>` produce DUPLICATE tags in the static HTML (the client DOM still dedupes, so the live SPA hid this bug). **Rule:** a given tag type must have exactly one source. Pages are the sole source of `<title>` + description; the global `SeoSchema` only emits og/twitter defaults + JSON-LD (no title/description/robots). Don't reintroduce overlap. `defaultTitle` prop also emits a stray title here — use a plain `<title>` instead, or omit.
- **Prerender route list = `public/sitemap.xml` `<loc>` entries (canonical URLs).** Short alias routes also exist in the router (e.g. `/pricing`, `/contact`, `/cfi-training`) but are intentionally NOT prerendered (avoids duplicate content). **Therefore every internal `<Link>` must point at a canonical (sitemap) URL**, or that page won't be crawlable. After adding routes, re-check internal links resolve to sitemap URLs.
- **`main.tsx` deliberately keeps `createRoot` (not `hydrateRoot`).** Avoids hydration-mismatch fragility across 85 pages given the helmet quirk; the prerendered HTML serves crawlers/first paint and the client re-renders identically. **Why:** correctness/robustness over the minor re-render cost.
- `index.html` holds only global non-duplicated tags (charset, viewport, gtag G-MF17HGD9C9, favicon, fonts) plus the two placeholders. All SEO title/meta come from helmet.
- Build/prerender needs `PORT` + `BASE_PATH` env (vite.config throws otherwise); the production workflow provides them (`BASE_PATH="/"`).
