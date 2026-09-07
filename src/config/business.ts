/**
 * Every fact about the business lives here, and nowhere else.
 *
 * Templates read from this file only, so correcting the phone number or the
 * call-out fee is a one-line change that propagates to the header, the sticky
 * call bar, the contact page, the WhatsApp deep links and the LocalBusiness
 * structured data at once.
 *
 * >>> PLACEHOLDERS <<<
 * Anything marked TODO below is invented scaffolding, not real data. The phone
 * numbers use the reserved 93 000 00 00 / 600 000 000 patterns precisely so
 * they cannot dial a real person by accident, and the site must not go public
 * until they are replaced. `npm run check:placeholders` lists what is left.
 */

export const SITE_URL = "https://freddysat.es";

export const BUSINESS = {
  name: "Freddy SAT",
  legalName: "Freddy SAT", // TODO real registered name (S.L. / autónomo)
  taxId: "", // TODO NIF/CIF -- required on the aviso legal page by Spanish law
  tagline: {
    es: "Reparación de electrodomésticos y aire acondicionado en Barcelona",
    ca: "Reparació d'electrodomèstics i aire condicionat a Barcelona",
    en: "Appliance and air conditioning repair in Barcelona",
  },

  // tel: is the machine-readable form; display is what a human reads.
  phone: { tel: "+34930000000", display: "93 000 00 00" }, // TODO real landline
  mobile: { tel: "+34600000000", display: "600 000 000" }, // TODO real mobile
  whatsapp: "34600000000", // TODO digits only, country code, no +
  email: "hola@freddysat.es", // TODO confirm the mailbox exists

  address: {
    street: "Carrer d'exemple, 00", // TODO
    postalCode: "08000", // TODO
    city: "Barcelona",
    region: "Catalunya",
    country: "ES",
  },

  // Used for the LocalBusiness service radius, not a shop location.
  geo: { lat: 41.3874, lng: 2.1686 }, // Barcelona centre -- fine as a service-area centroid

  hours: {
    weekdays: { open: "08:00", close: "20:00" },
    saturday: { open: "09:00", close: "14:00" },
    sunday: null, // closed
  },

  /** The honesty layer. These are the numbers customers are most suspicious about. */
  pricing: {
    calloutFee: 35, // TODO confirm desplazamiento
    calloutWaived: true, // fee dropped when the repair goes ahead
    currency: "EUR",
    warrantyMonths: 6, // TODO confirm guarantee on labour and parts
  },

  responseHours: 24, // TODO typical time to attend, in hours

  social: {
    // TODO add real profiles, or leave empty and the links will not render
    instagram: "",
    facebook: "",
    google: "", // Google Business Profile -- worth having for local search
  },
} as const;

/** Neighbourhoods and nearby towns actually covered. Drives the areas page. */
export const AREAS = [
  "Eixample", "Gràcia", "Sant Martí", "Sants-Montjuïc", "Sarrià-Sant Gervasi",
  "Les Corts", "Horta-Guinardó", "Nou Barris", "Sant Andreu", "Ciutat Vella",
  "L'Hospitalet", "Badalona", "Santa Coloma", "Esplugues", "Cornellà", "Sant Adrià",
] as const;

export type Locale = "es" | "ca" | "en";
export const LOCALES: Locale[] = ["es", "ca", "en"];
export const DEFAULT_LOCALE: Locale = "es";
