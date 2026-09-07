import { chromium } from "playwright";

const URL_ = "https://www.google.com/maps/place//data=!4m2!3m1!1s0xa93acd5546f95689:0xca9ad213430ebe35?source=g.page.m.ia._&hl=es&gl=ES";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  locale: "es-ES",
  timezoneId: "Europe/Madrid",
  viewport: { width: 1400, height: 1000 },
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
});
const page = await ctx.newPage();
await page.goto(URL_, { waitUntil: "domcontentloaded", timeout: 60000 });

// Google's cookie wall stands between us and the listing; accept it if shown.
for (const label of ["Aceptar todo", "Accept all", "Rechazar todo", "Reject all"]) {
  const btn = page.getByRole("button", { name: label }).first();
  if (await btn.isVisible().catch(() => false)) { await btn.click().catch(() => {}); break; }
}
await page.waitForTimeout(4000);

// The hours panel ships collapsed to a single "open today" row; the full week
// only enters the DOM once its toggle is clicked.
for (const sel of [
  'button[jsaction*="openhours"]',
  '[aria-label*="Mostrar horario"]',
  '[aria-label*="Ocultar horario"]',
  'div[aria-expanded="false"][role="button"]',
]) {
  const el = page.locator(sel).first();
  if (await el.isVisible().catch(() => false)) {
    await el.click().catch(() => {});
    await page.waitForTimeout(1500);
    break;
  }
}
await page.waitForTimeout(1500);

const data = await page.evaluate(() => {
  const txt = (sel) => document.querySelector(sel)?.textContent?.trim() ?? null;
  const attr = (sel, a) => document.querySelector(sel)?.getAttribute(a) ?? null;

  // Maps exposes each panel row through data-item-id, which is stable enough
  // to read address/phone/website without depending on class hashes.
  const row = (id) =>
    document.querySelector(`[data-item-id="${id}"]`)?.getAttribute("aria-label") ??
    document.querySelector(`[data-item-id^="${id}"]`)?.getAttribute("aria-label") ?? null;

  // Every row of the week table, plus the aria-label fallback Google puts on
  // the collapsed summary when the table never expands.
  const hours = [...document.querySelectorAll("table tbody tr")]
    .map((tr) => [...tr.querySelectorAll("th,td")].map((c) => c.textContent.trim()).filter(Boolean).join(" — "))
    .filter(Boolean);
  const hoursAria = [...document.querySelectorAll('[aria-label*=":"]')]
    .map((e) => e.getAttribute("aria-label"))
    .filter((l) => /\d{1,2}:\d{2}/.test(l) && /(lunes|martes|domingo|monday)/i.test(l))
    .slice(0, 3);

  return {
    title: txt("h1"),
    category: txt("button[jsaction*='category']"),
    rating: txt("div.fontDisplayLarge") ?? txt("span[aria-hidden='true']"),
    address: row("address"),
    phone: row("phone:tel"),
    website: row("authority") ?? attr("a[data-item-id='authority']", "href"),
    plusCode: row("oloc"),
    hours,
    hoursAria,
    pageTitle: document.title,
  };
});

console.log(JSON.stringify(data, null, 2));
await browser.close();
