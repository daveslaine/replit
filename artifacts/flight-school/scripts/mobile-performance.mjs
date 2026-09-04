import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const artifactDir = path.resolve(__dirname, "..");
const serverScript = path.join(artifactDir, "serve.mjs");

const TBT_BUDGET_MS = 300;
const INITIAL_JS_BUDGET_BYTES = 40 * 1024;
const DIRECT_ROUTE = "/private-pilot-van-nuys";
const PRIVATE_PILOT_MODULE = "src/pages/PrivatePilotPage.tsx";
const INITIAL_LOAD_QUIET_MS = 1_000;

const MOBILE_NETWORK = {
  offline: false,
  latency: 150,
  downloadThroughput: (1.6 * 1024 * 1024) / 8,
  uploadThroughput: (750 * 1024) / 8,
  connectionType: "cellular3g",
};

const MOBILE_DEVICE = {
  width: 393,
  height: 851,
  deviceScaleFactor: 2.75,
  mobile: true,
};

const THIRD_PARTY_URLS = [
  "*://www.googletagmanager.com/*",
  "*://fonts.googleapis.com/*",
  "*://fonts.gstatic.com/*",
];

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KiB`;
}

function getPrivatePilotChunkPath() {
  const manifestPath = path.join(
    artifactDir,
    "dist",
    "public",
    ".vite",
    "manifest.json",
  );
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const chunk = manifest[PRIVATE_PILOT_MODULE];

  if (!chunk?.file) {
    throw new Error(
      `Vite manifest does not contain the lazy ${PRIVATE_PILOT_MODULE} module.`,
    );
  }

  return `/${chunk.file.replace(/^\/+/, "")}`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const socket = net.createServer();
    socket.unref();
    socket.on("error", reject);
    socket.listen(0, "127.0.0.1", () => {
      const address = socket.address();
      const port = typeof address === "object" && address ? address.port : null;
      socket.close((error) => {
        if (error) reject(error);
        else if (port) resolve(port);
        else reject(new Error("Could not allocate a local port."));
      });
    });
  });
}

async function waitForHttp(url, timeoutMs = 15_000) {
  const deadline = Date.now() + timeoutMs;
  let lastError;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await sleep(100);
  }

  throw new Error(`Server did not become ready at ${url}: ${lastError}`);
}

function findChromium() {
  const explicit =
    process.env.CHROME_PATH ??
    process.env.CHROMIUM_PATH ??
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;

  const pathCandidates = [];
  if (explicit) pathCandidates.push(explicit);

  const executableNames = [
    "chromium",
    "chromium-browser",
    "google-chrome-stable",
    "google-chrome",
  ];

  for (const directory of (process.env.PATH ?? "").split(path.delimiter)) {
    for (const executableName of executableNames) {
      pathCandidates.push(path.join(directory, executableName));
    }
  }

  for (const candidate of pathCandidates) {
    try {
      fs.accessSync(candidate, fs.constants.X_OK);
      return candidate;
    } catch {
      // Continue to the next candidate.
    }
  }

  const nixStore = "/nix/store";
  let nixCandidates = [];
  try {
    nixCandidates = fs
      .readdirSync(nixStore)
      .filter((entry) => /(?:^|-)(?:ungoogled-)?chromium-\d/.test(entry))
      .map((entry) => ({
        entry,
        executable: path.join(nixStore, entry, "bin", "chromium"),
        version:
          entry.match(/chromium-(\d+(?:\.\d+)*)/)?.[1] ?? "0",
      }))
      .filter(({ executable }) => {
        try {
          fs.accessSync(executable, fs.constants.X_OK);
          return true;
        } catch {
          return false;
        }
      })
      .sort((a, b) => {
        const aParts = a.version.split(".").map(Number);
        const bParts = b.version.split(".").map(Number);
        for (let index = 0; index < Math.max(aParts.length, bParts.length); index++) {
          const difference = (bParts[index] ?? 0) - (aParts[index] ?? 0);
          if (difference) return difference;
        }
        return a.entry.localeCompare(b.entry);
      });
  } catch {
    // /nix/store is not available outside Replit.
  }

  if (nixCandidates.length > 0) return nixCandidates[0].executable;

  throw new Error(
    "Chromium was not found. Set CHROME_PATH to a Chromium or Chrome executable.",
  );
}

function waitForDevTools(browser, timeoutMs = 15_000) {
  return new Promise((resolve, reject) => {
    const deadline = setTimeout(() => {
      reject(new Error("Chromium did not expose a DevTools endpoint."));
    }, timeoutMs);

    let stderr = "";
    const onData = (chunk) => {
      stderr += chunk.toString();
      const match = stderr.match(
        /DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)\/devtools\/browser\//,
      );
      if (!match) return;
      clearTimeout(deadline);
      browser.stderr.off("data", onData);
      resolve(Number(match[1]));
    };

    browser.stderr.on("data", onData);
    browser.once("exit", (code, signal) => {
      clearTimeout(deadline);
      reject(
        new Error(
          `Chromium exited before startup (code ${code}, signal ${signal}).\n${stderr}`,
        ),
      );
    });
  });
}

async function launchBrowser(chromiumPath) {
  const userDataDir = fs.mkdtempSync(
    path.join(os.tmpdir(), "flight-school-mobile-perf-"),
  );
  const browser = spawn(
    chromiumPath,
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-background-networking",
      "--disable-component-update",
      "--disable-default-apps",
      "--disable-extensions",
      "--disable-sync",
      "--metrics-recording-only",
      "--no-first-run",
      "--no-default-browser-check",
      "--remote-debugging-address=127.0.0.1",
      "--remote-debugging-port=0",
      `--user-data-dir=${userDataDir}`,
      "about:blank",
    ],
    { stdio: ["ignore", "ignore", "pipe"] },
  );

  const debugPort = await waitForDevTools(browser);
  const targets = await fetch(`http://127.0.0.1:${debugPort}/json/list`).then(
    (response) => response.json(),
  );
  const page = targets.find((target) => target.type === "page");

  if (!page?.webSocketDebuggerUrl) {
    browser.kill("SIGKILL");
    throw new Error("Chromium started without a debuggable page target.");
  }

  return { browser, debugPort, pageUrl: page.webSocketDebuggerUrl, userDataDir };
}

