// Selected work: cards on the home page and the case-study pages at /projects/<slug>.
// Display order is the `order` list at the bottom; `featured` entries are double width.

// How an image is presented on its tinted panel:
//   browser – raw screenshot inside a browser window (cropped at the bottom)
//   mockup  – device mockup with a transparent background, shown whole
//   none    – composed image, full-bleed
export type Frame = "browser" | "mockup" | "none";

export type Media = { src: string; alt: string; frame: Frame };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  tags: string[];
  tint: string;
  featured?: boolean;
  // Case study
  summary: string;
  role: string;
  year: string;
  type: string;
  client?: string;
  agency?: string;
  duration?: string;
  team?: string;
  liveUrl?: string;
  about: string[];
  highlights: string[];
  deliverables?: string[];
  gallery: Media[]; // first item is the card image and the case-study hero
};

const deployTeam = "PM, UI/UX designer, 2 front-end, 2 back-end, QA";
const deployDeliverables = [
  "MVP development",
  "UX/UI design",
  "Development specification",
  "AI integrations",
];

const entries: Project[] = [
  {
    slug: "curebox",
    name: "Curebox",
    tagline: "Healthcare & therapy platform with patient and therapist portals.",
    category: "Healthcare",
    tags: ["Next.js", "Supabase", "TypeScript"],
    tint: "from-lime-100 to-emerald-200",
    summary:
      "A healthcare platform that connects patients with therapists and specialists, built end-to-end with Next.js and Supabase.",
    role: "Full-Stack Developer",
    year: "2026",
    type: "Web app",
    liveUrl: "https://www.curebox.co.il/",
    about: [
      "Curebox helps patients find the right therapist or specialist and manage their care in one place. The discovery system includes map integration and match scoring, session booking supports several appointment types (video and in-person), and a patient dashboard tracks sessions, favourites and upcoming appointments.",
      "I built the platform end-to-end: the Next.js front end, the Supabase data model and authentication, role-based portals for patients and therapists, messaging, and a comprehensive settings panel. The interface is multilingual (English and Hebrew) for the Israeli market.",
    ],
    highlights: [
      "Therapist discovery with map integration and match scores",
      "Session booking with video and in-person appointment types",
      "Patient dashboard: sessions, favourites, upcoming appointments",
      "Messaging between patients and therapists",
      "Multilingual interface (English / Hebrew)",
      "Comprehensive settings and support panel",
    ],
    deliverables: ["Full-stack development", "Data model & auth", "Patient and therapist portals"],
    gallery: [
      { src: "/projects/curebox-2.png", alt: "Curebox patient dashboard", frame: "browser" },
      { src: "/projects/curebox-1.png", alt: "Curebox sign in", frame: "browser" },
      { src: "/projects/curebox-3.png", alt: "Curebox session booking", frame: "browser" },
      { src: "/projects/curebox-4.png", alt: "Curebox therapist profile", frame: "browser" },
      { src: "/projects/curebox-5.png", alt: "Curebox settings", frame: "browser" },
    ],
  },
  {
    slug: "palmera-ai",
    name: "Palmera AI",
    tagline: "AI-powered real-estate platform for finding and evaluating properties.",
    category: "Proptech · AI",
    tags: ["Bubble.io", "OpenAI"],
    tint: "from-sky-100 to-indigo-200",
    summary:
      "An AI-powered real-estate platform that gives agents intelligent property recommendations, market analysis and automated listing management.",
    role: "Full-Stack Developer",
    year: "2025",
    type: "Web app",
    liveUrl: "https://ai.palmera.realestate/",
    about: [
      "Palmera AI brings machine learning to real-estate professionals: it recommends properties that fit a client’s criteria, analyses market data and automates listing management, so agents spend less time on admin and more time closing.",
      "I built the product on Bubble.io with OpenAI integrations powering the recommendation and analysis features, and designed the data model, the agent workflows and the public-facing property experience.",
    ],
    highlights: [
      "AI property recommendations tailored to client criteria",
      "Market analysis and insights",
      "Automated listing management",
      "Agent dashboard and workflows",
      "OpenAI integration powering recommendations and analysis",
    ],
    deliverables: ["Product build on Bubble.io", "Data model & workflows", "AI integrations"],
    gallery: [{ src: "/projects/palmera-ai.png", alt: "Palmera AI property search", frame: "browser" }],
  },
  {
    slug: "powercouple",
    name: "Power Couple",
    tagline: "Investor app for tracking real-estate investments, serving 1,000+ investors.",
    category: "Fintech",
    tags: ["Bubble.io", "Mobile"],
    tint: "from-rose-100 to-red-200",
    summary:
      "An investor app for one of Israel’s leading real-estate investment companies, giving more than 1,000 investors a live view of their portfolio.",
    role: "Full-Stack Developer",
    year: "2024",
    type: "Web & mobile app",
    client: "Power Couple",
    agency: "Deploy Technologies",
    duration: "2.5 months (Dec 2023 – Feb 2024)",
    team: deployTeam,
    about: [
      "Power Couple helps private investors get into real-estate deals. The app gives each investor a personal interface with real-time updates on their investments, precise tracking of every individual investment’s performance and a comprehensive portfolio overview.",
      "A community area showcases the company’s past successes, and a smart alert system notifies investors in real time about significant changes or new market opportunities. Built with the Deploy team as an MVP in 2.5 months, then extended.",
    ],
    highlights: [
      "Personal investor interface with real-time updates",
      "Per-investment performance tracking",
      "Portfolio overview",
      "Community area with past successes",
      "Smart alerts for changes and opportunities",
      "Serves 1,000+ investors",
    ],
    deliverables: deployDeliverables,
    gallery: [
      { src: "/projects/powercouple-mockup.png", alt: "Power Couple desktop and mobile app", frame: "mockup" },
    ],
  },
  {
    slug: "katchings",
    name: "Kaching",
    tagline: "Financial advisory platform with client portals and analytics dashboards.",
    category: "Fintech",
    tags: ["Bubble.io", "AI"],
    tint: "from-amber-100 to-orange-200",
    featured: true,
    summary:
      "A platform for financial advisors: personalised client portals, analytics dashboards and an active financial community.",
    role: "Full-Stack Developer",
    year: "2024",
    type: "Web app",
    client: "Kaching",
    agency: "Deploy Technologies",
    duration: "2.5 months (Jul – Sep 2024)",
    team: deployTeam,
    liveUrl: "https://katchings.com",
    about: [
      "Kaching lets financial advisors create personalised portals for their clients, where clients monitor investment performance and manage their finances intuitively. Advanced dashboards present complex financial information visually: asset status, investment performance, cash flows and more, with quick summaries or deep dives depending on the need.",
      "Advisory-firm managers get a dedicated interface to track advisor performance, manage clients and surface business insights. A financial community layer supports knowledge sharing and professional discussion between advisors, experts and clients.",
    ],
    highlights: [
      "Personalised client portals",
      "Real-time dashboards: assets, performance, cash flow",
      "Management interface for advisory firms",
      "Financial community for knowledge sharing",
      "AI integrations",
    ],
    deliverables: deployDeliverables,
    gallery: [
      { src: "/projects/katchings-mockup.png", alt: "Kaching advisor dashboard mockup", frame: "mockup" },
      { src: "/projects/katchings-1.jpg", alt: "Kaching client portal", frame: "none" },
      { src: "/projects/katchings-2.jpg", alt: "Kaching screens", frame: "none" },
    ],
  },
  {
    slug: "craftad",
    name: "Craftad.ai",
    tagline: "AI content platform generating ad creatives and copy for marketing teams.",
    category: "AI · Marketing",
    tags: ["Bubble.io", "AI"],
    tint: "from-violet-100 to-fuchsia-200",
    featured: true,
    summary:
      "An AI content platform that generates targeted ad creatives, copy and campaign assets, with project management built in.",
    role: "Full-Stack Developer",
    year: "2025",
    type: "Web app",
    client: "Craftad",
    agency: "Deploy Technologies",
    duration: "2.5 months (Nov 2024 – Feb 2025)",
    team: deployTeam,
    liveUrl: "https://craftad.ai",
    about: [
      "Craftad brings an AI-first approach to copywriting and branding. Users create new ads, pick background templates and define personalised content strategies, from generating marketing ads to analysing performance and market statistics. The algorithm identifies trends, validates data and gives targeted recommendations to improve results.",
      "The interface keeps everything in one place: choose the content type and assets, filter by categories and tags, view projects as cards or lists, and track progress with ready-to-launch outputs and success-rate insights.",
    ],
    highlights: [
      "AI-generated ad creatives and copy",
      "Template library and content strategies",
      "Performance and market statistics",
      "Trend detection and recommendations",
      "Project management with card and list views",
      "AI integrations",
    ],
    deliverables: ["Application development", "UX/UI design", "Development specification", "AI integrations"],
    gallery: [
      { src: "/projects/craftad-mockup.png", alt: "Craftad.ai desktop mockup", frame: "mockup" },
      { src: "/projects/craftad-1.jpg", alt: "Craftad.ai project view", frame: "none" },
      { src: "/projects/craftad-2.jpg", alt: "Craftad.ai screens", frame: "none" },
    ],
  },
  {
    slug: "ffili",
    name: "FFili",
    tagline: "Influencer marketing platform matching brands with creators.",
    category: "Marketing",
    tags: ["Bubble.io", "Mobile"],
    tint: "from-pink-100 to-rose-200",
    summary:
      "An influencer-marketing platform connecting brands with creators, with campaign management, analytics and smart influencer discovery.",
    role: "Full-Stack Developer",
    year: "2025",
    type: "Web & mobile app",
    client: "FFili",
    agency: "Deploy Technologies",
    duration: "2.5 months (Nov 2024 – Feb 2025)",
    team: deployTeam,
    liveUrl: "https://ffili.com",
    about: [
      "FFili strengthens the relationship between brands, influencers and their audiences. Brands pick products to promote, find influencers by relevant parameters and analyse interaction data and post statistics; the algorithm detects trends, validates data and delivers recommendations that raise campaign success rates.",
      "Influencers get professional profiles with statistics and activity; brands manage collaborations and track every marketing metric in one place, with filtering by product category, saved posts and post-performance analysis.",
    ],
    highlights: [
      "Influencer discovery by audience parameters",
      "Product-to-influencer matching",
      "Campaign and collaboration management",
      "Post performance analytics",
      "Creator profiles with statistics",
      "AI integrations",
    ],
    deliverables: ["Application development", "UX/UI design", "Development specification", "AI integrations"],
    gallery: [
      { src: "/projects/ffili-mockup.png", alt: "FFili mobile app mockup", frame: "mockup" },
      { src: "/projects/ffili-1.jpg", alt: "FFili creator profiles", frame: "none" },
      { src: "/projects/ffili-2.jpg", alt: "FFili screens", frame: "none" },
    ],
  },
  {
    slug: "ahna-system",
    name: "AHNA System",
    tagline: "Enterprise management system: projects, agents, clients and suppliers.",
    category: "Enterprise",
    tags: ["Bubble.io", "Dashboard"],
    tint: "from-slate-100 to-slate-300",
    summary:
      "An enterprise management system for an international agent-staffing company: projects, people, clients and suppliers on one platform.",
    role: "Full-Stack Developer",
    year: "2024",
    type: "Web app",
    client: "AHNA",
    agency: "Deploy Technologies",
    duration: "Aug 2024 – ongoing",
    team: deployTeam,
    about: [
      "AHNA provides agents to major global organisations. The system centralises company operations: project tracking with resource allocation and timelines, an intelligent agent database with skills, availability and project matching, and dashboards with real-time performance data and KPIs.",
      "A client portal lets clients submit project requests, track progress and communicate with the management team; a supplier interface handles quote submissions and comparison. A reporting and analytics module gives insight into operational efficiency, market trends and agent performance.",
    ],
    highlights: [
      "Project management with resource allocation",
      "Agent database: skills, availability, matching",
      "Client portal for requests and progress",
      "Supplier quotes and comparison",
      "Real-time admin dashboard and KPIs",
      "Reporting & analytics",
    ],
    deliverables: deployDeliverables,
    gallery: [
      { src: "/projects/ahna-mockup.png", alt: "AHNA System desktop mockup", frame: "mockup" },
      { src: "/projects/ahna-1.jpg", alt: "AHNA System dashboard", frame: "none" },
      { src: "/projects/ahna-2.jpg", alt: "AHNA System screens", frame: "none" },
    ],
  },
  {
    slug: "samsung-community",
    name: "Samsung Galaxy Move",
    tagline: "Community platform for Samsung device owners with gamified events and media.",
    category: "Community",
    tags: ["Figma", "UI/UX"],
    tint: "from-blue-100 to-sky-200",
    summary:
      "Design for Galaxy Move, an exclusive Samsung app with a community feed, academy, podcasts, VOD and gamified events.",
    role: "UI/UX Designer",
    year: "2025 – 2026",
    type: "Web & mobile",
    client: "Samsung",
    agency: "Deploy Technologies",
    duration: "2.5 months (Nov 2024 – Feb 2025)",
    team: deployTeam,
    about: [
      "Galaxy Move is an exclusive application for Samsung devices that connects creators and fans through media content, gamification and community. Users watch video content and albums, take part in dynamic events and challenges, purchase product codes and benefits, and chat, all in one place.",
      "I designed the dark-themed interface in Figma: the analytics dashboard, the community feed with posts and reactions, user profiles, academy courses, podcasts, VOD content and event management, in a sleek modern style that reflects the Samsung brand.",
    ],
    highlights: [
      "Community feed with posts and reactions",
      "Gamification: events, challenges, rewards",
      "Academy courses, podcasts and VOD",
      "Digital products, coupon codes and loyalty benefits",
      "Built-in chat and notifications",
      "Admin tools: campaigns, codes, promotions",
    ],
    deliverables: ["UX/UI design", "Design system", "Prototype"],
    gallery: [
      { src: "/projects/samsung-mockup.png", alt: "Galaxy Move desktop and mobile mockup", frame: "mockup" },
      { src: "/projects/samsung-1.png", alt: "Galaxy Move dashboard", frame: "browser" },
      { src: "/projects/samsung-2.png", alt: "Galaxy Move community feed", frame: "browser" },
      { src: "/projects/samsung-3.png", alt: "Galaxy Move academy", frame: "browser" },
      { src: "/projects/samsung-4.png", alt: "Galaxy Move events", frame: "browser" },
      { src: "/projects/samsung-5.jpg", alt: "Galaxy Move screens", frame: "none" },
      { src: "/projects/samsung-6.jpg", alt: "Galaxy Move mobile screens", frame: "none" },
    ],
  },
  {
    slug: "printika",
    name: "Printika",
    tagline: "Custom print design and ordering platform with a live 2D/3D preview.",
    category: "E-commerce",
    tags: ["Figma", "UI/UX"],
    tint: "from-orange-100 to-amber-200",
    summary:
      "UI/UX for a custom print platform where customers design and order personalised products with a real-time 2D/3D preview.",
    role: "UI/UX Designer",
    year: "2025",
    type: "Web app",
    about: [
      "Printika lets users upload designs, add text and customise products like t-shirts and hats, with a real-time 2D/3D product preview. The design editor accepts files from desktop, Dropbox or Google Drive, and a multi-step checkout takes the order through to production.",
      "I designed the full experience in Figma: the product catalogue, the editor and preview, the checkout flow and the responsive layouts.",
    ],
    highlights: [
      "Design editor with text and image upload",
      "Real-time 2D/3D product preview",
      "Uploads from desktop, Dropbox and Google Drive",
      "Multi-step checkout",
      "Product catalogue and customisation options",
    ],
    deliverables: ["UX/UI design", "Prototype", "Responsive layouts"],
    gallery: [
      { src: "/projects/printika-1.png", alt: "Printika product editor", frame: "browser" },
      { src: "/projects/printika-2.png", alt: "Printika catalogue", frame: "browser" },
      { src: "/projects/printika-3.png", alt: "Printika preview", frame: "browser" },
      { src: "/projects/printika-4.png", alt: "Printika checkout", frame: "browser" },
    ],
  },
  {
    slug: "eshuv",
    name: "Eshuv",
    tagline: "Community app for settlements: alerts, events and neighbour sharing in one feed.",
    category: "Community",
    tags: ["Figma", "Mobile"],
    tint: "from-teal-100 to-cyan-200",
    summary:
      "A community app for small settlements: one feed for security alerts, events and neighbour-to-neighbour sharing, with a multi-settlement admin system.",
    role: "UI/UX Designer",
    year: "2025 – 2026",
    type: "Mobile app",
    agency: "Deploy Technologies",
    duration: "3 months (Nov 2025 – Feb 2026)",
    team: deployTeam,
    about: [
      "Eshuv gives residents a single reliable channel for everything happening in their settlement: security alerts, events, community news and sharing notices, with reactions, comments and threads so the conversation lives next to the information. Residents sign up with phone verification, browse dedicated tabs for events and notices, and can reach administrators directly.",
      "Behind it sits a two-layer management system: a community-manager dashboard with resident statistics, a searchable resident table, groups and publishing tools, and a settlement dashboard for organisations that run several communities, each with its own branded space.",
    ],
    highlights: [
      "Unified feed: alerts, events, news, sharing",
      "Reactions, comments and threads",
      "Phone-number registration",
      "Community-manager dashboard",
      "Multi-settlement management",
      "Per-settlement branding",
    ],
    deliverables: ["UX/UI design", "Product specification", "Multi-settlement admin design"],
    gallery: [
      { src: "/projects/eshuv-mockup.png", alt: "Eshuv mobile app mockup", frame: "mockup" },
      { src: "/projects/eshuv-1.png", alt: "Eshuv feed", frame: "browser" },
      { src: "/projects/eshuv-2.png", alt: "Eshuv events", frame: "browser" },
      { src: "/projects/eshuv-3.png", alt: "Eshuv admin dashboard", frame: "browser" },
      { src: "/projects/eshuv-4.png", alt: "Eshuv resident management", frame: "browser" },
    ],
  },
];

// Display order: polished mockups first, raw screenshots last. Reorder freely.
const order = [
  "katchings",
  "craftad",
  "powercouple",
  "ffili",
  "ahna-system",
  "samsung-community",
  "eshuv",
  "curebox",
  "palmera-ai",
  "printika",
];

export const projects: Project[] = order.map((slug) => {
  const project = entries.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project slug in order list: ${slug}`);
  return project;
});
