// Production server for the prerendered marketing site.
//
// Why this exists: Replit STATIC deployments support only internal rewrites
// (no status change), so a trailing-slash URL like /foo/ cannot be answered
// with a real HTTP 301 in a static config — it would only ever be rewritten to
// /index.html (the homepage), which is exactly the duplicate-content / wrong-meta
// bug we are fixing. Serving the prerendered output from a tiny Node process lets
// us issue genuine 301 redirects (htaccess-style) for every page generically,
// with zero per-URL maintenance: any new prerendered page is covered automatically.
//
// Uses ONLY Node built-ins so it runs in production with `node serve.mjs` and
// needs no runtime node_modules.
//
// NOTE: the redirect rules below mirror artifacts/api-server/src/app.ts. If you
// change the alias/legacy tables in one place, change them in the other.

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "dist/public");
const indexHtml = path.join(publicDir, "index.html");
const notFoundHtml = path.join(publicDir, "404.html");

const PORT = Number(process.env.PORT) || 25224;

// Canonical (bare) host. www of this exact host is 301'd here; see redirect rule 0.
const CANONICAL_HOST = "acceleratedflightschool.net";

// Short alias paths -> their canonical indexed URLs (301 permanent).
const ALIAS_REDIRECTS = {
  "/commercial-pilot-training": "/commercial-pilot-training-van-nuys",
  "/cfi-training": "/cfi-training-van-nuys",
  "/airline-pilot-path": "/airline-pilot-path-van-nuys",
  "/discovery-flight": "/discovery-flight-van-nuys",
  "/flight-training-faq-van-nuys": "/faq",
  "/pricing": "/van-nuys-accelerated-flight-school-pricing",
  "/our-aircraft": "/van-nuys-accelerated-flight-school-aircraft",
  "/instructors": "/van-nuys-accelerated-flight-school-instructors",
  "/contact": "/van-nuys-accelerated-flight-school-contact",
};

// Legacy slug consolidations (old landing-page slugs -> canonical slug).
// Keys are path segments without a leading slash.
const LEGACY_REDIRECTS = {
  "best-flight-school-van-nuys-accelerated-flight-school-kvny":
    "/best-flight-school-los-angeles-accelerated-flight-school-van-nuys-kvny",
  "best-flight-school-los-angeles-accelerated-flight-school-van-nuys-airport-kvny":
    "/best-flight-school-los-angeles-accelerated-flight-school-van-nuys-kvny",
  "private-pilot-license-cost-accelerated-flight-school-van-nuys-airport-kvny":
    "/private-pilot-license-cost-los-angeles-accelerated-flight-school-van-nuys-kvny",
  "private-pilot-license-cost-in-los-angeles-accelerated-flight-school-van-nuys-airport-kvny":
    "/private-pilot-license-cost-los-angeles-accelerated-flight-school-van-nuys-kvny",
  "discovery-flight-los-angeles-accelerated-flight-school-van-nuys-airport-kvny":
    "/discovery-flight-los-angeles-accelerated-flight-school-van-nuys-kvny",
};

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
};

function isSpaRoute(pathname) {
  return pathname === "/admin" || pathname.startsWith("/admin/");
}

function stripTrailingSlash(pathname) {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

function cacheControlFor(filePath, pathname) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".html") return "no-cache";
  // Vite emits content-hashed files under /assets — safe to cache forever.
  if (pathname.startsWith("/assets/")) {
    return "public, max-age=31536000, immutable";
  }
  if (
    [".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif", ".svg", ".ico", ".woff2", ".woff", ".ttf"].includes(ext)
  ) {
    return "public, max-age=86400";
  }
  return "public, max-age=3600";
}

// Resolve a candidate path safely inside publicDir; return the absolute file
// path if it exists and is a file, else null.
function resolveFile(candidate) {
  const abs = path.resolve(publicDir, "." + candidate);
  // Robust path-traversal guard: reject anything that resolves outside
  // publicDir (a prefix startsWith check is bypassable by sibling dirs like
  // `public-foo`, so compare the relative path instead).
  const rel = path.relative(publicDir, abs);
  if (rel.startsWith("..") || path.isAbsolute(rel)) return null;
  try {
    const stat = fs.statSync(abs);
    if (stat.isFile()) return abs;
  } catch {
    /* not found */
  }
  return null;
}

