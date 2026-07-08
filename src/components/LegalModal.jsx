import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const TABS = {
  privacy: {
    label: "Privacy Policy",
    updated: "Updated June 1, 2026",
    body: [
      "Emberdune World Insurance Services (\"Emberdune,\" \"we,\" \"us\") collects the information you provide when requesting a quote, including contact details, vehicle information, and driving history, in order to prepare coverage options and administer policies.",
      "We do not sell personal information to third parties. Information may be shared with underwriting partners, repair networks, and claims administrators solely to service your policy or process a claim.",
      "You may request access to, correction of, or deletion of your personal information at any time by contacting privacy@emberdune.world. Residents of certain states have additional rights under applicable state privacy law.",
      "We use cookies and similar technologies to operate this site and to understand aggregate usage. You can control cookie preferences through your browser settings.",
    ],
  },
  terms: {
    label: "Terms of Service",
    updated: "Updated June 1, 2026",
    body: [
      "By using this website you agree to these terms. Emberdune provides marketing information about vehicle protection products; this website does not itself bind, alter, or cancel any insurance policy.",
      "All coverage is subject to a separate written policy contract, underwriting approval, and applicable state regulation. Rates, tiers, and features described on this site are illustrative and may vary by vehicle, driving record, and jurisdiction.",
      "Content on this site, including text, graphics, and the Emberdune name and marks, is the property of Emberdune World Insurance Services and may not be reproduced without written permission.",
      "We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the revised terms.",
    ],
  },
  disclosures: {
    label: "Insurance Disclosures",
    updated: "Updated June 1, 2026",
    body: [
      "Emberdune World Insurance Services is a licensed insurance producer. Products are underwritten by unaffiliated, independently rated insurance carriers; Emberdune arranges and administers coverage but is not itself an insurer in every jurisdiction.",
      "Mechanical breakdown protection and vehicle service contracts referenced on this site are not insurance in all states and may be regulated separately from automobile insurance.",
      "Availability of coverage tiers, deductible options, and specific features varies by state and is subject to underwriting review. Quoted premiums are estimates until a formal application is completed.",
      "This site is for informational purposes and does not constitute an offer of insurance in states where Emberdune is not licensed. For a full list of licenses and carrier partners, contact licensing@emberdune.world.",
    ],
  },
};

export default function LegalModal({ open, onClose, initialTab = "privacy" }) {
  const [tab, setTab] = useState(initialTab);

  useEffect(() => {
    if (open) setTab(initialTab);
  }, [open, initialTab]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const active = TABS[tab];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/85 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full md:max-w-3xl max-h-[90svh] md:max-h-[80vh] bg-dune border border-bronze/30 flex flex-col"
          >
            <div className="flex items-start justify-between px-6 md:px-10 pt-8 pb-6 border-b border-bronze/20">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember-bright mb-2">
                  Legal
                </p>
                <h2 id="legal-modal-title" className="font-display text-2xl md:text-3xl text-sand">
                  Emberdune Legal Center
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close legal information"
                className="text-sand-dim hover:text-ember-bright transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex gap-1 px-6 md:px-10 pt-5 border-b border-bronze/20 overflow-x-auto">
              {Object.entries(TABS).map(([key, t]) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`relative px-4 py-3 text-xs uppercase tracking-[0.12em] whitespace-nowrap transition-colors ${
                    tab === key ? "text-ember-bright" : "text-sand-dim hover:text-sand"
                  }`}
                >
                  {t.label}
                  {tab === key && (
                    <motion.span
                      layoutId="legal-tab-underline"
                      className="absolute left-0 right-0 -bottom-px h-0.5 bg-ember-bright"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="px-6 md:px-10 py-8 overflow-y-auto">
              <p className="font-mono text-[11px] text-sand-dim/70 mb-6">{active.updated}</p>
              <div className="space-y-4">
                {active.body.map((p, i) => (
                  <p key={i} className="text-sand-dim text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="px-6 md:px-10 py-5 border-t border-bronze/20 flex items-center justify-between">
              <p className="text-xs text-sand-dim/60">
                Questions? legal@emberdune.world
              </p>
              <button
                onClick={onClose}
                className="border border-bronze/50 hover:border-ember-bright px-6 py-2.5 text-[12px] uppercase tracking-[0.14em] text-sand hover:text-ember-bright transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
