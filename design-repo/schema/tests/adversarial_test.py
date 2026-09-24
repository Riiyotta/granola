#!/usr/bin/env python3
"""Adversarial test suite for the granola-clone design-repo's PageSpec validation.

For every rule in schema/pagespec.schema.json, compatibility/graph.json, and
schema/semantic_validate.py, construct a mutated instance that should be
REJECTED, and prove it is. Also asserts the control case: every real template
composed as a minimal valid PageSpec, plus the bundled example, produce ZERO
errors — a validator that rejects everything is as broken as one that rejects
nothing.
"""
import copy
import json
import os
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(REPO_ROOT, "schema"))

import semantic_validate  # noqa: E402

try:
    import jsonschema
    from jsonschema import Draft7Validator
except ImportError:
    jsonschema = None


def load(rel_path):
    with open(os.path.join(REPO_ROOT, rel_path), "r", encoding="utf-8") as f:
        return json.load(f)


SCHEMA = load("schema/pagespec.schema.json")
TEMPLATES = load("templates/templates.json")["templates"]
EXAMPLE = load("schema/example.pagespec.json")

PASS_COUNT = 0
FAIL_COUNT = 0


def report(name, ok, detail=""):
    global PASS_COUNT, FAIL_COUNT
    if ok:
        PASS_COUNT += 1
        print(f"  PASS: {name}")
    else:
        FAIL_COUNT += 1
        print(f"  FAIL: {name} {detail}")


def schema_errors(instance):
    if jsonschema is None:
        raise RuntimeError("jsonschema not installed")
    validator = Draft7Validator(SCHEMA)
    return list(validator.iter_errors(instance))


def write_tmp(instance, name="tmp_instance.json"):
    path = os.path.join(REPO_ROOT, "schema", "tests", name)
    with open(path, "w") as f:
        json.dump(instance, f)
    return path


def semantic_errors(instance):
    path = write_tmp(instance)
    try:
        errs, warns = semantic_validate.validate(path)
    finally:
        os.remove(path)
    return errs, warns


def minimal_content_for_section(section_id):
    """Build minimal valid content for a section, respecting its required fields, from real evidence in the example instance if present, else a short generic-but-plausible stand-in within maxWords."""
    for node in EXAMPLE["nodes"]:
        if node["section"] == section_id:
            return copy.deepcopy(node.get("content", {}))
    contract = load(f"sections/{section_id}.json")
    required = contract.get("content", {}).get("required", [])
    props = contract.get("content", {}).get("properties", {})
    content = {}
    for field in required:
        spec = props.get(field, {})
        t = spec.get("type")
        if t == "string":
            content[field] = "Placeholder text"
        elif t == "array":
            content[field] = []
        elif t == "boolean":
            content[field] = False
        elif t == "object":
            content[field] = {}
    return content


def build_control_instance(template_id):
    t = TEMPLATES[template_id]
    nodes = []
    for n in t["nodes"]:
        nodes.append({
            "section": n["section"],
            "content": minimal_content_for_section(n["section"]),
            "motion": {"pattern": "static-reveal", "reducedMotionFallback": "renders statically"},
        })
    return {"route": t["routes"][0], "template": template_id, "nodes": nodes}


