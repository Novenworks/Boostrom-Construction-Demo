export default function DifferenceSection() {
  return (
    <section className="bg-ink py-20 text-cream md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
            What is different
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-white md:text-4xl">
            One contractor for the house and the space outside it.
          </h2>
          <p className="mt-5 leading-relaxed text-sand">
            Most Orange County remodeling sites pick a lane: kitchen, bath, or
            outdoor. Boostrom’s own copy already covers kitchens, bathrooms,
            new spaces, pools and decks, indoor-outdoor living, and commercial
            renovation. The point of this page is to make that breadth readable
            — not to invent a new company.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-sand">
            <li className="border-l-2 border-copper pl-4">
              Residential remodeling that can include the yard, not just the
              cabinet run.
            </li>
            <li className="border-l-2 border-copper pl-4">
              Family-run Huntington Beach office. Joshua Boostrom is the
              first-party contact on the live site.
            </li>
            <li className="border-l-2 border-copper pl-4">
              Their line, kept: “We measure success with satisfied customers.”
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img
            src="/images/project-03.jpg"
            alt="Custom interior bedroom work"
            className="aspect-[3/4] object-cover"
          />
          <img
            src="/images/project-05.jpg"
            alt="Outdoor living construction"
            className="mt-8 aspect-[3/4] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
