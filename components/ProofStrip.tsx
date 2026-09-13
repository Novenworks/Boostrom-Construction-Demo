import { site } from "@/lib/site";

const items = [
  { label: "Orange County", value: `Since ${site.since}` },
  { label: "California license", value: `#${site.license}` },
  { label: "Coverage", value: site.bondedInsuredClaim },
  { label: "Call", value: site.phoneDisplay },
] as const;

export function ProofStrip() {
  return (
    <section className="border-b border-ink-900/10 bg-paper-100">
      <div className="mx-auto grid max-w-page gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">{item.label}</p>
            <p className="mt-1 font-display text-xl text-ink-900">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
