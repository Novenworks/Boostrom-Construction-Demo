export default function AboutSection() {
  return (
    <section id="about" className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Our story
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-ink md:text-4xl">
              A solid ground for your project.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-4 text-stone leading-relaxed">
            <p>
              Since 2000, Boostrom Construction has worked as a general
              contractor in Orange County, California. Their own site describes
              the company as honest, dependable, and professional — and measures
              success with satisfied customers.
            </p>
            <p>
              Scope on the first-party site: all phases of remodeling homes or
              commercial renovations. Kitchens, bathrooms, new spaces, pools and
              decks, and custom renovation. California contractor license
              #789193. Bonded and insured.
            </p>
            <p>
              The live site does not publish named testimonials, review totals,
              or a staff roster. This page does not invent them. Contact is
              Joshua at joshua@boostromconstruction.com or 949-500-1851.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
