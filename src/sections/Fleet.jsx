import { useReveal } from "../lib/useReveal";

const CATEGORIES = [
  { name: "Grand Tourers", count: "1,240+ insured", note: "Coupes built for the long drive between cities." },
  { name: "Exotics & Hypercars", count: "380+ insured", note: "Low-volume machines with specialty parts networks." },
  { name: "Luxury SUVs", count: "2,100+ insured", note: "Family-scale comfort with performance underneath." },
  { name: "Classic & Collector", count: "690+ insured", note: "Agreed-value coverage for cars that appreciate." },
  { name: "Electric Performance", count: "540+ insured", note: "Battery, motor, and software coverage built in." },
  { name: "Off-Road & Overland", count: "310+ insured", note: "Coverage that follows you past the pavement." },
];

export default function Fleet() {
  const ref = useReveal();

  return (
    <section id="fleet" className="relative py-28 md:py-36 bg-obsidian" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div data-reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.28em] uppercase text-ember mb-4">
              The Fleet We Cover
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-sand text-balance">
              Every kind of machine, one standard of care.
            </h2>
          </div>
          <p className="text-sand-dim text-sm max-w-xs">
            5,200+ vehicles currently under Emberdune protection across six categories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c) => (
            <div
              data-reveal
              key={c.name}
              className="group relative border border-bronze/20 hover:border-ember/60 p-8 overflow-hidden transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ember/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h3 className="font-display text-2xl text-sand mb-2">{c.name}</h3>
                <p className="font-mono text-xs text-ember-bright mb-4 tracking-wide">{c.count}</p>
                <p className="text-sand-dim text-sm leading-relaxed">{c.note}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-ember-bright group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
