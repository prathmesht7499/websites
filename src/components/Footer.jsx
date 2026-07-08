import { useState } from "react";
import LegalModal from "./LegalModal";

function IconInstagram(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconYoutube(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...props}
    >
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="M10.5 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconLinkedin(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.2c0-1.5 1-2.3 2.3-2.3s2.2.8 2.2 2.3V17" />
    </svg>
  );
}

const SITEMAP = [
  { label: "Coverage", href: "#coverage" },
  { label: "Process", href: "#process" },
  { label: "Fleet", href: "#fleet" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [modal, setModal] = useState({ open: false, tab: "privacy" });

  const openLegal = (tab) => (e) => {
    e.preventDefault();
    setModal({ open: true, tab });
  };

  return (
    <footer className="relative bg-obsidian border-t border-bronze/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 pb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
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
            </div>
            <p className="text-sand-dim text-sm leading-relaxed max-w-xs">
              Bespoke auto protection for cars built to be driven, not just
              owned. Licensed coverage arranged across all 50 states.
            </p>
            <div className="flex gap-4 mt-6"></div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-sand-dim mb-5">
              Sitemap
            </p>
            <ul className="space-y-3">
              {SITEMAP.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="text-sand text-sm hover:text-ember-bright transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-sand-dim mb-5">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={openLegal("privacy")}
                  className="text-sand text-sm hover:text-ember-bright transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={openLegal("terms")}
                  className="text-sand text-sm hover:text-ember-bright transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={openLegal("disclosures")}
                  className="text-sand text-sm hover:text-ember-bright transition-colors text-left"
                >
                  Insurance Disclosures
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-sand-dim mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-sand-dim font-mono">
              <li>coverage@emberdune.world</li>
              <li>Scottsdale, Arizona</li>
            </ul>
          </div>
        </div>

        <div className="hairline mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sand-dim/60">
          <p>
            &copy; {new Date().getFullYear()} Emberdune World Insurance
            Services. All rights reserved.
          </p>
          <p className="text-center md:text-right max-w-xl">
            Emberdune.world is a marketing site. Coverage is subject to
            underwriting approval and state availability.{" "}
            <button
              onClick={openLegal("disclosures")}
              className="underline hover:text-ember-bright transition-colors"
            >
              View disclosures
            </button>
            .
          </p>
        </div>
      </div>

      <LegalModal
        open={modal.open}
        initialTab={modal.tab}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
      />
    </footer>
  );
}
