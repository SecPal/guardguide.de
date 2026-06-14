// SPDX-FileCopyrightText: 2026 SecPal
// SPDX-License-Identifier: AGPL-3.0-or-later

export const en = {
  nav: {
    progress: "Progress",
    roadmap: "Roadmap",
    android: "Android",
    updates: "Follow",
    github: "GitHub",
    contact: "Contact",
    followProgress: "Follow progress",
    toggleDarkMode: "Toggle dark mode",
    openMenu: "Open main menu",
    mobileMenu: "Mobile navigation",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "From operational practice · Open source · Built in public",
    tagline: "GuardGuide",
    headline:
      "Security operations software for German private security services.",
    subline: "GuardGuide brings day-to-day operations into one clear workflow.",
    explanation:
      "GuardGuide is built for security service providers that need one dependable operational flow instead of spreading work across paper notes, chats, and disconnected tools.",
    highlights: [
      "Operational work belongs in one connected system instead of isolated tools.",
      "Information stays traceable instead of disappearing into notes, messages, and scattered files.",
      "GuardGuide is taking shape in public, with a focused scope and clear release steps.",
    ],
    cta: "View roadmap",
    ctaSecondary: "Follow development on GitHub",
    note: "The public website shows the product direction, legal information, and contact paths. Public product access is not open yet.",
  },
  features: {
    headline: "Built around operational reality.",
    subline:
      "GuardGuide focuses on what needs to work every day in security operations: clear workflows, dependable documentation, and visibility for teams and leadership.",
    items: [
      {
        name: "One system, one operational flow",
        description:
          "Forms, patrol records, and shift handovers work together in one continuous workflow.",
      },
      {
        name: "Documented in the workflow, not after the fact",
        description:
          "Documented where the work happens — not added after the fact.",
      },
      {
        name: "Clear status for operations leads and dispatch",
        description:
          "Current status and visibility for teams, leadership, and dispatch.",
      },
    ],
  },
  operations: {
    eyebrow: "Operational fit",
    headline:
      "Built for private security services that need one dependable operating model.",
    intro:
      "GuardGuide is aimed at teams that run recurring site operations, patrols, handovers, event documentation, and service instructions under real day-to-day pressure.",
    items: [
      {
        name: "Service instructions where the work happens",
        description:
          "Object-specific instructions stay attached to the relevant site, shift, and task instead of living in detached PDFs and message threads.",
      },
      {
        name: "Field-ready workflows for shared devices",
        description:
          "The operational surface is being shaped for supervisors, dispatch, and field personnel who often work on shared or constrained devices.",
      },
      {
        name: "Traceable records for incidents and handovers",
        description:
          "Incident notes, patrol activity, and shift handovers stay attributable and reviewable instead of being reconstructed later.",
      },
    ],
    panel: {
      eyebrow: "Why it exists",
      title: "Less coordination loss. More operational clarity.",
      body: "Many security teams are still forced to bridge planning, field work, and documentation across paper, chat, spreadsheets, and disconnected software. GuardGuide is meant to reduce that fragmentation with one coherent operating surface.",
      points: [
        "Built around routine site operations, not generic CRM abstractions.",
        "Structured documentation before compliance and audit pressure makes it painful.",
        "Open development, visible roadmap, and no fake product maturity claims.",
      ],
    },
  },
  principles: {
    eyebrow: "Principles",
    headline: "Open source and operationally serious by default.",
    intro:
      "GuardGuide follows the same baseline as the other SecPal projects: open source, public progress, and a product surface that stays grounded in operational use instead of marketing theater.",
    items: [
      {
        name: "AGPLv3",
        description:
          "The repository is open source under the AGPLv3. Some integrated Tailwind Plus UI blocks keep their own license terms.",
      },
      {
        name: "Built in public",
        description:
          "Roadmap, releases, and implementation progress are visible in GitHub rather than hidden behind sales language.",
      },
      {
        name: "Focused scope",
        description:
          "GuardGuide is deliberately narrow: security service operations in Germany, with features added from operational need rather than generic feature sprawl.",
      },
    ],
    link: "View repository",
  },
  roadmapPreview: {
    eyebrow: "Public direction",
    headline: "A clear path, without pretending the product is finished.",
    intro:
      "GuardGuide is still early. The roadmap is public so the current focus, next steps, and longer-term direction stay explicit.",
    button: "Open full roadmap",
  },
  cta: {
    headline: "Progress, not marketing noise.",
    subline:
      "GitHub shows the current state. For questions, feedback, or early contact, you can reach GuardGuide directly.",
    button: "View GitHub",
    buttonSecondary: "Get in touch",
    note: "",
  },
  roadmap: {
    title: "Roadmap – GuardGuide",
    description:
      "Where GuardGuide is headed — current development focus, next planned steps, and longer-term direction.",
    headline: "Where GuardGuide is headed.",
    subline:
      "GuardGuide is built in the open. This page shows the current development focus, the next planned steps, and the longer-term direction — with no fixed dates and no marketing promises.",
    now: {
      label: "Now",
      description: "Actively in development",
      items: [
        {
          name: "Core operations workflow",
          description:
            "Service instructions, task execution, and event documentation in one connected flow.",
        },
        {
          name: "Operational onboarding",
          description:
            "Structured onboarding and role-based setup for supervisors, dispatch, and field personnel.",
        },
      ],
    },
    next: {
      label: "Next",
      description: "Planned for the near term",
      items: [
        {
          name: "Field-ready mobile workflows",
          description:
            "Mobile-friendly operational workflows for shared devices and field use.",
        },
      ],
    },
    later: {
      label: "Later",
      description: "Longer-term direction — no dates attached",
      items: [
        {
          name: "Shift planning",
          description:
            "Duty rosters, shift assignments, and coverage planning — integrated into the operational workflow rather than managed separately.",
        },
        {
          name: "Online guard tour system",
          description:
            "Checkpoint-based patrol recording via NFC or QR — traceable guard tours as a natural part of the operational log.",
        },
        {
          name: "Contract management & digital signatures",
          description:
            "Customer and employment contracts in one place, with a legally compliant digital signature workflow.",
        },
        {
          name: "Service instruction configurator",
          description:
            "Create and maintain site-specific service instructions — structured, versioned, and linked to the relevant objects and shifts.",
        },
      ],
    },
    changelog: {
      label: "What has shipped",
      description:
        "Released features and fixes are documented in GitHub releases and changelog entries as the public product surface grows.",
      link: "Read the changelog",
      href: "https://github.com/SecPal/guardguide.de/releases",
    },
  },
  footer: {
    rights: "",
    links: {
      privacy: "Privacy",
      imprint: "Legal Notice",
      security: "Security",
      github: "GitHub",
    },
  },
} as const;

type DeepLoosen<T> =
  T extends ReadonlyArray<infer U>
    ? DeepLoosen<U>[]
    : T extends Record<string, unknown>
      ? { [K in keyof T]: DeepLoosen<T[K]> }
      : string;

export type Translations = DeepLoosen<typeof en>;
