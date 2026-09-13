const services = [
  {
    title: "Kitchen remodeling",
    copy: "Islands, stone counters, and full kitchen updates — or a focused refresh.",
  },
  {
    title: "Bathroom remodeling",
    copy: "Vanities, stone, lighting, and the rooms you use every day.",
  },
  {
    title: "Indoor and outdoor living",
    copy: "Patios, covers, decks, and the rooms that open onto them.",
  },
  {
    title: "Home design and remodeling",
    copy: "Whole-home and custom interior work beyond a single room.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="bg-paper-50">
      <div className="section-shell">
        <p className="section-label">What we build</p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Remodeling designed around how you live
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
          Kitchens, bathrooms, interior improvements, and outdoor living — with pools, decks, new
          spaces, custom renovation, and commercial work as part of the same start-to-finish
          practice.
        </p>
        <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="border-t border-ink-900/15 pt-4">
              <h3 className="font-display text-xl leading-snug sm:text-[1.35rem]">{service.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-700">{service.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
