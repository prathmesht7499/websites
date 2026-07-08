const MARQUE = [
  "PORSCHE", "BENTLEY", "FERRARI", "ASTON MARTIN", "ROLLS-ROYCE",
  "LAMBORGHINI", "MCLAREN", "MASERATI", "BUGATTI", "LUCID",
];

export default function MarqueeStrip() {
  const doubled = [...MARQUE, ...MARQUE];
  return (
    <div className="relative bg-dune border-y border-bronze/20 py-6 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {doubled.map((name, i) => (
          <span
            key={i}
            className="font-display text-sand-dim/60 text-xl md:text-2xl px-10 whitespace-nowrap tracking-wide"
          >
            {name}
          </span>
        ))}
      </div>
      <p className="sr-only">
        Emberdune provides coverage compatible with all major marques including
        Porsche, Bentley, Ferrari, Aston Martin, Rolls-Royce, Lamborghini,
        McLaren, Maserati, Bugatti, and Lucid.
      </p>
    </div>
  );
}
