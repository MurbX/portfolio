import type { Variants } from "motion/react";

// Shared animation variants. Parents set `initial="hidden"` and
// `animate`/`whileInView="show"`; children just declare `variants`.

const spring = { type: "spring", stiffness: 120, damping: 18 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: spring },
};

export const pop: Variants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -14 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 16 },
  },
};

export const stagger = (delay = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren } },
});

// Bento cards: fade up on scroll, lift on hover (children can react to "hover").
export const card: Variants = {
  ...fadeUp,
  hover: { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } },
};
