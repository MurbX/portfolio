"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/card";
import { ProjectMedia } from "@/components/project-media";
import type { Project } from "@/content/projects";

// How many projects show before "Show all".
const INITIAL = 6;

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, INITIAL);

  return (
    <>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-6">
        {visible.map((project, i) => (
          <motion.div
            key={project.slug}
            className={project.featured ? "sm:col-span-2 md:col-span-3" : "md:col-span-2"}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: (i % 3) * 0.08 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {projects.length > INITIAL && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex h-12 items-center rounded-full border border-neutral-300 bg-white px-6 text-[14px] font-medium transition-colors hover:bg-neutral-100"
          >
            {expanded ? "Show fewer" : `Show all ${projects.length} projects`}
          </button>
        </div>
      )}
    </>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const cover = p.gallery[0];
  const sizes = p.featured
    ? "(min-width: 768px) 50vw, 100vw"
    : "(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw";

  return (
    <Card label={p.category} className="flex h-full flex-col p-3">
      <motion.div variants={{ hover: { scale: 1.02 } }}>
        <ProjectMedia
          src={cover.src}
          alt={cover.alt}
          frame={cover.frame}
          tint={p.tint}
          sizes={sizes}
          className="aspect-[16/10] rounded-2xl"
        />
      </motion.div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[16px] font-semibold leading-tight">
            {/* Stretched link: the whole card opens the case study. */}
            <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 hover:underline">
              {p.name}
            </Link>
          </h3>
          <span aria-hidden="true" className="text-neutral-400">
            &rarr;
          </span>
        </div>
        <p className="mt-1 text-[13.5px] leading-[1.5] text-neutral-600">{p.tagline}</p>
        <p className="mt-auto pt-3 text-[12px] text-neutral-400">{p.tags.join(" · ")}</p>
      </div>
    </Card>
  );
}
