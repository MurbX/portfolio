// Services section. `kind` picks the icon and the illustration in services.tsx.
export type ServiceKind = "web" | "mobile" | "migrate" | "api" | "mvp";

export const services: {
  kind: ServiceKind;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    kind: "web",
    title: "Web Applications",
    description:
      "Full-stack web apps with Next.js, TypeScript and Supabase: fast, accessible, and structured so your team can keep shipping after launch. Auth, payments, dashboards and admin panels included.",
    tags: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    kind: "mobile",
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps with Flutter, sharing one codebase and one backend with your web product. Offline-ready, store-ready, and designed for how people actually hold a phone.",
    tags: ["Flutter", "iOS", "Android"],
  },
  {
    kind: "migrate",
    title: "No-Code to Code",
    description:
      "Outgrown Bubble or FlutterFlow? I’ve built on both, so I can move your product to a proper codebase without losing data, users or momentum — one feature at a time, with no downtime.",
    tags: ["Bubble", "FlutterFlow", "Migration"],
  },
  {
    kind: "api",
    title: "APIs & Integrations",
    description:
      "Backends, third-party integrations and automations: payments, messaging, CRMs and AI services wired together with clean, documented APIs and webhooks your team can build on.",
    tags: ["REST", "Webhooks", "Automation"],
  },
  {
    kind: "mvp",
    title: "MVPs for Startups",
    description:
      "From idea to a launched product in weeks, not months. Discovery, architecture, design and build under one roof — I’ve shipped MVPs in healthcare, fintech, proptech and community platforms.",
    tags: ["Discovery", "MVP", "Launch"],
  },
];
