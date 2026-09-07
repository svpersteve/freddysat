# Freddy SAT

Trilingual marketing site for an appliance and air-conditioning repair service
(SAT) in Barcelona. Astro, static output, deployed to Cloudflare Workers.

```sh
npm install
npm run dev            # http://localhost:4321
npm run build          # -> dist/
npm run check          # astro + TypeScript diagnostics
npm test               # Playwright behaviour checks (needs a preview server)
```

## Before this goes live

`src/config/business.ts` ships with **invented placeholder data** — the phone
numbers are the reserved `93 000 00 00` / `600 000 000` patterns so they cannot
dial a real person, and the NIF and address are blank. `npm run deploy` refuses
to run until they are replaced:

```sh
npm run check:placeholders
```

The legal notice and privacy policy also render a visible "pending review"
banner and `noindex` while the NIF is unset. They describe what the site
genuinely does today — no cookies, no analytics, no server-side form, fonts
self-hosted — so **if any of that changes, the text stops being true and must be
updated with it.**

## How it is put together

Every business fact lives in `src/config/business.ts` and nowhere else, so
correcting the call-out fee updates the header, the call panel, the trust
section and the LocalBusiness structured data at once.

Copy lives in one file per language under `src/i18n/`. `es.ts` is the master;
`ca.ts` and `en.ts` are typed against it, so a key added to Spanish but missed
in Catalan is a compile error rather than a blank on a live page. A translator
can be handed a single file.

URL slugs are translated too (`/servicios/`, `/ca/serveis/`, `/en/services/`)
and held in those same dictionaries. `pathFor()` in `src/i18n/index.ts` is the
only thing that knows they are the same page, which is what makes the language
switcher land on the equivalent page and the hreflang set correct.

`src/pages/**` holds 22 thin route files that do nothing but fix a URL and a
locale; the pages themselves are in `src/views/`, shared across all three
languages.

### Design

The palette runs on one axis, because the trade does: everything this business
touches either makes heat (oven, dryer, water heater) or takes it away (fridge,
freezer, A/C). Ember and ice are therefore not decoration — the services
section is sorted along them and each card's accent is its computed position
between the poles, so reordering the catalogue recolours the section.

The other deliberate choice is symptom-first navigation. Nobody rings a SAT
thinking "I need a washing machine technician"; they ring thinking "it won't
drain". The home page leads with those symptoms, and each one carries through
to the contact form.

## Deployment

Cloudflare Workers static assets, configured in `wrangler.jsonc`. There is no
Worker script — `dist/` is served straight from the edge. Adding a `main` entry
later (a server-side form handler, say) upgrades this in place without changing
the deployment target or the domain.

```sh
npm run deploy           # placeholder check, build, wrangler deploy
npm run deploy:preview   # build and upload a preview version, no promotion
```

### Domain

`freddysat.es` is **not yet registered** — the `.es` registry returned NXDOMAIN
when this was built. Once it is registered, the Cloudflare zone is created in
Orlo's account and the registrar's nameservers pointed at the pair Cloudflare
returns. DNS for this account is administered through the Orlo app's
`Cloudflare::` service objects rather than by hand.
