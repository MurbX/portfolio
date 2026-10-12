"use client";

import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { workflow } from "@/content/about";

const STEP_MS = 6000;

export function HowIWork() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hovering, setHovering] = useState(false);
  const reduceMotion = useReducedMotion();
  // Auto-advance until the visitor picks a step (and never with reduced motion).
  const playing = auto && !reduceMotion;
  const step = workflow[active];

  function select(i: number) {
    setAuto(false);
    setActive(i);
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + workflow.length) % workflow.length;
    select(next);
    e.currentTarget.querySelectorAll<HTMLButtonElement>("[role=tab]")[next]?.focus();
  }

  return (
    <div
      className="relative flex flex-1 flex-col"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Oversized step number, fading into the card. */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={step.number}
          aria-hidden="true"
          className="pointer-events-none absolute right-[15px] top-[14px] select-none bg-linear-to-b from-neutral-300/60 to-transparent bg-clip-text text-[72px] sm:text-[96px] font-semibold leading-none tracking-[-0.06em] text-transparent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {step.number}
        </motion.span>
      </AnimatePresence>

      <div className="relative px-[15px] pt-[56px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            role="tabpanel"
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="text-[22px] font-semibold tracking-tight">{step.title}</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.25" />
                  <path d="M8 4.75V8l2.25 1.5" />
                </svg>
                {step.duration}
              </span>
            </div>
            <p className="mt-2.5 max-w-[34rem] text-[14px] leading-[1.6] text-neutral-500">{step.body}</p>

            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
              {step.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] font-medium text-neutral-800">
                  <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                    <svg viewBox="0 0 16 16" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3.5 8.3l2.8 2.8 6.2-6.2" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {step.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-black/[0.06] bg-white/80 px-2 py-0.5 text-[11px] font-medium text-neutral-500"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stepper: finished phases are solid, the active one fills, then the next begins. */}
      <div
        role="tablist"
        aria-label="How I work"
        onKeyDown={onKeyDown}
        className="mt-auto grid grid-cols-4 gap-2 px-[15px] pb-[16px] pt-6 sm:gap-3"
      >
        {workflow.map((s, i) => {
          const selected = i === active;
          const done = i < active;
          return (
            <button
              key={s.number}
              type="button"
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              className="group text-left"
            >
              <span className="relative block h-[3px] overflow-hidden rounded-full bg-neutral-200">
                {(done || (selected && !playing)) && <span className="absolute inset-0 rounded-full bg-foreground" />}
                {selected && playing && (
                  <span
                    key={active}
                    className="absolute inset-0 origin-left rounded-full bg-foreground"
                    style={{
                      animation: `step-fill ${STEP_MS}ms linear forwards`,
                      animationPlayState: hovering ? "paused" : "running",
                    }}
                    onAnimationEnd={() => setActive((a) => (a + 1) % workflow.length)}
                  />
                )}
              </span>
              <span
                className={`mt-2.5 flex items-baseline gap-1.5 text-[12px] font-medium transition-colors ${
                  selected ? "text-foreground" : "text-neutral-400 group-hover:text-neutral-700"
                }`}
              >
                <span className="tabular-nums">{s.number}</span>
                <span className="hidden truncate sm:inline">{s.title}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
