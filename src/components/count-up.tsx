"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

// Counts a stat like "15+", "6+ yrs" or "42,300" up from zero when it scrolls into
// view. The leading number animates; whatever follows it ("+", "+ yrs") stays as is.
// The real value is rendered first, so it's correct without JavaScript.
export function CountUp({ value, className }: { value: string; className?: string }) {
  const [, digits = "", suffix = value] = value.match(/^(\d[\d,]*)(.*)$/) ?? [];
  const target = Number(digits.replace(/,/g, ""));
  const grouped = digits.includes(",");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || reduce || !digits || !el) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const n = Math.round(v);
        el.textContent = grouped ? n.toLocaleString("en-US") : String(n);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, digits, target, grouped]);

  return (
    <span className={className}>
      <span ref={ref}>{digits}</span>
      {suffix}
    </span>
  );
}
