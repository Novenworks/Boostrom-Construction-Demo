import Image from "next/image";

const services = [
  {
    title: "Kitchen remodeling",
    copy: "Open plans, islands, and full redesigns — or a focused update. The photo is a Boostrom kitchen with stone counters already set.",
    image: "/images/kitchen-counters.jpg",
    alt: "Kitchen remodel in progress with marble-look stone counters on an island and perimeter cabinets",
  },
  {
    title: "Bathroom remodeling",
    copy: "The rooms you actually live in every day. Dual vanities, stone tops, and lighting like the finished bath on this page.",
    image: "/images/bathroom-vanity.jpg",
    alt: "Finished bathroom vanity with two sinks, stone counters, and a backlit mirror",
  },
  {
    title: "Indoor and outdoor living",
    copy: "Patios, covers, decks, and the rooms that connect to them. Photographed here: pavers and a covered structure underway.",
    image: "/images/outdoor-patio.jpg",
    alt: "Outdoor living project with a paver patio and timber-framed cover under construction",
  },
  {
    title: "Home design and remodeling",
    copy: "Whole-home and custom interior work — not only kitchens and baths. Custom carpentry in a finished bedroom is on the work grid.",
    image: "/images/bedroom-custom.jpg",
    alt: "Custom wood headboard wall with floating nightstands in a remodeled bedroom",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="bg-paper-50">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6 sm:py-20">
        <p className="section-label">What to call about</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          One contractor for the house and the space around it
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
          Boostrom lists kitchen work, bathrooms, home design and remodeling, and indoor or outdoor
          living as primary offers — then pools, decks, new spaces, and commercial renovations as
          part of the same start-to-finish practice.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-sm border border-ink-900/10 bg-paper-100">
              <div className="relative aspect-[16/10]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="space-y-2 px-5 py-5">
                <h3 className="font-display text-2xl">{service.title}</h3>
                <p className="text-sm leading-relaxed text-ink-700">{service.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
