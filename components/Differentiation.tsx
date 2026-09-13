import Image from "next/image";
import { site } from "@/lib/site";

export function Differentiation() {
  return (
    <section id="approach" className="bg-espresso text-paper-50">
      <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="section-label text-brass">Why this mix matters</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            The remodel should read as one house, not four trades
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper-100/85">
            Boostrom already sells the interior and the outdoor space together: kitchens and baths,
            then pools, decks, and indoor/outdoor living. The point is Orange County work that
            connects how the house lives inside and out — one project story, not four disconnected
            trades.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-paper-100/85">
            <li>California contractor license #{site.license}.</li>
            <li>Serving Orange County since {site.since}.</li>
            <li>The same jobsite camera covers kitchens, baths, patios, and custom interiors.</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/images/kitchen-counters.jpg"
              alt="Kitchen counters from a Boostrom remodel"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/images/outdoor-patio.jpg"
              alt="Outdoor patio work by Boostrom Construction"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
