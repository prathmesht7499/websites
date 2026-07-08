import { useReveal } from "../lib/useReveal";

const TIERS = [
  {
    name: "Dusk",
    heat: "32%",
    price: "$89",
    desc: "Essential mechanical breakdown protection for daily drivers.",
    features: [
      "Engine & transmission coverage",
      "Roadside assistance, 24/7",
      "Rental car reimbursement",
    ],
  },
  {
    name: "Ember",
    heat: "68%",
    price: "$219",
    desc: "Our most chosen plan — ceramic coating plus full drivetrain.",
    features: [
      "Everything in Dusk",
      "Ceramic paint & wheel protection",
      "Electrical system coverage",
      "Concierge claims handling",
    ],
    featured: true,
  },
  {
    name: "Wildfire",
    heat: "100%",
    price: "$449",
    desc: "Bumper-to-bumper armor for the collection that never sleeps.",
    features: [
      "Everything in Ember",
      "Exotic & specialty parts network",
      "Zero-deductible claims",
      "Dedicated fleet advisor",
    ],
  },
];

export default function Coverage() {
  const ref = useReveal("[data-reveal]", { staggerAll: true });

  return (
    <section id="coverage" className="relative py-28 md:py-36 bg-obsidian" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div data-reveal className="max-w-2xl mb-16 md:mb-20">
          <p className="font-mono text-xs tracking-[0.28em] uppercase text-ember mb-4">
            Coverage Tiers
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-sand text-balance">
            Three degrees of protection, measured in heat.
          </h2>
          <p className="mt-6 text-sand-dim leading-relaxed">
            Each tier is calibrated for how hard the car is driven and how much
            risk you're willing to hand off. The gauge below shows how much of
            the vehicle each plan actually shields.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TIERS.map((t) => (
            <div
              data-reveal
              key={t.name}
              className={`relative flex flex-col border p-8 md:p-10 transition-all duration-500 ${
                t.featured
                  ? "border-ember-bright bg-dune ember-glow md:-translate-y-4"
                  : "border-bronze/25 bg-dune/40 hover:border-bronze/60"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 bg-ember-bright text-obsidian text-[11px] font-medium uppercase tracking-[0.14em] px-3 py-1">
                  Most Chosen
                </span>
              )}

              <h3 className="font-display text-3xl text-sand mb-1">{t.name}</h3>
              <p className="text-sand-dim text-sm mb-6">{t.desc}</p>

              {/* heat gauge */}
              <div className="mb-6">
                <div className="flex justify-between text-[11px] uppercase tracking-[0.12em] text-sand-dim mb-2">
                  <span>Protection</span>
                  <span className="font-mono text-ember-bright">{t.heat}</span>
                </div>
                <div className="h-1.5 w-full bg-obsidian rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sage via-ember to-ember-bright rounded-full"
                    style={{ width: t.heat }}
                  />
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display text-4xl text-sand">{t.price}</span>
                <span className="text-sand-dim text-sm">/ month</span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-sand/90">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ember-bright shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3.5 text-[13px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                  t.featured
                    ? "bg-ember-bright text-obsidian hover:bg-sand"
                    : "border border-bronze/50 text-sand hover:border-ember-bright hover:text-ember-bright"
                }`}
              >
                Select {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
