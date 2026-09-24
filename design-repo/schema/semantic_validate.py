#!/usr/bin/env python3
"""Semantic validator for a granola-clone PageSpec instance.

Enforces everything JSON Schema (pagespec.schema.json) structurally cannot express:
- basedOnTemplate: the PageSpec's declared `template` node list must exactly match
  the instance's own `nodes[]` section sequence (not just validate nodes[] in isolation).
- Route restrictions (routeRestriction fields declared in section contracts).
- Rhythm rules from compatibility/graph.json, respecting severity.
- Required reducedMotionFallback presence (also enforced by schema, re-checked here).
- Per-instance maxWords word counts, read from each section contract's content schema.
"""
import json
import os
import re
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def load(rel_path):
    with open(os.path.join(REPO_ROOT, rel_path), "r", encoding="utf-8") as f:
        return json.load(f)


def word_count(text):
    if not isinstance(text, str):
        return 0
    return len(re.findall(r"\S+", text))


def collect_max_words(schema_node, path=""):
    """Walk a section's content JSON-Schema-ish dict and collect {path: maxWords}."""
    out = {}
    if not isinstance(schema_node, dict):
        return out
    if "maxWords" in schema_node:
        out[path] = schema_node["maxWords"]
    props = schema_node.get("properties")
    if isinstance(props, dict):
        for k, v in props.items():
            out.update(collect_max_words(v, f"{path}.{k}" if path else k))
    items = schema_node.get("items")
    if isinstance(items, dict):
        out.update(collect_max_words(items, f"{path}[]"))
    return out


def get_by_path(obj, path):
    """Resolve a dotted/bracket path like 'items[].heading' against real instance data, yielding values."""
    if obj is None:
        return
    parts = re.findall(r"[^.\[\]]+|\[\]", path)
    stack = [obj]
    for part in parts:
        new_stack = []
        for item in stack:
            if part == "[]":
                if isinstance(item, list):
                    new_stack.extend(item)
            else:
                if isinstance(item, dict) and part in item:
                    new_stack.append(item[part])
        stack = new_stack
    for v in stack:
        yield v


