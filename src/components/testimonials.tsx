"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Card } from "@/components/card";
import { testimonials } from "@/content/testimonials";

const AUTO_ADVANCE_MS = 8000;

const slide = {
  enter: (dir: number) => ({ opacity: 0, x: 40 * dir }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: -40 * dir }),
};

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [auto, setAuto] = useState(true);
  const [hovering, setHovering] = useState(false);
  const count = testimonials.length;
  const t = testimonials[index];

  function go(dir: number) {
    setAuto(false);
    setDirection(dir);
    setIndex((i) => (i + dir + count) % count);
  }

  // Rotate slowly until the visitor hovers or clicks.
  useEffect(() => {
    if (!auto || hovering || count < 2) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % count);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [auto, hovering, count]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="mt-20 scroll-mt-24"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className="flex items-center justify-between">
          <span className="inline-flex h-[30px] items-center rounded-full bg-white px-3.5 text-[13px] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
            Testimonials
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
            What clients say
          </span>
        </div>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <h2
            id="testimonials-heading"
            className="max-w-xl text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2rem]"
          >
            Trusted by founders and teams.
          </h2>
          {count > 1 && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white transition-colors hover:bg-neutral-100"
              >
                <span aria-hidden="true">&larr;</span>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white transition-colors hover:bg-neutral-100"
              >
                <span aria-hidden="true">&rarr;</span>
              </button>
              <span className="ml-1 text-[13px] tabular-nums text-neutral-400">
                {index + 1} / {count}
              </span>
            </div>
          )}
        </div>
      </motion.div>

      <div className="mt-8">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={t.name}
            custom={direction}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid gap-6 md:grid-cols-[1fr_2fr]"
          >
            <Card label={t.company} className="flex min-h-[18rem] flex-col items-center justify-center p-6">
              <div className="relative size-40 overflow-hidden rounded-full bg-neutral-200 ring-4 ring-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                <Image src={t.photo} alt={t.name} fill sizes="160px" className="object-cover" />
              </div>
              {t.link && (
                <a
                  href={t.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex h-9 items-center gap-1.5 rounded-full bg-white px-4 text-[12.5px] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-colors hover:bg-neutral-100"
                >
                  LinkedIn <span aria-hidden="true">&#8599;</span>
                </a>
              )}
            </Card>

            <figure className="relative flex min-h-[18rem] flex-col overflow-hidden rounded-[22px] bg-neutral-900 p-7 text-white shadow-[0_2px_16px_rgba(0,0,0,0.12)] sm:p-10">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -right-20 size-72 rounded-full bg-[radial-gradient(circle,rgba(245,105,27,0.5),transparent_62%)] blur-2xl"
              />
              <div className="relative flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                <span>{t.company}</span>
                {t.project && (
                  <>
                    <span aria-hidden="true">&middot;</span>
                    <Link
                      href={`/projects/${t.project}`}
                      className="normal-case tracking-normal text-neutral-300 underline decoration-neutral-600 underline-offset-4 transition-colors hover:text-white"
                    >
                      View project
                    </Link>
                  </>
                )}
              </div>
              <blockquote className="relative mt-5 text-[19px] leading-[1.55] sm:text-[21px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="relative mt-auto border-t border-white/10 pt-6">
                <p className="text-[15px] font-bold uppercase tracking-[0.06em]">{t.name}</p>
                <p className="mt-1 text-[13px] text-neutral-400">{t.role}</p>
              </figcaption>
            </figure>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