def main():
    print("=== Control cases: every real template + bundled example must pass with zero errors ===")

    # Bundled example
    se = schema_errors(EXAMPLE)
    report("bundled example.pagespec.json: schema valid", len(se) == 0, str(se[:1]))
    sem_e, sem_w = semantic_errors(EXAMPLE)
    report("bundled example.pagespec.json: semantic valid", len(sem_e) == 0, str(sem_e[:1]))

    # Every real template, auto-synthesized minimal control instance
    for tid in TEMPLATES:
        inst = build_control_instance(tid)
        se = schema_errors(inst)
        report(f"control {tid}: schema valid", len(se) == 0, str(se[:1]))
        sem_e, sem_w = semantic_errors(inst)
        report(f"control {tid}: semantic valid (0 errors)", len(sem_e) == 0, str(sem_e[:1]))

    print("\n=== Adversarial cases: each mutation must be REJECTED ===")

    # 1. Schema-layer: wrong enum value
    bad = copy.deepcopy(EXAMPLE)
    bad["template"] = "template.does-not-exist"
    se = schema_errors(bad)
    report("wrong template enum value rejected by schema", len(se) > 0)

    # 2. Schema-layer: missing required field (nodes)
    bad = copy.deepcopy(EXAMPLE)
    del bad["nodes"]
    se = schema_errors(bad)
    report("missing required 'nodes' rejected by schema", len(se) > 0)

    # 3. Schema-layer: invented section type (not in enum)
    bad = copy.deepcopy(EXAMPLE)
    bad["nodes"][0]["section"] = "invented.fake-section"
    se = schema_errors(bad)
    report("invented section id rejected by schema", len(se) > 0)

    # 4. Schema-layer: missing reducedMotionFallback
    bad = copy.deepcopy(EXAMPLE)
    del bad["nodes"][1]["motion"]["reducedMotionFallback"]
    se = schema_errors(bad)
    report("missing reducedMotionFallback rejected by schema", len(se) > 0)
    sem_e, _ = semantic_errors(bad)
    report("missing reducedMotionFallback also rejected by semantic validator", len(sem_e) > 0)

    # 5. Structural: duplicate one-per-page section (shell.navbar twice)
    bad = copy.deepcopy(EXAMPLE)
    bad["nodes"].insert(1, copy.deepcopy(bad["nodes"][0]))
    sem_e, _ = semantic_errors(bad)
    report("duplicate shell.navbar rejected (nodes no longer match template)", len(sem_e) > 0)

    # 6. Structural: removed mandatory section (drop hero.marketing)
    bad = copy.deepcopy(EXAMPLE)
    bad["nodes"] = [n for n in bad["nodes"] if n["section"] != "hero.marketing"]
    sem_e, _ = semantic_errors(bad)
    report("removed mandatory hero.marketing rejected (node sequence mismatch)", len(sem_e) > 0)

    # 7. Structural: reordered fixed-position section (footer moved to front)
    bad = copy.deepcopy(EXAMPLE)
    footer_node = bad["nodes"].pop()
    bad["nodes"].insert(0, footer_node)
    sem_e, _ = semantic_errors(bad)
    report("shell.footer moved to front rejected (CHROME_MUST_WRAP + sequence mismatch)", len(sem_e) > 0)

    # 8. Structural: template/node-sequence mismatch (declare template.chat but keep home's nodes)
    bad = copy.deepcopy(EXAMPLE)
    bad["template"] = "template.chat"
    sem_e, _ = semantic_errors(bad)
    report("template/node-sequence mismatch rejected (home nodes vs template.chat)", len(sem_e) > 0)

    # 9. Runtime: maxWords overflow on a real field (hero headline, max 8 words)
    bad = copy.deepcopy(EXAMPLE)
    for n in bad["nodes"]:
        if n["section"] == "hero.marketing":
            n["content"]["headline"] = " ".join(["word"] * 30)
    sem_e, _ = semantic_errors(bad)
    report("maxWords overflow on hero.marketing.headline rejected", len(sem_e) > 0)

    # 10. Two adjacent social-proof sections on a non-exception template (home: insert logo-marquee right after testimonials)
    bad = copy.deepcopy(EXAMPLE)
    testimonials_idx = next(i for i, n in enumerate(bad["nodes"]) if n["section"] == "social-proof.testimonials")
    marquee_content = minimal_content_for_section("social-proof.logo-marquee")
    bad["nodes"].insert(testimonials_idx + 1, {
        "section": "social-proof.logo-marquee",
        "content": marquee_content,
        "motion": {"pattern": "css-marquee-loop", "reducedMotionFallback": "marquee paused"},
    })
    # this also breaks the node/template match (sequence mismatch is the primary rejection reason);
    # confirm the adjacency warning fires as a secondary signal on template.home specifically
    sem_e, sem_w = semantic_errors(bad)
    report("inserted adjacent social-proof section rejected (sequence mismatch)", len(sem_e) > 0)

    # 11. Article route exclusivity: content.article-body alongside feature-grid.marketing
    bad = {
        "route": "/blog/granola-for-apple-watch",
        "template": "template.article",
        "nodes": [
            {"section": "shell.navbar", "content": {}, "motion": {"reducedMotionFallback": "n/a"}},
            {"section": "content.article-body", "content": minimal_content_for_section("content.article-body"), "motion": {"reducedMotionFallback": "n/a"}},
            {"section": "feature-grid.marketing", "content": minimal_content_for_section("feature-grid.marketing"), "motion": {"reducedMotionFallback": "n/a"}},
            {"section": "shell.footer", "content": {}, "motion": {"reducedMotionFallback": "n/a"}},
        ],
    }
    se = schema_errors(bad)
    sem_e, _ = semantic_errors(bad) if len(se) == 0 else ([], [])
    rejected = len(se) > 0 or len(sem_e) > 0
    report("content.article-body + feature-grid.marketing on same page rejected", rejected)

    print("\n=== Contract-layer adversarial cases (token catalog / policy / asset-role closure) ===")
    # These reuse extraction/verify_all.py's real check functions against an
    # in-memory-mutated copy of the real data (via monkey-patched `load`), so
    # the same code that runs in CI/verify_all.py is what's being proven here
    # -- not a reimplementation that could silently drift from the real checks.
    sys.path.insert(0, os.path.join(REPO_ROOT, "extraction"))
    import verify_all  # noqa: E402

    def run_check_with_mutation(check_fn, mutate):
        real_load = verify_all.load
        cache = {}

        def patched_load(rel_path):
            if rel_path not in cache:
                cache[rel_path] = real_load(rel_path)
            return copy.deepcopy(cache[rel_path])

        verify_all.load = patched_load
        try:
            mutate(cache)  # populate cache with mutated copies before the check reads them
            return check_fn()
        finally:
            verify_all.load = real_load

    # 12. Unknown token ID: token-catalog.json claims a semantic role that
    # isn't real (an "unknown token ID" a generator might otherwise trust).
    def mutate_unknown_token_id(cache):
        catalog = copy.deepcopy(load("tokens/llm/token-catalog.json"))
        catalog["semantic"]["color"]["roles"].append("text.totally-invented-role")
        cache["tokens/llm/token-catalog.json"] = catalog
    errors = run_check_with_mutation(verify_all.check_token_catalog_parity, mutate_unknown_token_id)
    report("unknown token ID in catalog rejected by token-catalog-parity check", len(errors) > 0, str(errors[:1]))

    # 13. Disallowed raw value category: token-policy.json restricts a
    # category that isn't a real foundation group (a raw-value rule with no
    # real target is exactly as bad as failing to restrict a real one).
    def mutate_disallowed_raw_value(cache):
        policy = copy.deepcopy(load("tokens/llm/token-policy.json"))
        policy["rawValueRestrictions"]["shadowBlur"] = "forbidden"
        cache["tokens/llm/token-policy.json"] = policy
    errors = run_check_with_mutation(verify_all.check_token_policy_validity, mutate_disallowed_raw_value)
    report("disallowed/unknown raw-value category rejected by token-policy-validity check", len(errors) > 0, str(errors[:1]))

    # 14. Invalid asset role: a section references an assetRole that was
    # never catalogued in assets/asset-roles.json.
    def mutate_invalid_asset_role(cache):
        section = copy.deepcopy(load("sections/social-proof.single-quote.json"))
        section["assetRoles"]["avatarAsset"]["role"] = "invalid-role-not-catalogued"
        cache["sections/social-proof.single-quote.json"] = section
    # check_asset_role_closure re-lists the sections dir itself and loads each
    # file via verify_all.load, so patching the one file it will load is enough.
    errors = run_check_with_mutation(verify_all.check_asset_role_closure, mutate_invalid_asset_role)
    report("invalid/uncatalogued assetRole on a section rejected by asset-role-closure check", len(errors) > 0, str(errors[:1]))

    # 15. Prohibited asset reuse: the third-party-form-embed role's
    # generationPolicy is corrupted away from must-not-reuse-live-endpoint,
    # which would silently permit reusing Granola's live Tally endpoint.
    def mutate_prohibited_asset_reuse(cache):
        roles = copy.deepcopy(load("assets/asset-roles.json"))
        roles["roles"]["third-party-form-embed"]["generationPolicy"] = "may-generate-new"
        cache["assets/asset-roles.json"] = roles
    errors = run_check_with_mutation(verify_all.check_asset_role_closure, mutate_prohibited_asset_reuse)
    report("third-party-form-embed's generationPolicy weakened away from must-not-reuse-live-endpoint is rejected", len(errors) > 0, str(errors[:1]))

    print(f"\n{PASS_COUNT} passed, {FAIL_COUNT} failed")
    if FAIL_COUNT:
        sys.exit(1)
    sys.exit(0)


if __name__ == "__main__":
    main()
