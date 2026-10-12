import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-20 scroll-mt-24">
      <div className="card-grain relative overflow-hidden rounded-[22px] border border-black/[0.06] bg-[#fbfbfb] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] sm:p-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Home" className="inline-flex text-foreground">
              <Logo />
            </Link>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
              Get in touch
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block break-all text-[1.5rem] font-bold tracking-tight transition-colors hover:text-accent sm:text-[2rem]"
            >
              {site.email}
            </a>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-neutral-600">
              {site.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.bookingUrl}
                className="inline-flex h-11 items-center rounded-full bg-foreground px-5 text-[14px] font-medium text-background transition-colors hover:bg-neutral-800"
              >
                Book a call
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center rounded-full border border-neutral-300 bg-white px-5 text-[14px] font-medium transition-colors hover:bg-neutral-100"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">Site</p>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[14px] font-medium text-neutral-700 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[14px] font-medium text-neutral-700 transition-colors hover:text-foreground"
                  >
                    {s.label} <span aria-hidden="true">&#8599;</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.06] pt-6 text-[12.5px] text-neutral-500">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-green-500" />
            {site.availability} &middot; {site.highlight}
          </p>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top <span aria-hidden="true">&uarr;</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
