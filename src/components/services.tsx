import * as motion from "motion/react-client";
import { Card } from "@/components/card";
import { CtaCard } from "@/components/cta-card";
import { IPhone } from "@/components/iphone";
import { services, type ServiceKind } from "@/content/services";
import { fadeUp, stagger } from "@/lib/motion";

export function Services() {
  return (
    <motion.section
      id="services"
      aria-labelledby="services-heading"
      className="mt-20 scroll-mt-24"
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <span className="inline-flex h-[30px] items-center rounded-full bg-white px-3.5 text-[13px] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
          Services
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
          What I do
        </span>
      </motion.div>
      <motion.h2
        id="services-heading"
        variants={fadeUp}
        className="mt-5 max-w-xl text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2rem]"
      >
        From first prototype to production.
      </motion.h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s, i) => (
          <Card
            key={s.kind}
            label={String(i + 1).padStart(2, "0")}
            className="flex flex-col p-5 pt-12"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
                <ServiceIcon kind={s.kind} />
              </span>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em]">{s.title}</h3>
            </div>
            <p className="mt-4 text-[14px] leading-[1.6] text-neutral-600">{s.description}</p>
            <p className="mt-3 text-[12px] text-neutral-400">{s.tags.join(" · ")}</p>

            <div className="mt-auto pt-5">
              <motion.div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/[0.04] bg-[#f1f1f1]"
                variants={{ hover: { scale: 1.03 } }}
              >
                <Visual kind={s.kind} />
              </motion.div>
            </div>
          </Card>
        ))}

        {/* Dark call-to-action card completes the grid. */}
        <CtaCard label={String(services.length + 1).padStart(2, "0")} />
      </div>
    </motion.section>
  );
}

function ServiceIcon({ kind }: { kind: ServiceKind }) {
  const paths: Record<ServiceKind, string> = {
    web: "M3 5h18v11H3zM8 20h8M12 16v4",
    mobile: "M7 3h10v18H7zM11 18h2",
    migrate: "M4 7h13l-3-3M20 17H7l3 3",
    api: "M12 9a3 3 0 100 6 3 3 0 000-6zM12 3v4M12 17v4M3 12h4M17 12h4",
    mvp: "M5 19l3-3M14 4c3 0 5 2 5 5l-8 8-4-4 7-9zM9 12l-4 1M12 15l-1 4",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[kind]} />
    </svg>
  );
}

