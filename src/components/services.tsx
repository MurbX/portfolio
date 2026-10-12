import * as motion from "motion/react-client";
import { Card } from "@/components/card";
import { CtaCard } from "@/components/cta-card";
import { MigrateVisual } from "@/components/migrate-visual";
import { ApiVisual, MobileVisual, MvpVisual, WebVisual } from "@/components/service-visuals";
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
          <Card key={s.kind} className="flex flex-col p-5">
            {/* One header row: icon and name in a pill, the step number quietly on the right. */}
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-9 min-w-0 items-center gap-2.5 rounded-full bg-white py-1 pl-1 pr-4 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                  <ServiceIcon kind={s.kind} />
                </span>
                <h3 className="truncate text-[12px] font-semibold uppercase tracking-[0.1em]">{s.title}</h3>
              </span>
              <span className="font-mono text-[12px] tabular-nums text-neutral-400">
                {String(i + 1).padStart(2, "0")}
              </span>
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
        <CtaCard quickPicks />
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
      className="size-[15px]"
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

// Animated illustrations, one per service (see service-visuals.tsx).
function Visual({ kind }: { kind: ServiceKind }) {
  switch (kind) {
    case "web":
      return <WebVisual />;
    case "mobile":
      return <MobileVisual />;
    case "migrate":
      return <MigrateVisual />;
    case "api":
      return <ApiVisual />;
    case "mvp":
      return <MvpVisual />;
  }
}
