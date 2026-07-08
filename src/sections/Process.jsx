import { useReveal } from "../lib/useReveal";

const STEPS = [
  {
    n: "01",
    title: "Vehicle Assessment",
    desc: "Our inspectors document your car's condition, mileage, and modifications — in person or via a guided video walkthrough.",
  },
  {
    n: "02",
    title: "Tier Selection",
    desc: "Choose Dusk, Ember, or Wildfire based on how the car is driven, stored, and shown. Adjust deductibles to fit.",
  },
  {
    n: "03",
    title: "Coverage Activated",
    desc: "Your policy binds within 24 hours. A digital coverage card and concierge line are issued immediately.",
  },
  {
    n: "04",
    title: "Claims, Handled",
    desc: "One call routes you to an approved specialist network — no adjusters haggling over aftermarket parts.",
  },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section id="process" className="relative py-28 md:py-36 bg-dune" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div data-reveal className="max-w-2xl mb-16 md:mb-20">
          <p className="font-mono text-xs tracking-[0.28em] uppercase text-ember mb-4">
            The Process
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-sand text-balance">
            From inspection to coverage, in four moves.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-bronze/20">
          {STEPS.map((s) => (
            <div data-reveal key={s.n} className="bg-dune p-8 md:p-10 flex flex-col">
              <span className="font-mono text-ember-bright text-sm mb-8">{s.n}</span>
              <h3 className="font-display text-2xl text-sand mb-3">{s.title}</h3>
              <p className="text-sand-dim text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
