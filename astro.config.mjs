// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { SITE_URL } from "./src/config/business.ts";

// Static output: the whole site is prerendered and served by Cloudflare Workers
// from ./dist as static assets. Nothing here needs a server at request time --
// the one interactive path (the contact form) hands off to WhatsApp, which is
// how this trade actually takes bookings in Spain.
export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "ca", "en"],
    routing: {
      // Castellano sits at the root; ca and en are prefixed. Changing this
      // silently moves every Spanish URL, which is the whole indexed site.
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap({ i18n: { defaultLocale: "es", locales: { es: "es-ES", ca: "ca-ES", en: "en-GB" } } })],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: "auto" },
});
