import Image from "next/image";
import * as motion from "motion/react-client";
import { site } from "@/content/site";
import { fadeUp, pop, stagger } from "@/lib/motion";

export function Hero() {
  return (
    <motion.section
      className="mt-10 lg:mt-14"
      variants={stagger(0.12, 0.1)}
      initial="hidden"
      animate="show"
    >
      <h1 className="text-[2.25rem] font-bold leading-[1.25] tracking-[-0.02em] sm:text-[2.875rem] sm:leading-[1.3] lg:text-[3.375rem] xl:text-[3.75rem]">
        <motion.span className="block" variants={fadeUp}>
          Hi, I&rsquo;m{" "}
          {/* Fixed-height inline box so the oversized avatar doesn't stretch the line. */}
          <motion.span
            className="relative mx-[0.15em] inline-block h-[0.9em] w-[1.5em] align-middle"
            variants={pop}
          >
            <Image
              src={site.avatar}
              alt=""
              width={160}
              height={160}
              priority
              className="absolute left-0 top-[35%] aspect-square w-full -translate-y-1/2 rounded-[0.3em] border-[3px] border-surface bg-neutral-200 object-cover shadow-[0_6px_20px_rgba(0,0,0,0.18)] grayscale"
            />
          </motion.span>{" "}
          {site.name}!
        </motion.span>

        <motion.span className="block" variants={fadeUp}>
          <span className="text-muted">I&rsquo;m a</span> {site.role}{" "}
          <span className="text-muted">{site.connector}</span>
        </motion.span>

        <motion.span className="block text-accent" variants={fadeUp}>
          {site.highlight}.
          <span className="ml-4 inline-flex h-[38px] items-center gap-2.5 rounded-full border border-neutral-200 bg-surface px-3.5 align-middle text-[15px] font-medium leading-none tracking-normal text-foreground sm:ml-7">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-40 [animation-duration:2s]" />
              <span className="relative inline-flex size-2.5 rounded-full bg-green-500 ring-[3px] ring-green-500/25" />
            </span>
            {site.availability}
          </span>
        </motion.span>
      </h1>

      <motion.div
        className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-5"
        variants={fadeUp}
      >
        <div className="flex flex-wrap items-center gap-3">
          <motion.a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-[54px] items-center rounded-full bg-foreground px-7 text-xl font-medium text-background transition-colors hover:bg-neutral-800"
          >
            Book a call
          </motion.a>
          <motion.a
            href={site.resume}
            download="Brian-Mutuku-Resume.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-[54px] items-center gap-2.5 rounded-full border border-neutral-300 bg-white px-6 text-xl font-medium text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-colors hover:bg-neutral-50"
          >
            <svg viewBox="0 0 16 16" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 2.5v8M4.5 7.5L8 11l3.5-3.5M3 13.5h10" />
            </svg>
            Resume
          </motion.a>
        </div>
        <p className="max-w-[25rem] text-lg leading-7 text-neutral-700">
          {site.tagline}
        </p>
      </motion.div>
    </motion.section>
  );
}
