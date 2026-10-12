import Image from "next/image";
import * as motion from "motion/react-client";
import type { ComponentProps } from "react";
import { Card } from "@/components/card";
import { HowIWork } from "@/components/how-i-work";
import { experience, location, playlist, reading } from "@/content/about";
import { stagger } from "@/lib/motion";

type MotionDivProps = ComponentProps<typeof motion.div>;

function Experience() {
  return (
    <Card label="My Experience" className="aspect-square">
      {/* Scrolls if there are more entries than fit; edges fade out. */}
      <div className="absolute inset-0 overflow-y-auto px-4 pb-6 pt-12 [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent_36px,black_60px,black_calc(100%-28px),transparent)]">
        <ul className="ml-1 space-y-4 border-l border-neutral-300 py-1 pl-4">
          {experience.map((job) => (
            <li key={job.title + job.meta} className="relative">
              <span className="absolute -left-[20.5px] top-[5px] size-2 rounded-full bg-foreground" />
              <p className="text-[13.5px] font-medium leading-tight">{job.title}</p>
              <p className="mt-0.5 text-[12px] text-neutral-500">{job.meta}</p>
            </li>
          ))}
        </ul>
      </div>
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