async function stopBrowser(instance) {
  if (!instance) return;
  instance.browser.kill("SIGTERM");
  await Promise.race([
    new Promise((resolve) => instance.browser.once("exit", resolve)),
    sleep(2_000).then(() => instance.browser.kill("SIGKILL")),
  ]);
  fs.rmSync(instance.userDataDir, { recursive: true, force: true });
}

class CdpClient {
  constructor(url) {
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();
    this.socket = new WebSocket(url);
    this.ready = new Promise((resolve, reject) => {
      this.socket.addEventListener("open", resolve, { once: true });
      this.socket.addEventListener("error", reject, { once: true });
    });
    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(message.error.message));
        else pending.resolve(message.result);
        return;
      }

      for (const listener of this.listeners.get(message.method) ?? []) {
        listener(message.params ?? {});
      }
    });
    this.socket.addEventListener("close", () => {
      for (const pending of this.pending.values()) {
        pending.reject(new Error("The Chromium DevTools connection closed."));
      }
      this.pending.clear();
    });
  }

  async send(method, params = {}) {
    await this.ready;
    const id = this.nextId++;
    const result = new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });
    this.socket.send(JSON.stringify({ id, method, params }));
    return result;
  }

  on(method, listener) {
    const listeners = this.listeners.get(method) ?? new Set();
    listeners.add(listener);
    this.listeners.set(method, listeners);
    return () => listeners.delete(listener);
  }

  close() {
    this.socket.close();
  }
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });

  if (result.exceptionDetails) {
    throw new Error(
      result.exceptionDetails.exception?.description ??
        result.exceptionDetails.text ??
        "Browser evaluation failed.",
    );
  }
  return result.result.value;
}

