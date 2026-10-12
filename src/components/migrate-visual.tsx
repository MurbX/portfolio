"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";

// "No-code to code" service illustration: each source platform takes a turn,
// lighting up while a small terminal shows what its parts become in code.
const sources = [
  {
    name: "Bubble",
    logo: <BubbleLogo />,
    command: "migrate bubble",
    out: ["workflows → API", "data → Postgres"],
  },
  {
    name: "Webflow",
    logo: <WebflowLogo />,
    command: "migrate webflow",
    out: ["pages → Next.js", "CMS → Supabase"],
  },
  {
    name: "FlutterFlow",
    logo: <FlutterFlowLogo />,
    command: "migrate flutterflow",
    out: ["screens → Flutter", "actions → Dart"],
  },
];

const CYCLE_MS = 3200;

export function MigrateVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  // Take turns while the card is on screen.
  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % sources.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [inView, reduce]);

  const src = sources[active];

  return (
    <div ref={ref} className="absolute inset-0 flex items-center gap-[3%] px-[5%]">
      {/* Sources */}
      <ul className="flex w-[36%] shrink-0 flex-col gap-1.5">
        {sources.map((s, i) => {
          const on = i === active;
          return (
            <li
              key={s.name}
              className={`flex items-center gap-1.5 rounded-lg bg-white px-1.5 py-1.5 text-[9.5px] font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.06)] ring-1 transition-all duration-300 ${
                on ? "scale-[1.04] text-foreground ring-accent/60" : "text-neutral-400 opacity-70 ring-black/[0.04]"
              }`}
            >
              <span className="flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-[5px]">
                {s.logo}
              </span>
              <span className="truncate">{s.name}</span>
            </li>
          );
        })}
      </ul>

      {/* Flow: dashes running toward the code, with an arrowhead. */}
      <svg viewBox="0 0 40 12" className="w-[8%] shrink-0 overflow-visible text-accent" aria-hidden="true">
        <path d="M0 6h33" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4" strokeLinecap="round" className="flow-dash" />
        <path d="M31 1.5L37 6l-6 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Terminal */}
      <div className="min-w-0 flex-1 overflow-hidden rounded-xl bg-neutral-900 shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
        <div className="flex items-center gap-1 border-b border-white/10 px-2 py-1.5">
          <span className="size-1.5 rounded-full bg-[#ff5f57]" />
          <span className="size-1.5 rounded-full bg-[#febc2e]" />
          <span className="size-1.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="h-[84px] px-2 py-1.5 font-mono text-[8.5px] leading-[1.65]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.p
                className="whitespace-nowrap text-neutral-200"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.6, ease: "linear" }}
              >
                <span className="text-accent">$</span> {src.command}
              </motion.p>
              {src.out.map((line, i) => (
                <motion.p
                  key={line}
                  className="whitespace-nowrap text-green-400"
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.75 + i * 0.35, duration: 0.25 }}
                >
                  ✓ {line}
                </motion.p>
              ))}
              <motion.p
                className="whitespace-nowrap text-sky-300"
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.25 }}
              >
                ▲ live, no downtime
              </motion.p>
              <motion.p
                className="text-neutral-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9 }}
              >
                <span className="text-accent">$</span>{" "}
                <span className="inline-block h-[1em] w-[0.5em] translate-y-[0.15em] animate-pulse bg-neutral-400" />
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function BubbleLogo() {
  return (
    <span className="flex size-full items-center justify-center bg-neutral-900 text-[11px] font-black leading-none text-white">
      b
    </span>
  );
}

function FlutterFlowLogo() {
  return (
    <span className="flex size-full items-center justify-center bg-[#4B39EF] text-[8.5px] font-black italic leading-none tracking-[-0.08em] text-white">
      ff
    </span>
  );
}

// Webflow mark (Simple Icons, CC0) on Webflow blue.
function WebflowLogo() {
  return (
    <span className="flex size-full items-center justify-center bg-[#146EF5]">
      <svg viewBox="0 0 24 24" className="size-3" fill="#fff" aria-hidden="true">
        <path d="m24 4.515-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001 2.622-5.277h4.854v5.244h.144l2.72-5.244H24Z" />
      </svg>
    </span>
  );
}
