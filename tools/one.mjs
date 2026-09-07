import { chromium } from "playwright";
const [out, url, w, h, full] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +h } });
await p.goto("http://localhost:4322" + url, { waitUntil: "networkidle" });
await p.waitForTimeout(300);
await p.screenshot({ path: out, fullPage: full === "true" });
await b.close();
