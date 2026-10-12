import * as motion from "motion/react-client";
import { site } from "@/content/site";
import { card } from "@/lib/motion";

// Dark call-to-action card used at the end of Services and on case-study pages.
export function CtaCard({
  label,
  eyebrow = "Something else?",
  title = "Not sure what you need yet?",
  body = "Tell me about the product or the problem. I’ll suggest the fastest path and give you a straight answer on cost and timeline.",
  className = "",
}: {
  label?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={card}
      whileHover="hover"
      className={`relative flex flex-col overflow-hidden rounded-[22px] bg-neutral-900 p-5 pt-12 text-white shadow-[0_2px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] ${className}`}
    >
      {label && (
        <span className="absolute left-2.5 top-2.5 inline-flex h-[30px] items-center rounded-full bg-white/10 px-3.5 text-[13px] font-medium text-white">
          {label}
        </span>
      )}
      <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium">
        <span className="size-2 rounded-full bg-green-400" />
        {site.availability}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-20 size-72 rounded-full bg-[radial-gradient(circle,rgba(245,105,27,0.6),transparent_62%)] blur-2xl"
      />

      <p className="relative text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
        {eyebrow}
      </p>
      <h3 className="relative mt-2 max-w-md text-[1.6rem] font-bold leading-tight tracking-tight">
        {title}
      </h3>
      <p className="relative mt-3 max-w-lg text-[13.5px] leading-[1.6] text-neutral-400">{body}</p>
      <div className="relative mt-auto flex flex-wrap items-center gap-4 pt-6">
        <a
          href={site.bookingUrl}
          className="inline-flex h-11 items-center rounded-full bg-white px-5 text-[14px] font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
        >
          Book a call
        </a>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 text-[14px] font-medium text-white transition-colors hover:bg-white/20"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.9L3.5 20.5l4.2-1.2A8.5 8.5 0 1 0 12 3.5z" />
            <path d="M9.2 8.6c.2 2.9 3.3 6 6.2 6.2l1.1-1.6-1.9-.9-.9.9a5.2 5.2 0 0 1-2.9-2.9l.9-.9-.9-1.9z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
