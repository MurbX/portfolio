import Image from "next/image";
import * as motion from "motion/react-client";
import type { ComponentProps, CSSProperties } from "react";
import { Card } from "@/components/card";
import { CountUp } from "@/components/count-up";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { HowIWork } from "@/components/how-i-work";
import { experience, location, playlist, projectsDelivered, reading } from "@/content/about";
import { site } from "@/content/site";
import { fadeUp, stagger } from "@/lib/motion";

type MotionDivProps = ComponentProps<typeof motion.div>;

function Experience() {
  const since = experience[experience.length - 1].year;
  const years = new Date().getFullYear() - since;
  return (
    <Card label="My Experience" className="flex aspect-square flex-col">
      <ExperienceTimeline jobs={experience} />

      {/* Headline numbers: years from the timeline, projects from about.ts. Count up on view. */}
      <motion.dl variants={fadeUp} className="grid grid-cols-2 border-t border-black/6">
        <div className="px-4 py-3.5">
          <dt className="sr-only">Experience</dt>
          <dd className="text-[22px] font-semibold leading-none tracking-tight">
            <CountUp value={`${years}+ yrs`} />
          </dd>
          <dd className="mt-1.5 text-[11px] leading-snug text-neutral-500">building since {since}</dd>
        </div>
        <div className="border-l border-black/6 px-4 py-3.5">
          <dt className="sr-only">Projects</dt>
          <dd className="text-[22px] font-semibold leading-none tracking-tight">
            <CountUp value={projectsDelivered} />
          </dd>
          <dd className="mt-1.5 text-[11px] leading-snug text-neutral-500">projects delivered</dd>
        </div>
      </motion.dl>
    </Card>
  );
}

function Cover({
  cover,
  className,
  style,
  variants,
}: {
  cover: (typeof playlist.covers)[number];
  className: string;
  style?: MotionDivProps["style"];
  variants?: MotionDivProps["variants"];
}) {
  const classes = `absolute aspect-square overflow-hidden rounded-xl bg-linear-to-br shadow-[0_6px_16px_rgba(0,0,0,0.15)] ${cover.gradient} ${className}`;
  const image = cover.image && (
    <Image src={cover.image} alt="" fill sizes="120px" className="object-cover" />
  );
  // Covers link out to the artist when a URL is set.
  return cover.href ? (
    <motion.a
      href={cover.href}
      target="_blank"
      rel="noreferrer"
      aria-label={cover.label}
      style={style}
      variants={variants}
      className={classes}
    >
      {image}
    </motion.a>
  ) : (
    <motion.div style={style} variants={variants} className={classes}>
      {image}
    </motion.div>
  );
}

const notes = [
  { delay: 0, className: "left-[38%] size-6 text-neutral-800", drift: "-16px", double: false },
  { delay: 1.1, className: "left-[56%] size-7 text-accent", drift: "16px", double: true },
  { delay: 2.2, className: "left-[47%] size-5 text-neutral-500", drift: "4px", double: false },
];

// ♪ and ♫ drawn as SVG, so they look the same in every font.
function MusicNote({ double }: { double: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-full" fill="currentColor" aria-hidden="true">
      {double ? (
        <>
          <path d="M8 6.5L19 4v11.5h-2V7.1L10 8.6v9.9H8z" />
          <ellipse cx="6.2" cy="18.6" rx="3" ry="2.3" transform="rotate(-20 6.2 18.6)" />
          <ellipse cx="15.2" cy="15.8" rx="3" ry="2.3" transform="rotate(-20 15.2 15.8)" />
        </>
      ) : (
        <>
          <path d="M12 3h2c.4 2.6 2.9 3.7 4.3 5.6.9 1.3.6 3-.4 4-.1-2.8-2-4-3.9-4.5V18h-2z" />
          <ellipse cx="10" cy="18.6" rx="3.2" ry="2.4" transform="rotate(-20 10 18.6)" />
        </>
      )}
    </svg>
  );
}

