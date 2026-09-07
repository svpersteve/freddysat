import { chromium } from "playwright";
const OUT = process.argv[2];
const browser = await chromium.launch();
const ctx = await browser.newContext({
  locale: "es-ES", timezoneId: "Europe/Madrid", viewport: { width: 1280, height: 1100 },
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
});
const page = await ctx.newPage();
await page.goto("https://www.google.com/maps/place//data=!4m2!3m1!1s0xa93acd5546f95689:0xca9ad213430ebe35?source=g.page.m.ia._&hl=es&gl=ES", { waitUntil: "domcontentloaded", timeout: 60000 });
for (const label of ["Aceptar todo", "Accept all"]) {
  const b = page.getByRole("button", { name: label }).first();
  if (await b.isVisible().catch(() => false)) { await b.click().catch(() => {}); break; }
}
await page.waitForTimeout(5000);
// Click anything that looks like the hours expander.
const cands = await page.locator('[role="button"], button').all();
for (const c of cands) {
  const t = ((await c.getAttribute("aria-label")) || (await c.textContent().catch(() => "")) || "").toLowerCase();
  if (t.includes("horario") || t.includes("22:00") || t.includes("abierto")) {
    await c.click().catch(() => {});
    await page.waitForTimeout(2000);
    break;
  }
}
await page.screenshot({ path: OUT, fullPage: false });
await browser.close();
