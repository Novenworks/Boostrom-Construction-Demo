import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-espresso text-paper-50">
      <Image
        src="/images/bathroom-vanity.jpg"
        alt="Finished Boostrom Construction bathroom: dual vanity, stone counters, and a backlit mirror"
        fill
        priority
        className="object-cover object-[center_62%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/88 via-espresso/62 to-espresso/25" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-page flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
        <p className="section-label text-brass">Orange County remodeling since {site.since}</p>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.25rem]">
          Remodel the Home. Rework the Way You Live In It.
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-paper-100/90 sm:text-lg">
          Kitchens, bathrooms, indoor and outdoor living, and larger renovations — handled as one
          project by a licensed Orange County contractor.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/#contact"
            className="inline-flex min-h-12 items-center rounded-sm bg-clay-500 px-5 text-sm font-semibold text-white hover:bg-clay-600"
          >
            {site.primaryCta}
          </a>
          <a
            href="/#work"
            className="inline-flex min-h-12 items-center rounded-sm border border-paper-50/40 px-5 text-sm font-semibold text-paper-50 hover:border-paper-50"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
