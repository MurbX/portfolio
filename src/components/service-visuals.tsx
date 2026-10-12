"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";
import { CountUp } from "@/components/count-up";
import { AndroidPhone } from "@/components/android-phone";
import { IPhone } from "@/components/iphone";
import { brandLogos, type BrandLogo } from "@/content/brand-logos";
import { useLoop } from "@/lib/use-loop";

// Animated illustrations for the Services cards. Each plays when its card is on
// screen and replays on a loop (via `run` as a key); reduced motion shows the end state.

type Target = Record<string, number | string | number[]>;
const at = (delay: number, from: Target, to: Target, duration = 0.5): Variants => ({
  hidden: from,
  show: { ...to, transition: { delay, duration, ease: [0.16, 1, 0.3, 1] } },
});

/* ------------------------------------------------------------- Web apps */

export function WebVisual() {
  const { ref, run, play } = useLoop<HTMLDivElement>(7000);
  const stats = [
    { label: "Users", value: "12k" },
    { label: "Uptime", value: "99%" },
    { label: "Growth", value: "24%" },
  ];
  return (
    <div ref={ref} className="absolute inset-x-[6%] top-[9%] bottom-[-8%]">
      <motion.div
        key={run}
        initial="hidden"
        animate={play}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      >
        {/* Address bar */}
        <div className="flex items-center gap-1.5 border-b border-black/[0.05] px-2.5 py-1.5">
          <span className="size-1.5 rounded-full bg-[#ff5f57]" />
          <span className="size-1.5 rounded-full bg-[#febc2e]" />
          <span className="size-1.5 rounded-full bg-[#28c840]" />
          <span className="ml-1.5 flex h-3.5 flex-1 items-center gap-1 rounded-full bg-neutral-100 px-2 text-[7px] text-neutral-500">
            <svg viewBox="0 0 12 12" className="size-2" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <rect x="2.5" y="5.5" width="7" height="5" rx="1" />
              <path d="M4 5.5V4a2 2 0 014 0v1.5" />
            </svg>
            app.yourproduct.com
          </span>
        </div>

        <div className="flex flex-1 gap-2 p-2">
          {/* Sidebar */}
          <div className="w-[19%] space-y-1.5">
            <span className="mb-2 block size-3 rounded-[4px] bg-foreground" />
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                variants={at(0.15 + i * 0.08, { opacity: 0, x: -6 }, { opacity: 1, x: 0 })}
                className={`block h-1.5 rounded-full ${i === 0 ? "w-full bg-accent" : "w-4/5 bg-neutral-200"}`}
              />
            ))}
          </div>

          <div className="relative flex min-w-0 flex-1 flex-col gap-1.5">
            {/* Stat tiles */}
            <div className="grid grid-cols-3 gap-1.5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={at(0.3 + i * 0.1, { opacity: 0, y: 6 }, { opacity: 1, y: 0 })}
                  className="rounded-md border border-black/[0.05] px-1.5 py-1"
                >
                  <p className="text-[6.5px] text-neutral-400">{s.label}</p>
                  <p className="text-[10px] font-bold leading-tight tracking-tight">
                    <CountUp key={run} value={s.value} />
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Chart that draws itself */}
            <div className="relative flex-1 rounded-md border border-black/[0.05] p-1.5">
              <svg viewBox="0 0 120 50" preserveAspectRatio="none" className="size-full overflow-visible" aria-hidden="true">
                <defs>
                  <linearGradient id="web-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#f5691b" stopOpacity="0.28" />
                    <stop offset="1" stopColor="#f5691b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0 42 L15 36 L30 38 L45 27 L60 30 L75 19 L90 22 L105 11 L120 6 L120 50 L0 50 Z"
                  fill="url(#web-area)"
                  variants={at(1.2, { opacity: 0 }, { opacity: 1 }, 0.6)}
                />
                <motion.path
                  d="M0 42 L15 36 L30 38 L45 27 L60 30 L75 19 L90 22 L105 11 L120 6"
                  fill="none"
                  stroke="#f5691b"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  variants={at(0.55, { pathLength: 0 }, { pathLength: 1 }, 1.1)}
                />
              </svg>

              {/* Lighthouse-style performance score, in the chart's corner. */}
              <motion.div
                variants={at(0.9, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1 })}
                className="absolute right-1.5 top-1.5 flex size-8 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
              >
                <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90" aria-hidden="true">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#dcfce7" strokeWidth="3" />
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="3"
                    strokeLinecap="round"
                    variants={at(1.0, { pathLength: 0 }, { pathLength: 1 }, 1.2)}
                  />
                </svg>
                <span className="relative text-[8.5px] font-bold text-green-700">100</span>
              </motion.div>
            </div>
          </div>
        </div>


        {/* Deploy toast */}
        <motion.div
          variants={at(2.3, { opacity: 0, y: 10 }, { opacity: 1, y: 0 })}
          className="absolute bottom-[14%] right-[5%] flex items-center gap-1 rounded-full bg-foreground px-2 py-1 text-[7.5px] font-medium text-white shadow-[0_6px_16px_rgba(0,0,0,0.2)]"
        >
          <span className="flex size-2.5 items-center justify-center rounded-full bg-green-500 text-[6px]">✓</span>
          Deployed
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------------------- Mobile apps */

