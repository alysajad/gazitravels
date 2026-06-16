"use client";

export function TrustedByStrip() {
  const logos = [
    { name: "PULLMAN", desc: "ZAMZAM MAKKAH" },
    { name: "Swissôtel", desc: "AL MAQAM" },
    { name: "Hilton", desc: "SUITES" },
    { name: "Mövenpick", desc: "ANWAR AL MADINAH" },
    { name: "Concorde", desc: "AL MADINAH" },
  ];

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-content mx-auto px-6">
        <p className="text-center font-display font-medium text-gray-500 mb-10">
          Our <span className="font-bold text-dark">Affiliate Hotels</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-0.5 text-center transition-opacity hover:opacity-100"
            >
              <span className="text-2xl md:text-3xl font-display font-bold text-dark tracking-tight">
                {logo.name}
              </span>
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-gray-500 uppercase">
                {logo.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
