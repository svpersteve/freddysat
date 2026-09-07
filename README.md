# Freddy Servicio Técnico

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

Phone number and opening hours are **real**, taken from the Google Business
Profile (`BUSINESS.google.profileUrl`) — 692 47 18 55, open 08:00–22:00 seven
days a week. Keep them in step with the profile: it already points at
freddysat.es, and Google distrusts a listing whose details disagree with the
site it links to.

Still outstanding in `src/config/business.ts`: the registered name, NIF and
fiscal address (all three are legally required on the aviso legal), and the
call-out fee and guarantee period, which are assumptions. `npm run deploy`
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

Live preview right now: **https://freddysat.freddysat.workers.dev**

`freddysat.es` was **not registered** when this was built — the `.es` registry
returned NXDOMAIN — so the zone exists but is `pending`. Remaining steps, in
order:

1. **Register `freddysat.es`.** Nothing below works until the registry has it.
2. **Point the registrar at these nameservers** (the zone is already created in
   Orlo's Cloudflare account, id `9f238f8918c541e31e56c860bff2d05a`):

   ```
   jake.ns.cloudflare.com
   leanna.ns.cloudflare.com
   ```

3. **Wait for the zone to go active.** Check with:

   ```sh
   dig NS freddysat.es @c.nic.es +short
   ```

4. **Attach the Worker to the domain.** Cloudflare dashboard → Workers →
   `freddysat` → Settings → Domains & Routes → add `freddysat.es` and
   `www.freddysat.es` as *custom domains* (they create their own proxied DNS
   records). This cannot be scripted with Orlo's API token — it returns
   `10405 Method not allowed for this authentication scheme`, so either use the
   dashboard or a token carrying Workers Scripts: Edit.
5. **Fill in the remaining legal details** (`npm run check:placeholders`) and
   redeploy. Do this *before* step 4 if the domain is going to be findable.

Zone settings already applied: `ssl=strict`, `always_use_https=on`,
`min_tls_version=1.2`.

> Deploying this Worker set the **account-level** `workers.dev` subdomain to
> `freddysat` (wrangler defaults it to the script name and the account had none
> set). That is shared with everything else in Orlo's Cloudflare account.
