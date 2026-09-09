const items = [
  { label: "Serving Orange County", value: "Since 2000" },
  { label: "California contractor", value: "License #789193" },
  { label: "Coverage", value: "Bonded & Insured" },
  { label: "Talk to the office", value: "949-500-1851" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-sand bg-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-sand md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="bg-cream px-5 py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone">
              {item.label}
            </p>
            <p className="mt-1 text-base font-semibold text-ink md:text-lg">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
