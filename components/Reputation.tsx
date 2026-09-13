import { site } from "@/lib/site";

export function Reputation() {
  return (
    <section className="bg-paper-50">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <p className="section-label">What they actually publish</p>
        <blockquote className="mt-4 max-w-3xl font-display text-3xl leading-snug text-ink-900 sm:text-4xl">
          &ldquo;{site.quote}&rdquo;
        </blockquote>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-700">
          Trust on this page stays with facts Boostrom publishes: Orange County since {site.since},
          license #{site.license}, {site.bondedInsuredClaim.toLowerCase()}, and the photographs
          above. Named reviews are not listed here because they are not published on the company
          site.
        </p>
        <p className="mt-4 text-sm text-ink-700">
          <a className="font-semibold underline decoration-clay-500 underline-offset-4" href={site.licenseUrl} rel="noreferrer" target="_blank">
            Look up license #{site.license} on the California CSLB
          </a>
          .
        </p>
      </div>
    </section>
  );
}