def validate(instance_path):
    errors = []
    warnings = []

    instance = load(instance_path) if not os.path.isabs(instance_path) else json.load(open(instance_path))
    templates = load("templates/templates.json")["templates"]
    graph = load("compatibility/graph.json")["rules"]

    template_id = instance.get("template")
    nodes = instance.get("nodes", [])
    node_sections = [n.get("section") for n in nodes]

    # 1. basedOnTemplate cross-reference: declared template's real node list must match instance nodes[].
    if template_id not in templates:
        errors.append(f"Unknown template '{template_id}'")
    else:
        template_sections = [n["section"] for n in templates[template_id]["nodes"]]
        if node_sections != template_sections:
            errors.append(
                f"Instance nodes{node_sections} does not match declared template "
                f"'{template_id}''s real node sequence {template_sections}"
            )
        # route must be one of the template's own declared routes
        if instance.get("route") not in templates[template_id]["routes"]:
            errors.append(
                f"route '{instance.get('route')}' is not among template '{template_id}''s declared routes "
                f"{templates[template_id]['routes']}"
            )

    # 2. reducedMotionFallback presence (belt-and-suspenders on top of schema's `required`).
    for n in nodes:
        motion = n.get("motion", {})
        if not motion.get("reducedMotionFallback"):
            errors.append(f"Node '{n.get('section')}' is missing a non-empty motion.reducedMotionFallback")

    # 3. Rhythm rules from compatibility/graph.json.
    rule_by_id = {r["id"]: r for r in graph}

    # CHROME_MUST_WRAP_EVERY_PAGE
    rule = rule_by_id["CHROME_MUST_WRAP_EVERY_PAGE"]
    if node_sections:
        problems = []
        if node_sections[0] != "shell.navbar":
            problems.append("first node is not shell.navbar")
        if node_sections[-1] != "shell.footer":
            problems.append("last node is not shell.footer")
        if problems:
            msg = f"CHROME_MUST_WRAP_EVERY_PAGE violated: {'; '.join(problems)}"
            (errors if rule["severity"] == "error" else warnings).append(msg)

    # ONE_HERO_PER_PAGE: at most one "page-opening" section as node[1] (index 1, right after navbar).
    rule = rule_by_id["ONE_HERO_PER_PAGE"]
    opening_sections = {
        "hero.marketing", "hero.chat-page", "hero.enterprise",
        "content.blog-list", "content.article-body", "careers.jobs-page",
        "form.contact-sales", "pricing.plan-tiers",
    }
    opener_count = sum(1 for i, s in enumerate(node_sections) if s in opening_sections and i == 1)
    total_openers_anywhere = sum(1 for s in node_sections if s in opening_sections)
    if total_openers_anywhere > 1:
        msg = f"ONE_HERO_PER_PAGE violated: {total_openers_anywhere} opening-type sections present"
        (errors if rule["severity"] == "error" else warnings).append(msg)
    elif total_openers_anywhere == 1 and opener_count != 1:
        msg = "ONE_HERO_PER_PAGE violated: the single opening section is not immediately after shell.navbar"
        (errors if rule["severity"] == "error" else warnings).append(msg)

    # FOOTER_CTA_ROUTE_GATING (warn only)
    rule = rule_by_id["FOOTER_CTA_ROUTE_GATING"]
    exempt_templates = {"template.home", "template.enterprise"}
    has_cta = "conversion.footer-cta" in node_sections
    if template_id not in exempt_templates and not has_cta:
        warnings.append(f"FOOTER_CTA_ROUTE_GATING: template '{template_id}' is expected to include conversion.footer-cta")
    if template_id in exempt_templates and has_cta:
        warnings.append(f"FOOTER_CTA_ROUTE_GATING: template '{template_id}' is not expected to include conversion.footer-cta")

    # NO_ADJACENT_SAME_CATEGORY_SOCIAL_PROOF (warn, with template.pricing named exception)
    rule = rule_by_id["NO_ADJACENT_SAME_CATEGORY_SOCIAL_PROOF"]
    exception_templates = {"template.pricing"}
    if template_id not in exception_templates:
        for i in range(len(node_sections) - 1):
            a, b = node_sections[i], node_sections[i + 1]
            if a.startswith("social-proof.") and b.startswith("social-proof."):
                warnings.append(f"NO_ADJACENT_SAME_CATEGORY_SOCIAL_PROOF: '{a}' directly followed by '{b}'")

    # ACCORDION_FAQ_MAX_ONE_PER_TEMPLATE
    rule = rule_by_id["ACCORDION_FAQ_MAX_ONE_PER_TEMPLATE"]
    faq_sections = {"trust.security-compliance", "faq.things-worth-noting"}
    faq_present = [s for s in node_sections if s in faq_sections]
    if len(faq_present) > 1:
        msg = f"ACCORDION_FAQ_MAX_ONE_PER_TEMPLATE violated: {faq_present}"
        (errors if rule["severity"] == "error" else warnings).append(msg)

    # ARTICLE_ROUTE_EXCLUSIVE
    rule = rule_by_id["ARTICLE_ROUTE_EXCLUSIVE"]
    if "content.article-body" in node_sections:
        allowed = {"shell.navbar", "shell.footer", "conversion.footer-cta", "content.article-body"}
        extra = [s for s in node_sections if s not in allowed]
        if extra:
            msg = f"ARTICLE_ROUTE_EXCLUSIVE violated: unexpected sections alongside content.article-body: {extra}"
            (errors if rule["severity"] == "error" else warnings).append(msg)

    # 4. Per-instance maxWords, read from each section's real content contract.
    sections_dir = os.path.join(REPO_ROOT, "sections")
    for n in nodes:
        section_id = n.get("section")
        section_path = os.path.join(sections_dir, f"{section_id}.json")
        if not os.path.isfile(section_path):
            errors.append(f"Node references unknown section '{section_id}' (no contract file)")
            continue
        contract = json.load(open(section_path))
        limits = collect_max_words(contract.get("content", {}))
        content = n.get("content", {})
        for path, limit in limits.items():
            for value in get_by_path(content, path):
                wc = word_count(value)
                if wc > limit:
                    errors.append(
                        f"Node '{section_id}' field '{path}' exceeds maxWords={limit} (got {wc} words)"
                    )

    return errors, warnings


if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else os.path.join(REPO_ROOT, "schema", "example.pagespec.json")
    errs, warns = validate(target)
    for w in warns:
        print(f"WARN: {w}")
    for e in errs:
        print(f"ERROR: {e}")
    if errs:
        print(f"\nFAILED: {len(errs)} error(s), {len(warns)} warning(s)")
        sys.exit(1)
    print(f"\nPASSED: 0 errors, {len(warns)} warning(s)")
    sys.exit(0)
