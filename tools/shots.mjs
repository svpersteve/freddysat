import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = process.argv[2];
mkdirSync(OUT, { recursive: true });

const BASE = "http://localhost:4322";
const shots = [
  { name: "es-home-mobile",   url: "/",                        w: 390,  h: 844,  full: true },
  { name: "es-home-desktop",  url: "/",                        w: 1440, h: 900,  full: true },
  { name: "en-contact",       url: "/en/contact/",             w: 1440, h: 900,  full: true },
  { name: "es-servicios",     url: "/servicios/",              w: 1024, h: 900,  full: true },
  { name: "es-legal",         url: "/aviso-legal/",            w: 1024, h: 900,  full: false },
];

const browser = await chromium.launch();
let failures = 0;

for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.w, height: s.h } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));

  const res = await page.goto(BASE + s.url, { waitUntil: "networkidle" });
  await page.waitForTimeout(250);

  // Overflow is checked on every page, not just the one that looked wrong.
  const overflow = await page.evaluate(() => {
    const d = document.documentElement;
    return { scroll: d.scrollWidth, client: d.clientWidth };
  });
  const bad = overflow.scroll > overflow.client + 1;
  if (bad || errors.length || res.status() !== 200) failures++;

  await page.screenshot({ path: `${OUT}/${s.name}.png`, fullPage: s.full });
  console.log(
    `${res.status()} ${s.name.padEnd(18)} ${String(s.w).padStart(4)}px  ` +
      `overflow=${bad ? `YES (${overflow.scroll}>${overflow.client})` : "no"}  ` +
      `js-errors=${errors.length}${errors.length ? " :: " + errors[0].slice(0, 80) : ""}`
  );
  await page.close();
}

await browser.close();
console.log(failures ? `\n${failures} page(s) with problems` : "\nall pages clean");
