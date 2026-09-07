import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
await page.goto("http://localhost:4322/", { waitUntil: "networkidle" });

const report = await page.evaluate(() => {
  const doc = document.documentElement;
  const vw = doc.clientWidth;
  const offenders = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.width === 0) continue;
    // Elements that stick out past the right edge of the viewport.
    if (r.right > vw + 1) {
      offenders.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className?.baseVal ?? el.className ?? "").toString().slice(0, 90),
        right: Math.round(r.right),
        width: Math.round(r.width),
        text: (el.textContent || "").trim().slice(0, 40),
      });
    }
  }
  return { viewport: vw, scrollWidth: doc.scrollWidth, bodyScroll: document.body.scrollWidth, offenders };
});

console.log("viewport:", report.viewport, "| documentElement.scrollWidth:", report.scrollWidth, "| body.scrollWidth:", report.bodyScroll);
console.log("overflowing elements:", report.offenders.length);
// The outermost few are the cause; the rest are their children.
for (const o of report.offenders.slice(0, 12)) {
  console.log(`  <${o.tag}> w=${o.width} right=${o.right} :: ${o.cls}\n      "${o.text}"`);
}
await browser.close();
