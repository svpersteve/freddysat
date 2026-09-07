import es from "./es";
import en from "./en";
import { BUSINESS, DEFAULT_LOCALE, LOCALES, type Locale } from "../config/business";
import type { Dict } from "./es";

export { LOCALES, DEFAULT_LOCALE };
export type { Locale, Dict };

export const DICTS: Record<Locale, Dict> = { es, en };

/** Every page that exists in both languages. Keyed for path building. */
export type PageKey = "home" | "services" | "areas" | "contact" | "legal" | "privacy";

export function t(locale: Locale): Dict {
  return DICTS[locale];
}

/**
 * Reads the locale out of the request path.
 *
 * Castellano is unprefixed, so anything that is not /en/… is Spanish.
 * Astro exposes `Astro.currentLocale`, but it returns undefined on the
 * unprefixed default routes, which is exactly the case that matters here.
 */
export function localeFromUrl(url: URL): Locale {
  const first = url.pathname.split("/").filter(Boolean)[0];
  return LOCALES.includes(first as Locale) ? (first as Locale) : DEFAULT_LOCALE;
}

/**
 * The path for a page in a given language.
 *
 * Slugs are translated per locale, so this is the only place that knows
 * /servicios/ and /services/ are the same page — which is what makes the
 * language switcher land on the equivalent page rather than the home page,
 * and what makes the hreflang set correct.
 */
export function pathFor(locale: Locale, page: PageKey): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  if (page === "home") return `${prefix}/`;
  return `${prefix}/${DICTS[locale].slugs[page]}/`;
}

/** hreflang set for one page: both languages plus x-default on Castellano. */
export function alternatesFor(page: PageKey) {
  const list = LOCALES.map((locale) => ({
    hreflang: DICTS[locale].htmlLang,
    href: pathFor(locale, page),
  }));
  list.push({ hreflang: "x-default", href: pathFor(DEFAULT_LOCALE, page) });
  return list;
}

/**
 * Fills {fee}, {warranty}, {hours} and {phone} from the business config.
 *
 * Copy holds the placeholder rather than the number so the call-out fee is
 * stated in one place. An unknown token is left visible on purpose: a stray
 * {price} in a heading gets noticed and fixed, where silently deleting it
 * produces a sentence that reads fine and says the wrong thing.
 */
export function fill(text: string, extra: Record<string, string | number> = {}): string {
  const vars: Record<string, string | number> = {
    fee: BUSINESS.pricing.calloutFee,
    warranty: BUSINESS.pricing.warrantyMonths,
    hours: BUSINESS.responseHours,
    phone: BUSINESS.phone.display,
    open: BUSINESS.hours.open,
    close: BUSINESS.hours.close,
    city: BUSINESS.address.city,
    ...extra,
  };
  return text.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match));
}
