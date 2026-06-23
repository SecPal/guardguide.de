<!--
SPDX-FileCopyrightText: 2026 SecPal
SPDX-License-Identifier: AGPL-3.0-or-later
-->

# GuardGuide Promo Site

[![Quality Gates](https://github.com/SecPal/guardguide.de/actions/workflows/quality.yml/badge.svg)](https://github.com/SecPal/guardguide.de/actions/workflows/quality.yml)
[![PR Size](https://github.com/SecPal/guardguide.de/actions/workflows/pr-size.yml/badge.svg)](https://github.com/SecPal/guardguide.de/actions/workflows/pr-size.yml)

Public website for [guardguide.de](https://guardguide.de).

## Stack

- Astro 7
- Tailwind CSS v4
- TypeScript
- Tailwind Plus components under the existing SecPal licensing model

## Development

```bash
npm ci
npm run check
npm run lint
npm run test
npm run build
```

Local development server:

```bash
npm run dev
```

Production build with canonical site URL:

```bash
GUARDGUIDE_SITE_URL=https://guardguide.de npm run build
```

## Deployment

Stable releases are deployed under `/home/secpal/www/guardguide.de` and served
through nginx for `guardguide.de` and `www.guardguide.de`.

Release commands:

```bash
./scripts/release-stable.sh main
./scripts/check-stable.sh
./scripts/rollback-stable.sh
```

## License

Code is licensed under `AGPL-3.0-or-later` unless noted otherwise. Tailwind
Plus derived components remain subject to the upstream Tailwind Plus license in
addition to the repository license metadata.
