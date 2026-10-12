import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as motion from "motion/react-client";
import { CtaCard } from "@/components/cta-card";
import { ProjectMedia } from "@/components/project-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { fadeUp, stagger } from "@/lib/motion";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name} — ${site.name}`;
  const url = `/projects/${project.slug}`;
  // Nested openGraph/twitter objects replace the layout's, so repeat the shared fields.
  // The image comes from opengraph-image.tsx in this folder.
  return {
    title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: { type: "article", url, siteName: site.name, title, description: project.summary, locale: "en_US" },
    twitter: { card: "summary_large_image", creator: site.xHandle, title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const [hero, ...gallery] = project.gallery;
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const facts: [string, string | undefined][] = [
    ["Role", project.role],
    ["Year", project.year],
    ["Type", project.type],
    ["Duration", project.duration],
    ["Client", project.client],
    ["Team", project.team],
  ];

  return (
    <div className="mx-auto w-full max-w-[72rem] px-6 pb-10">
      <SiteHeader />

      <motion.main className="mt-10" variants={stagger(0.08)} initial="hidden" animate="show">
        <motion.div variants={fadeUp}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-neutral-500 transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">&larr;</span> All work
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex h-[30px] items-center rounded-full bg-white px-3.5 text-[13px] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
              {project.category}
            </span>
            <h1 className="mt-4 text-[2.5rem] font-bold leading-tight tracking-tight sm:text-[3rem]">
              {project.name}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-neutral-600">{project.summary}</p>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-[15px] font-medium text-background transition-colors hover:bg-neutral-800"
            >
              Visit live site <span aria-hidden="true">&#8599;</span>
            </a>
          )}
        </motion.div>

        {/* Key facts */}
        <motion.dl variants={fadeUp} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {facts
            .filter((f): f is [string, string] => Boolean(f[1]))
            .map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-black/[0.06] bg-white/70 px-4 py-3"
              >
                <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                  {label}
                </dt>
                <dd className="mt-1 text-[13.5px] font-medium leading-snug">{value}</dd>
              </div>
            ))}
        </motion.dl>

        <motion.div variants={fadeUp} className="mt-8">
          <ProjectMedia
            src={hero.src}
            alt={hero.alt}
            frame={hero.frame}
            tint={project.tint}
            sizes="(min-width: 1152px) 1104px, 100vw"
            priority
            className={`rounded-[22px] border border-black/[0.06] ${
              hero.frame === "browser" ? "aspect-[16/10]" : "aspect-[16/9]"
            }`}
          />
        </motion.div>

        {/* About + highlights */}
        <motion.section
          variants={fadeUp}
          className="mt-14 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14"
        >
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
              About the project
            </h2>
            <div className="mt-4 space-y-4 text-[16.5px] leading-[1.7] text-neutral-700">
              {project.about.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            {project.agency && (
              <p className="mt-6 text-[13px] text-neutral-500">
                Built with the team at{" "}
                <span className="font-medium text-neutral-700">{project.agency}</span>.
              </p>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                Highlights
              </h2>
              <ul className="mt-4 space-y-2.5">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] leading-snug">
                    <svg viewBox="0 0 16 16" className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true">
                      <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15" />
                      <path d="M4.5 8.2l2.3 2.3 4.7-4.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                Stack
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[12.5px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.deliverables && (
              <div>
                <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                  Delivered
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-neutral-900 px-3 py-1.5 text-[12.5px] font-medium text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {gallery.length > 0 && (
          <section className="mt-14" aria-label="Gallery">
            <div className="grid gap-6 sm:grid-cols-2">
              {gallery.map((item, i) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18, delay: (i % 2) * 0.08 }}
                >
                  <ProjectMedia
                    src={item.src}
                    alt={item.alt}
                    frame={item.frame}
                    tint={project.tint}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="aspect-[16/10] rounded-[22px] border border-black/[0.06]"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Previous / next */}
        <nav className="mt-16 grid gap-6 sm:grid-cols-2" aria-label="More projects">
          {[
            { label: "Previous", project: prev, arrow: "←" },
            { label: "Next", project: next, arrow: "→" },
          ].map(({ label, project: p, arrow }) => (
            <Link
              key={label}
              href={`/projects/${p.slug}`}
              className={`group flex items-center gap-4 rounded-[22px] border border-black/[0.06] bg-white/70 p-4 transition-colors hover:bg-white ${
                label === "Next" ? "sm:flex-row-reverse sm:text-right" : ""
              }`}
            >
              <ProjectMedia
                src={p.gallery[0].src}
                alt=""
                frame={p.gallery[0].frame}
                tint={p.tint}
                sizes="160px"
                className="aspect-[4/3] w-28 shrink-0 rounded-xl"
              />
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                  {arrow} {label}
                </p>
                <p className="mt-1 truncate text-[16px] font-semibold group-hover:underline">{p.name}</p>
                <p className="mt-0.5 truncate text-[13px] text-neutral-500">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </nav>

        <div className="mt-16">
          <CtaCard
            eyebrow="Have a similar project?"
            title="Let’s build yours."
            body="Tell me what you’re working on and I’ll come back with an approach, a timeline and a straight answer on cost."
            className="min-h-[18rem]"
          />
        </div>
      </motion.main>
      <SiteFooter />
    </div>
  );
}
