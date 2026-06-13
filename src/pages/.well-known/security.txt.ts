// SPDX-FileCopyrightText: 2026 SecPal
// SPDX-License-Identifier: AGPL-3.0-or-later
import type { APIRoute } from "astro";
import { buildSecurityTxt } from "../../lib/security-txt.ts";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL("https://guardguide.de");

  return new Response(
    buildSecurityTxt(siteUrl, "# GuardGuide vulnerability disclosure contact"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
};
