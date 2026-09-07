import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 400 } });
await p.goto("http://localhost:4322/", { waitUntil: "networkidle" });
await p.waitForTimeout(400);
const m = await p.evaluate(() => {
  const mark = document.querySelector("header a[aria-label] span");
  const kids = mark.querySelectorAll(":scope > span");
  const w = (el) => {
    // Width of the glyphs themselves, not the block, so trailing letter-space
    // on the last character is excluded the way the artwork excludes it.
    const r = document.createRange();
    r.selectNodeContents(el);
    return r.getBoundingClientRect().width;
  };
  return { wordmark: w(kids[0]), rule: kids[1].getBoundingClientRect().width, subline: w(kids[2]) };
});
console.log(`FREDDY   ${m.wordmark.toFixed(1)}px`);
console.log(`rule     ${m.rule.toFixed(1)}px`);
console.log(`subline  ${m.subline.toFixed(1)}px  (${((m.subline / m.wordmark) * 100).toFixed(1)}% of wordmark)`);
await b.close();
