<!--
SPDX-FileCopyrightText: 2026 SecPal
SPDX-License-Identifier: AGPL-3.0-or-later
-->

# Contributing to guardguide.de

This repository contains the public static site for
[guardguide.de](https://guardguide.de). It is built with Astro, Tailwind CSS,
and TypeScript.

## Domain policy

- `guardguide.de` is the public production host
- `www.guardguide.de` is a redirect-only alias
- public contact addresses for this repository use `guardguide.de`

## Local setup

```bash
git clone https://github.com/SecPal/guardguide.de.git
cd guardguide.de
npm ci
```

## Validation

Run the focused checks before opening a PR:

```bash
npm run check
npm run lint
npm run test
npm run build
./scripts/check-domains.sh
```