function sendFile(req, res, filePath, statusCode, pathname) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || "application/octet-stream";
  let body;
  try {
    body = fs.readFileSync(filePath);
  } catch {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
    return;
  }
  res.writeHead(statusCode, {
    "Content-Type": type,
    "Content-Length": body.length,
    "Cache-Control": cacheControlFor(filePath, pathname),
  });
  if (req.method === "HEAD") {
    res.end();
    return;
  }
  res.end(body);
}

function redirect(res, location) {
  res.writeHead(301, { Location: location });
  res.end();
}

const server = http.createServer((req, res) => {
  let pathname = "/";
  let query = "";
  try {
    const u = new URL(req.url, "http://localhost");
    pathname = decodeURIComponent(u.pathname);
    query = u.search || "";
  } catch {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bad Request");
    return;
  }

  // --- Canonical redirects (real 301) ---

  // 0. www -> apex (bare domain). The TLS cert only covers the apex, and we want
  //    a single canonical host for SEO. Only the exact known www host is matched
  //    and the target apex is HARDCODED (never derived from the Host header) to
  //    avoid a host-header open-redirect. Unknown hosts fall through and serve
  //    normally. (Browser must complete TLS on www first, which requires www to
  //    be added as a custom domain on the deployment so a cert is provisioned.)
  const host = (req.headers.host || "").toLowerCase().split(":")[0];
  if (host === `www.${CANONICAL_HOST}`) {
    redirect(res, `https://${CANONICAL_HOST}${pathname}${query}`);
    return;
  }

  // 1. Trailing slash -> clean URL (generic; covers every page).
  if (pathname.length > 1 && pathname.endsWith("/")) {
    redirect(res, `${stripTrailingSlash(pathname)}${query}`);
    return;
  }

  // 2. Explicit .html -> clean URL.
  if (pathname.endsWith(".html")) {
    const cleanPath =
      pathname === "/index.html" ? "/" : pathname.replace(/\.html$/, "");
    redirect(res, `${cleanPath}${query}`);
    return;
  }

  // 3. Short alias paths -> canonical indexed paths.
  if (ALIAS_REDIRECTS[pathname]) {
    redirect(res, `${ALIAS_REDIRECTS[pathname]}${query}`);
    return;
  }

  // 4. Legacy slug consolidations.
  const slug = pathname.replace(/^\//, "");
  if (LEGACY_REDIRECTS[slug]) {
    redirect(res, `${LEGACY_REDIRECTS[slug]}${query}`);
    return;
  }

  // Only GET/HEAD are served; anything else is unknown for a static site.
  if (req.method !== "GET" && req.method !== "HEAD") {
    sendFile(req, res, notFoundHtml, 404, pathname);
    return;
  }

  // Serve the 404 page itself with a real 404 status (avoids a soft 200).
  if (pathname === "/404") {
    sendFile(req, res, notFoundHtml, 404, pathname);
    return;
  }

  // 1. An exact static asset (hashed JS/CSS, images, sitemap, robots, etc.).
  const exact = resolveFile(pathname);
  if (exact) {
    sendFile(req, res, exact, 200, pathname);
    return;
  }

  // 2. Homepage.
  if (pathname === "/") {
    sendFile(req, res, indexHtml, 200, pathname);
    return;
  }

  // 3. A prerendered marketing route -> /<route>.html.
  const htmlFile = resolveFile(`${pathname}.html`);
  if (htmlFile) {
    sendFile(req, res, htmlFile, 200, pathname);
    return;
  }

  // 4. Client-only SPA sections (e.g. /admin) are not prerendered. Boot them
  // from index.html with a 200 so the client router can render them.
  if (isSpaRoute(pathname)) {
    sendFile(req, res, indexHtml, 200, pathname);
    return;
  }

  // 5. Genuinely unknown -> real 404 (no soft-404).
  sendFile(req, res, notFoundHtml, 404, pathname);
});

server.listen(PORT, "0.0.0.0", () => {
  // eslint-disable-next-line no-console
  console.log(`flight-school marketing server listening on :${PORT}`);
});
