import { site } from "@/lib/site";

export function ServiceArea() {
  return (
    <section id="area" className="bg-paper-100">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <p className="section-label">Where they say they work</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Orange County, California</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
          The live homepage repeats Orange County — not a city-by-city list. If the property is in
          Orange County and you want an estimate, call or write using the contacts below.
        </p>
        <p className="mt-4 text-sm text-ink-700">
          Call {site.phoneDisplay} or write {site.email} if the property is in Orange County and
          you want an estimate.
        </p>
      </div>
    </section>
  );
}
