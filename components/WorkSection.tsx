const work = [
  {
    src: "/images/project-04.jpeg",
    title: "Bathroom vanity",
    note: "Finished dual-sink bath with stone and lighted glass.",
    tag: "Finished",
  },
  {
    src: "/images/project-02.jpeg",
    title: "Kitchen island",
    note: "Countertop and island set. Backsplash still open — shown as-is.",
    tag: "In progress",
  },
  {
    src: "/images/project-05.jpg",
    title: "Outdoor living",
    note: "Paver patio and covered structure during hardscape.",
    tag: "In progress",
  },
  {
    src: "/images/project-03.jpg",
    title: "Custom bedroom",
    note: "Wood headboard wall, floating nightstands, new flooring.",
    tag: "Finished",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          Real work from the current site
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold text-ink md:text-4xl">
          The photography already exists. It just was not doing the selling.
        </h2>
        <p className="mt-4 max-w-2xl text-stone">
          These four images are first-party project photos hosted on
          boostromconstruction.com. Decorative landscape plates from the same
          site are not shown here as completed jobs.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {work.map((item) => (
            <figure key={item.title} className="group">
              <div className="relative aspect-[5/4] overflow-hidden bg-bark">
                <img
                  src={item.src}
                  alt={item.title}
                  className="img-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="text-sm text-stone">{item.note}</p>
                </div>
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wide text-copper">
                  {item.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
