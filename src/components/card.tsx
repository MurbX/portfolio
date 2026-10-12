"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { card } from "@/lib/motion";

// Shared bento-style card: grain texture, floating label pill, lifts on hover.
// Children can react to the hover with `variants={{ hover: {...} }}`.
export function Card({
  label,
  className = "",
  children,
}: {
  label?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={card}
      whileHover="hover"
      className={`card-grain relative overflow-hidden rounded-[22px] border border-black/[0.06] bg-[#fbfbfb] shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] ${className}`}
    >
      {label && (
        <span className="absolute left-2.5 top-2.5 z-10 inline-flex h-[30px] items-center rounded-full bg-white px-3.5 text-[13px] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
          {label}
        </span>
      )}
      {children}
    </motion.div>
  );
}
