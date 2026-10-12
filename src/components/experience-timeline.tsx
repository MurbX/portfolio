"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "motion/react";

type Job = { year: number; title: string; detail: string };

// The climb from the first year to now: an accent line grows up the rail and each
// role lights up as it arrives, ending on the current one. It holds at the top,
// retracts, and climbs again while the card is on screen. STEP is the time from
// one role to the next.
const STEP = 0.45;
const START = 0.3;
const HOLD_MS = 2000; // pause at the top before looping
const RESET_MS = 500; // retract time before the next climb
const RETRACT = { duration: RESET_MS / 1000, ease: "easeInOut" } as const;

const reveal = (delay: number): Variants => ({
  hidden: { opacity: 0.25, transition: RETRACT },
  show: { opacity: 1, transition: { delay, duration: 0.35, ease: "easeOut" } },
});
const climb = (delay: number): Variants => ({
  hidden: { height: "0%", transition: RETRACT },
  show: { height: "100%", transition: { delay, duration: STEP, ease: "easeInOut" } },
});
const light = (delay: number): Variants => ({
  hidden: { opacity: 0, scale: 0.4, transition: RETRACT },
  show: { opacity: 1, scale: 1, transition: { delay, type: "spring", stiffness: 420, damping: 18 } },
});

// Older roles get a lighter accent, so the colour itself shows the growth.
const dotTone = ["bg-accent/35", "bg-accent/55", "bg-accent/80"];

export function ExperienceTimeline({ jobs }: { jobs: Job[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const reduce = useReducedMotion();
  const [climbed, setClimbed] = useState(false);
  const last = jobs.length - 1;
  // Time for the line to reach the top and the last role to fade in.
  const climbMs = (START + last * STEP + 0.35) * 1000;

  // Loop while on screen: climb, hold at the top, retract, climb again.
  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(
      () => setClimbed((c) => (reduce ? true : !c)),
      // Climbed: wait out the climb plus the hold. Not climbed: let the retract finish.
      climbed ? climbMs + HOLD_MS : reduce ? 0 : RESET_MS,
    );
    return () => clearTimeout(id);
  }, [inView, climbed, reduce, climbMs]);

  return (
    <motion.ol
      ref={ref}
      initial="hidden"
      animate={climbed ? "show" : "hidden"}
      className="mb-4 mt-14 flex flex-1 flex-col px-4"
    >
      {jobs.map((job, i) => {
        const current = i === 0;
        const k = last - i; // 0 for the first year, counting up toward now
        const arrive = START + k * STEP; // when the climbing line reaches this role
        return (
          <li
            key={job.year + job.title}
            className={`relative grid grid-cols-[36px_14px_1fr] gap-x-2.5 ${i < last ? "flex-1" : ""}`}
          >
            {/* Segment from this role's dot down to the next (older) one: a faint track
                with the accent line climbing up it. */}
            {i < last && (
              <span aria-hidden="true" className="absolute -bottom-2 left-[52.5px] top-3 w-px bg-neutral-200">
                <motion.span
                  variants={climb(arrive - STEP)}
                  className="absolute inset-x-0 bottom-0 bg-linear-to-t from-accent/40 to-accent"
                />
              </span>
            )}
            <motion.span
              variants={reveal(arrive)}
              className={`pt-px text-[11.5px] font-medium tabular-nums ${current ? "text-foreground" : "text-neutral-400"}`}
            >
              {job.year}
            </motion.span>
            <span className="relative flex justify-center pt-1">
              {/* Unlit ring, then the dot lights as the line arrives. */}
              <span className="absolute top-1 size-2.5 rounded-full border-[1.5px] border-neutral-300 bg-[#fbfbfb]" />
              <motion.span variants={light(arrive)} className="relative flex size-2.5">
                {current ? (
                  <>
                    <span className="absolute inset-0 animate-ping rounded-full bg-accent/50 motion-reduce:animate-none" />
                    <span className="relative size-2.5 rounded-full bg-accent ring-4 ring-accent/15" />
                  </>
                ) : (
                  <span className={`size-2.5 rounded-full ${dotTone[k] ?? "bg-accent/80"}`} />
                )}
              </motion.span>
            </span>
            <motion.div variants={reveal(arrive)} className="min-w-0">
              <p className="flex items-center gap-2 text-[13.5px] font-semibold leading-tight tracking-tight">
                {job.title}
                {current && (
                  <span className="rounded-full bg-accent/10 px-1.5 py-px text-[10px] font-medium text-accent">Now</span>
                )}
              </p>
              <p className="mt-0.5 truncate text-[12px] text-neutral-500">{job.detail}</p>
            </motion.div>
          </li>
        );
      })}
    </motion.ol>
  );
}
