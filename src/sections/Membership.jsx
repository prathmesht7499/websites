import { useReveal } from "../lib/useReveal";
import { ShieldCheck, Sparkles, Wrench, Clock } from "lucide-react";

const PERKS = [
  {
    icon: ShieldCheck,
    title: "Agreed-Value Protection",
    desc: "Collector vehicles are covered at an appraised value, not depreciated book price.",
  },
  {
    icon: Sparkles,
    title: "Detailing Credits",
    desc: "Quarterly ceramic maintenance credits at any Emberdune partner detailer.",
  },
  {
    icon: Wrench,
    title: "Specialty Parts Network",
    desc: "Direct sourcing for exotic and low-production components — no generic substitutes.",
  },
  {
    icon: Clock,
    title: "Priority Response",
    desc: "Wildfire and Ember members reach a live specialist in under 20 minutes, day or night.",
  },
];

export default function Membership() {
  const ref = useReveal();
  return (
    <section id="membership" className="relative py-28 md:py-36 bg-dune" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <div data-reveal>
            <p className="font-mono text-xs tracking-[0.28em] uppercase text-ember mb-4">
              Membership Perks
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-sand text-balance mb-6">
              More than a policy number.
            </h2>
            <p className="text-sand-dim leading-relaxed mb-8">
              Every Emberdune plan comes with a standing set of privileges
              designed for people who see their car as more than transport.
            </p>
            <a
              href="#contact"
              className="inline-block bg-ember hover:bg-ember-bright text-obsidian font-medium px-8 py-4 text-[13px] uppercase tracking-[0.14em] transition-colors duration-300"
            >
              Become a Member
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {PERKS.map((p) => (
              <div data-reveal key={p.title} className="border border-bronze/25 p-7 hover:border-ember/50 transition-colors duration-500">
                <p.icon className="text-ember-bright mb-5" size={26} strokeWidth={1.5} />
                <h3 className="font-display text-xl text-sand mb-2">{p.title}</h3>
                <p className="text-sand-dim text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
