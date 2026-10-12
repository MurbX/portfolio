// Resume content. The site only serves the finished PDF (public/resume.pdf, the
// hero's "Resume" button). Its layout lives in src/app/_resume, a private folder
// with no URL. To update the PDF: edit here, rename _resume to resume, run
// `npm run resume:pdf` with the dev server on, then rename it back.

export type ResumeProject = {
  name: string;
  kind: string;
  meta?: string; // client / agency / year
  stack: string[];
  body: string;
};

export const resume = {
  // High-resolution headshot for print (public/headshot.jpg, 900px square).
  photo: "/headshot.jpg",
  title: "Full-Stack Developer & Solutions Architect",
  subtitle: "No-code to production code · Web, mobile and integrations",
  phone: "+254 721 881 858",
  location: "Nairobi, Kenya (EAT, UTC+3)",

  summary:
    "Full-stack developer and solutions architect with 6+ years of experience taking products from first prototype to production across Bubble.io, Flutter, React and TypeScript. I design and build platforms for healthcare, fintech, proptech, community and marketing clients in Israel and Kenya, with a track record of reducing operational costs by 60% and improving system efficiency by 40%.",

  highlights: [
    { value: "6+", label: "years building" },
    { value: "15+", label: "products delivered" },
    { value: "5", label: "industries" },
  ],

  // Main role: selected projects, split across the two pages.
  role: {
    title: "Full-Stack Developer & Solutions Architect",
    org: "Freelance",
    dates: "Dec 2020 – Present",
    intro: "Independent and agency work (including Deploy Technologies, Israel) across the full product lifecycle.",
  },

  projectsPage1: [
    {
      name: "Clutch AI",
      kind: "AI ad creation platform",
      meta: "2026",
      stack: ["React", "TypeScript", "Supabase", "Vertex AI", "Stripe"],
      body: "Built an AI ad studio end to end: brand kits from a logo or website, then campaign creatives, copy, product images and video, each scored with improvement tips. Gemini and Veo on Vertex AI with OpenAI failover, Stripe subscriptions with a free trial, and an admin area for revenue, prompts and alerts.",
    },
    {
      name: "Hunters",
      kind: "Recruitment marketplace",
      meta: "Deploy Technologies · 2026",
      stack: ["Figma", "UX/UI", "Product spec"],
      body: "Designed the web platform and marketing site for a marketplace where companies publish roles as tenders and head-hunters compete to submit candidates. Covered NDA flows, AI-assisted profiles built from uploaded CVs, subscriptions, payments and an internal inbox.",
    },
    {
      name: "Eshuv",
      kind: "Settlement community platform",
      meta: "Deploy Technologies · 2025–2026",
      stack: ["Flutter", "Supabase", "Firebase", "Vercel"],
      body: "Cross-platform system for residential communities in Israel: admin, manager and resident portals with real-time sync, authentication, push notifications and multi-settlement management.",
    },
    {
      name: "Samsung Community",
      kind: "Community mobile app",
      stack: ["Flutter", "Dart", "Supabase", "Firebase", "FCM"],
      body: "Built a community app with a social feed, academy content and video on demand, events, points-based gamification, an in-app store, real-time messaging and push notifications, plus an admin panel for moderation.",
    },
  ] satisfies ResumeProject[],

  projectsPage2: [
    {
      name: "Craftad.ai",
      kind: "AI content platform",
      meta: "Deploy Technologies · 2025",
      stack: ["Bubble.io", "AI integrations"],
      body: "AI platform generating targeted ad creatives, copy and campaign assets, with template libraries, trend detection, performance statistics and project management.",
    },
    {
      name: "CureBox",
      kind: "Healthcare & therapy platform",
      stack: ["React", "TypeScript", "Supabase", "Vite", "Tailwind", "Zustand"],
      body: "Architected a full-stack platform connecting patients with licensed therapists. Built role-based dashboards for patients, therapists and admins with appointment scheduling, Google Calendar sync, real-time messaging, CardCom payments, therapist verification and English/Hebrew support.",
    },
    {
      name: "Power Couple",
      kind: "Real-estate investor app",
      meta: "Deploy Technologies · 2024",
      stack: ["Bubble.io", "Mobile"],
      body: "Investor app for a leading Israeli real-estate investment company, giving 1,000+ investors real-time portfolio tracking, per-investment performance and smart alerts.",
    },
    {
      name: "AHNA Management System",
      kind: "Operations platform",
      stack: ["Bubble.io", "Custom plugins"],
      body: "Six-module system (projects, personnel, customers, suppliers, dashboards, analytics) for an international company. Agent-pool management with skills tracking improved efficiency by 40%.",
    },
    {
      name: "Printika",
      kind: "Custom print e-commerce",
      meta: "2025",
      stack: ["Figma", "UX/UI"],
      body: "Designed the full experience for a print-on-demand platform: product catalogue, design editor with live 2D/3D preview, uploads from Dropbox and Google Drive, and a multi-step checkout.",
    },
    {
      name: "Kaching",
      kind: "Financial advisory platform",
      stack: ["Bubble.io", "Fintech"],
      body: "Platform for advisors to create personalised client portals for investment tracking, with financial dashboards and a management interface for consulting agencies.",
    },
    {
      name: "FFili",
      kind: "Influencer marketing platform",
      stack: ["Bubble.io", "Matching algorithm"],
      body: "Connected brands, influencers and audiences, with matching algorithms for product-influencer pairing and personalised campaign recommendations.",
    },
  ] satisfies ResumeProject[],

  // Older work, one line each.
  moreProjects: [
    { name: "OpenTrade Analytics", detail: "Trading platform with live data and cTrader API · Bubble.io" },
    { name: "WallCheck", detail: "HTML5 Canvas floor planner with a Hebrew RTL interface · JavaScript" },
    { name: "Hi Preemie", detail: "NICU baby care scheduling and care guidelines · Bubble.io" },
  ],

  earlierRole: {
    title: "Web Developer & Digital Marketing Specialist",
    org: "CNC Fitness Hub & Structural Growth Kenya",
    dates: "Jan 2022 – Apr 2022",
    stack: ["WordPress", "M-Pesa", "SEO", "Google Ads"],
    body: "Rebuilt the studio website mobile-first with M-Pesa payments, cutting checkout abandonment by 18%. Grew organic traffic 30% in 8 weeks and improved lead conversion 25% while lowering cost per acquisition 40%.",
  },

  openSource: [
    {
      name: "ScreenRec",
      kind: "Screen recorder & screenshot tool for Windows",
      meta: "2026 · MIT",
      link: "github.com/MurbX/screenrecorder",
      body: "Native C++ app (~1 MB) with GPU-accelerated recording, webcam overlay, live drawing and a screenshot editor.",
    },
  ],

  skills: [
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Vite"] },
    { group: "Mobile", items: ["Flutter", "Dart", "Firebase", "FCM"] },
    { group: "Backend & data", items: ["Supabase", "PostgreSQL", "REST APIs", "Zod", "Zustand"] },
    { group: "No-code", items: ["Bubble.io", "FlutterFlow", "Framer", "WordPress"] },
    { group: "Integrations", items: ["M-Pesa", "Stripe", "CardCom", "cTrader", "Google Calendar", "OpenAI"] },
    { group: "Delivery", items: ["Vercel", "Git", "GA4", "Figma"] },
  ],

  education: [
    { title: "BSc Economics & Statistics", org: "KCA University, Nairobi", meta: "2026 · GPA 3.4/4.0" },
    { title: "High School Diploma", org: "Embakasi Garrison SS", meta: "2017–2021 · Grade B+" },
  ],

  // Names and roles only on the public page; contact details on request.
  references: [
    { name: "Adir Cohen", role: "CEO, Deploy Technologies", place: "Israel" },
    { name: "Yoni Gilboa", role: "CEO & Founder, CureBox", place: "Israel" },
    { name: "Borniface Wanjiku", role: "Manager, CNC Fitness Hub", place: "Kenya" },
  ],
};
