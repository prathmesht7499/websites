import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "../lib/useReveal";

const QUOTES = [
  {
    quote:
      "My 911 GT3 lives at the track more than my driveway. Emberdune is the only underwriter who didn't blink at that.",
    name: "R. Alvarez",
    role: "Wildfire member, since 2023",
  },
  {
    quote:
      "Filed a claim after a hailstorm at 11pm. Had a specialist confirmed for the next morning before I'd finished the paperwork.",
    name: "S. Okafor",
    role: "Ember member, since 2022",
  },
  {
    quote:
      "The ceramic coating protection alone paid for the plan twice over. Concierge team feels like they work for me, not the insurer.",
    name: "M. Laurent",
    role: "Ember member, since 2024",
  },
];

export default function Testimonials() {
  const ref = useReveal();
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <section id="testimonials" className="relative py-28 md:py-36 bg-obsidian overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <p data-reveal className="font-mono text-xs tracking-[0.28em] uppercase text-ember mb-10">
          From Members
        </p>

        <div className="relative min-h-[260px] md:min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-display text-2xl md:text-4xl text-sand text-balance leading-snug">
                “{QUOTES[index].quote}”
              </p>
              <p className="mt-8 text-ember-bright text-sm uppercase tracking-[0.14em]">
                {QUOTES[index].name}
              </p>
              <p className="text-sand-dim text-xs mt-1">{QUOTES[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 transition-all duration-300 ${
                i === index ? "w-8 bg-ember-bright" : "w-1.5 bg-bronze/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
