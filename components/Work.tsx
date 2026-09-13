import Image from "next/image";

const projects = [
  {
    title: "Kitchen counters in place",
    note: "Stone island and perimeter tops set; backsplash and remaining finish work still open. Photographed on a live Boostrom job, not a catalog set.",
    image: "/images/kitchen-counters.jpg",
    alt: "Kitchen with new stone counters during a remodel",
  },
  {
    title: "Finished bath vanity",
    note: "Dual sinks, stone counters and backsplash, chrome fittings, and a backlit mirror in a completed bathroom.",
    image: "/images/bathroom-vanity.jpg",
    alt: "Completed bathroom vanity with backlit mirror",
  },
  {
    title: "Outdoor living underway",
    note: "Paver patio and timber-framed cover during construction — the indoor/outdoor work the homepage talks about, shown as it actually happens.",
    image: "/images/outdoor-patio.jpg",
    alt: "Paver patio and covered outdoor structure during construction",
  },
  {
    title: "Custom bedroom interior",
    note: "Wood headboard wall, floating nightstands, and new flooring in a finished room — remodeling that is not only kitchen and bath.",
    image: "/images/bedroom-custom.jpg",
    alt: "Bedroom with custom wood headboard and floating nightstands",
  },
] as const;

export function Work() {
  return (
    <section id="work" className="border-y border-ink-900/10 bg-paper-100">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 sm:py-20">
        <p className="section-label">From the jobsite</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Real rooms. Honest progress.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
          These photographs are from Boostrom Construction projects. Captions describe only what is
          visible — no invented addresses, budgets, or estate labels.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <figure key={project.title} className="space-y-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-espresso">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <figcaption>
                <p className="font-display text-xl">{project.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">{project.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
