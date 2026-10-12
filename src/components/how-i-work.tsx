"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { workflow } from "@/content/about";

const AUTO_ADVANCE_MS = 5000;

export function HowIWork() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hovering, setHovering] = useState(false);
  const step = workflow[active];

  // Cycle through the steps until the visitor hovers or picks one.
  useEffect(() => {
    if (!auto || hovering) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % workflow.length),
      AUTO_ADVANCE_MS,
    );
    return () => clearInterval(id);
  }, [auto, hovering]);

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
      className="flex flex-1 flex-col"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="px-[15px] pt-[56px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            role="tabpanel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[19px] font-semibold tracking-tight">
                {step.number} {step.title}
              </h3>
              <span className="shrink-0 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600">
                {step.duration}
              </span>
            </div>
            <p className="mt-2 text-[13.5px] leading-[1.5] text-neutral-500">
              {step.body}
            </p>

            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400">
              What you get
            </p>
            <ul className="mt-2 grid gap-2 sm:grid-cols-3">
              {step.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-black/[0.05] bg-white px-3 py-2 text-[12.5px] font-medium text-neutral-800"
                >
                  <svg viewBox="0 0 16 16" className="size-3.5 shrink-0 text-accent" aria-hidden="true">
                    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15" />
                    <path d="M4.5 8.2l2.3 2.3 4.7-4.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11.5px] text-neutral-400">
              <span className="font-medium text-neutral-500">Tools</span>
              {" · "}
              {step.tools.join(" · ")}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-auto px-[15px] pb-[14px] pt-4">
        <div
          role="tablist"
          aria-label="How I work"
          onKeyDown={onKeyDown}
          className="flex rounded-full border border-neutral-200 bg-white p-[3px]"
        >
          {workflow.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.number}
                type="button"
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                className={`relative flex-1 rounded-full py-2 text-[13px] font-medium transition-colors ${
                  selected ? "text-background" : "text-neutral-700 hover:text-foreground"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="step-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">Step {s.number}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
