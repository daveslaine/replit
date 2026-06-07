---
name: Flight school production serving
description: Why flight-school prod is a Node process (serve.mjs) not static hosting, and the redirect-table sync rule.
---

# Flight school production serving

Flight-school PRODUCTION is served by `artifacts/flight-school/serve.mjs` (a Node
process), NOT Replit static hosting. Dev still uses Vite.

**Why:** Replit STATIC deployments support only internal rewrites (no status
change). A trailing-slash URL like `/foo/` could never return a real HTTP 301 —
the `/* -> /index.html` catch-all rewrite hijacked every clean URL and served the
homepage's title/meta (duplicate-content / wrong-meta SEO bug the user demanded be
fixed with REAL 301s, not "clever" non-301 workarounds). A tiny Node process can
issue genuine 301s generically for every prerendered page.

**How it works:**
- `artifact.toml` production = build (`pnpm build`) + run (`node serve.mjs`, PORT 25224). The ~90 static rewrites were removed.
- `serve.mjs` uses ONLY Node built-ins (no deps, no build step) so it runs with bare `node` and needs no runtime node_modules. Do NOT add npm imports to it — that breaks the no-build guarantee.
- It serves `dist/public` with real 301s: trailing-slash->clean, `.html`->clean, plus ALIAS_REDIRECTS + LEGACY_REDIRECTS; clean route -> `<route>.html`; `/admin` -> SPA index 200; unknown -> real 404.
- Production now runs TWO Node processes behind the proxy (api-server on /api, flight-school marketing on /). Autoscale supports this.

**Sync rule (drift risk):** the ALIAS_REDIRECTS / LEGACY_REDIRECTS tables in
`serve.mjs` are duplicated from `artifacts/api-server/src/app.ts`. They were NOT
centralized into a shared lib on purpose — serve.mjs is intentionally
dependency-free/no-build, and importing a TS lib would require a build step.
If you change the redirect tables in one file, change them in the other.