export function MobileVisual() {
  const { ref, run, play } = useLoop<HTMLDivElement>(7000);
  const bars = [40, 65, 50, 80, 60, 100];
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div key={run} initial="hidden" animate={play} className="absolute inset-0">
        {/* Android: same app, dark theme, behind. */}
        <AndroidPhone className="absolute left-[4%] top-[19%] w-[38%] -rotate-[7deg]">
          <div className="px-[7cqw] pt-[13cqw]">
            <p className="text-[4.5cqw] leading-none text-white/50">Good morning</p>
            <p className="mt-[1.5cqw] text-[6cqw] font-semibold leading-none">Brian</p>
            <div className="mt-[5cqw] rounded-[6cqw] bg-white/[0.07] p-[5cqw]">
              <p className="text-[4.5cqw] leading-none text-white/50">Total balance</p>
              <p className="mt-[2.5cqw] whitespace-nowrap text-[7.5cqw] font-bold leading-none">KES 42,300</p>
              <div className="mt-[4cqw] flex h-[11cqw] items-end gap-[1.5cqw]">
                {bars.map((h, i) => (
                  <motion.span
                    key={i}
                    variants={at(0.4 + i * 0.07, { scaleY: 0 }, { scaleY: 1 })}
                    className={`w-full origin-bottom rounded-[1.5cqw] ${i === 5 ? "bg-accent" : "bg-white/25"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-[6cqw] space-y-[4.5cqw]">
              {["+2,400", "-850", "+12,000"].map((amt, i) => (
                <motion.div
                  key={amt}
                  variants={at(0.9 + i * 0.1, { opacity: 0, x: 6 }, { opacity: 1, x: 0 })}
                  className="flex items-center gap-[3.5cqw]"
                >
                  <span className={`size-[10cqw] shrink-0 rounded-full ${i === 1 ? "bg-white/15" : "bg-accent/30"}`} />
                  <span className="h-[3cqw] flex-1 rounded-full bg-white/15" />
                  <span className="text-[4.5cqw] font-medium text-white/80">{amt}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AndroidPhone>

        {/* iPhone: the light version in front. */}
        <div className="absolute right-[10%] top-[9%] w-[42%]">
          <IPhone>
            <div className="mt-[2cqw] flex items-center justify-between px-[8cqw]">
              <div>
                <p className="text-[5cqw] leading-none text-neutral-400">Good morning</p>
                <p className="mt-[1.6cqw] text-[6.6cqw] font-semibold leading-none">Brian</p>
              </div>
              <span className="size-[12cqw] rounded-full bg-neutral-200" />
            </div>
            <div className="mx-[5cqw] mt-[6cqw] rounded-[8cqw] bg-neutral-900 p-[6cqw] text-white">
              <p className="text-[5cqw] leading-none text-neutral-400">Total balance</p>
              <p className="mt-[3cqw] whitespace-nowrap text-[8.4cqw] font-bold leading-none tracking-tight">
                KES <CountUp key={run} value="42,300" />
              </p>
              <div className="mt-[5cqw] flex h-[13cqw] items-end gap-[1.6cqw]">
                {bars.map((h, i) => (
                  <motion.span
                    key={i}
                    variants={at(0.3 + i * 0.07, { scaleY: 0 }, { scaleY: 1 })}
                    className={`w-full origin-bottom rounded-[1.6cqw] ${i === 5 ? "bg-accent" : "bg-white/25"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-[6cqw] space-y-[5cqw] px-[8cqw]">
              {["+2,400", "-850", "+12,000"].map((amt, i) => (
                <motion.div
                  key={amt}
                  variants={at(0.8 + i * 0.1, { opacity: 0, x: 6 }, { opacity: 1, x: 0 })}
                  className="flex items-center gap-[4cqw]"
                >
                  <span className={`size-[11cqw] shrink-0 rounded-full ${i === 1 ? "bg-neutral-200" : "bg-accent/15"}`} />
                  <span className="h-[3.5cqw] flex-1 rounded-full bg-neutral-200" />
                  <span className="text-[5cqw] font-medium">{amt}</span>
                </motion.div>
              ))}
            </div>

            {/* iOS banner notification, dropping in under the Dynamic Island. */}
            <motion.div
              variants={at(1.4, { opacity: 0, y: "-160%" }, { opacity: 1, y: "0%" }, 0.6)}
              className="absolute inset-x-[3.5cqw] top-[15cqw] z-10 flex items-center gap-[3cqw] rounded-[6cqw] bg-white/90 p-[3cqw] shadow-[0_2cqw_6cqw_rgba(0,0,0,0.18)] ring-1 ring-black/5 backdrop-blur"
            >
              <span className="flex size-[10cqw] shrink-0 items-center justify-center rounded-[2.6cqw] bg-green-500">
                <svg viewBox="0 0 12 12" className="size-[6cqw]" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 6.2l2 2 4-4" />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <p className="flex items-baseline justify-between gap-[2cqw] text-[4.6cqw] font-semibold leading-none">
                  Payment received
                  <span className="text-[3.6cqw] font-normal text-neutral-400">now</span>
                </p>
                <p className="mt-[1.4cqw] truncate text-[4cqw] leading-none text-neutral-500">KES 2,400 from Mary W.</p>
              </div>
            </motion.div>
          </IPhone>
        </div>

        {/* One codebase, both platforms. */}
        <motion.span
          variants={at(0.2, { opacity: 0, y: -6 }, { opacity: 1, y: 0 })}
          className="absolute left-[5%] top-[6%] z-20 inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[7.5px] font-semibold text-neutral-700 shadow-sm"
        >
          iOS + Android
          <span className="font-normal text-neutral-400">· one codebase</span>
        </motion.span>

      </motion.div>
    </div>
  );
}

/* --------------------------------------------------- APIs & integrations */

const nodes: { logo: BrandLogo; x: number; y: number }[] = [
  { logo: "stripe", x: 34, y: 30 },
  { logo: "whatsapp", x: 206, y: 30 },
  { logo: "openai", x: 22, y: 92 },
  { logo: "slack", x: 218, y: 92 },
  { logo: "hubspot", x: 120, y: 16 },
];
const HUB = { x: 120, y: 82 };

const requests = [
  "POST /webhooks/stripe  200 · 42ms",
  "POST /whatsapp/send    200 · 88ms",
  "POST /ai/summarize     200 · 1.2s",
  "POST /slack/notify     200 · 37ms",
  "GET  /crm/contacts     200 · 64ms",
];

export function ApiVisual() {
  const { ref, play } = useLoop<HTMLDivElement>(60000);
  const [tick, setTick] = useState(0);

  // New request every 1.4s while on screen.
  useEffect(() => {
    if (play !== "show") return;
    const id = setInterval(() => setTick((t) => t + 1), 1400);
    return () => clearInterval(id);
  }, [play]);

  const shown = [0, 1, 2].map((k) => requests[(tick + k) % requests.length]);

  return (
    <div ref={ref} className="absolute inset-0">
      <svg viewBox="0 0 240 180" className="absolute inset-0 size-full" aria-hidden="true">
        {nodes.map((n) => (
          <g key={n.logo}>
            <path
              id={`api-${n.logo}`}
              d={`M${n.x} ${n.y} L${HUB.x} ${HUB.y}`}
              stroke="#d4d4d4"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />
            {/* Request travelling into the hub. */}
            <circle r="2.2" fill={brandLogos[n.logo].hex} className="motion-reduce:hidden">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin={`${nodes.indexOf(n) * 0.35}s`}>
                <mpath href={`#api-${n.logo}`} />
              </animateMotion>
            </circle>
          </g>
        ))}
        {nodes.map((n) => {
          const b = brandLogos[n.logo];
          return (
            <g key={`${n.logo}-node`}>
              <circle cx={n.x} cy={n.y} r="13" fill="#fff" stroke="#e5e5e5" />
              <g transform={`translate(${n.x - 7} ${n.y - 7}) scale(${14 / 24})`}>
                <path d={b.path} fill={b.hex} />
              </g>
            </g>
          );
        })}
        <rect x={HUB.x - 26} y={HUB.y - 15} width="52" height="30" rx="9" fill="#111" />
        <text x={HUB.x} y={HUB.y + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">
          API
        </text>
      </svg>

      {/* Request log */}
      <div className="absolute inset-x-[7%] bottom-[6%] overflow-hidden rounded-lg bg-neutral-900 px-2 py-1.5 font-mono text-[7px] leading-[1.7] shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
        <AnimatePresence initial={false} mode="popLayout">
          {shown.map((r, k) => (
            <motion.p
              key={`${tick + k}`}
              layout
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: k === 2 ? 1 : 0.55, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="whitespace-pre text-neutral-300"
            >
              <span className="text-green-400">●</span> {r}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ------------------------------------------------------- MVPs for startups */

const phases = [
  { name: "Discovery", start: 0, span: 1 },
  { name: "Design", start: 1, span: 1.5 },
  { name: "Build", start: 2, span: 3 },
  { name: "Ship", start: 5, span: 1 },
];
const confetti = [
  { x: -18, y: -14, c: "bg-accent" },
  { x: 16, y: -16, c: "bg-sky-400" },
  { x: -22, y: 4, c: "bg-green-400" },
  { x: 22, y: 6, c: "bg-amber-400" },
  { x: -8, y: -22, c: "bg-fuchsia-400" },
  { x: 8, y: 18, c: "bg-accent" },
];

export function MvpVisual() {
  const { ref, run, play } = useLoop<HTMLDivElement>(7000);
  const fillAt = (i: number) => 0.3 + i * 0.45;
  const done = fillAt(phases.length) + 0.1;
  return (
    <div ref={ref} className="absolute inset-0 flex items-center px-[7%]">
      <motion.div
        key={run}
        initial="hidden"
        animate={play}
        className="relative w-full rounded-xl border border-black/[0.05] bg-white p-3 shadow-sm"
      >
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-semibold">Launch plan</p>
          <span className="rounded-full bg-foreground px-1.5 py-0.5 text-[7px] font-medium text-white">6 weeks</span>
        </div>
        <div className="mt-2 grid grid-cols-[42px_1fr] items-center gap-y-1.5">
          <span />
          <div className="grid grid-cols-6 text-center text-[6.5px] text-neutral-400">
            {[1, 2, 3, 4, 5, 6].map((w) => (
              <span key={w}>W{w}</span>
            ))}
          </div>
          {phases.map((p, i) => (
            <div key={p.name} className="contents">
              <span className="text-[7.5px] font-medium text-neutral-600">{p.name}</span>
              <div className="relative h-2.5 rounded-full bg-neutral-100">
                <motion.span
                  variants={at(fillAt(i), { scaleX: 0 }, { scaleX: 1 }, 0.45)}
                  className={`absolute inset-y-0 origin-left rounded-full ${i === phases.length - 1 ? "bg-accent" : "bg-neutral-800"}`}
                  style={{ left: `${(p.start / 6) * 100}%`, width: `${(p.span / 6) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Launch: pill pops in with a little confetti. */}
        <div className="mt-2.5 flex justify-end">
          <motion.span
            variants={at(done, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1 }, 0.4)}
            className="relative rounded-full bg-accent px-2 py-0.5 text-[8px] font-semibold text-white shadow-[0_4px_12px_rgba(245,105,27,0.4)]"
          >
            v1.0 live 🚀
            {confetti.map((c, i) => (
              <motion.span
                key={i}
                variants={at(done + 0.05, { opacity: 0, x: 0, y: 0 }, { opacity: [0, 1, 0], x: c.x, y: c.y }, 0.9)}
                className={`absolute left-1/2 top-1/2 size-1 rounded-full ${c.c}`}
              />
            ))}
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}
