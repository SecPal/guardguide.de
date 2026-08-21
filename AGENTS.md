<!--
SPDX-FileCopyrightText: 2026 SecPal
SPDX-License-Identifier: AGPL-3.0-or-later
-->

# SecPal/guardguide.de Agent Instructions

This file is the authoritative, provider-neutral baseline for
`SecPal/guardguide.de`-specific technical and operational constraints.

## Governance Ownership

The canonical
[SecPal work-graph and engineering-governance contract](https://github.com/SecPal/.github/blob/main/docs/work-graph-contract.md)
is the sole owner of generic hierarchy, dependency, sibling-order, derived-state,
delivery-leaf, primary-PR, replanning, finding, review, evidence, and stop
semantics. Apply that contract directly; do not redefine or mirror its state in
repository instructions, issue bodies, plans, or checklists.

The focused overlays below add only path-specific or stack-specific constraints:

- `.github/instructions/org-shared.instructions.md`
- `.github/instructions/github-workflows.instructions.md`
- `.github/instructions/astro-static.instructions.md`

`.github/copilot-instructions.md` is a non-authoritative compatibility surface
for tools that load only that path.

## Repository Safety

- Before changing files, inspect `git status --short --branch`. For new work,
  begin from a clean, current local `main` and create a dedicated topic branch.
  When continuing a dirty worktree, identify and preserve existing user changes.
- Do not force-push or bypass validation or repository safeguards. User commits
  must remain signed as currently required.
- Keep GitHub-facing communication in English and refer to files and lines
  instead of pasting large code blocks.
- Do not add self-referential generated-by wording, tool promotion, or AI
  attribution to project artifacts unless the task specifically concerns that
  tooling behavior.
- Keep applicable SPDX headers current and satisfy REUSE obligations for changed
  files.

## Domain Policy

- `guardguide.de` is the public production apex host.
- `www.guardguide.de` only redirects to the apex host.
- Real email addresses for this site use the `guardguide.de` domain.
- Do not introduce unrelated public domains, staging domains, or package/Android
  identifiers unless the task explicitly requires them.

## Site Architecture

- This repository contains the public GuardGuide static marketing site.
- The stack is Node 22, Astro 7, Tailwind CSS v4, and strict TypeScript.
- Prefer static rendering. Keep client-side JavaScript minimal, and never move
  critical routes or content behind client-only rendering.
- Preserve valid semantic HTML, accessibility, responsive behavior, canonical
  domain behavior, and static-build guarantees.
- Keep content and presentation close to where they are used. Prefer Astro
  built-ins and existing project patterns before adding dependencies or runtime
  code.

## Validation And Review

- Use proportional evidence as defined by the canonical contract. For affected
  Astro/static-site code, select the relevant existing formatting, lint,
  typecheck, test, and build commands; governance-only changes do not require an
  artificial failing product test.
- Review GuardGuide changes for HTML validity, accessibility, static output,
  responsive behavior, and domain correctness before treating stylistic
  simplification as an improvement.
- Treat automated findings as leads requiring evidence. Proven material
  GuardGuide-specific risks must not be silently ignored; classify in-scope and
  follow-up work under the canonical contract.
- Because the project is pre-`1.0.0`, remove insecure or obsolete compatibility
  paths when that cleanup is genuinely in scope instead of preserving them by
  default. Confirm that the change does not weaken static rendering,
  accessibility, or content semantics.

## Scope Boundaries

- Do not add dependencies or documentation files unless the task requires them.
- Keep changes repository-local unless the governing delivery contract
  explicitly includes another repository.
