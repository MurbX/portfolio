"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/content/site";

export function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((o) => !o)}
        className="relative z-40 flex size-11 items-center justify-center rounded-full bg-surface shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.14)]"
      >
        {/* Three bars that morph into an X. */}
        <span className="flex h-3 w-4 flex-col items-start justify-between" aria-hidden="true">
          <motion.span
            className="h-0.5 w-4 rounded-full bg-foreground"
            animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="h-0.5 w-[11px] rounded-full bg-foreground"
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          />
          <motion.span
            className="h-0.5 rounded-full bg-foreground"
            animate={open ? { rotate: -45, y: -5, width: 16 } : { rotate: 0, y: 0, width: 7 }}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Invisible backdrop: click anywhere outside to close. */}
            <motion.div
              className="fixed inset-0 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="site-menu"
              className="absolute right-0 top-[calc(100%+10px)] z-40 w-64 origin-top-right rounded-[22px] border border-black/[0.06] bg-white p-2 shadow-[0_16px_48px_rgba(0,0,0,0.14)]"
              initial={{ opacity: 0, scale: 0.92, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            >
              <ul>
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-3.5 py-2.5 text-[15px] font-medium transition-colors hover:bg-neutral-100"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mx-2 my-2 border-t border-neutral-200" />
              <ul>
                {site.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl px-3.5 py-2 text-[14px] text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-foreground"
                    >
                      {s.label}
                      <span aria-hidden="true">&#8599;</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex h-11 items-center justify-center rounded-full bg-foreground text-[15px] font-medium text-background transition-colors hover:bg-neutral-800"
              >
                Book a call
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
