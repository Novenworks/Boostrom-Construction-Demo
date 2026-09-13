import Image from "next/image";

const supporting = [
  {
    title: "Outdoor living",
    note: "Paver patio and timber-framed cover, still underway.",
    noteDesktop: " Materials on site; finish work still open.",
    image: "/images/outdoor-patio.jpg",
    alt: "Paver patio and timber-framed outdoor cover during construction",
    object: "object-[center_32%]",
  },
  {
    title: "Custom interior",
    note: "Wood headboard wall and floating nightstands in a finished bedroom.",
    noteDesktop: "",
    image: "/images/bedroom-custom.jpg",
    alt: "Bedroom with custom wood headboard wall and floating nightstands",
    object: "object-[22%_48%]",
  },
] as const;

export function Work() {
  return (
    <section id="work" className="border-y border-ink-900/10 bg-paper-100">
      <div className="section-shell">
        <p className="section-label">From the jobsite</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          See the quality of the work
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
          Finished rooms and honest progress — kitchen counters in place, outdoor living underway,
          and a custom interior.
        </p>

        <figure className="mt-10 space-y-3">
          <div className="relative aspect-[16/11] overflow-hidden rounded-sm bg-espresso sm:aspect-[16/9]">
            <Image
              src="/images/kitchen-counters.jpg"
              alt="Kitchen remodel with new stone island and perimeter counters, backsplash still open"
              fill
              loading="eager"
              className="object-cover object-[68%_72%]"
              sizes="(min-width: 1152px) 72rem, 100vw"
            />
          </div>
          <figcaption>
            <p className="font-display text-xl sm:text-[1.35rem]">Kitchen remodeling</p>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-700">
              Stone island and perimeter counters set.
              <span className="hidden sm:inline"> Backsplash and remaining finish work still open.</span>
            </p>
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {supporting.map((project) => (
            <figure key={project.title} className="space-y-3">
              <div className="relative aspect-[16/11] overflow-hidden rounded-sm bg-espresso md:aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  loading="eager"
                  className={`object-cover ${project.object}`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <figcaption>
                <p className="font-display text-xl sm:text-[1.35rem]">{project.title}</p>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-700">
                  {project.note}
                  <span className="hidden sm:inline">{project.noteDesktop}</span>
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
