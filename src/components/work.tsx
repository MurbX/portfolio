import * as motion from "motion/react-client";
import { ProjectGrid } from "@/components/project-grid";
import { projects } from "@/content/projects";
import { fadeUp, stagger } from "@/lib/motion";

export function Work() {
  return (
    <motion.section
      id="work"
      aria-labelledby="work-heading"
      className="mt-20 scroll-mt-24"
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <span className="inline-flex h-[30px] items-center rounded-full bg-white px-3.5 text-[13px] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
          Selected work
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
          Portfolio
        </span>
      </motion.div>
      <motion.h2
        id="work-heading"
        variants={fadeUp}
        className="mt-5 max-w-xl text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2rem]"
      >
        Products I&rsquo;ve shipped.
      </motion.h2>

      <ProjectGrid projects={projects} />
    </motion.section>
  );
}
