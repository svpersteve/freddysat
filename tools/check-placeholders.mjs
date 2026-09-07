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
  { label: "landline",       bad: /\+34930000000/,        hint: "BUSINESS.phone" },
  { label: "mobile",         bad: /\+34600000000/,        hint: "BUSINESS.mobile" },
  { label: "whatsapp",       bad: /"34600000000"/,        hint: "BUSINESS.whatsapp" },
  { label: "tax id (NIF)",   bad: /taxId:\s*""/,          hint: "required on the aviso legal page by law" },
  { label: "street address", bad: /Carrer d'exemple/,     hint: "BUSINESS.address.street" },
  { label: "postal code",    bad: /postalCode:\s*"08000"/,hint: "BUSINESS.address.postalCode" },
];

const outstanding = checks.filter((c) => c.bad.test(src));
const todos = (src.match(/TODO/g) ?? []).length;

if (outstanding.length === 0) {
  console.log(`Business data complete. ${todos} TODO comment(s) still in the file.`);
  process.exit(0);
}

console.error(`\n${outstanding.length} placeholder(s) still in src/config/business.ts:\n`);
for (const c of outstanding) console.error(`  · ${c.label.padEnd(15)} — ${c.hint}`);
console.error("\nReplace these before pointing freddysat.es at the site.\n");
process.exit(1);
