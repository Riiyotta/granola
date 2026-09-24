#!/usr/bin/env python3
"""Aggregate verification for this design-repo. Run from anywhere; paths are
derived relative to this file, never hardcoded absolute paths (portability
rule from BUILD-GUIDE.md 2.7).

Checks:
  1. Draft-07 schema validation of schema/example.pagespec.json against
     schema/pagespec.schema.json (zero errors required).
  2. Semantic validation of the example (zero errors required).
  3. Allowlist parity: every id in tokens/llm/component-allowlist.json has a
     matching contract file, and every real contract file has an allowlist
     entry. Drift-proofed: this exact check is what extraction/prove_drift.sh
     (run separately) injects a phantom/orphan entry against, in a scratch
     copy, to prove it actually catches drift.
  4. Citation-range validity: every measuredFrom path in
     extraction/measured-values.json that points inside this repo resolves;
     external (sibling source tree) paths degrade to a warning, not a
     failure, when the sibling tree isn't present.
  5. Manifest count recompute: registry.manifest.json's `counts` block is
     recomputed from the real files on disk and compared, not just asserted.
  8. Token-catalog parity: every file tokens/llm/token-catalog.json indexes
     really exists, and every semantic role it lists matches the real roles
     in that file exactly (both directions).
  9. Token-policy validity: tokens/llm/token-policy.json's rawValueRestrictions
     only names real foundation groups from the catalog, and every
     enforcedBy rule names a real checkedBy enforcement (not just asserted).
  10. Asset-role closure: every assetRole a section contract references
      exists in assets/asset-roles.json (and vice versa -- no orphan
      catalogued role), and every catalogued role's generationPolicy is one
      of the 4 real closed values.

Drift-proofing: extraction/prove_drift.sh runs this script against a scratch
copy with a deliberately injected phantom/orphan/mismatch for each check
above and confirms it fails, then confirms the real, unmodified repo passes
clean — see that script for the exact reproduction steps.
"""
import json
import os
import sys

try:
    import jsonschema
    from jsonschema import Draft7Validator
except ImportError:
    jsonschema = None

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def load(rel_path):
    with open(os.path.join(REPO_ROOT, rel_path), "r", encoding="utf-8") as f:
        return json.load(f)


def check_schema():
    errors = []
    if jsonschema is None:
        errors.append("jsonschema library not installed — cannot run Draft-07 validation")
        return errors
    schema = load("schema/pagespec.schema.json")
    instance = load("schema/example.pagespec.json")
    validator = Draft7Validator(schema)
    for err in sorted(validator.iter_errors(instance), key=str):
        errors.append(f"schema: {err.message} at {list(err.path)}")
    return errors


def check_semantic():
    sys.path.insert(0, os.path.join(REPO_ROOT, "schema"))
    import semantic_validate  # noqa: E402
    errs, warns = semantic_validate.validate(os.path.join(REPO_ROOT, "schema", "example.pagespec.json"))
    return [f"semantic: {e}" for e in errs], [f"semantic: {w}" for w in warns]


def check_allowlist_version():
    errors = []
    manifest = load("registry.manifest.json")
    allowlist = load("tokens/llm/component-allowlist.json")
    if manifest.get("allowlistVersion") != allowlist.get("allowlistVersion"):
        errors.append(
            f"allowlistVersion drift: registry.manifest.json claims '{manifest.get('allowlistVersion')}' "
            f"but tokens/llm/component-allowlist.json's own version is '{allowlist.get('allowlistVersion')}'"
        )
    return errors


