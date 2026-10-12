// Client testimonials. `project` links the company label to a case study.
export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  photo: string;
  project?: string; // project slug
  link?: string; // e.g. LinkedIn profile
};

export const testimonials: Testimonial[] = [
  {
    name: "Yoni Gilboa",
    role: "CEO & Founder",
    company: "Curebox",
    quote:
      "Brian architected our entire healthcare platform from the ground up. His expertise in React, TypeScript, and Supabase brought CureBox to life with a polished, production-ready experience. Beyond his technical skill, his communication and problem-solving made the whole process seamless.",
    // Low-res stand-in cropped from a screenshot; replace with a proper photo.
    photo: "/testimonials/yoni-gilboa.jpg",
    project: "curebox",
  },
  {
    name: "Adir Cohen",
    role: "CEO, Deploy Technologies LTD",
    company: "Deploy Technologies",
    quote:
      "Brian is one of the most reliable developers I’ve worked with. He consistently delivers complex Bubble.io applications with exceptional quality and attention to detail. His ability to handle intricate integrations and custom workflows has made him an invaluable asset to our team.",
    photo: "/testimonials/adir-cohen.png",
  },
];
