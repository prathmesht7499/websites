import { useReveal } from "../lib/useReveal";

const STATS = [
  { value: "5,200+", label: "Vehicles protected" },
  { value: "18 min", label: "Avg. claims response" },
  { value: "$0", label: "Deductible on Wildfire" },
  { value: "97%", label: "Members who renew" },
];

export default function Stats() {
  const ref = useReveal();
  return (
    <section className="relative py-20 bg-dune border-y border-bronze/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map((s) => (
          <div data-reveal key={s.label} className="text-center md:text-left">
            <p className="font-display text-4xl md:text-5xl text-ember-bright font-feature-tabular">
              {s.value}
            </p>
            <p className="mt-2 text-sand-dim text-xs uppercase tracking-[0.14em]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
