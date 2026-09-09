const steps = [
  {
    n: "01",
    title: "Talk through the job",
    copy: "Call or email. Describe the rooms, the outdoor piece, and what has to stay standing while work happens.",
  },
  {
    n: "02",
    title: "Walk and plan",
    copy: "Site visit and a written estimate. Scope is the rooms you asked for — kitchen, bath, addition, pool, deck — not a packaged upsell.",
  },
  {
    n: "03",
    title: "Build the work",
    copy: "Kitchens, baths, new spaces, and outdoor living under one general contractor. First-party promise: they do not leave until the job is done right.",
  },
  {
    n: "04",
    title: "Hand it back",
    copy: "Walk the finished rooms. The current site does not publish a warranty term, so we do not invent one here.",
  },
];

export default function ProcessSection() {
  return (
    <section id="approach" className="bg-mist py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          From start to finish
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold text-ink md:text-4xl">
          A simple process. No invented timelines.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="border-t-2 border-copper pt-5">
              <p className="text-xs font-semibold tracking-widest text-stone">
                {s.n}
              </p>
              <h3 className="mt-2 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
