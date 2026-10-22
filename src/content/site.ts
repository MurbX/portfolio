// All personal details live here — edit this file, not the components.

// WhatsApp number in international format, digits only.
const whatsappNumber = "254721881858";

// A wa.me link that opens a chat with a pre-filled message.
export const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const site = {
  name: "Brian Mutuku",
  firstName: "Brian",
  role: "Full-Stack Developer",
  // Hero reads: "I'm a {role} {connector} {highlight}." — highlight is the orange line.
  connector: "from",
  highlight: "Nairobi, Kenya",
  // Live address; link previews and canonical URLs are built from it.
  url: "https://murbxp.is-a.dev",
  xHandle: "@MurbBrian_ke",
  email: "brianmurb22@gmail.com",
  availability: "Open to work",
  // "Book a call" buttons open the Project Consultation page on Cal.com.
  bookingUrl: "https://cal.com/brian-mutuku-dev/30min",
  whatsappUrl: whatsappLink("Hi Brian, I’d like to talk about a project."),
  replyTime: "Usually replies within an hour",
  // Local time shown on the contact card, for clients in other time zones.
  timeZone: { id: "Africa/Nairobi", label: "EAT" },
  // "I need…" quick picks on the contact card; each opens WhatsApp with its message.
  quickPicks: [
    { label: "An MVP", message: "Hi Brian, I’d like help building an MVP." },
    { label: "A web app", message: "Hi Brian, I’d like help building a web app." },
    { label: "A mobile app", message: "Hi Brian, I’d like help building a mobile app." },
    { label: "Move off no-code", message: "Hi Brian, I’d like to move my product off no-code." },
    { label: "Integrations", message: "Hi Brian, I need help with APIs and integrations." },
  ],
  // ​ (zero-width space) lets the line wrap right before the dash.
  tagline:
    "Feel free to explore my portfolio and reach out​—I’d love to connect!",
  avatar: "/avatar.jpg",
  // Served from public/; the hero's "Resume" button downloads it.
  resume: "/resume.pdf",
  description:
    "Full-stack developer from Kenya building web and mobile products for healthcare, fintech, proptech and community platforms since 2020.",
  // Menu links. Add { label: "Work", href: "#work" } etc. as those sections are built.
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/#work" },
    { label: "Tools", href: "/#tools" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/MurbX" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/brian-mutuku-developer/" },
    { label: "X / Twitter", href: "https://x.com/MurbBrian_ke" },
  ],
};
