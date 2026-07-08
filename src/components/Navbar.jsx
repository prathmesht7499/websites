import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Coverage", href: "#coverage" },
  { label: "Process", href: "#process" },
  { label: "Fleet", href: "#fleet" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-obsidian/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-4 group">
            {/* Modernized Luxury Brand Mark */}
            <span className="relative w-9 h-9 flex items-center justify-center">
              {/* Concentric rings that scale out smoothly on hover */}
              <span className="absolute inset-0 rounded-full border border-ember/10 scale-100 group-hover:scale-110 group-hover:border-ember/30 transition-all duration-700 ease-out" />
              <span className="absolute inset-2 rounded-full bg-gradient-to-tr from-ember/5 to-ember/20 opacity-100 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Precision Diamond Core instead of a basic dot */}
              <span className="w-2.5 h-2.5 rotate-45 bg-ember-bright transition-all duration-500 ease-out group-hover:rotate-[135deg] group-hover:bg-white shadow-[0_0_16px_4px_rgba(232,129,63,0.5)] group-hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.7)]" />
            </span>

            {/* High-End Editorial Typography */}
            <span className="font-display text-xl tracking-[0.18em] uppercase text-sand-dim group-hover:text-white transition-colors duration-500">
              EMBER
              <span className="font-light tracking-[0.12em] text-sand opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                DUNE
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] uppercase tracking-[0.14em] text-sand-dim hover:text-ember-bright transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="border border-bronze/60 hover:border-ember-bright px-6 py-2.5 text-[13px] uppercase tracking-[0.14em] text-sand hover:text-ember-bright transition-colors duration-300"
            >
              Request Coverage
            </a>
          </div>

          <button
            className="lg:hidden text-sand"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
        <div className="hairline" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-obsidian lg:hidden"
          >
            <div className="flex items-center justify-between h-20 px-6">
              <span className="font-display text-xl text-sand">Emberdune</span>
              <button
                className="text-sand"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 mt-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-3xl py-3 border-b border-dune-light text-sand hover:text-ember-bright transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