async function waitForCondition(
  client,
  expression,
  description,
  timeoutMs = 30_000,
) {
  const deadline = Date.now() + timeoutMs;
  let lastError;

  while (Date.now() < deadline) {
    try {
      const value = await evaluate(client, expression);
      if (value) return value;
    } catch (error) {
      lastError = error;
    }
    await sleep(100);
  }

  throw new Error(
    `Timed out waiting for ${description}${lastError ? `: ${lastError}` : ""}`,
  );
}

async function waitForInitialJavaScriptSettled(
  requests,
  getLastActivity,
  timeoutMs = 45_000,
) {
  const deadline = Date.now() + timeoutMs;
  const minimumEndTime = Date.now() + INITIAL_LOAD_QUIET_MS;

  while (Date.now() < deadline) {
    const pending = [...requests.values()].filter((request) => request.pending);
    const quietFor = Date.now() - getLastActivity();
    if (
      pending.length === 0 &&
      Date.now() >= minimumEndTime &&
      quietFor >= INITIAL_LOAD_QUIET_MS
    ) {
      return;
    }
    await sleep(100);
  }

  const pendingUrls = [...requests.values()]
    .filter((request) => request.pending)
    .map((request) => request.url);
  throw new Error(
    `Initial JavaScript did not settle within ${timeoutMs / 1_000} seconds${
      pendingUrls.length ? `: ${pendingUrls.join(", ")}` : ""
    }.`,
  );
}

async function configureMobilePage(client) {
  await Promise.all([
    client.send("Page.enable"),
    client.send("Runtime.enable"),
    client.send("Network.enable"),
  ]);
  await client.send("Emulation.setDeviceMetricsOverride", MOBILE_DEVICE);
  await client.send("Emulation.setTouchEmulationEnabled", {
    enabled: true,
    maxTouchPoints: 5,
  });
  await client.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  await client.send("Network.emulateNetworkConditions", MOBILE_NETWORK);
  await client.send("Network.setBlockedURLs", { urls: THIRD_PARTY_URLS });
}

async function openPage(chromiumPath, setup) {
  const browser = await launchBrowser(chromiumPath);
  const client = new CdpClient(browser.pageUrl);
  await client.ready;
  await configureMobilePage(client);
  if (setup) await setup(client);
  return { browser, client };
}

async function closePage(page) {
  if (!page) return;
  page.client.close();
  await stopBrowser(page.browser);
}

