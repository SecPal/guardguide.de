// SPDX-FileCopyrightText: 2026 SecPal
// SPDX-License-Identifier: AGPL-3.0-or-later

import type { Translations } from "./en.ts";

export const de: Translations = {
  nav: {
    progress: "Fortschritt",
    roadmap: "Roadmap",
    android: "Android",
    updates: "Folgen",
    github: "GitHub",
    contact: "Kontakt",
    followProgress: "Fortschritt verfolgen",
    toggleDarkMode: "Dunkelmodus umschalten",
    openMenu: "Hauptmenü öffnen",
    mobileMenu: "Mobile Navigation",
    closeMenu: "Menü schließen",
  },
  hero: {
    badge: "Aus der Praxis · Open Source · Öffentlich entwickelt",
    tagline: "GuardGuide",
    headline: "Software für klarere Abläufe im Sicherheitsdienst.",
    subline:
      "Weniger Zettelwirtschaft, weniger Medienbrüche, mehr operative Klarheit in einem durchgängigen System.",
    explanation:
      "GuardGuide ist für Sicherheitsdienste gebaut, die operative Arbeit in einem klaren Ablauf organisieren statt sie über Papier, Chats und Insellösungen zu verteilen.",
    highlights: [
      "Operative Abläufe gehören in ein durchgängiges System statt in einzelne Teillösungen.",
      "Informationen bleiben nachvollziehbar — nicht verstreut in Notizen, Kurznachrichten und verteilten Dateien.",
      "GuardGuide entsteht öffentlich, mit klarem Fokus und nachvollziehbaren Release-Schritten.",
    ],
    cta: "Zur Roadmap",
    ctaSecondary: "Entwicklung auf GitHub verfolgen",
    note: "Die öffentliche Website zeigt die Produktrichtung, Rechtsinformationen und Kontaktwege. Ein öffentlicher Produktzugang ist derzeit noch nicht geöffnet.",
  },
  features: {
    headline: "Für die operative Realität gebaut.",
    subline:
      "GuardGuide konzentriert sich auf das, was im Sicherheitsdienst täglich funktionieren muss: klare Abläufe, verlässliche Dokumentation und Übersicht für Teams und Führung.",
    items: [
      {
        name: "Operative Abläufe in einem System",
        description:
          "Formulare, Kontrollgänge und Schichtübergaben greifen ineinander — als ein durchgängiger Ablauf.",
      },
      {
        name: "Dokumentiert im Ablauf, nicht im Nachhinein",
        description:
          "Dokumentation entsteht dort, wo die Arbeit passiert — direkt im Ablauf.",
      },
      {
        name: "Klarer Status für Einsatzleitung und Disposition",
        description:
          "Aktuelle Statusbilder und Überblick für Teams, Führung und Disposition.",
      },
    ],
  },
  cta: {
    headline: "Fortschritt statt Marketing-Lärm.",
    subline:
      "Auf GitHub ist der aktuelle Stand sichtbar. Für Fragen, Hinweise oder frühen Austausch erreichen Sie GuardGuide direkt.",
    button: "GitHub ansehen",
    buttonSecondary: "Kontakt aufnehmen",
    note: "",
  },
  roadmap: {
    title: "Roadmap – GuardGuide",
    description:
      "Wohin GuardGuide sich entwickelt — aktueller Entwicklungsfokus, nächste geplante Schritte und längerfristige Richtung.",
    headline: "Wohin GuardGuide sich entwickelt.",
    subline:
      "GuardGuide entsteht öffentlich. Diese Seite zeigt den aktuellen Entwicklungsfokus, die nächsten geplanten Schritte und die längerfristige Richtung — ohne feste Termine und ohne Marketingversprechen.",
    now: {
      label: "Aktuell",
      description: "In aktiver Entwicklung",
      items: [
        {
          name: "Kernablauf für den operativen Betrieb",
          description:
            "Dienstanweisungen, Aufgabenausführung und Ereignisdokumentation in einem verbundenen Ablauf.",
        },
        {
          name: "Operatives Onboarding",
          description:
            "Strukturiertes Onboarding und rollenbasierte Einrichtung für Einsatzleitung, Disposition und operative Kräfte.",
        },
      ],
    },
    next: {
      label: "Als Nächstes",
      description: "Für die nahe Zukunft geplant",
      items: [
        {
          name: "Mobile Abläufe für den Außendienst",
          description:
            "Mobil nutzbare operative Abläufe für gemeinsam genutzte Geräte und den Außendienst.",
        },
      ],
    },
    later: {
      label: "Später",
      description: "Längerfristige Richtung — ohne feste Termine",
      items: [
        {
          name: "Dienstplanung",
          description:
            "Dienstpläne, Schichtzuweisungen und Besetzungsplanung — eingebaut in den operativen Ablauf statt separat verwaltet.",
        },
        {
          name: "Online-Wächterkontrollsystem (OWKS)",
          description:
            "Checkpoint-basierte Kontrollgangerfassung per NFC oder QR — nachvollziehbare Kontrollgänge als natürlicher Teil des Betriebsprotokolls.",
        },
        {
          name: "Vertragsverwaltung & digitale Unterschrift",
          description:
            "Kunden- und Arbeitsverträge an einem Ort — mit rechtskonformem Unterschriftenworkflow direkt im System.",
        },
        {
          name: "Dienstanweisungskonfigurator",
          description:
            "Objektbezogene Dienstanweisungen erstellen und pflegen — strukturiert, versioniert und direkt mit Objekten und Schichten verknüpft.",
        },
      ],
    },
    changelog: {
      label: "Was ausgeliefert wurde",
      description:
        "Ausgelieferte Features und Fixes werden in GitHub-Releases und Changelog-Einträgen dokumentiert, sobald die öffentliche Produktoberfläche wächst.",
      link: "Zum Changelog",
      href: "https://github.com/SecPal/guardguide.de/releases",
    },
  },
  footer: {
    rights: "",
    links: {
      privacy: "Datenschutz",
      imprint: "Impressum",
      security: "Sicherheit",
      github: "GitHub",
    },
  },
};
