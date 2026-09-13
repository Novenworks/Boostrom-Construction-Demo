const extras = [
  {
    title: "Pools and decks",
    copy: "Named on the current homepage alongside kitchens, baths, and new spaces.",
  },
  {
    title: "New spaces and custom renovation",
    copy: "They invite custom renovation beyond a single-room refresh.",
  },
  {
    title: "Commercial renovations",
    copy: "Listed with residential remodeling as work they take on. No project count published.",
  },
] as const;

export function Capabilities() {
  return (
    <section className="border-y border-ink-900/10 bg-paper-100">
      <div className="mx-auto max-w-page px-4 py-14 sm:px-6">
        <p className="section-label">Also on the books</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">Secondary capabilities they already list</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {extras.map((item) => (
            <article key={item.title} className="rounded-sm border border-ink-900/10 bg-paper-50 px-5 py-5">
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
