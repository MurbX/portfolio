import * as motion from "motion/react-client";
import { Card } from "@/components/card";
import { githubUser, nextUp, tools, type Tool } from "@/content/tools";
import { getRepo, type RepoInfo } from "@/lib/github";
import { fadeUp, stagger } from "@/lib/motion";

export async function Tools() {
  const repos = await Promise.all(tools.map((t) => getRepo(t.repo)));

  return (
    <motion.section
      id="tools"
      aria-labelledby="tools-heading"
      className="mt-20 scroll-mt-24"
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <span className="inline-flex h-[30px] items-center rounded-full bg-white px-3.5 text-[13px] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
          Tools
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
          Open source
        </span>
      </motion.div>
      <motion.h2
        id="tools-heading"
        variants={fadeUp}
        className="mt-5 max-w-xl text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2rem]"
      >
        Tools I build in the open.
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-3 max-w-xl text-[15px] leading-[1.6] text-neutral-500">
        Personal projects I design, build and release for free. Download them, read the source, or star a
        repo to support the work.
      </motion.p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tools.map((tool, i) => (
          <ToolCard key={tool.repo} tool={tool} repo={repos[i]} />
        ))}
        <NextUpCard />
      </div>
    </motion.section>
  );
}

function ToolCard({ tool, repo }: { tool: Tool; repo: RepoInfo | null }) {
  const repoUrl = repo?.url ?? `https://github.com/${tool.repo}`;
  const release = repo?.release ?? null;
  const installer = release?.assets.find((a) => /setup.*\.exe$/i.test(a.name)) ?? release?.assets[0];
  const downloadUrl = installer?.url ?? `${repoUrl}/releases/latest`;
  const version = release?.tag.replace(/^v/, "");

  const meta = [
    release && `Released ${relativeDate(release.publishedAt)}`,
    repo?.language,
    repo?.license && `${repo.license} licence`,
    tool.platform,
  ].filter(Boolean);

  return (
    <motion.article
      variants={fadeUp}
      className="relative overflow-hidden rounded-[22px] bg-neutral-900 p-5 text-white shadow-[0_2px_16px_rgba(0,0,0,0.12)] md:col-span-2 sm:p-6"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-28 size-80 rounded-full bg-[radial-gradient(circle,rgba(245,105,27,0.35),transparent_62%)] blur-2xl"
      />

      <div className="relative flex items-center justify-between gap-3">
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-mono text-[11.5px] text-neutral-300 transition-colors hover:bg-white/15 hover:text-white"
        >
          <GitHubIcon className="size-3.5" />
          {tool.repo}
        </a>
        {repo && (
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-neutral-400">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-green-400/60 motion-reduce:animate-none" />
              <span className="relative size-2 rounded-full bg-green-400" />
            </span>
            Live from GitHub
          </span>
        )}
      </div>

      <div className="relative mt-6 flex flex-col">
        <div className="flex flex-wrap items-center gap-3">
          <RecordGlyph />
          <h3 className="text-[1.75rem] font-bold leading-none tracking-tight">{tool.name}</h3>
          {version && (
            <span className="rounded-full border border-white/15 px-2 py-0.5 font-mono text-[11px] text-neutral-300">
              v{version}
            </span>
          )}
        </div>
        <p className="mt-3 text-[14px] leading-[1.6] text-neutral-400">{tool.tagline}</p>
        {meta.length > 0 && <p className="mt-2 text-[12px] text-neutral-500">{meta.join(" · ")}</p>}

        <ul className="mt-5 grid gap-1 font-mono text-[11.5px] leading-snug lg:grid-cols-2">
          {tool.features.map((f) => (
            <li key={f} className="flex gap-2 rounded-md bg-green-500/[0.07] px-2.5 py-1.5 text-green-200/90">
              <span className="select-none text-green-400">+</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={downloadUrl}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[14px] font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 2.5v8M4.5 7.5L8 11l3.5-3.5M3 13.5h10" />
            </svg>
            Download for Windows
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 text-[14px] font-medium text-white transition-colors hover:bg-white/20"
          >
            <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 1.8l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.6l-3.8 2 .7-4.3-3.1-3 4.3-.6z" />
            </svg>
            Star on GitHub
            {repo && repo.stars > 0 && <span className="text-neutral-400">{repo.stars}</span>}
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function NextUpCard() {
  return (
    <motion.div variants={fadeUp} className="flex">
      <Card label="Personal projects" className="flex flex-1 flex-col p-5 pt-14">
        <div className="rounded-xl border border-dashed border-neutral-300 bg-white/60 px-3.5 py-3 font-mono text-[11.5px] leading-[1.8] text-neutral-500">
          <p>
            <span className="text-accent">$</span> git init next-tool
          </p>
          <p>
            <span className="text-accent">$</span> git commit -m &quot;wip&quot;
            <span className="ml-1 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] animate-pulse bg-neutral-400" />
          </p>
        </div>
        <h3 className="mt-5 text-[18px] font-semibold tracking-tight">{nextUp.title}</h3>
        <p className="mt-2 text-[13.5px] leading-[1.6] text-neutral-500">{nextUp.body}</p>
        <a
          href={`https://github.com/${githubUser}`}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex h-11 items-center justify-center gap-2 self-start rounded-full bg-foreground px-5 text-[14px] font-medium text-background transition-colors hover:bg-neutral-700"
        >
          <GitHubIcon className="size-4" />
          Follow @{githubUser}
        </a>
      </Card>
    </motion.div>
  );
}

// "today", "3 days ago", "2 months ago".
function relativeDate(iso: string) {
  const days = Math.round((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return "today";
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  if (days < 30) return rtf.format(-days, "day");
  if (days < 365) return rtf.format(-Math.round(days / 30), "month");
  return rtf.format(-Math.round(days / 365), "year");
}

// A record button: the tool's mark, drawn rather than an image.
function RecordGlyph() {
  return (
    <span className="relative flex size-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
      <span className="absolute size-5 rounded-full border-2 border-white/80" />
      <span className="size-2.5 animate-pulse rounded-full bg-[#ff4d4d] motion-reduce:animate-none" />
    </span>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}
