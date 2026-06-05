import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distPublic = path.join(__dirname, "dist/public");
const SITE_URL = "https://acceleratedflightschool.net";

const template = fs.readFileSync(path.join(distPublic, "index.html"), "utf-8");

if (!template.includes("<!--app-html-->") || !template.includes("<!--app-head-->")) {
  throw new Error(
    "index.html template is missing <!--app-html--> or <!--app-head--> placeholders.",
  );
}

const { render, redirects } = await import(path.join(__dirname, "dist/server/entry-server.js"));

const sitemap = fs.readFileSync(path.join(__dirname, "public/sitemap.xml"), "utf-8");
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].trim().replace(SITE_URL, ""))
  .map((p) => (p === "" ? "/" : p));
const uniqueRoutes = [...new Set(routes)];

let ok = 0;
let failed = 0;

for (const route of uniqueRoutes) {
  try {
    const { appHtml, head } = render(route);
    const html = template
      .replace("<!--app-head-->", head)
      .replace("<!--app-html-->", appHtml);
    // Flat-file output: /route -> dist/public/route.html (NOT route/index.html).
    // Directory output makes the static host treat /route as a directory and
    // 301-redirect /route -> /route/, which then gets hijacked by the SPA
    // catch-all and serves homepage HTML. Flat files have no directory, so the
    // explicit `/route -> /route.html` rewrite serves the right page with no 301.
    const outPath =
      route === "/"
        ? path.join(distPublic, "index.html")
        : path.join(distPublic, `${route}.html`);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
    ok++;
  } catch (err) {
    failed++;
    console.error(`[prerender] FAILED ${route}:`, err?.message || err);
  }
}

// Write canonical redirect stubs for consolidated duplicate URLs.
// Not in the sitemap; noindex + canonical + meta-refresh so crawlers consolidate
// to the canonical page and any direct hit is forwarded client-side.
let redirected = 0;
for (const [from, to] of Object.entries(redirects ?? {})) {
  const target = `/${to}`;
  const stub = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="canonical" href="${SITE_URL}${target}" />
<meta name="robots" content="noindex, follow" />
<meta http-equiv="refresh" content="0; url=${target}" />
<title>Redirecting…</title>
<script>window.location.replace(${JSON.stringify(target)});</script>
</head>
<body>This page has moved to <a href="${target}">${target}</a>.</body>
</html>
`;
  const outPath = path.join(distPublic, `${from}.html`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, stub);
  redirected++;
}

console.log(`[prerender] Done: ${ok} pages written, ${redirected} redirect stubs, ${failed} failed.`);
if (failed > 0) {
  process.exitCode = 1;
}
