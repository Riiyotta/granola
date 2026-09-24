# granola-clone — information architecture

A pixel-fidelity clone of a real meeting-notes SaaS product (React + Vite + Tailwind v3), documented
as data rather than prose so structure claims stay checkable.

## Files

- **`ia.json`** — the only file to hand-edit. Templates, sections, and their
  reuse, derived from the real route table in `src/router.js`, each page's
  actual `index.jsx` composition, and the Playwright-measured `CLONE_SPEC.md`.
- **`IA.md`** — generated readable doc (shape/share table, section reuse,
  per-template tables, full section reference). Regenerate with `node
  build.mjs`; do not hand-edit.
- **`matrix.csv`** — generated section × template matrix for a spreadsheet.
  Same rule: regenerate, don't hand-edit.
- **`build.mjs` / `validate.mjs`** — generic scripts, driven entirely by
  `ia.json`, copied in from the `ia-builder` skill.

## Re-running after the project evolves

Edit `ia.json` only, then:

```bash
node validate.mjs && node build.mjs
```

## What the data actually shows

**Every one of the 8 routes is its own template — there is no repeated page
shape in this project.** Unlike a typical marketing site with a handful of
templates spread across dozens of routes, granola-clone has exactly 1 route
per template, so the "shape of the site" table is flat: every template holds
13% of the route count. The interesting axis here isn't route-to-template
ratio, it's section reuse.

**Only 3 of 27 sections are shared** (`shell.navbar`, `shell.footer` — on all
8 routes — and `conversion.footer-cta`, on 6 of 8). The other **24 sections
are single-use**, each the entire distinguishing content of its one route.
That's expected for a marketing site where every page (Home, Chat, Enterprise,
Pricing, Blog, an article, Careers, a contact form) is trying to do something
structurally different — there's very little "almost the same block, twice"
here to warrant extracting a shared component, beyond the two FAQ accordion
sections (`trust.security-compliance` on Enterprise, `faq.things-worth-noting`
on Pricing) that already both point at the same real
`src/pages/Pricing/FaqAccordion.jsx` component via their `implementedBy`
fields, despite being modeled as two separate IA sections (different question
sets, different surrounding context).

**`conversion.footer-cta`'s 6/8 route count is a deliberate product decision,
not a gap.** It's gated per-route by a `cta: true/false` flag in
`src/App.jsx`'s `PAGES` map. The two routes that omit it — Home (which uses
the dedicated `conversion.pricing-cta` section instead) and Enterprise (which
routes to a sales conversation, not a self-serve download) — both have their
own, different bottom-of-funnel CTA already, so the omission is intentional
rather than missing coverage.

**Every section names its real implementing component** (`implementedBy`),
since this documents an actual, already-built codebase rather than a planning
document — turning the IA into a live map of `src/` rather than a separate
prose description that could drift from it. This `ia.json` was built the same
session as `design-repo/`'s `templates/templates.json`, from the same
underlying route/section evidence; the two independently agree on section
count (27) and template-to-route mapping (8:1), which is expected since both
were derived from the same real source, not from each other.

`node validate.mjs` reports all hard invariants reconcile: route sum matches
`meta.totalRoutes` (8), every section referenced by a template is defined and
vice versa, every section has a valid category, and every number written into
a section's `scope` prose matches what the data computes for that section.
