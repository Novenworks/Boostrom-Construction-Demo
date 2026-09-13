const steps = [
  {
    n: "01",
    title: "Talk through the project",
    copy: "The current site invites a free estimate by phone or email. That is still the first step — no invented calendar or online booking.",
  },
  {
    n: "02",
    title: "Handle the work from start to finish",
    copy: "Boostrom says it specializes in all phases of remodeling homes or commercial renovations, including kitchens, bathrooms, new spaces, pools, and decks.",
  },
  {
    n: "03",
    title: "Stay until it is done right",
    copy: "Their words: they will not leave until the job is done right, and they measure success with satisfied customers. No extra warranty language added here.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="bg-paper-50">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 sm:py-20">
        <p className="section-label">How a job starts</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Simple on purpose
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.n} className="border-t border-ink-900/15 pt-5">
              <p className="font-display text-sm text-clay-600">{step.n}</p>
              <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
