import { useState } from "react";
import { useReveal } from "../lib/useReveal";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 bg-dune overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,98,45,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16">
        <div data-reveal>
          <p className="font-mono text-xs tracking-[0.28em] uppercase text-ember mb-4">
            Request Coverage
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-sand text-balance mb-6">
            Tell us what you drive.
          </h2>
          <p className="text-sand-dim leading-relaxed max-w-md mb-10">
            A coverage specialist will respond within one business day with a
            tailored quote for Dusk, Ember, or Wildfire.
          </p>

          <div className="space-y-5 font-mono text-sm text-sand-dim">
            <p className="flex items-center gap-3">
              <span className="text-ember-bright">Email</span>{" "}
              coverage@emberdune.world
            </p>
            <p className="flex items-center gap-3">
              <span className="text-ember-bright">Studio</span> 1140 Arroyo
              Vista, Scottsdale, AZ
            </p>
          </div>
        </div>

        <div data-reveal>
          {submitted ? (
            <div className="border border-ember-bright/60 p-10 h-full flex flex-col justify-center">
              <p className="font-display text-2xl text-sand mb-3">
                Request received.
              </p>
              <p className="text-sand-dim text-sm leading-relaxed">
                A coverage specialist will reach out shortly. In the meantime,
                feel free to browse our coverage tiers above.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field
                label="Vehicle (make, model, year)"
                name="vehicle"
                required
              />
              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-sand-dim mb-2">
                  Notes
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full bg-transparent border border-bronze/40 focus:border-ember-bright px-4 py-3 text-sand outline-none transition-colors duration-300 resize-none"
                  placeholder="Modifications, current insurer, preferred tier..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center gap-2 bg-ember hover:bg-ember-bright text-obsidian font-medium px-8 py-4 text-[13px] uppercase tracking-[0.14em] transition-colors duration-300"
              >
                Submit Request
                <ArrowUpRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.14em] text-sand-dim mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border border-bronze/40 focus:border-ember-bright px-4 py-3 text-sand outline-none transition-colors duration-300"
      />
    </div>
  );
}
