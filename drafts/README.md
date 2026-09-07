# Parked — air conditioning

Nothing in this directory is built. Astro only routes `src/pages/**`, and
`tsconfig.json` excludes `drafts/`, so these files are inert until moved back.

**Why they are parked, not deleted.** Freddy holds no *carnet RITE*, no
*certificado de manipulador de gases fluorados*, and is not registered with
Indústria as an *empresa instaladora*. Under RITE (RD 1027/2007) and RD 115/2017
he cannot legally install, charge, repair or decommission equipment containing
fluorinated refrigerant. The copy here advertises exactly that work, so it came
off the live site on 2026-09-07. **The copy itself is fine and goes live
unchanged the day the certificates exist** — that is the whole reason it is
still here.

The `.astro` files are byte-identical to what was live. Their import paths are
written for their original locations, so they only resolve once moved back.

## Restoring

```sh
git mv drafts/views/AirconPage.astro src/views/AirconPage.astro
git mv drafts/assets/freddy-aircon.jpg src/assets/freddy-aircon.jpg
mkdir -p src/pages/aire-acondicionado src/pages/en/air-conditioning
git mv drafts/pages/es/aire-acondicionado/index.astro src/pages/aire-acondicionado/index.astro
git mv drafts/pages/en/air-conditioning/index.astro src/pages/en/air-conditioning/index.astro
```

Then paste the blocks from `i18n-aircon.ts` back into `src/i18n/es.ts` and
`src/i18n/en.ts`, restore the `aircon` member of `PageKey` in
`src/i18n/index.ts`, add the nav link back to `Header.astro` and `Footer.astro`,
and drop the two air-conditioning lines from `public/_redirects`.

`drafts/pages/ca/` is parked for a second, unrelated reason: the whole Catalan
marketing locale was removed on the same day, because Freddy does not speak
Catalan and the pages were soliciting enquiries he cannot conduct a job in.
Restoring the Catalan locale is a separate decision from restoring the air
conditioning page. See the note in the root `README.md` about the Codi de
consum — dropping the Catalan *marketing* pages does not drop the Catalan
obligation on quotes, invoices and signage.
