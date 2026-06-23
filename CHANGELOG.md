<!--
SPDX-FileCopyrightText: 2026 SecPal
SPDX-License-Identifier: AGPL-3.0-or-later
-->

# Changelog

## Unreleased

- bootstrap the public `guardguide.de` Astro site from the existing SecPal website stack
- switch repository metadata, deployment scripts, and public legal/security pages to `guardguide.de`
- remove the copied Android distribution surface so this repository stays scoped to the GuardGuide promo site
- expand landing page with Operations, Principles, and RoadmapPreview sections (EN + DE)
- add hero explanation paragraph, bullet highlights, and pre-launch note to both locale home pages
- add features subline to the Features section
- fix `security.txt` fallback host from `secpal.app` to `guardguide.de` with GuardGuide-specific disclosure wording
- replace locale-unaware root redirect check with Accept-Language-aware assertions for `/en/` and `/de/`
- align repo-local governance files (Copilot instructions overlay, PR template, workflow comments) with `guardguide.de` branding
- exempt the generated `polyscope.local.json` from the domain check while keeping all public files restricted to `guardguide.de`/`www.guardguide.de`
- harden `check-domains.sh` by skipping exempt files via `grep --exclude` instead of substring filters so a forbidden domain on the same line as an exempt filename can no longer slip through
- preserve the no-`Accept-Language` root redirect assertion in `check-stable.sh` alongside the locale-aware checks
- qualify the public AGPLv3 statement on both locale home pages so Tailwind Plus components are not implicitly relicensed
- upgrade to Astro 7 and pin vulnerable transitive `brace-expansion` and `js-yaml` versions exactly so `npm audit` reports zero vulnerabilities without unsupported semver overrides
