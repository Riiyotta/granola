#!/usr/bin/env bash
# prove_drift.sh -- proves verify_all.py's checks actually catch drift, not
# just that they exist. For each scenario: copy design-repo/ to a scratch
# /tmp dir, inject one specific real-world drift, run verify_all.py there and
# confirm it FAILS, then re-run verify_all.py against the real, unmodified
# repo and confirm it still PASSES. This is the script
# extraction/verify_all.py's own docstring refers to (previously a dangling
# reference to a file that did not exist -- fixed by writing this one).
#
# Usage: bash extraction/prove_drift.sh
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRATCH="$(mktemp -d)"
trap 'rm -rf "$SCRATCH"' EXIT

pass=0
fail=0

run_scenario() {
  local name="$1"
  local inject_py="$2"

  rm -rf "$SCRATCH/design-repo"
  cp -r "$REPO_ROOT" "$SCRATCH/design-repo"

  python3 - "$SCRATCH/design-repo" <<PYEOF
import json, sys
root = sys.argv[1]
$inject_py
PYEOF

  if (cd "$SCRATCH/design-repo" && python3 extraction/verify_all.py > /dev/null 2>&1); then
    echo "FAIL-TO-CATCH  $name  (verify_all.py passed on injected drift -- it should have failed)"
    fail=$((fail+1))
  else
    echo "OK             $name  (verify_all.py correctly failed on injected drift)"
    pass=$((pass+1))
  fi
}

echo "=== injecting drift, one scenario at a time ==="

run_scenario "allowlist phantom entry" '
import os
p = os.path.join(root, "tokens/llm/component-allowlist.json")
d = json.load(open(p))
d["entries"]["section.does-not-exist"] = {"id": "section.does-not-exist", "layer": "section", "contractFile": "sections/does-not-exist.json", "settableFields": []}
json.dump(d, open(p, "w"), indent=2)
'

run_scenario "allowlist orphan contract file" '
import os
p = os.path.join(root, "sections/orphan-injected.json")
json.dump({"id": "section.orphan-injected", "type": "section", "content": {"type": "object", "properties": {}}}, open(p, "w"), indent=2)
'

run_scenario "manifest count drift" '
import os
p = os.path.join(root, "registry.manifest.json")
d = json.load(open(p))
d["counts"]["templates"] = d["counts"]["templates"] + 5
json.dump(d, open(p, "w"), indent=2)
'

run_scenario "token-catalog phantom file reference" '
import os
p = os.path.join(root, "tokens/llm/token-catalog.json")
d = json.load(open(p))
d["foundation"]["bogus"] = {"file": "00-foundation/does-not-exist.json"}
json.dump(d, open(p, "w"), indent=2)
'

run_scenario "token-catalog semantic role drift (real role missing from catalog)" '
import os
p = os.path.join(root, "tokens/llm/token-catalog.json")
d = json.load(open(p))
d["semantic"]["color"]["roles"] = [r for r in d["semantic"]["color"]["roles"] if r != "text.primary"]
json.dump(d, open(p, "w"), indent=2)
'

run_scenario "token-policy references unknown foundation group" '
import os
p = os.path.join(root, "tokens/llm/token-policy.json")
d = json.load(open(p))
d["rawValueRestrictions"]["bogusGroup"] = "forbidden"
json.dump(d, open(p, "w"), indent=2)
'

run_scenario "asset-role phantom (section uses undeclared role)" '
import os
p = os.path.join(root, "sections/hero.enterprise.json")
d = json.load(open(p))
d["assetRoles"]["heroImage"]["role"] = "totally-invented-role"
json.dump(d, open(p, "w"), indent=2)
'

run_scenario "asset-role orphan (catalogued role no section uses)" '
import os
p = os.path.join(root, "assets/asset-roles.json")
d = json.load(open(p))
d["roles"]["injected-unused-role"] = {"generationPolicy": "may-generate-new", "description": "x"}
json.dump(d, open(p, "w"), indent=2)
'

run_scenario "asset-role invalid generationPolicy value" '
import os
p = os.path.join(root, "assets/asset-roles.json")
d = json.load(open(p))
d["roles"]["real-person-photo"]["generationPolicy"] = "not-a-real-policy-value"
json.dump(d, open(p, "w"), indent=2)
'

echo
echo "=== confirming the real, unmodified repo still passes clean ==="
if (cd "$REPO_ROOT" && python3 extraction/verify_all.py > /dev/null 2>&1); then
  echo "OK             real repo passes verify_all.py cleanly"
  pass=$((pass+1))
else
  echo "FAIL           real repo does NOT pass verify_all.py -- investigate before trusting anything above"
  fail=$((fail+1))
fi

echo
echo "$pass passed, $fail failed"
[ "$fail" -eq 0 ]
