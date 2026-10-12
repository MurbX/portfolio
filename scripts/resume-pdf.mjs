// Saves the /resume page as an A4 PDF using headless Edge or Chrome.
// The page is private (src/app/_resume); rename it to src/app/resume first, then
// rename it back. Usage (with the dev server running):
//   npm run resume:pdf                      -> public/resume.pdf
//   node scripts/resume-pdf.mjs <url> <out> -> custom page / output path
// Set BROWSER_PATH to use a specific Chromium-based browser.
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const url = process.argv[2] ?? "http://localhost:3000/resume";
const out = process.argv[3] ?? "public/resume.pdf";

const candidates = [
  process.env.BROWSER_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error("No Chromium-based browser found. Set BROWSER_PATH.");
  process.exit(1);
}

const port = 9200 + Math.floor(Math.random() * 500);
const profile = mkdtempSync(join(tmpdir(), "resume-pdf-"));
const proc = spawn(browser, ["--headless=new", "--disable-gpu", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "about:blank"], {
  stdio: "ignore",
});
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const done = (code) => {
  proc.kill();
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {}
  process.exit(code);
};
setTimeout(() => {
  console.error("Timed out.");
  done(1);
}, 60_000);

let wsUrl;
for (let i = 0; i < 60 && !wsUrl; i++) {
  try {
    const list = await (await fetch(`http://127.0.0.1:${port}/json`, { signal: AbortSignal.timeout(1000) })).json();
    wsUrl = list.find((t) => t.type === "page")?.webSocketDebuggerUrl;
  } catch {}
  if (!wsUrl) await sleep(250);
}
if (!wsUrl) {
  console.error("Could not connect to the browser.");
  done(1);
}

const ws = new WebSocket(wsUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m);
    pending.delete(m.id);
  }
};
const send = (method, params = {}) =>
  new Promise((r) => {
    const i = ++id;
    pending.set(i, r);
    ws.send(JSON.stringify({ id: i, method, params }));
  });

await send("Page.enable");
await send("Page.navigate", { url });
await sleep(4000); // fonts and images
await send("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true });

const res = await send("Page.printToPDF", {
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: false,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
});
if (!res.result?.data) {
  console.error("Print failed:", res.error?.message);
  done(1);
}
writeFileSync(out, Buffer.from(res.result.data, "base64"));
console.log(`Saved ${out}`);
ws.close();
done(0);