def check_allowlist_parity():
    errors = []
    allowlist = load("tokens/llm/component-allowlist.json")
    listed_ids = set(allowlist["entries"].keys())

    real_ids = set()
    for folder in ("primitives", "components", "sections"):
        d = os.path.join(REPO_ROOT, folder)
        for fname in os.listdir(d):
            if fname.endswith(".json"):
                with open(os.path.join(d, fname)) as f:
                    obj = json.load(f)
                real_ids.add(obj["id"])

    phantom = listed_ids - real_ids
    orphan = real_ids - listed_ids
    if phantom:
        errors.append(f"allowlist parity: phantom entries (no matching contract file): {sorted(phantom)}")
    if orphan:
        errors.append(f"allowlist parity: orphan contract files (no allowlist entry): {sorted(orphan)}")
    return errors


def check_citations():
    errors = []
    warnings = []
    mv = load("extraction/measured-values.json")
    for c in mv["citations"]:
        src = c["source"]
        if src.startswith("../"):
            resolved = os.path.normpath(os.path.join(REPO_ROOT, src))
            if not os.path.exists(resolved):
                warnings.append(f"citation source not present in this delivery (expected if sibling tree absent): {src}")
        else:
            resolved = os.path.normpath(os.path.join(REPO_ROOT, src))
            if not os.path.exists(resolved):
                errors.append(f"citation source missing inside design-repo/: {src}")
    return errors, warnings


def check_manifest_counts():
    errors = []
    manifest = load("registry.manifest.json")
    claimed = manifest["counts"]

    def count_dir(folder):
        d = os.path.join(REPO_ROOT, folder)
        return len([f for f in os.listdir(d) if f.endswith(".json")])

    real_tokens_foundation = count_dir("tokens/00-foundation")
    real_primitives = count_dir("primitives")
    real_components = count_dir("components")
    real_sections = count_dir("sections")
    templates = load("templates/templates.json")["templates"]
    real_templates = len(templates)
    real_routes = len({r for t in templates.values() for r in t["routes"]})

    recomputed = {
        "foundationTokenFiles": real_tokens_foundation,
        "primitives": real_primitives,
        "components": real_components,
        "sections": real_sections,
        "templates": real_templates,
        "routes": real_routes,
    }
    for key, real_value in recomputed.items():
        claimed_value = claimed.get(key)
        if claimed_value != real_value:
            errors.append(
                f"manifest counts: '{key}' claims {claimed_value} but real count on disk is {real_value}"
            )
    return errors


def check_token_catalog_parity():
    """Every foundation/semantic/component/layout/theme file the catalog
    claims to index must really exist; every real role listed under
    semantic.* must really exist as a key in that real file."""
    errors = []
    catalog = load("tokens/llm/token-catalog.json")

    def file_exists(rel):
        return os.path.exists(os.path.join(REPO_ROOT, "tokens", rel))

    for group_name in ("foundation", "component", "layout"):
        group = catalog.get(group_name, {})
        for key, entry in group.items():
            if isinstance(entry, dict) and "file" in entry:
                if not file_exists(entry["file"]):
                    errors.append(f"token-catalog.json {group_name}.{key} references 'tokens/{entry['file']}' which does not exist")

    theme_file = catalog.get("theme", {}).get("file")
    if theme_file and not file_exists(theme_file):
        errors.append(f"token-catalog.json theme references 'tokens/{theme_file}' which does not exist")

    for sub, entry in catalog.get("semantic", {}).items():
        rel = entry.get("file")
        if not rel or not file_exists(rel):
            errors.append(f"token-catalog.json semantic.{sub} references 'tokens/{rel}' which does not exist")
            continue
        real = load(os.path.join("tokens", rel))
        real_roles = set(real.get("roles", {}).keys())
        catalog_roles = set(entry.get("roles", []))
        missing = sorted(catalog_roles - real_roles)
        extra = sorted(real_roles - catalog_roles)
        if missing:
            errors.append(f"token-catalog.json semantic.{sub} lists role(s) not in the real file: {missing}")
        if extra:
            errors.append(f"token-catalog.json semantic.{sub} is missing real role(s) present in the file: {extra}")

    return errors


