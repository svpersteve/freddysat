import { chromium } from "playwright";
const BASE = "http://localhost:4322";
const browser = await chromium.launch();
let fail = 0;
const check = (name, ok, detail = "") => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? " :: " + detail : ""}`);
  if (!ok) fail++;
};

// 1. Symptom chip carries its symptom into the contact form.
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  const chip = page.locator('a[href*="/contacto/?s="]').nth(4); // "No desagua"
  const href = await chip.getAttribute("href");
  await chip.click();
  await page.waitForLoadState("networkidle");
  const val = await page.locator("#wa-problem").inputValue();
  check("symptom chip prefills the form", val.length > 0, `${href} -> "${val}"`);
  check("landed on the contact page", page.url().includes("/contacto/"), page.url());
  await page.close();
}

// 2. Validation blocks an empty submit, and no popup is opened.
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(`${BASE}/en/contact/`, { waitUntil: "networkidle" });
  let popups = 0;
  page.on("popup", () => popups++);
  await page.locator('button[type="submit"]').click();
  await page.waitForTimeout(200);
  const errVisible = await page.locator("[data-wa-error]").isVisible();
  check("empty submit shows the error", errVisible);
  check("empty submit opens nothing", popups === 0, `popups=${popups}`);

  // 3. A filled form builds a wa.me link carrying the field labels.
  //
  // window.open is stubbed rather than followed: wa.me 302s to
  // api.whatsapp.com and re-encodes spaces as "+", so the popup's final URL is
  // WhatsApp's rewrite, not the one this page built.
  await page.evaluate(() => {
    window.__opened = null;
    window.open = (url) => { window.__opened = url; return null; };
  });
  await page.fill("#wa-appliance", "Fridge");
  await page.fill("#wa-problem", "Not cooling since yesterday");
  await page.fill("#wa-name", "Test Person");
  await page.locator('button[type="submit"]').click();
  await page.waitForTimeout(150);

  const raw = await page.evaluate(() => window.__opened);
  const msg = decodeURIComponent(new URL(raw).searchParams.get("text") ?? "");
  check("submit opens wa.me", raw.startsWith("https://wa.me/34600000000?"), raw.slice(0, 48));
  check("message carries the appliance", msg.includes("Fridge"));
  check("message carries the fault", msg.includes("Not cooling since yesterday"));
  check("message is labelled in English", msg.includes("Appliance:") && msg.includes("What's wrong:"));
  check("empty optional fields are omitted", !msg.includes("Brand and model:"), msg.replace(/\n/g, " | "));
  await page.close();
}

// 4. Mobile menu opens, closes on Escape and returns focus.
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  const panel = page.locator("[data-menu-panel]");
  check("menu starts closed", await panel.isHidden());
  await page.locator("[data-menu-toggle]").click();
  check("menu opens", await panel.isVisible());
  await page.keyboard.press("Escape");
  check("Escape closes the menu", await panel.isHidden());
  const focused = await page.evaluate(() => document.activeElement?.getAttribute("data-menu-toggle") !== null);
  check("focus returns to the toggle", focused);
  await page.close();
}

// 5. Language switcher lands on the equivalent page, not the home page.
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(`${BASE}/servicios/`, { waitUntil: "networkidle" });
  await page.locator('nav[aria-label="Idioma"] a[hreflang="ca-ES"]').first().click();
  await page.waitForLoadState("networkidle");
  check("ES /servicios/ -> CA /ca/serveis/", page.url().endsWith("/ca/serveis/"), page.url());
  await page.close();
}

await browser.close();
console.log(fail ? `\n${fail} check(s) failed` : "\nall behaviour checks passed");
process.exit(fail ? 1 : 0);
