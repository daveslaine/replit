---
name: A11y/Lighthouse auditing in this workspace
description: How to actually run accessibility audits here — Lighthouse CLI hangs; use CDP + axe-core with nix-store Chromium.
---

Lighthouse CLI (npx) silently hangs/dies in this environment even when pointed at a running Chrome (`--port`). Background processes started with setsid/nohup are killed when the shell command exits.

**What works:** launch headless Chromium from the nix store (find via `ls /nix/store | grep ungoogled-chromium`, e.g. 114.x) with `--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage --remote-debugging-port=9222`, **in the same ShellExec command** as the audit script. Then use `chrome-remote-interface` (not puppeteer-core — its connect() hangs) to navigate, inject `axe-core/axe.min.js` via Runtime.evaluate, and `axe.run(...)`. Axe is Lighthouse's a11y engine, so results map 1:1 to Lighthouse a11y audits. Use `waitUntil: load`-equivalent (Page.loadEventFired), not networkidle — Vite HMR websocket keeps the network busy forever.

**Why:** multiple lighthouse@latest/@11 attempts (foreground, background, --port reuse) all failed or timed out; the CDP+axe script completed in seconds. A working script exists conceptually in /tmp/lhrun/axe2.mjs (tmp is ephemeral — recreate from this recipe).

**A11y palette rules learned for this site:** on white/slate-50 use text-slate-600+ (slate-400/500 fail at small sizes); on bg-primary navy use /70+ opacity (foreground/40 fails); white-on-orange buttons need orange-700+; brand navy `text-secondary` is unreadable on slate-900 (use sky-400); logo imgs next to visible brand text need alt="" (add aria-label to link if the text is hidden on mobile).

**Route coverage:** derive the audit route list from `public/sitemap.xml`, not just the named component routes. The location landing pages and air-tour pages share templates with their own contrast patterns, so a representative-page audit can miss most visitor-facing URLs.
