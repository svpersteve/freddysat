import { chromium } from "playwright";
const browser = await chromium.launch();
const ctx = await browser.newContext({
  locale: "es-ES", timezoneId: "Europe/Madrid", viewport: { width: 1280, height: 1100 },
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
});
const page = await ctx.newPage();
await page.goto("https://www.google.com/maps/place//data=!4m2!3m1!1s0xa93acd5546f95689:0xca9ad213430ebe35?source=g.page.m.ia._&hl=es&gl=ES", { waitUntil: "domcontentloaded", timeout: 60000 });
for (const l of ["Aceptar todo", "Accept all"]) {
  const b = page.getByRole("button", { name: l }).first();
  if (await b.isVisible().catch(() => false)) { await b.click().catch(() => {}); break; }
}
await page.waitForTimeout(5000);

// The chevron sits in the same row as the "Cerrado · Apertura" summary.
await page.getByText(/Apertura|Cierra|Abierto|Cerrado/).first().click({ timeout: 8000 }).catch(() => {});
await page.waitForTimeout(2500);

const weekly = await page.evaluate(() =>
  [...document.querySelectorAll("table tr")]
    .map((tr) => [...tr.querySelectorAll("th,td")].map((c) => c.textContent.replace(/\s+/g, " ").trim()).filter(Boolean).join(" = "))
    .filter((r) => /\d/.test(r) || /cerrado/i.test(r))
);
console.log("WEEKLY HOURS:");
weekly.forEach((r) => console.log("  " + r));
if (!weekly.length) console.log("  (none exposed in the signed-out view)");
await page.screenshot({ path: process.argv[2] });
await browser.close();
