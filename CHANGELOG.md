<!--
SPDX-FileCopyrightText: 2026 SecPal
SPDX-License-Identifier: AGPL-3.0-or-later
-->

# Changelog

## Unreleased

- align all CodeQL steps on the same pinned `github/codeql-action` `v4.37.2` revision so the analyzer can load its matching configuration
- replace the mirror-managed Prettier pre-commit hook with the repository-local Prettier dependency, explicitly install development dependencies for hook, preflight, and release tooling, and approve required esbuild and macOS fsevents install scripts so clean-clone setup works without npm 12 warnings
- replace the stub `LICENSES/LicenseRef-TailwindPlus.txt` summary with the approved published Tailwind Plus license text so the centralized license-compatibility CI check passes again
- align the CodeQL workflow on a single pinned `github/codeql-action` `v4.37.0` revision so Dependabot no longer leaves `init`, `autobuild`, and `analyze` on mixed action versions that can break CI
- exclude the generated `package-lock.json` from PR size accounting so Astro dependency updates no longer fail CI on lockfile churn alone and local preflight matches the shared workflow logic
- replace the repo-local `markdownlint-cli2` pre-commit and preflight path with pinned `markdownlint-cli@0.49.0` usage and remove the stale `cli2` file references from export/licensing metadata
- align the provider-neutral governance baseline with the actual repo validation surface by advertising the workflow overlay in `AGENTS.md`/the Copilot mirror and by documenting `npm test` as part of validate-first when changes are covered by the existing Node test suite
- correct the workflow-governance rule so reusable-workflow caller jobs are exempt from impossible caller-level `timeout-minutes` settings and keep timeout enforcement inside the called reusable workflows
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
