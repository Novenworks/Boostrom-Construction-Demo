const steps = [
  {
    n: "01",
    title: "Talk through the project",
    copy: "Call or write for a free estimate. We start with what you are considering and how the house needs to work.",
  },
  {
    n: "02",
    title: "Plan the work as one job",
    copy: "Kitchens, bathrooms, new spaces, pools, and decks — handled from start to finish, not as disconnected trades.",
  },
  {
    n: "03",
    title: "Stay until it is done right",
    copy: "We will not leave until the job is done right.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="bg-paper-50">
      <div className="section-shell">
        <p className="section-label">How a job starts</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          A simple process
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-700">
          Start with a free estimate. Keep the steps practical.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {steps.map((step) => (
            <article key={step.n} className="border-t border-ink-900/15 pt-5">
              <p className="font-display text-base text-clay-600">{step.n}</p>
              <h3 className="mt-2 font-display text-xl leading-snug sm:text-2xl">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-700">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
