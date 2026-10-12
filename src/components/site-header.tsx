import Link from "next/link";
import * as motion from "motion/react-client";
import { Logo } from "@/components/logo";
import { Menu } from "@/components/menu";
import { site } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function SiteHeader() {
  return (
    <motion.header
      className="flex items-center justify-between pt-7"
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      <div className="flex items-center gap-4">
        <Link href="/" aria-label="Home" className="text-foreground">
          <Logo />
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="text-[15px] font-medium text-neutral-800 underline decoration-neutral-400 decoration-dashed decoration-1 underline-offset-[5px] transition-colors hover:text-foreground hover:decoration-foreground"
        >
          {site.email}
        </a>
      </div>
      <Menu />
    </motion.header>
  );
}
