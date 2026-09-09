const services = [
  {
    title: "Kitchen Remodeling",
    copy: "Open plans, large islands, modern or traditional — simple updates through full redesigns.",
    image: "/images/project-02.jpeg",
    alt: "Kitchen island and countertop installation in progress by Boostrom Construction",
    status: "Project photo · in progress",
  },
  {
    title: "Bathroom Remodeling",
    copy: "The room you use every day, rebuilt as a finished, usable space — vanity, stone, lighting, and wet areas included.",
    image: "/images/project-04.jpeg",
    alt: "Completed dual-sink bathroom vanity with granite and lighted mirror",
    status: "Project photo · finished",
  },
  {
    title: "Indoor & Outdoor Living",
    copy: "Patios, covers, decks, and the rooms that connect to them — value and use in the same plan.",
    image: "/images/project-05.jpg",
    alt: "Outdoor paver patio and covered structure under construction",
    status: "Project photo · in progress",
  },
  {
    title: "Home Design & Custom Spaces",
    copy: "Additions, new rooms, and custom built-ins. The same crew language from layout through finish.",
    image: "/images/project-03.jpg",
    alt: "Custom bedroom with wood headboard and floating nightstands",
    status: "Project photo · finished",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-mist py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          What we take on
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
          Work grouped the way homeowners actually decide.
        </h2>
        <p className="mt-4 max-w-2xl text-stone">
          The live site lists kitchens, whole-home remodeling, bathrooms, and
          indoor or outdoor living. First-party copy also names pools, decks,
          new spaces, and commercial renovation. We keep those jobs visible
          without stuffing every line into the hero.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-sm border border-sand bg-cream"
            >
              <div className="relative aspect-[4/3]">
                <img src={s.image} alt={s.alt} className="img-cover" />
                <span className="absolute bottom-3 left-3 rounded bg-ink/80 px-2 py-1 text-[11px] uppercase tracking-wide text-cream">
                  {s.status}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{s.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-stone">
          Also available from first-party scope: pools, decks, additions, and
          commercial renovation. Ask when you call — we will not invent a
          specialty the company does not claim.
        </p>
      </div>
    </section>
  );
}