async function testHomepage(chromiumPath, baseUrl) {
  const jsRequests = new Map();
  let lastScriptActivity = Date.now();
  let page;

  try {
    page = await openPage(chromiumPath, async (client) => {
      client.on("Network.requestWillBeSent", ({ requestId, request, type }) => {
        const url = new URL(request.url);
        const isBlockedThirdParty =
          url.hostname === "www.googletagmanager.com" ||
          url.hostname === "fonts.googleapis.com" ||
          url.hostname === "fonts.gstatic.com";
        const isJavaScript =
          type === "Script" || /\.(?:m?js)(?:$|\?)/.test(url.pathname);

        if (isJavaScript && !isBlockedThirdParty) {
          jsRequests.set(requestId, {
            url: request.url,
            encodedBytes: 0,
            pending: true,
            failed: false,
          });
          lastScriptActivity = Date.now();
        }
      });
      client.on("Network.loadingFinished", ({ requestId, encodedDataLength }) => {
        const request = jsRequests.get(requestId);
        if (request) {
          request.encodedBytes = encodedDataLength;
          request.pending = false;
          lastScriptActivity = Date.now();
        }
      });
      client.on("Network.loadingFailed", ({ requestId }) => {
        const request = jsRequests.get(requestId);
        if (request) {
          request.pending = false;
          request.failed = true;
          lastScriptActivity = Date.now();
        }
      });
      await client.send("Page.addScriptToEvaluateOnNewDocument", {
        source: `
          window.__flightSchoolLongTasks = [];
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              window.__flightSchoolLongTasks.push({
                startTime: entry.startTime,
                duration: entry.duration
              });
            }
          }).observe({ type: "longtask", buffered: true });
        `,
      });
    });

    await page.client.send("Page.navigate", { url: `${baseUrl}/` });
    await waitForCondition(
      page.client,
      "document.readyState === 'complete'",
      "the homepage load event",
    );
    await waitForInitialJavaScriptSettled(
      jsRequests,
      () => lastScriptActivity,
    );

    const metrics = await evaluate(
      page.client,
      `(() => {
        const h1 = document.querySelector("h1");
        const rect = h1?.getBoundingClientRect();
        const fcp =
          performance.getEntriesByName("first-contentful-paint")[0]?.startTime ?? 0;
        const totalBlockingTime = (window.__flightSchoolLongTasks ?? [])
          .filter((entry) => entry.startTime >= fcp)
          .reduce((total, entry) => total + Math.max(0, entry.duration - 50), 0);
        const inlineJavaScriptBytes = [...document.scripts]
          .filter((script) => !script.src)
          .reduce(
            (total, script) =>
              total + new TextEncoder().encode(script.textContent ?? "").byteLength,
            0
          );
        return {
          fcp,
          totalBlockingTime,
          inlineJavaScriptBytes,
          heroVisible: Boolean(
            h1 &&
              rect &&
              rect.width > 0 &&
              rect.height > 0 &&
              getComputedStyle(h1).visibility !== "hidden"
          ),
          heroText: h1?.textContent?.trim() ?? ""
        };
      })()`,
    );

    const failedJavaScript = [...jsRequests.values()].filter(
      (request) => request.failed,
    );
    assert.equal(
      failedJavaScript.length,
      0,
      `Initial JavaScript failed to load: ${failedJavaScript
        .map((request) => request.url)
        .join(", ")}`,
    );

    const externalJavaScriptBytes = [...jsRequests.values()].reduce(
      (total, request) => total + request.encodedBytes,
      0,
    );
    const initialJavaScriptBytes =
      metrics.inlineJavaScriptBytes + externalJavaScriptBytes;

    assert(metrics.heroVisible, "The prerendered homepage hero was not visible.");
    assert(
      metrics.totalBlockingTime < TBT_BUDGET_MS,
      `Homepage TBT was ${metrics.totalBlockingTime.toFixed(1)} ms; budget is below ${TBT_BUDGET_MS} ms.`,
    );
    assert(
      initialJavaScriptBytes <= INITIAL_JS_BUDGET_BYTES,
      `Initial homepage JavaScript was ${formatBytes(initialJavaScriptBytes)}; budget is ${formatBytes(INITIAL_JS_BUDGET_BYTES)}.`,
    );

    await evaluate(
      page.client,
      `document.querySelector('[data-testid="button-mobile-menu"]')?.click()`,
    );
    await waitForCondition(
      page.client,
      `(() => {
        const dialog = document.querySelector('[role="dialog"]');
        if (!dialog) return false;
        const rect = dialog.getBoundingClientRect();
        return rect.width > 0 &&
          rect.height > 0 &&
          dialog.textContent.includes("Discovery Flight");
      })()`,
      "the deferred homepage mobile menu to hydrate and open",
    );

    console.log(
      `PASS homepage: TBT ${metrics.totalBlockingTime.toFixed(1)} ms (< ${TBT_BUDGET_MS} ms), initial JS ${formatBytes(initialJavaScriptBytes)} (≤ ${formatBytes(INITIAL_JS_BUDGET_BYTES)}).`,
    );
    console.log("PASS homepage: deferred mobile menu hydrated and opened on first use.");
  } finally {
    await closePage(page);
  }
}

