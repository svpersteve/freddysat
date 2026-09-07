/**
 * Every fact about the business lives here, and nowhere else.
 *
 * Templates read from this file only, so correcting the phone number or the
 * call-out fee is a one-line change that propagates to the header, the sticky
 * call bar, the contact page, the WhatsApp deep links and the LocalBusiness
 * structured data at once.
 *
 * Phone, hours, name and category are taken from the live Google Business
 * Profile (see GOOGLE.profileUrl) and must stay in step with it — Google
 * penalises a listing whose NAP details disagree with the site it points at,
 * and the profile already points at freddysat.es.
 *
 * >>> STILL PLACEHOLDER <<<
 * Anything marked TODO is unverified. `npm run check:placeholders` lists what
 * is outstanding and `npm run deploy` refuses to run while any remains.
 */

export const SITE_URL = "https://freddysat.es";

export const BUSINESS = {
  name: "Freddy Servicio Técnico",
  shortName: "Freddy",
  legalName: "", // TODO registered name (autónomo or S.L.)
  taxId: "", // TODO NIF/CIF — required on the aviso legal page by Spanish law
  tagline: {
    es: "Reparación de electrodomésticos a domicilio en Barcelona",
    en: "Callout appliance repair in Barcelona",
  },

  /** From the Google Business Profile. One mobile, which is also the WhatsApp. */
  phone: { tel: "+34692471855", display: "692 47 18 55" },
  whatsapp: "34692471855",
  email: "", // TODO no mailbox exists yet; contact rows hide while this is blank

  /**
   * A service-area business: Freddy drives to the customer, so there is no
   * shop to publish. Google's profile carries no street address either, and
   * inventing one would contradict the listing. Only the city is stated.
   */
  address: { city: "Barcelona", region: "Catalunya", country: "ES" },
  geo: { lat: 41.3874, lng: 2.1686 },

  /**
   * The fiscal address, which is a different thing from a shop.
   *
   * LSSI art. 10 requires the titular's domicilio on the aviso legal even when
   * there is no premises to visit, so this appears on the legal pages only and
   * never in the LocalBusiness markup or the contact page.
   */
  legalAddress: "", // TODO domicilio fiscal — required on the aviso legal page

  /**
   * 08:00–22:00, every day including Sunday, per the profile. Long hours and
   * weekend cover are the strongest thing this business has to say against a
   * franchise call centre, so the copy leads with it rather than burying it.
   */
  hours: { open: "08:00", close: "22:00", everyDay: true },

  pricing: {
    calloutFee: 35, // TODO confirm desplazamiento
    calloutWaived: true,
    currency: "EUR",
    warrantyMonths: 6, // TODO confirm guarantee on labour and parts
  },

  responseHours: 24, // TODO typical time to attend, in hours

  google: {
    /** Canonical CID link — survives the profile being renamed or moved. */
    profileUrl: "https://maps.google.com/?cid=14599212122246135349",
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJiVb5RVXNOqkRNb4OQxLSmso",
    category: "Servicio de reparación",
  },

  social: { instagram: "", facebook: "" }, // TODO none on the profile yet
} as const;

/**
 * The six areas actually worked, and the same six the Google Business Profile
 * lists. Google reads a service-area business's site against its profile, so a
 * longer list here than there costs trust on both sides — and claiming the
 * whole metropolitan area is the dispatch-aggregator pattern this business is
 * positioned against. Cut from sixteen on 2026-09-07.
 *
 * Drives the areas page, the footer, the contact page and areaServed in the
 * LocalBusiness markup, so the six can never disagree between them.
 */
export const AREAS = [
  "Nou Barris",
  "Sant Martí",
  "Sants-Montjuïc",
  "Ciutat Vella",
  "L'Hospitalet de Llobregat",
  "Santa Coloma de Gramenet",
] as const;

/**
 * Castellano and English. The Catalan marketing locale was removed on
 * 2026-09-07 because Freddy does not speak Catalan, and those pages were
 * soliciting enquiries he could not then conduct the job in.
 *
 * That is a decision about *marketing* pages only. The Codi de consum de
 * Catalunya (art. 128-1) still requires quotes, invoices, receipts, price lists
 * and fixed signage to be available in Catalan; that obligation lives in the
 * invoice and quote templates, not here. See README.md before "tidying" this.
 */
export type Locale = "es" | "en";
export const LOCALES: Locale[] = ["es", "en"];
export const DEFAULT_LOCALE: Locale = "es";
