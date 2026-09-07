# Freddy Servicio Técnico

Bilingual (es/en) marketing site for a one-man appliance repair service (SAT)
in Barcelona. Astro, static output, deployed to Cloudflare Workers.

The business is **Freddy**, an autónomo who drives to every job himself, so the
copy is first person singular throughout. That is the commercial argument
against the dispatch aggregators that dominate this search term, and "we"
gives it away for nothing.

```sh
npm install
npm run dev            # http://localhost:4321
npm run build          # -> dist/
npm run check          # astro + TypeScript diagnostics
npm test               # Playwright behaviour checks (needs a preview server)
```

## What this site must not say

**Freddy holds no HVAC certifications** — no *carnet RITE*, no *certificado de
manipulador de gases fluorados*, and no registration with Indústria as an
*empresa instaladora*. Under RITE (RD 1027/2007) and RD 115/2017 he cannot
legally install, charge, repair or decommission anything containing fluorinated
refrigerant. He also holds no gas-installer certificate, so gas water heaters
are out on the same grounds.

The site advertised exactly that work until 2026-09-07. It no longer does:

- the air conditioning page is parked in `drafts/` — see the README there — and
  its URLs 301 to the services page;
- the fridge card covers thermostats, fans, defrost heaters, boards, seals and
  drains, and stops at the sealed circuit;
- `boundary` in the copy decks says so out loud, on the services page and in
  the FAQ, and is the one deliberate mention of refrigerant left in `src/`;
- the LocalBusiness markup is `LocalBusiness`, not `HVACBusiness`.

Anything that puts refrigerant work back — a service card, a meta description,
a schema type, a photograph of a manifold gauge — is a legal and insurance
exposure, not a copy decision. The parked copy goes live unchanged the day the
certificates exist.

## Catalan

There is no `/ca/` locale. It was removed on 2026-09-07 because Freddy does not
speak Catalan and those pages were soliciting enquiries he could not conduct the
job in. Every Catalan URL 301s to its Spanish equivalent, and the site carries
no note explaining the absence.

**This does not remove the Catalan obligation elsewhere.** Under the Codi de
consum de Catalunya (art. 128-1), commercial documentation — quotes, invoices,
receipts, price lists — and fixed signage must be available in Catalan. That
obligation attaches to the paperwork and the van, not to marketing pages, and it
is handled separately in the invoice and quote templates. **Do not "tidy up"
this note, and do not treat the missing locale as evidence the obligation went
away.**

## Before this goes live

Phone number and opening hours are **real**, taken from the Google Business
Profile (`BUSINESS.google.profileUrl`) — 692 47 18 55, open 08:00–22:00 seven
days a week. Keep them in step with the profile: it already points at
freddysat.es, and Google distrusts a listing whose details disagree with the
site it links to.

Still outstanding in `src/config/business.ts`: the registered name, NIF,
fiscal address and a contact email (all four are legally required on the aviso
legal), and the call-out fee and guarantee period, which are assumptions. `npm run deploy`
refuses to run until they are filled in:

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
`en.ts` is typed against it, so a key added to Spanish but missed in English is
a compile error rather than a blank on a live page. A translator can be handed a
single file.

URL slugs are translated too (`/servicios/`, `/en/services/`)
and held in those same dictionaries. `pathFor()` in `src/i18n/index.ts` is the
only thing that knows they are the same page, which is what makes the language
switcher land on the equivalent page and the hreflang set correct.

`src/pages/**` holds the thin route files that do nothing but fix a URL and a
locale; the pages themselves are in `src/views/`, shared across both languages.

Service areas are six, in `AREAS`, and the same six the Google Business Profile
lists — homepage, areas page, footer, contact page and `areaServed` all read
that one constant. Google reads a service-area business's site against its
profile, so the two must not disagree; and claiming the whole metropolitan area
is the aggregator pattern this site is positioned against.

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

**Live on https://freddysat.es** since 2026-09-07, and still reachable at
https://freddysat.freddysat.workers.dev. The zone
(`9f238f8918c541e31e56c860bff2d05a`) is active in Orlo's Cloudflare account, and
both `freddysat.es` and `www.freddysat.es` are attached to this Worker as custom
domains. Zone settings applied: `ssl=strict`, `always_use_https=on`,
`min_tls_version=1.2`.

Attaching a custom domain cannot be scripted with Orlo's API token — 
`POST /accounts/{id}/workers/domains` returns
`10405 Method not allowed for this authentication scheme` — so it is done in the
dashboard, or with a token carrying Workers Scripts: Edit. Zones, DNS records
and zone settings all work over the API.

Still open:

- `www` serves a duplicate 200 rather than redirecting to the apex. Canonicals
  all point at the apex, so it is contained, but a redirect rule is cleaner.
- Zoho mail is half-configured: the verification TXT/CNAME are in the zone, but
  there are no MX records, so nothing is deliverable and `BUSINESS.email` is
  still blank. The aviso legal needs that address.

Retired URLs are handled by `public/_redirects`, which Cloudflare evaluates
before serving anything from `dist/`. That is where the air-conditioning and
Catalan 301s live.

> Deploying this Worker set the **account-level** `workers.dev` subdomain to
> `freddysat` (wrangler defaults it to the script name and the account had none
> set). That is shared with everything else in Orlo's Cloudflare account.