async function testPrerenderedLazyRoute(
  chromiumPath,
  baseUrl,
  lazyChunkPath,
) {
  let page;
  let heldRequest;
  let resolveHeldRequest;
  const heldRequestPromise = new Promise((resolve) => {
    resolveHeldRequest = resolve;
  });

  try {
    page = await openPage(chromiumPath, async (client) => {
      await client.send("Fetch.enable", {
        patterns: [
          {
            urlPattern: `*${lazyChunkPath}`,
            resourceType: "Script",
            requestStage: "Request",
          },
        ],
      });
      client.on("Fetch.requestPaused", (request) => {
        heldRequest = request;
        resolveHeldRequest(request);
      });
    });

    await page.client.send("Page.navigate", {
      url: `${baseUrl}${DIRECT_ROUTE}`,
    });

    const request = await Promise.race([
      heldRequestPromise,
      sleep(30_000).then(() => {
        throw new Error(
          `The manifest-listed ${lazyChunkPath} lazy chunk was not requested. The route may have become eager.`,
        );
      }),
    ]);

    assert(
      request.request.url.endsWith(lazyChunkPath),
      `Unexpected held script: ${request.request.url}`,
    );

    const beforeHydration = await waitForCondition(
      page.client,
      `(() => {
        const h1 = document.querySelector("h1");
        const rect = h1?.getBoundingClientRect();
        if (!h1 || !rect) return false;
        return {
          visible:
            rect.width > 0 &&
            rect.height > 0 &&
            getComputedStyle(h1).visibility !== "hidden",
          text: h1.textContent?.trim() ?? ""
        };
      })()`,
      "the direct route's prerendered heading while its lazy chunk is held",
    );

    assert(
      beforeHydration.visible &&
        beforeHydration.text.includes("Private Pilot Training"),
      "The direct prerendered route disappeared before its lazy chunk hydrated.",
    );

    await sleep(750);
    const remainedVisible = await evaluate(
      page.client,
      `(() => {
        const h1 = document.querySelector("h1");
        const rect = h1?.getBoundingClientRect();
        return Boolean(h1 && rect && rect.width > 0 && rect.height > 0);
      })()`,
    );
    assert(
      remainedVisible,
      "The direct prerendered route did not remain visible while hydration waited.",
    );

    await page.client.send("Fetch.continueRequest", {
      requestId: heldRequest.requestId,
    });
    await page.client.send("Fetch.disable");

    await waitForCondition(
      page.client,
      `(() => {
        const button = document.querySelector('[data-testid="button-mobile-menu"]');
        if (!button) return false;
        button.click();
        const dialog = document.querySelector('[role="dialog"]');
        return Boolean(dialog && dialog.getBoundingClientRect().width > 0);
      })()`,
      "the direct route to hydrate after its lazy chunk resumed",
    );

    console.log(
      `PASS direct route: prerendered ${DIRECT_ROUTE} stayed visible while ${path.basename(request.request.url)} was held, then hydrated.`,
    );
  } finally {
    if (page && heldRequest) {
      try {
        await page.client.send("Fetch.continueRequest", {
          requestId: heldRequest.requestId,
        });
      } catch {
        // The request was already resumed or the page is closing.
      }
    }
    await closePage(page);
  }
}

async function main() {
  const chromiumPath = findChromium();
  const lazyChunkPath = getPrivatePilotChunkPath();
  const port = await getFreePort();
  const baseUrl = `http://127.0.0.1:${port}`;
  const server = spawn(process.execPath, [serverScript], {
    cwd: artifactDir,
    env: { ...process.env, PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let serverOutput = "";
  server.stdout.on("data", (chunk) => {
    serverOutput += chunk.toString();
  });
  server.stderr.on("data", (chunk) => {
    serverOutput += chunk.toString();
  });

  try {
    await waitForHttp(`${baseUrl}/`);
    console.log("Mobile profile: Fast 3G network, 4× CPU slowdown, 393×851 viewport.");
    console.log(
      `Budgets: homepage TBT < ${TBT_BUDGET_MS} ms; initial JS ≤ ${formatBytes(INITIAL_JS_BUDGET_BYTES)}.`,
    );
    console.log(
      `Initial-load boundary: all JavaScript complete, then ${INITIAL_LOAD_QUIET_MS} ms quiet.`,
    );
    await testHomepage(chromiumPath, baseUrl);
    await testPrerenderedLazyRoute(chromiumPath, baseUrl, lazyChunkPath);
    console.log("Mobile performance regression check passed.");
  } catch (error) {
    console.error(`\nMobile performance regression check failed:\n${error.stack}`);
    if (serverOutput.trim()) {
      console.error(`\nProduction server output:\n${serverOutput.trim()}`);
    }
    process.exitCode = 1;
  } finally {
    server.kill("SIGTERM");
  }
}

await main();