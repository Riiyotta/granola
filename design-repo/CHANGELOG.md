# Changelog

## 1.1.0 — LLM token/asset contracts, closed-loop drift proof

Adds `tokens/llm/token-catalog.json` (canonical index over foundation/
semantic/component/layout/theme tokens) and `token-policy.json` (semantic
preference, raw-value restrictions, theme-vs-policy separation, one honest
finding: no PageSpec-level style-override field exists in this schema today,
so "overrides" policy documents that absence rather than inventing a field).

Adds `assets/asset-roles.json`, centralizing the 14 real asset roles already
declared across 15 section contracts (each section's own detailed licensing
prose — real names, exact counts, exact companies — is preserved unchanged;
this file adds the closed enum + generation-policy layer on top). New role
`third-party-form-embed` (`must-not-reuse-live-endpoint`) makes
`form.contact-sales.json`'s existing prose note about Granola's live Tally
form machine-checkable via a new `assetRole` field.

`registry.manifest.json.entryPoints` gains `tokenCatalog`, `tokenPolicy`,
`assetContract`.

`extraction/verify_all.py` gains 3 checks: token-catalog parity, token-policy
validity, and asset-role closure (including a pinned-policy sub-check for 5
compliance-critical roles — a real gap an adversarial test caught: a
generic "is this a valid policy value" check would NOT have caught
`third-party-form-embed`'s policy being weakened to a valid-but-wrong value).
All proven for real via a new `extraction/prove_drift.sh` — which also fixes
a pre-existing dangling reference: this file's own docstring had referred to
`scripts/prove_drift.sh` for years, but no such file existed anywhere in the
repo. 10 injection scenarios, each independently confirmed to fail; the real
repo re-confirmed to pass clean.

`schema/tests/adversarial_test.py` gains 4 contract-layer cases (unknown
token ID, disallowed raw-value category, invalid asset role, prohibited
asset reuse), each exercising the real `verify_all.py` check functions via
monkey-patched in-memory mutation — not a reimplementation that could drift
from what actually runs. Suite grew 30 → 34.

Also: `design-repo.zip` was already tracked in git (a pre-existing violation
of this workspace's packaging convention) — added `.gitignore` and untracked
it (kept on disk, regenerated fresh).

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
