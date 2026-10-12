import { Bento } from "@/components/bento";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[72rem] px-6 pb-10">
      <SiteHeader />
      <main>
        <Hero />
        <Bento />
        <Services />
        <Work />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  );
}
