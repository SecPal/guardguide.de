#!/bin/bash
# SPDX-FileCopyrightText: 2026 SecPal
# SPDX-License-Identifier: MIT

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}=== Domain Policy Check ===${NC}"
echo "Allowed: guardguide.de, www.guardguide.de"
echo "Exempt:  polyscope.local.json (generated PolyScope preview config; not committed)"
echo "Forbidden: stale secpal.* production domains and any alternative public hostnames"
echo ""

matches=$(grep -r -n -E "(guardguide|secpal)\.[A-Za-z0-9.-]+" \
    --include="*.md" \
    --include="*.yaml" \
    --include="*.yml" \
    --include="*.json" \
    --include="*.sh" \
    --include="*.ts" \
    --include="*.tsx" \
    --include="*.js" \
    --include="*.mjs" \
    --include="*.astro" \
    --include="*.html" \
    --include="*.css" \
    --exclude="polyscope.local.json" \
    --exclude="check-domains.sh" \
    --exclude-dir=".git" \
    --exclude-dir="node_modules" \
    --exclude-dir="dist" \
    --exclude-dir=".astro" \
    . 2>/dev/null || true)

violations=$(printf '%s\n' "$matches" | \
    grep -Ev '(^|[^A-Za-z0-9.-])guardguide\.de($|[^A-Za-z0-9._-]|\.[^A-Za-z0-9_-]|\.$)|(^|[^A-Za-z0-9.-])guardguide\.de\.git($|[^A-Za-z0-9._-]|\.$)|(^|[^A-Za-z0-9.-])www\.guardguide\.de($|[^A-Za-z0-9._-]|\.[^A-Za-z0-9_-]|\.$)' || true)

if [[ -z "$violations" ]]; then
    echo -e "${GREEN}✅ Domain Policy Check PASSED${NC}"
    echo "All domain usage matches the approved GuardGuide split"
    exit 0
fi

echo -e "${RED}❌ Domain Policy Check FAILED${NC}"
echo ""
echo "Found forbidden domains:"
echo "$violations"
echo ""
echo -e "${YELLOW}Policy:${NC}"
echo "  - guardguide.de: public production host and real email addresses"
echo "  - www.guardguide.de: redirect-only alias"
echo "  - polyscope.local.json: generated PolyScope preview config; not committed and skipped here"
echo "  - FORBIDDEN: stale secpal.* production domains and any alternative public hostnames"
echo ""
echo "Fix these violations before committing."
exit 1
