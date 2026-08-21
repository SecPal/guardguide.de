---
# SPDX-FileCopyrightText: 2026 SecPal
# SPDX-License-Identifier: AGPL-3.0-or-later
name: guardguide.de Runtime Overlay
description: Applies GuardGuide-specific constraints across this repository.
applyTo: "**"
---

# guardguide.de Runtime Overlay

Root `AGENTS.md` is authoritative for repository-specific constraints.
`.github/copilot-instructions.md` is non-authoritative. The canonical
[SecPal work-graph contract](https://github.com/SecPal/.github/blob/main/docs/work-graph-contract.md)
solely owns generic governance semantics.

- Keep changes consistent with the Node 22, Astro 7, Tailwind CSS v4, strict
  TypeScript, static-first architecture.
- Preserve semantic HTML, accessibility, responsive behavior, minimal client
  JavaScript, and static-build guarantees.
- Enforce the `guardguide.de` apex, `www.guardguide.de` redirect, and
  `guardguide.de` email policy; do not add unrelated domains without explicit
  scope.
- Prefer Astro built-ins and existing repository patterns before dependencies or
  runtime code.
- Do not force-push or bypass safeguards. Preserve required commit signing and
  applicable SPDX/REUSE compliance.