function Playlist() {
  const [left, middle, right] = playlist.covers;
  return (
    <Card label="My music playlist" className="aspect-square">
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-[7%]">
        {/* Covers lift slightly on hover (no fanning — it clipped at the card edge). */}
        <div className="relative mb-[4%] h-[40%] w-full">
          <Cover
            cover={left}
            className="bottom-[6%] left-[3%] w-[31%]"
            style={{ rotate: -10 }}
            variants={{ hover: { y: -4 } }}
          />
          <Cover
            cover={right}
            className="bottom-[6%] right-[3%] w-[31%]"
            style={{ rotate: 10 }}
            variants={{ hover: { y: -4 } }}
          />
          {/* Music notes rising out of the record, staggered so one is always on its way. */}
          {notes.map((n) => (
            <span
              key={n.delay}
              aria-hidden="true"
              className={`float-note absolute bottom-[148%] z-[6] ${n.className}`}
              style={{ animationDelay: `${n.delay}s`, "--drift": n.drift } as CSSProperties}
            >
              <MusicNote double={n.double} />
            </span>
          ))}
          {/* Record peeking out of the middle sleeve: spins slowly, slides out on hover. */}
          <motion.div
            aria-hidden="true"
            className="absolute bottom-[58%] left-1/2 z-[5] aspect-square w-[33%] -translate-x-1/2"
            variants={{ hover: { y: -22 } }}
          >
            <div className="spin-record relative size-full rounded-full bg-[repeating-radial-gradient(circle,#161616_0_1.5px,#262626_1.5px_3px)] shadow-[0_6px_18px_rgba(0,0,0,0.3)]">
              <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_30deg,transparent_0deg,rgba(255,255,255,0.14)_40deg,transparent_80deg,transparent_180deg,rgba(255,255,255,0.1)_220deg,transparent_260deg)]" />
              <span className="absolute inset-[32%] overflow-hidden rounded-full ring-2 ring-black/40">
                {middle.image ? (
                  <Image src={middle.image} alt="" fill sizes="60px" className="object-cover" />
                ) : (
                  <span className={`absolute inset-0 bg-linear-to-br ${middle.gradient}`} />
                )}
              </span>
              <span className="absolute left-1/2 top-1/2 size-[6%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4f4f4]" />
            </div>
          </motion.div>
          <Cover
            cover={middle}
            className="bottom-[14%] left-1/2 z-10 w-[35%] -translate-x-1/2 border-[3px] border-white shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
            variants={{ hover: { y: -8 } }}
          />
        </div>
        <p className="text-[15px] font-semibold">{playlist.name}</p>
        <a
          href={playlist.url}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-neutral-500 transition-colors hover:text-foreground"
        >
          <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
            <circle cx="12" cy="12" r="12" fill="#1DB954" />
            <path
              d="M6.5 9.5c3.5-1 8-.7 11 1.2M7.2 12.6c3-.8 6.6-.5 9.2 1.1M7.9 15.5c2.4-.6 5.2-.4 7.3.9"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          Listen on Spotify
        </a>
      </div>
    </Card>
  );
}

function Reading() {
  return (
    <Card label="What I'm reading" className="aspect-square">
      <div className="px-4 pt-[52px]">
        <a
          href={reading.url}
          target="_blank"
          rel="noreferrer"
          className="block max-w-[190px] text-[15px] font-semibold leading-tight hover:underline"
        >
          {reading.title}
        </a>
        <p className="mt-1 text-[12px] text-neutral-500">{reading.author}</p>
      </div>
      {/* Book, cropped by the card's bottom edge; lifts on hover. */}
      <motion.div
        className="absolute left-[18%] top-[40%] aspect-[7/9] w-[48%] overflow-hidden rounded-r-md bg-accent shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
        style={{ transformPerspective: 700, rotateY: -18, rotate: -3 }}
        variants={{ hover: { rotateY: -6, rotate: -1, y: -12 } }}
      >
        {reading.cover ? (
          <Image src={reading.cover} alt="" fill sizes="200px" className="object-cover" />
        ) : (
          <span className="absolute inset-0 whitespace-pre-line p-3 text-[26px] font-bold leading-[1.05] tracking-tight text-neutral-900 [writing-mode:vertical-rl]">
            {reading.coverText}
          </span>
        )}
        {/* Spine shading for the 3D look. */}
        <span className="absolute inset-y-0 left-0 w-3.5 bg-linear-to-r from-black/25 to-transparent" />
      </motion.div>
    </Card>
  );
}

function MapCard() {
  return (
    <Card label="Map" className="aspect-square md:h-full">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${location.map})` }}
        variants={{ hover: { scale: 1.07 } }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-linear-to-t from-[#fbfbfb] from-35% to-transparent" />
      {/* Map pin with my photo, bobbing over a pulse where it points. */}
      <span aria-hidden="true" className="absolute left-1/2 top-[38%] -translate-x-1/2">
        {/* Ground: soft shadow and a slow pulse at the pin's tip. */}
        <span className="absolute left-1/2 top-0 h-2 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20 blur-[2px]" />
        <span className="absolute left-1/2 top-0 size-10 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-accent/25 [animation-duration:2.4s] motion-reduce:animate-none" />
        {/* Teardrop: a square with one sharp corner, turned so the point faces down. */}
        <span className="pin-bob absolute bottom-1 left-1/2 block -translate-x-1/2">
          <span className="relative block size-12 -rotate-45 rounded-[50%_50%_50%_0] bg-accent p-[3px] shadow-[0_6px_16px_rgba(245,105,27,0.45)]">
            <span className="relative block size-full rotate-45 overflow-hidden rounded-full border-2 border-white">
              <Image src={site.avatar} alt="" fill sizes="48px" className="object-cover" />
            </span>
          </span>
        </span>
      </span>
      <div className="absolute inset-x-0 bottom-[7%] text-center">
        <p className="text-[1.25rem] font-semibold uppercase tracking-[0.3em]">
          {location.city}
        </p>
        <p className="mt-0.5 text-[10px] uppercase tracking-[0.35em] text-neutral-500">
          {location.country}
        </p>
        <p className="mt-1.5 font-mono text-[9px] tracking-[0.15em] text-neutral-400">
          {location.coords}
        </p>
      </div>
    </Card>
  );
}

export function Bento() {
  return (
    <motion.section
      aria-label="About me"
      className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
      variants={stagger(0.08, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Experience />
      <Playlist />
      <Reading />
      <MapCard />
      <Card label="How I work" className="flex flex-col sm:col-span-2">
        <HowIWork />
      </Card>
    </motion.section>
  );
}