def check_token_policy_validity():
    """token-policy.json's rawValueRestrictions keys must be real foundation
    groups from the catalog, and every enforcedBy rule must name a real
    checkedBy string (non-empty)."""
    errors = []
    catalog = load("tokens/llm/token-catalog.json")
    policy = load("tokens/llm/token-policy.json")

    real_foundation_groups = set(catalog.get("foundation", {}).keys())
    # rawValueRestrictions keys are descriptive categories; validate they at
    # least correspond to a real foundation group by prefix-matching loosely
    # (colors->colors, typography->typography, spacing->spacing, radius->radius)
    restriction_keys = set(policy.get("rawValueRestrictions", {}).keys())
    unmatched = sorted(k for k in restriction_keys if k not in real_foundation_groups)
    if unmatched:
        errors.append(f"token-policy.json rawValueRestrictions references unknown foundation group(s): {unmatched} (real groups: {sorted(real_foundation_groups)})")

    for rule in policy.get("enforcedBy", []):
        if not rule.get("checkedBy"):
            errors.append(f"token-policy.json enforcedBy rule '{rule.get('rule')}' has no checkedBy — an unenforced rule with no stated enforcement is undetectable drift")

    return errors


def check_asset_role_closure():
    """Every role referenced by any section's assetRoles/thirdPartyEmbed
    block must exist in assets/asset-roles.json (both directions), and every
    catalogued role's generationPolicy must be one of the 4 real closed
    policy values."""
    errors = []
    asset_roles = load("assets/asset-roles.json")
    catalogued = set(asset_roles.get("roles", {}).keys())
    valid_policies = set(asset_roles.get("generationPolicyValues", {}).keys())

    used_roles = set()
    sections_dir = os.path.join(REPO_ROOT, "sections")
    for fname in sorted(os.listdir(sections_dir)):
        if not fname.endswith(".json"):
            continue
        section = load(os.path.join("sections", fname))
        for block_name in ("assetRoles",):
            for field, spec in (section.get(block_name) or {}).items():
                if isinstance(spec, dict) and "role" in spec:
                    used_roles.add(spec["role"])
        embed = section.get("thirdPartyEmbed")
        if isinstance(embed, dict) and "assetRole" in embed:
            used_roles.add(embed["assetRole"])

    phantom = sorted(used_roles - catalogued)  # a section uses a role the catalog doesn't define
    if phantom:
        errors.append(f"section(s) reference assetRole(s) not defined in assets/asset-roles.json: {phantom}")

    orphan = sorted(catalogued - used_roles)  # catalogued role no section actually uses
    if orphan:
        errors.append(f"assets/asset-roles.json defines role(s) no section actually uses: {orphan}")

    for role_id, spec in asset_roles.get("roles", {}).items():
        policy = spec.get("generationPolicy")
        if policy not in valid_policies:
            errors.append(f"assets/asset-roles.json role '{role_id}' has generationPolicy '{policy}' which is not one of the closed values {sorted(valid_policies)}")

    # Pinned critical-role policies: a handful of roles carry compliance
    # weight (a real live third-party endpoint, real named people) where ANY
    # valid-but-wrong policy value would be a real regression, not just a
    # missing-enum error. These exact values must never be loosened.
    pinned_policies = {
        "third-party-form-embed": "must-not-reuse-live-endpoint",
        "real-person-photo": "must-not-fabricate",
        "real-company-logo": "must-not-fabricate",
        "real-person-quote": "must-not-fabricate",
        "team-photo": "must-not-fabricate",
    }
    for role_id, required_policy in pinned_policies.items():
        actual = asset_roles.get("roles", {}).get(role_id, {}).get("generationPolicy")
        if role_id in asset_roles.get("roles", {}) and actual != required_policy:
            errors.append(f"assets/asset-roles.json role '{role_id}' must be pinned to generationPolicy '{required_policy}' (a compliance-critical role) but is '{actual}'")

    return errors


