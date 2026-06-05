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
    const outDir = route === "/" ? distPublic : path.join(distPublic, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html);
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
  const outDir = path.join(distPublic, from);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), stub);
  redirected++;
}

console.log(`[prerender] Done: ${ok} pages written, ${redirected} redirect stubs, ${failed} failed.`);
if (failed > 0) {
  process.exitCode = 1;
}
