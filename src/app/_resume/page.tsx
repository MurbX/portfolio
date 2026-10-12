import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { resume, type ResumeProject } from "@/content/resume";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Resume — ${site.name}`,
  description: `${site.name}, ${resume.title}. ${site.description}`,
  alternates: { canonical: "/resume" },
};

// Two A4 pages, sized in millimetres so the screen view matches the PDF exactly.
// Not a live page: the _resume folder is private. See src/content/resume.ts for
// how to regenerate public/resume.pdf.
export default function ResumePage() {
  const host = new URL(site.url).host;
  const linkedin = site.socials.find((s) => s.label === "LinkedIn")?.href ?? "";
  const github = site.socials.find((s) => s.label === "GitHub")?.href ?? "";
  const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  const contact: { icon: IconName; text: string; href?: string }[] = [
    { icon: "mail", text: site.email, href: `mailto:${site.email}` },
    { icon: "phone", text: resume.phone },
    { icon: "pin", text: resume.location },
    { icon: "globe", text: host, href: site.url },
    { icon: "linkedin", text: strip(linkedin), href: linkedin },
    { icon: "github", text: strip(github), href: github },
  ];

  return (
    <div className="min-h-screen bg-neutral-200/70 py-8 print:bg-white print:py-0">
      {/* Screen-only toolbar */}
      <div className="mx-auto mb-6 flex w-[210mm] max-w-full items-center justify-between px-4 print:hidden">
        <Link href="/" className="text-[14px] font-medium text-neutral-600 hover:text-foreground">
          &larr; Back to site
        </Link>
        <a
          href={site.resume}
          download="Brian-Mutuku-Resume.pdf"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-[14px] font-medium text-background transition-colors hover:bg-neutral-800"
        >
          <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 2.5v8M4.5 7.5L8 11l3.5-3.5M3 13.5h10" />
          </svg>
          Download PDF
        </a>
      </div>

      <div className="flex flex-col items-center gap-8 overflow-x-auto px-4 print:block print:gap-0 print:overflow-visible print:px-0">
        {/* ------------------------------------------------------------ Page 1 */}
        <Page number={1} host={host}>
          <header className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-[5mm]">
              <div className="relative size-[24mm] shrink-0 overflow-hidden rounded-full ring-[1.2mm] ring-[#fde4d5]">
                <Image src={resume.photo} alt={site.name} fill sizes="120px" unoptimized className="object-cover" priority />
              </div>
              <div>
                <h1 className="text-[26pt] font-bold leading-none tracking-[-0.03em]">{site.name}</h1>
                <p className="mt-[2mm] text-[11pt] font-semibold tracking-tight text-accent">{resume.title}</p>
                <p className="mt-[1mm] text-[8.5pt] text-neutral-500">{resume.subtitle}</p>
              </div>
            </div>
            <ul className="shrink-0 space-y-[1.2mm] text-right text-[8pt] text-neutral-600">
              {contact.map((c) => (
                <li key={c.text} className="flex items-center justify-end gap-[1.8mm]">
                  {c.href ? (
                    <a href={c.href} className="hover:text-foreground">
                      {c.text}
                    </a>
                  ) : (
                    c.text
                  )}
                  <Icon name={c.icon} />
                </li>
              ))}
            </ul>
          </header>

          {/* Stats strip */}
          <dl className="mt-[7mm] grid grid-cols-3 divide-x divide-neutral-200 rounded-[2px] border border-neutral-200">
            {resume.highlights.map((h) => (
              <div key={h.label} className="px-[5mm] py-[3mm]">
                <dt className="sr-only">{h.label}</dt>
                <dd className="text-[16pt] font-bold leading-none tracking-tight">{h.value}</dd>
                <dd className="mt-[1.2mm] text-[7.5pt] uppercase tracking-[0.12em] text-neutral-500">{h.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-[7mm] grid grid-cols-[1fr_56mm] gap-[8mm]">
            <main>
              <Section title="Profile">
                <p className="text-[8.8pt] leading-[1.6] text-neutral-700">{resume.summary}</p>
              </Section>

              <Section title="Experience" className="mt-[6mm]">
                <Role title={resume.role.title} org={resume.role.org} dates={resume.role.dates} />
                <p className="mt-[1.5mm] text-[8.2pt] leading-[1.5] text-neutral-500">{resume.role.intro}</p>
                <div className="mt-[3.5mm] space-y-[4mm]">
                  {resume.projectsPage1.map((p) => (
                    <Project key={p.name} project={p} />
                  ))}
                </div>
              </Section>
            </main>

            <aside className="rounded-[2px] bg-neutral-50 px-[5mm] py-[5mm] ring-1 ring-neutral-200/70">
              <Section title="Skills">
                <div className="space-y-[3.2mm]">
                  {resume.skills.map((g) => (
                    <div key={g.group}>
                      <p className="text-[8pt] font-semibold">{g.group}</p>
                      <div className="mt-[1.2mm] flex flex-wrap gap-[1.2mm]">
                        {g.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-[2px] bg-white px-[1.8mm] py-[0.5mm] text-[7.2pt] text-neutral-600 ring-1 ring-neutral-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Education" className="mt-[6mm]">
                <div className="space-y-[3mm]">
                  {resume.education.map((e) => (
                    <div key={e.title}>
                      <p className="text-[8.4pt] font-semibold leading-tight">{e.title}</p>
                      <p className="mt-[0.6mm] text-[7.8pt] text-neutral-600">{e.org}</p>
                      <p className="text-[7.4pt] text-neutral-400">{e.meta}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </aside>
          </div>
        </Page>

        {/* ------------------------------------------------------------ Page 2 */}
        <Page number={2} host={host}>
          <header className="flex items-end justify-between border-b border-neutral-200 pb-[3mm]">
            <div>
              <p className="text-[13pt] font-bold leading-none tracking-tight">{site.name}</p>
              <p className="mt-[1.2mm] text-[8.5pt] font-medium text-accent">{resume.title}</p>
            </div>
            <p className="text-[8pt] text-neutral-500">
              {site.email} · {resume.phone}
            </p>
          </header>

          <div className="mt-[6mm] grid grid-cols-[1fr_56mm] gap-[8mm]">
            <main>
              <Section title="Selected work, continued">
                <div className="space-y-[3mm]">
                  {resume.projectsPage2.map((p) => (
                    <Project key={p.name} project={p} />
                  ))}
                </div>
              </Section>

              <Section title="More projects" className="mt-[5mm]">
                <ul className="space-y-[1.4mm]">
                  {resume.moreProjects.map((m) => (
                    <li key={m.name} className="text-[8.2pt] leading-[1.45] text-neutral-700">
                      <span className="font-semibold text-foreground">{m.name}</span>
                      <span className="text-neutral-500"> — {m.detail}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Earlier" className="mt-[5mm]">
                <Role title={resume.earlierRole.title} org={resume.earlierRole.org} dates={resume.earlierRole.dates} />
                <Stack items={resume.earlierRole.stack} />
                <p className="mt-[1.5mm] text-[8.2pt] leading-[1.5] text-neutral-700">{resume.earlierRole.body}</p>
              </Section>
            </main>

            <aside className="space-y-[6mm]">
              <div className="rounded-[2px] bg-neutral-900 px-[5mm] py-[5mm] text-white">
                <p className="text-[7.5pt] font-semibold uppercase tracking-[0.16em] text-neutral-400">Open source</p>
                {resume.openSource.map((o) => (
                  <div key={o.name} className="mt-[2.5mm]">
                    <p className="flex items-baseline justify-between gap-2">
                      <span className="text-[10pt] font-bold">{o.name}</span>
                      <span className="text-[7pt] text-neutral-400">{o.meta}</span>
                    </p>
                    <p className="mt-[0.8mm] text-[7.8pt] font-medium text-neutral-300">{o.kind}</p>
                    <p className="mt-[1.5mm] text-[7.6pt] leading-[1.5] text-neutral-400">{o.body}</p>
                    <p className="mt-[2mm] font-mono text-[7pt] text-accent">{o.link}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[2px] bg-neutral-50 px-[5mm] py-[5mm] ring-1 ring-neutral-200/70">
                <Section title="References">
                  <div className="space-y-[3mm]">
                    {resume.references.map((r) => (
                      <div key={r.name}>
                        <p className="text-[8.4pt] font-semibold leading-tight">{r.name}</p>
                        <p className="mt-[0.6mm] text-[7.8pt] text-neutral-600">{r.role}</p>
                        <p className="text-[7.4pt] text-neutral-400">{r.place}</p>
                      </div>
                    ))}
                    <p className="pt-[1mm] text-[7.4pt] italic text-neutral-500">Contact details on request.</p>
                  </div>
                </Section>
              </div>

              <div className="rounded-[2px] border border-dashed border-neutral-300 px-[5mm] py-[4mm]">
                <p className="text-[7.5pt] font-semibold uppercase tracking-[0.16em] text-neutral-400">Portfolio</p>
                <p className="mt-[1.5mm] text-[8pt] leading-[1.5] text-neutral-600">
                  Case studies, live mockups and tools at{" "}
                  <a href={site.url} className="font-semibold text-foreground">
                    {host}
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </Page>
      </div>
    </div>
  );
}

function Page({ number, host, children }: { number: number; host: string; children: ReactNode }) {
  return (
    <article className="relative h-[297mm] w-[210mm] shrink-0 overflow-hidden bg-white px-[14mm] pb-[16mm] pt-[13mm] text-foreground shadow-[0_10px_40px_rgba(0,0,0,0.12)] [break-after:page] print:shadow-none">
      {/* Solid accent bar along the top edge (plain hex: PDF viewers can tint faded colours). */}
      <span className="absolute inset-x-0 top-0 h-[1.6mm] bg-[#f5691b]" />
      {children}
      <footer className="absolute inset-x-[14mm] bottom-[8mm] flex justify-between text-[7pt] text-neutral-400">
        <span>{host}</span>
        <span>{number} / 2</span>
      </footer>
    </article>
  );
}

function Section({ title, className = "", children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <section className={className}>
      <h2 className="mb-[2.5mm] flex items-center gap-[2mm] text-[7.5pt] font-semibold uppercase tracking-[0.16em] text-neutral-400">
        <span className="h-[1.6mm] w-[1.6mm] rounded-full bg-accent" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function Role({ title, org, dates }: { title: string; org: string; dates: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-[10.5pt] font-bold leading-tight tracking-tight">{title}</p>
        <p className="mt-[0.8mm] text-[8.6pt] font-medium text-neutral-500">{org}</p>
      </div>
      <p className="shrink-0 rounded-[2px] bg-neutral-100 px-[2.5mm] py-[0.6mm] text-[7.6pt] font-medium tabular-nums text-neutral-600">
        {dates}
      </p>
    </div>
  );
}

function Project({ project: p }: { project: ResumeProject }) {
  return (
    <div className="border-l-[0.6mm] border-neutral-200 pl-[3.5mm]">
      <p className="flex items-baseline justify-between gap-3">
        <span className="text-[9.6pt] font-semibold tracking-tight">
          {p.name} <span className="font-normal text-neutral-500">— {p.kind}</span>
        </span>
        {p.meta && <span className="shrink-0 text-[7.4pt] text-neutral-400">{p.meta}</span>}
      </p>
      <Stack items={p.stack} />
      <p className="mt-[1.2mm] text-[8.2pt] leading-[1.5] text-neutral-700">{p.body}</p>
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <p className="mt-[1mm] font-mono text-[6.8pt] uppercase tracking-[0.04em] text-[#e2601a]">{items.join(" · ")}</p>
  );
}

type IconName = "mail" | "phone" | "pin" | "globe" | "linkedin" | "github";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    mail: <path d="M2.5 4.5h11v7h-11zM2.5 4.5L8 9l5.5-4.5" />,
    phone: <path d="M5 2.5H3.5a1 1 0 00-1 1C2.5 9 7 13.5 12.5 13.5a1 1 0 001-1V11l-2.5-1-1.2 1.2A6 6 0 014.8 7.2L6 6 5 2.5z" />,
    pin: <path d="M8 14s4.5-4.2 4.5-7.5a4.5 4.5 0 00-9 0C3.5 9.8 8 14 8 14zM8 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />,
    globe: <path d="M8 13.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM2.5 8h11M8 2.5c1.6 1.6 2.3 3.4 2.3 5.5S9.6 11.9 8 13.5C6.4 11.9 5.7 10.1 5.7 8S6.4 4.1 8 2.5z" />,
    linkedin: <path d="M3.5 6.5v6M3.5 3.6v.1M6.5 12.5v-6M6.5 9c0-1.6 1-2.6 2.4-2.6s2.1 1 2.1 2.6v3.5" />,
    github: <path d="M6 13c-2.5.8-2.5-1.2-3.5-1.5M10 14.5v-2.2a1.9 1.9 0 00-.5-1.4c1.7-.2 3.5-.8 3.5-3.7a2.9 2.9 0 00-.8-2 2.7 2.7 0 00-.1-2s-.6-.2-2 .8a7 7 0 00-3.6 0c-1.4-1-2-.8-2-.8a2.7 2.7 0 00-.1 2 2.9 2.9 0 00-.8 2c0 2.9 1.8 3.5 3.5 3.7a1.9 1.9 0 00-.5 1.4v2.2" />,
  };
  return (
    <svg viewBox="0 0 16 16" className="size-[3mm] shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