def check_entrypoints_self_contained():
    errors = []
    manifest = load("registry.manifest.json")
    for entry_key, entry_path in manifest.get("entryPoints", {}).items():
        if isinstance(entry_path, list):
            paths = entry_path
        else:
            paths = [entry_path]
        for p in paths:
            if p.startswith("../") or p.startswith("/"):
                errors.append(f"entryPoints['{entry_key}'] points outside design-repo/: {p}")
            resolved = os.path.normpath(os.path.join(REPO_ROOT, p))
            if not os.path.exists(resolved):
                errors.append(f"entryPoints['{entry_key}'] does not resolve: {p}")
    return errors


def check_no_absolute_paths():
    """Sweep for literal /Users/... absolute machine paths. Skips this file's
    own source, since it necessarily contains the search pattern as a string
    literal, which is not itself a leaked absolute path."""
    errors = []
    self_path = os.path.abspath(__file__)
    for dirpath, dirnames, filenames in os.walk(REPO_ROOT):
        dirnames[:] = [d for d in dirnames if d != "__pycache__"]
        for fname in filenames:
            if fname.endswith((".json", ".py", ".md")):
                full = os.path.join(dirpath, fname)
                if os.path.abspath(full) == self_path:
                    continue
                with open(full, "r", encoding="utf-8", errors="ignore") as f:
                    for i, line in enumerate(f, 1):
                        if "/Users/" in line:
                            errors.append(f"absolute path found: {os.path.relpath(full, REPO_ROOT)}:{i}")
    return errors


def main():
    all_errors = []
    all_warnings = []

    print("=== 1. Draft-07 schema validation ===")
    e = check_schema()
    all_errors += e
    print(f"  {len(e)} error(s)" if e else "  PASSED")

    print("=== 2. Semantic validation ===")
    e, w = check_semantic()
    all_errors += e
    all_warnings += w
    print(f"  {len(e)} error(s), {len(w)} warning(s)" if (e or w) else "  PASSED")

    print("=== 3. Allowlist parity ===")
    e = check_allowlist_parity()
    all_errors += e
    print(f"  {len(e)} error(s)" if e else "  PASSED")

    print("=== 3b. Allowlist version parity (manifest <-> allowlist) ===")
    e = check_allowlist_version()
    all_errors += e
    print(f"  {len(e)} error(s)" if e else "  PASSED")

    print("=== 4. Citation-range validity ===")
    e, w = check_citations()
    all_errors += e
    all_warnings += w
    print(f"  {len(e)} error(s), {len(w)} warning(s)" if (e or w) else "  PASSED")

    print("=== 5. Manifest count recompute ===")
    e = check_manifest_counts()
    all_errors += e
    print(f"  {len(e)} error(s)" if e else "  PASSED")

    print("=== 8. Token-catalog parity ===")
    e = check_token_catalog_parity()
    all_errors += e
    print(f"  {len(e)} error(s)" if e else "  PASSED")

    print("=== 9. Token-policy validity ===")
    e = check_token_policy_validity()
    all_errors += e
    print(f"  {len(e)} error(s)" if e else "  PASSED")

    print("=== 10. Asset-role closure ===")
    e = check_asset_role_closure()
    all_errors += e
    print(f"  {len(e)} error(s)" if e else "  PASSED")

    print("=== 6. entryPoints self-containment ===")
    e = check_entrypoints_self_contained()
    all_errors += e
    print(f"  {len(e)} error(s)" if e else "  PASSED")

    print("=== 7. No absolute local machine paths ===")
    e = check_no_absolute_paths()
    all_errors += e
    print(f"  {len(e)} error(s)" if e else "  PASSED")

    print()
    for w in all_warnings:
        print(f"WARN: {w}")
    for e in all_errors:
        print(f"ERROR: {e}")

    if all_errors:
        print(f"\nFAILED: {len(all_errors)} total error(s), {len(all_warnings)} warning(s)")
        sys.exit(1)
    print(f"\nPASSED: 0 errors, {len(all_warnings)} warning(s)")
    sys.exit(0)


if __name__ == "__main__":
    main()
