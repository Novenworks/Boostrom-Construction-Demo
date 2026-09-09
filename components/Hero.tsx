export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] overflow-hidden bg-ink text-cream">
      <img
        src="/images/project-04.jpeg"
        alt="Finished Boostrom Construction bathroom vanity with dual sinks and lighted mirror"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/25" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:justify-center md:px-6 md:pb-20 md:pt-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sand">
          Orange County · Since 2000 · License #789193
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
          Remodel the Home.
          <br />
          Rework the Way You Live In It.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-sand md:text-lg">
          Boostrom Construction is an Orange County general contractor for
          kitchens, bathrooms, indoor-outdoor living, pools, decks, and custom
          renovation — one project story from the rooms you use to the yard
          you want.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded bg-copper px-6 py-3.5 text-sm font-semibold text-white hover:bg-copperDark"
          >
            Request a Free Estimate
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
