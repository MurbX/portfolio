export interface ProjectImage {
  src: string
  isMobile: boolean
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  cardImage: string
  images: ProjectImage[]
  liveLink?: string
  role: string
  year: string
  platform: 'web' | 'mobile' | 'both'
}

export const projects: Project[] = [
  {
    slug: 'printika',
    title: 'Printika',
    subtitle: 'Custom Print Design Platform',
    description:
      'A full-featured custom printing platform that lets users upload designs, add text, and customize products like t-shirts, hats, and more. Includes a real-time 2D/3D product preview, multi-step checkout, and an intuitive design editor with file upload from desktop, Dropbox, or Google Drive.',
    tags: ['Figma', 'UI/UX', 'E-commerce'],
    cardImage: '/images/printika-1.png',
    images: [
      { src: '/images/printika-1.png', isMobile: false },
      { src: '/images/printika-2.png', isMobile: false },
      { src: '/images/printika-3.png', isMobile: false },
      { src: '/images/printika-4.png', isMobile: false },
    ],
    role: 'UI/UX Designer',
    year: '2025',
    platform: 'web',
  },
  {
    slug: 'eshuv',
    title: 'Eshuv',
    subtitle: 'Community Management App',
    description:
      'A neighborhood and community management mobile app enabling residents to stay connected through polls, security alerts, and council updates. Features include resident management with roles and permissions, a real-time messaging system, and a comprehensive admin dashboard.',
    tags: ['Figma', 'UI/UX', 'Mobile'],
    cardImage: '/images/eshuv-3.png',  // desktop admin dashboard
    images: [
      { src: '/images/eshuv-1.png', isMobile: true },
      { src: '/images/eshuv-2.png', isMobile: true },
      { src: '/images/eshuv-3.png', isMobile: false },
      { src: '/images/eshuv-4.png', isMobile: false },
    ],
    role: 'UI/UX Designer',
    year: '2025',
    platform: 'mobile',
  },
  {
    slug: 'samsung-community',
    title: 'Samsung Community',
    subtitle: 'S Community Platform',
    description:
      'A dark-themed community platform for Samsung featuring an analytics dashboard, community feed with posts and reactions, user profiles, academy courses, podcasts, VOD content, and event management. Built with a sleek, modern interface reflecting the Samsung brand.',
    tags: ['Figma', 'UI/UX', 'Community'],
    cardImage: '/images/samsung-1.png',
    images: [
      { src: '/images/samsung-1.png', isMobile: false },
      { src: '/images/samsung-2.png', isMobile: false },
      { src: '/images/samsung-3.png', isMobile: true },
      { src: '/images/samsung-4.png', isMobile: true },
    ],
    role: 'UI/UX Designer',
    year: '2026',
    platform: 'both',
  },
  {
    slug: 'curebox',
    title: 'Curebox',
    subtitle: 'Healthcare & Therapy Platform',
    description:
      'A healthcare platform connecting patients with therapists and specialists. Features include a therapist discovery system with map integration, session booking with multiple appointment types, a patient dashboard with session tracking, and a comprehensive settings panel.',
    tags: ['Next.js', 'Supabase', 'Healthcare'],
    cardImage: '/images/curebox-2.png',
    images: [
      { src: '/images/curebox-1.png', isMobile: false },
      { src: '/images/curebox-2.png', isMobile: false },
      { src: '/images/curebox-3.png', isMobile: false },
      { src: '/images/curebox-4.png', isMobile: false },
      { src: '/images/curebox-5.png', isMobile: false },
    ],
    liveLink: 'https://www.curebox.co.il/',
    role: 'Full-Stack Developer',
    year: '2026',
    platform: 'web',
  },
  {
    slug: 'palmera-ai',
    title: 'Palmera AI',
    subtitle: 'AI Real-Estate Platform',
    description:
      'An AI-powered real estate platform that leverages machine learning to provide intelligent property recommendations, market analysis, and automated listing management for real estate professionals.',
    tags: ['Bubble.io', 'OpenAI'],
    cardImage: '/images/palmera-ai.png',
    images: [{ src: '/images/palmera-ai.png', isMobile: false }],
    liveLink: 'https://ai.palmera.realestate/',
    role: 'Full-Stack Developer',
    year: '2025',
    platform: 'web',
  },
  {
    slug: 'craftad',
    title: 'Craftad.ai',
    subtitle: 'AI Marketing Content',
    description:
      'An AI-driven marketing content generation platform that creates high-quality ad creatives, copy, and campaign assets using artificial intelligence, streamlining the content creation workflow for marketing teams.',
    tags: ['Bubble.io', 'AI/ML'],
    cardImage: '/images/Craftad-2-r1gy4yz1m5yl5mkmm3fjttqz7sy75wkaaqzxfhgz8g.webp',
    images: [{ src: '/images/Craftad-2-r1gy4yz1m5yl5mkmm3fjttqz7sy75wkaaqzxfhgz8g.webp', isMobile: false }],
    liveLink: 'https://craftad.ai',
    role: 'Full-Stack Developer',
    year: '2024',
    platform: 'web',
  },
  {
    slug: 'powercouple',
    title: 'Powercouple',
    subtitle: 'Investor Management App',
    description:
      'A comprehensive investor management application designed for tracking investment portfolios, managing investor relationships, and streamlining financial reporting for fund managers.',
    tags: ['Bubble.io', 'FinTech'],
    cardImage: '/images/PCouple-qsnz98oytd1u76haslykn6sdaz3l4ovc0gob0sgpy8.webp',
    images: [{ src: '/images/PCouple-qsnz98oytd1u76haslykn6sdaz3l4ovc0gob0sgpy8.webp', isMobile: false }],
    role: 'Full-Stack Developer',
    year: '2024',
    platform: 'web',
  },
  {
    slug: 'ahna-system',
    title: 'AHNA System',
    subtitle: 'Enterprise Management',
    description:
      'An enterprise management dashboard providing comprehensive business operations tools including project tracking, team management, and performance analytics for growing organizations.',
    tags: ['Bubble.io', 'Dashboard'],
    cardImage: '/images/ahna image.webp',
    images: [{ src: '/images/ahna image.webp', isMobile: false }],
    liveLink: 'https://ahna-61278.bubbleapps.io',
    role: 'Full-Stack Developer',
    year: '2024',
    platform: 'web',
  },
  {
    slug: 'ffili',
    title: 'FFili Platform',
    subtitle: 'Influencer Marketing',
    description:
      'An influencer marketing platform connecting brands with content creators, featuring campaign management, analytics dashboards, and automated influencer discovery and outreach tools.',
    tags: ['Bubble.io', 'Marketing'],
    cardImage: '/images/FFili-client-r1hqo8t6rw7xnqeg2518uliezlnfherm7a3iy2bn1c.webp',
    images: [{ src: '/images/FFili-client-r1hqo8t6rw7xnqeg2518uliezlnfherm7a3iy2bn1c.webp', isMobile: false }],
    liveLink: 'https://ffili.com',
    role: 'Full-Stack Developer',
    year: '2024',
    platform: 'web',
  },
  {
    slug: 'katchings',
    title: 'Katchings',
    subtitle: 'Financial Advisory',
    description:
      'A financial advisory platform that provides personalized investment guidance, portfolio management tools, and financial planning resources for individual investors.',
    tags: ['Bubble.io', 'FinTech'],
    cardImage: '/images/Katching-qso0h10b6izp18vm41bxan0di5a4p3p716pkttji3k.webp',
    images: [{ src: '/images/Katching-qso0h10b6izp18vm41bxan0di5a4p3p716pkttji3k.webp', isMobile: false }],
    liveLink: 'https://katchings.com',
    role: 'Full-Stack Developer',
    year: '2024',
    platform: 'web',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects
}
