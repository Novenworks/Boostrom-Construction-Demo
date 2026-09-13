import Image from "next/image";
import { site } from "@/lib/site";

export function Company() {
  return (
    <section id="area" className="border-t border-ink-900/10 bg-paper-100">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <p className="section-label">Orange County</p>
          <blockquote className="mt-4 max-w-3xl font-display text-[1.85rem] leading-snug text-ink-900 sm:text-4xl">
            &ldquo;{site.quote}&rdquo;
          </blockquote>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-700">
            Serving Orange County since {site.since}. If your project is in Orange County, request
            an estimate.
          </p>
          <p className="mt-5">
            <a
              className="text-[0.9375rem] font-semibold text-ink-900 underline decoration-clay-500 underline-offset-4"
              href={site.licenseUrl}
              rel="noreferrer"
              target="_blank"
            >
              Look up license #{site.license} on the California CSLB
            </a>
          </p>
        </div>
        <div className="relative hidden aspect-[4/5] overflow-hidden rounded-sm bg-espresso lg:col-span-5 lg:block">
          <Image
            src="/images/bathroom-vanity.jpg"
            alt="Finished dual-sink vanity with stone counters and backlit mirror"
            fill
            loading="eager"
            className="object-cover object-[55%_72%]"
            sizes="(min-width: 1024px) 24rem, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
