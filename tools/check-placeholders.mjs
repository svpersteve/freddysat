/**
 * Refuses to let the site go live with invented business data in it.
 *
 * The phone numbers, NIF and address in src/config/business.ts are scaffolding.
 * A site that ships with 93 000 00 00 on every page looks finished and takes no
 * calls, so this runs in the deploy script and exits non-zero until the real
 * values are in.
 */
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../src/config/business.ts", import.meta.url), "utf8");

const checks = [
  { label: "legal name",   bad: /legalName:\s*""/,    hint: "registered name — autónomo or S.L." },
  { label: "tax id (NIF)", bad: /taxId:\s*""/,        hint: "required on the aviso legal page by law" },
  { label: "fiscal address", bad: /legalAddress:\s*""/, hint: "required on the aviso legal page by law" },
  { label: "call-out fee", bad: /calloutFee:\s*35,\s*\/\/ TODO/, hint: "confirm the desplazamiento with Freddy" },
  { label: "guarantee",    bad: /warrantyMonths:\s*6,\s*\/\/ TODO/, hint: "confirm months on labour and parts" },
];

const outstanding = checks.filter((c) => c.bad.test(src));
const todos = (src.match(/TODO/g) ?? []).length;

if (outstanding.length === 0) {
  console.log(`Business data complete. ${todos} TODO comment(s) still in the file.`);
  process.exit(0);
}

console.error(`\n${outstanding.length} placeholder(s) still in src/config/business.ts:\n`);
for (const c of outstanding) console.error(`  · ${c.label.padEnd(15)} — ${c.hint}`);
console.error("\nPhone and opening hours came off the Google Business Profile and are real.\nThese are what is left.\n");
process.exit(1);
