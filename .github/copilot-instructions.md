<!--
SPDX-FileCopyrightText: 2026 SecPal
SPDX-License-Identifier: AGPL-3.0-or-later
-->

# SecPal/guardguide.de Copilot Compatibility Instructions

This file is a non-authoritative compatibility surface. Root `AGENTS.md` is the
authoritative source for repository-specific constraints. Generic work-graph and
engineering-governance semantics come only from the canonical
[SecPal contract](https://github.com/SecPal/.github/blob/main/docs/work-graph-contract.md).

When this is the only loaded surface, preserve these GuardGuide invariants:

- `guardguide.de` is the production apex; `www.guardguide.de` only redirects to
  it; real site email addresses use `guardguide.de`. Do not introduce unrelated,
  staging, or package domains without explicit scope.
- This is a static-first marketing site using Node 22, Astro 7, Tailwind CSS v4,
  and strict TypeScript.
- Preserve semantic HTML, accessibility, responsive behavior, static output,
  and critical server-rendered routes and content. Keep client-side JavaScript
  minimal.
- Prefer Astro built-ins and established project patterns before dependencies or
  runtime code.
- Do not force-push or bypass safeguards. Keep required user commits signed.
- Keep applicable SPDX metadata current and satisfy REUSE obligations.

Also apply the focused path-specific files in `.github/instructions/` when the
tool supports them.
