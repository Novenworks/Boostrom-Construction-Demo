import { site } from "@/lib/site";

export function ProofStrip() {
  return (
    <section className="border-b border-ink-900/10 bg-paper-100">
      <div className="mx-auto grid max-w-page gap-6 px-4 py-7 sm:grid-cols-2 sm:px-6 sm:py-8 lg:grid-cols-4">
        <div>
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink-700">
            Orange County
          </p>
          <p className="mt-1 font-display text-xl text-ink-900 sm:text-[1.35rem]">Since {site.since}</p>
        </div>
        <div>
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink-700">
            California license
          </p>
          <a
            href={site.licenseUrl}
            rel="noreferrer"
            target="_blank"
            className="mt-1 inline-block font-display text-xl text-ink-900 underline-offset-4 hover:underline sm:text-[1.35rem]"
          >
            #{site.license}
          </a>
        </div>
        <div>
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink-700">
            Coverage
          </p>
          <p className="mt-1 font-display text-xl text-ink-900 sm:text-[1.35rem]">
            {site.bondedInsuredClaim}
          </p>
        </div>
        <div>
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink-700">
            Free estimate
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-1 inline-block font-display text-xl text-ink-900 underline-offset-4 hover:underline sm:text-[1.35rem]"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
