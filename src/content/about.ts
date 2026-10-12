// Content for the bento cards under the hero. Edit freely.

// Years for the middle entries are estimates — set your real timeline.
export const experience = [
  { title: "Full-Stack Developer", meta: "2025 - Next.js, TypeScript, Supabase" },
  { title: "Solutions Architect", meta: "2023 - Fintech & proptech platforms" },
  { title: "Product Builder", meta: "2021 - Healthcare & community apps" },
  { title: "Started building apps", meta: "2020 - No-code: Bubble, FlutterFlow" },
];

type Cover = { gradient: string; image?: string; href?: string; label?: string };

export const playlist: { name: string; url: string; covers: [Cover, Cover, Cover] } = {
  name: "On repeat",
  // Where "Listen on Spotify" goes (an artist, album or playlist link).
  url: "https://open.spotify.com/artist/58r1rB5t3VF5X6yXGPequV",
  // Left, middle (front), right. Each cover links to its artist; gradients show if an image is missing.
  covers: [
    {
      gradient: "from-neutral-800 to-neutral-500",
      image: "/covers/maverick-city.jpg",
      href: "https://open.spotify.com/artist/58r1rB5t3VF5X6yXGPequV",
      label: "Maverick City Music on Spotify",
    },
    {
      gradient: "from-amber-300 via-orange-500 to-fuchsia-600",
      image: "/covers/forrest-frank.jpg",
      href: "https://open.spotify.com/artist/1scVfBymTr3CeZ4imMj1QJ",
      label: "Forrest Frank on Spotify",
    },
    {
      gradient: "from-sky-700 to-slate-900",
      image: "/covers/worship-circle.jpg",
      href: "https://open.spotify.com/artist/413rdrGoO7cMzxZvwiFpos",
      label: "Worship Circle on Spotify",
    },
  ],
};

export const reading: {
  title: string;
  author: string;
  url: string;
  coverText: string;
  cover?: string;
} = {
  title: "Designing Data-Intensive Applications",
  author: "Martin Kleppmann & Chris Riccomini",
  url: "https://www.google.co.ke/books/edition/Designing_Data_Intensive_Applications/tNvBEQAAQBAJ?hl=en&gbpv=0",
  // Fallback text for the CSS-drawn book, used only when `cover` is unset.
  coverText: "Data\nIntensive",
  cover: "/book-cover.png",
};

export const location = {
  city: "Nairobi",
  country: "Kenya",
  coords: "1.2921° S, 36.8219° E",
  // Replace with a real map screenshot of your city, e.g. /map.png
  map: "/map.svg",
};

export const workflow = [
  {
    number: "01",
    title: "Discovery",
    duration: "1–2 days",
    body: "We start with an in-depth call to understand your goals, users and constraints, so I can recommend the right approach before anything gets built.",
    deliverables: ["Requirements doc", "Approach & options", "Timeline & estimate"],
    tools: ["Google Meet", "Notion"],
  },
  {
    number: "02",
    title: "Architecture",
    duration: "3–5 days",
    body: "Data modelling, integrations and stack selection: a clear technical plan that fits your budget today and scales with you later.",
    deliverables: ["Data model & ERD", "Integration map", "Stack & hosting plan"],
    tools: ["Excalidraw", "Supabase", "Vercel"],
  },
  {
    number: "03",
    title: "Design",
    duration: "1–2 weeks",
    body: "Figma prototypes of the key screens, validated with you before development, so we build the right thing once.",
    deliverables: ["Figma prototype", "Design system basics", "Validated user flows"],
    tools: ["Figma", "Loom"],
  },
  {
    number: "04",
    title: "Build & Ship",
    duration: "2–8 weeks",
    body: "Full-stack development in weekly increments with testing, a staging link for feedback, and a production deployment when you’re happy.",
    deliverables: ["Weekly staging builds", "Tests & CI pipeline", "Launch + handover docs"],
    tools: ["Next.js", "TypeScript", "Supabase", "Vercel"],
  },
];
