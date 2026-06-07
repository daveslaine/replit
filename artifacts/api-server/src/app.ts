import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import session from "express-session";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../../flight-school/dist/public");
const indexHtml = path.join(publicDir, "index.html");
const notFoundHtml = path.join(publicDir, "404.html");

function isApiPath(pathname: string) {
  return pathname === "/api" || pathname.startsWith("/api/");
}

// Client-only SPA sections that are NOT prerendered (no static .html on disk).
// These must boot from index.html with a 200 so the client router can take over;
// the hard-404 fallback would otherwise break direct hits / page refreshes.
function isSpaRoute(pathname: string) {
  return pathname === "/admin" || pathname.startsWith("/admin/");
}

function stripTrailingSlash(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return { id: req.id, method: req.method, url: req.url?.split("?")[0] };
      },
      res(res) {
        return { statusCode: res.statusCode };
      },
    },
  }),
);

app.use((req, res, next) => {
  // Canonical redirects apply only to the marketing site, never to the API.
  // Redirecting API requests (esp. non-GET) would break clients.
  if (isApiPath(req.path)) {
    next();
    return;
  }

  if (req.path.length > 1 && req.path.endsWith("/")) {
    const canonicalPath = stripTrailingSlash(req.path);
    const queryIndex = req.originalUrl.indexOf("?");
    const query = queryIndex >= 0 ? req.originalUrl.slice(queryIndex) : "";
    res.redirect(301, `${canonicalPath}${query}`);
    return;
  }

  if (req.path.endsWith(".html")) {
    const cleanPath =
      req.path === "/index.html" ? "/" : req.path.replace(/\.html$/, "");
    const queryIndex = req.originalUrl.indexOf("?");
    const query = queryIndex >= 0 ? req.originalUrl.slice(queryIndex) : "";
    res.redirect(301, `${cleanPath}${query}`);
    return;
  }

  next();
});

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "afs-session-secret-dev",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "lax",
    },
  }),
);

app.use("/api", router);

if (fs.existsSync(publicDir)) {
  // Serve the 404 page itself with a real 404 status. Without this, the static
  // middleware below resolves /404 -> 404.html with a 200, creating a crawlable
  // soft endpoint. (/404.html is already 301'd to /404 by the redirect above.)
  app.get("/404", (_req, res, next) => {
    if (fs.existsSync(notFoundHtml)) {
      res.status(404).sendFile(notFoundHtml);
      return;
    }
    next();
  });

  app.use(
    express.static(publicDir, {
      extensions: ["html"],
      redirect: false,
    }),
  );

  app.use((req, res, next) => {
    if (isApiPath(req.path)) {
      next();
      return;
    }

    if (req.method !== "GET" && req.method !== "HEAD") {
      next();
      return;
    }

    // Client-only SPA sections (e.g. /admin) are not prerendered. Boot them
    // from index.html with a 200 so the client router can render them.
    if (isSpaRoute(req.path) && fs.existsSync(indexHtml)) {
      res.status(200).sendFile(indexHtml);
      return;
    }

    // Every valid marketing route is prerendered to a flat .html file and
    // already served by express.static above. Anything reaching this fallback
    // is genuinely unknown, so return a real 404 (avoids soft-404s that hurt
    // SEO) using the prerendered 404 page.
    const fallback = fs.existsSync(notFoundHtml) ? notFoundHtml : indexHtml;
    if (fs.existsSync(fallback)) {
      res.status(404).sendFile(fallback);
      return;
    }

    next();
  });
}

export default app;