// Small CSS/SVG illustrations in the site's own style.
function Visual({ kind }: { kind: ServiceKind }) {
  switch (kind) {
    case "web":
      return (
        // Browser window, cropped at the panel's bottom edge.
        <div className="absolute inset-x-[8%] top-[12%] h-[120%] overflow-hidden rounded-xl border border-black/[0.05] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-1.5 border-b border-black/[0.05] px-3 py-2">
            <span className="size-2 rounded-full bg-neutral-300" />
            <span className="size-2 rounded-full bg-neutral-300" />
            <span className="size-2 rounded-full bg-neutral-300" />
            <span className="ml-2 h-3 flex-1 rounded-full bg-neutral-100" />
          </div>
          <div className="flex gap-3 p-3">
            <div className="w-[22%] space-y-2">
              <span className="block h-2 w-full rounded-full bg-neutral-800" />
              <span className="block h-2 w-3/4 rounded-full bg-neutral-200" />
              <span className="block h-2 w-5/6 rounded-full bg-neutral-200" />
              <span className="block h-2 w-2/3 rounded-full bg-neutral-200" />
            </div>
            <div className="flex-1">
              <span className="block h-3 w-3/4 rounded-full bg-neutral-800" />
              <span className="mt-2 block h-2 w-full rounded-full bg-neutral-200" />
              <span className="mt-2 block h-2 w-5/6 rounded-full bg-neutral-200" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <span className="h-10 rounded-lg bg-accent/15" />
                <span className="h-10 rounded-lg bg-neutral-100" />
                <span className="h-10 rounded-lg bg-neutral-100" />
              </div>
              <span className="mt-3 block h-6 w-20 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      );

    case "mobile":
      return (
        <div className="absolute inset-0 overflow-hidden">
          {/* Second phone behind, for depth. */}
          <IPhone tone="light" className="absolute left-[12%] top-[18%] w-[44%] -rotate-[8deg] opacity-30" />

          {/* Main phone: a small finance app, cropped at the panel's bottom edge. */}
          <IPhone className="absolute left-1/2 top-[10%] w-[44%] -translate-x-1/2">
            <div className="mt-[2cqw] flex items-center justify-between px-[8cqw]">
              <div>
                <p className="text-[5cqw] leading-none text-neutral-400">Good morning</p>
                <p className="mt-[1.6cqw] text-[6.6cqw] font-semibold leading-none">Brian</p>
              </div>
              <span className="size-[12cqw] rounded-full bg-neutral-200" />
            </div>

            <div className="mx-[5cqw] mt-[6cqw] rounded-[8cqw] bg-neutral-900 p-[6cqw] text-white">
              <p className="text-[5cqw] leading-none text-neutral-400">Total balance</p>
              <p className="mt-[3cqw] whitespace-nowrap text-[8.4cqw] font-bold leading-none tracking-tight">KES 42,300</p>
              <div className="mt-[5cqw] flex h-[13cqw] items-end gap-[1.6cqw]">
                {[40, 65, 50, 80, 60, 100].map((h, i) => (
                  <span
                    key={h + i}
                    className={`w-full rounded-[1.6cqw] ${i === 5 ? "bg-accent" : "bg-white/25"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-[6cqw] space-y-[5cqw] px-[8cqw]">
              {["+2,400", "-850", "+12,000"].map((amt, i) => (
                <div key={amt} className="flex items-center gap-[4cqw]">
                  <span className={`size-[11cqw] shrink-0 rounded-full ${i === 1 ? "bg-neutral-200" : "bg-accent/15"}`} />
                  <span className="h-[3.5cqw] flex-1 rounded-full bg-neutral-200" />
                  <span className="text-[5cqw] font-medium">{amt}</span>
                </div>
              ))}
            </div>
          </IPhone>

          {/* Floating notification. */}
          <div className="absolute right-[6%] top-[12%] flex items-center gap-1.5 rounded-lg bg-white px-2 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
            <span className="flex size-4 items-center justify-center rounded-full bg-green-500">
              <svg viewBox="0 0 12 12" className="size-2.5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6.2l2 2 4-4" />
              </svg>
            </span>
            <div>
              <p className="text-[7px] font-semibold leading-none">Payment received</p>
              <p className="mt-0.5 text-[6px] leading-none text-neutral-400">KES 2,400 &middot; just now</p>
            </div>
          </div>
        </div>
      );

    case "migrate":
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-[8%]">
          <div className="grid w-[34%] grid-cols-2 gap-1.5 rounded-xl border border-black/[0.05] bg-white p-2 shadow-sm">
            <span className="aspect-square rounded-md bg-sky-200" />
            <span className="aspect-square rounded-md bg-amber-200" />
            <span className="aspect-square rounded-md bg-emerald-200" />
            <span className="aspect-square rounded-md bg-fuchsia-200" />
          </div>
          <svg viewBox="0 0 24 24" className="size-6 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 12h16M14 6l6 6-6 6" />
          </svg>
          <div className="w-[42%] space-y-1.5 rounded-xl bg-neutral-900 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
            <span className="block h-1.5 w-1/2 rounded-full bg-accent" />
            <span className="block h-1.5 w-3/4 rounded-full bg-neutral-500" />
            <span className="block h-1.5 w-2/3 rounded-full bg-emerald-400" />
            <span className="block h-1.5 w-1/3 rounded-full bg-neutral-500" />
            <span className="block h-1.5 w-3/5 rounded-full bg-white" />
          </div>
        </div>
      );

    case "api":
      return (
        <svg viewBox="0 0 240 180" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path
            d="M120 90L44 40M120 90L44 140M120 90L196 40M120 90L196 140M120 90V22M120 90V158"
            stroke="#cfcfcf"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {[
            [44, 40, false],
            [196, 40, true],
            [44, 140, true],
            [196, 140, false],
            [120, 22, false],
            [120, 158, false],
          ].map(([x, y, accent]) => (
            <g key={`${x}-${y}`}>
              <circle cx={x as number} cy={y as number} r="13" fill={accent ? "#f5691b" : "#fff"} stroke={accent ? "#f5691b" : "#e3e3e3"} />
              <circle cx={x as number} cy={y as number} r="3.5" fill={accent ? "#fff" : "#a3a3a3"} />
            </g>
          ))}
          <rect x="82" y="66" width="76" height="48" rx="12" fill="#111" />
          <text x="120" y="96" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">
            API
          </text>
        </svg>
      );

    case "mvp":
      return (
        <div className="absolute inset-0 flex flex-col justify-center gap-3 px-[10%]">
          <div className="rounded-xl border border-black/[0.05] bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between text-[10px] font-medium text-neutral-500">
              <span>Idea</span>
              <span>Launch</span>
            </div>
            <div className="relative mt-2 h-1.5 rounded-full bg-neutral-200">
              <span className="absolute inset-y-0 left-0 w-[78%] rounded-full bg-accent" />
              {[0, 26, 52, 78].map((p) => (
                <span
                  key={p}
                  className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-accent"
                  style={{ left: `${p}%` }}
                />
              ))}
            </div>
            <div className="mt-2 grid grid-cols-4 text-[9px] text-neutral-400">
              <span>Discovery</span>
              <span>Design</span>
              <span>Build</span>
              <span>Ship</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-neutral-900 px-2.5 py-1 text-[10px] font-medium text-white">6 weeks</span>
            <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-medium text-neutral-600 shadow-sm">Healthcare</span>
            <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-medium text-neutral-600 shadow-sm">Fintech</span>
          </div>
        </div>
      );
  }
}
