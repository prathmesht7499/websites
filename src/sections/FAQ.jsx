import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useReveal } from "../lib/useReveal";

const FAQS = [
  {
    q: "Does Emberdune cover modified or track-prepared vehicles?",
    a: "Yes. Modifications are documented during assessment and can be included in your agreed value. Track-day use is covered under Ember and Wildfire tiers with no separate rider required.",
  },
  {
    q: "How fast can coverage start?",
    a: "Most policies bind within 24 hours of assessment. Members who complete the video walkthrough option are frequently covered same-day.",
  },
  {
    q: "What happens if a part isn't available domestically?",
    a: "Our specialty parts network sources OEM and factory-approved components internationally at no extra cost to Ember and Wildfire members.",
  },
  {
    q: "Can I switch tiers later?",
    a: "Yes, at any renewal date or after a qualifying life event such as a new vehicle purchase. Changes take effect within one billing cycle.",
  },
  {
    q: "Is roadside assistance available outside the country?",
    a: "Dusk covers domestic roadside assistance. Ember and Wildfire extend coverage across North America and the EU.",
  },
];

export default function FAQ() {
  const ref = useReveal();
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-28 md:py-36 bg-obsidian" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <p data-reveal className="font-mono text-xs tracking-[0.28em] uppercase text-ember mb-4 text-center">
          Questions
        </p>
        <h2 data-reveal className="font-display text-4xl md:text-5xl text-sand text-balance text-center mb-16">
          Answered plainly.
        </h2>

        <div data-reveal className="divide-y divide-bronze/20 border-t border-b border-bronze/20">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-6 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl text-sand group-hover:text-ember-bright transition-colors">
                    {f.q}
                  </span>
                  <Plus
                    className={`shrink-0 text-ember-bright transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    size={20}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sand-dim text-sm leading-relaxed pb-6 pr-10">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
