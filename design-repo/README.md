# granola-clone design-repo

An AI-ready design-repo built from the cloned real marketing site at
`granola-clone/`. Built per the methodology in `design-repo-extraction-plugin`'s
`BUILD-GUIDE.md` and `MASTER-GUIDE.md`.

## What this is

A machine-validated PageSpec system: tokens, primitives, components, sections
(the retrieval unit, each with a real content contract), templates (one per
distinct real page shape), a compatibility graph (rhythm rules), and a
JSON-Schema + semantic-validator layer that together let an LLM generate new
on-brand pages without inventing colors, copy, or structure.

## Real counts (recomputed from disk, verified by `extraction/verify_all.py`)

- 8 foundation token files
- 7 primitives
- 6 components
- 27 sections
- 8 templates
- 8 real routes (1:1 template mapping, verified against `src/router.js`'s `ROUTES` array)

## Source

All evidence is grounded in real, measured data already present in the
`granola-clone/` project when this design-repo was built:

- `CLONE_SPEC.md` (719 lines) — Playwright-measured design spec for the
  homepage (colors, type scale, radii, shadows, easing, per-section content
  and motion, at 1440/1280/390px).
- `ASSET_MANIFEST.md` (151 lines) — every real image/video/SVG/font the live
  homepage requests, with identical/recompressed status per file.
- Real React/Vite/Tailwind v3 source (`src/`) — 8 real routes, each page's
  actual JSX composition, and 24 real motion implementation files in
  `src/motion/`.

## Important structural notes

- **No external navigation.** `src/router.js` intercepts every link and makes
  off-site/unrecognized links inert. The one deliberate exception is the
  `/contact/sales` route's real embedded Tally form
  (`sections/form.contact-sales.json`'s `thirdPartyEmbed` field documents this).
- **Real company, real people.** The source is a live commercial product.
  Every section referencing a real customer logo, a real named person's photo,
  or a real quote carries explicit `assetRole` licensing guidance that forbids
  fabricating or misattributing that content — see
  `sections/social-proof.logo-wall.json`, `social-proof.testimonials.json`,
  `social-proof.tweet-wall.json`, `content.article-body.json`,
  `careers.jobs-page.json`, `integration.connector-strip.json`,
  `feature-grid.marketing.json`, and `social-proof.logo-marquee.json`.
- **`src/layout.json` was not used as a build source.** It's a stale
  first-draft artifact in the source project (missing the Pricing section,
  mismatched component names) — `templates/templates.json` was built directly
  from the real `src/pages/*/index.jsx` files instead.

## Verification

Run `python3 extraction/verify_all.py` from this folder. It runs, in order:

1. Draft-07 schema validation of the bundled example (zero errors required).
2. Semantic validation of the bundled example (zero errors required).
3. Allowlist parity (every allowlist entry has a real contract file and vice versa).
4. Citation-range validity (every `extraction/measured-values.json` citation resolves).
5. Manifest count recompute (`registry.manifest.json`'s `counts` block checked against real files on disk).
6. `registry.manifest.json`'s `entryPoints` self-containment (no `../` paths).
7. No absolute local machine paths anywhere in the repo.

Run `python3 schema/tests/adversarial_test.py` to confirm every rule actually
rejects a bad instance, and every real template's control instance (plus the
bundled example) passes with zero errors.

## Version fields

`allowlistVersion` is machine-enforced — `extraction/verify_all.py` fails the
run if `tokens/llm/component-allowlist.json`'s own version drifts from
`registry.manifest.json`'s claim. `repositoryVersion`/`pageSpecVersion` are
documentation-only, hand-maintained markers with nothing checking them
automatically (see `registry.manifest.json`'s `versionFieldNote`).
