# Changelog

## 1.0.0 — initial build

From-scratch design-repo build for granola-clone, grounded in `CLONE_SPEC.md`
(719 lines, Playwright-measured homepage spec), `ASSET_MANIFEST.md` (151
lines), the real React/Vite source (`src/`, 8 routes, 24 real motion files),
and a sibling `live-pages/` HTML capture used to spot-check non-home routes.

- 8 foundation token files (color, typography, radius, elevation, motion,
  breakpoint, spacing, icon-size), all cited to `CLONE_SPEC.md` §0.
- 7 primitives, 6 components, 27 sections — one section per distinct real
  content shape observed across all 8 routes.
- 8 templates, one per real page shape, mapped 1:1 to the 8 real routes in
  `src/router.js`'s `ROUTES` array (verified programmatically, not by hand).
- Compatibility graph with 6 rules (CHROME_MUST_WRAP_EVERY_PAGE,
  ONE_HERO_PER_PAGE, FOOTER_CTA_ROUTE_GATING, NO_ADJACENT_SAME_CATEGORY_SOCIAL_PROOF,
  ACCORDION_FAQ_MAX_ONE_PER_TEMPLATE, ARTICLE_ROUTE_EXCLUSIVE), each checked
  against the real `templates/templates.json` node sequences before being
  written, per the build methodology's "verify a rule against the real file
  it describes at write time" lesson.
- Draft-07 JSON Schema + a semantic validator that cross-references a
  PageSpec's declared `template` against that template's real node list (not
  `nodes[]` in isolation) — the most repeated failure class in prior
  design-repo builds, addressed from the start here.
- Adversarial test suite: control cases for every real template (auto-synthesized
  minimal instance) plus the bundled example, and 11 adversarial mutations
  covering schema, structural, and runtime (`maxWords`) rejection categories.
- `extraction/verify_all.py`: schema validation, semantic validation, allowlist
  parity, citation-range validity, manifest count recompute (against real files
  on disk, not hand-bumped numbers), entryPoints self-containment, and a
  repo-wide absolute-path sweep.
- Explicit asset-role licensing guidance on every section touching real
  customer logos, real named people's photos, or real attributed quotes,
  since the source is a live commercial company.
- Corrected a stale first-draft artifact in the source project
  (`src/layout.json`) rather than building templates from it — documented in
  `registry.manifest.json`'s `structuralNotes`.
