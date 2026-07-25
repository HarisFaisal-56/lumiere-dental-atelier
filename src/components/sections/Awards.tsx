const AWARDS = [
  { t: "Best Cosmetic Dentist", s: "Metropolitan Health Awards, 2024" },
  { t: "Excellence in Patient Care", s: "British Dental Association" },
  { t: "Certified Invisalign Provider", s: "Diamond Tier · 2020 – Present" },
  { t: "Advanced Implant Dentistry", s: "ITI Fellow · Ceramic Implants" },
  { t: "Digital Smile Design", s: "Master Clinician Certification" },
  { t: "AACD Accredited Member", s: "American Academy of Cosmetic Dentistry" },
];

function Medal() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="1.1">
      <circle cx="20" cy="16" r="9" />
      <circle cx="20" cy="16" r="5" />
      <path d="M13 22l-4 12 6-3 5 3-4-12M27 22l4 12-6-3-5 3 4-12" strokeLinejoin="round" />
    </svg>
  );
}

export function Awards() {
  return (
    <section id="awards" className="relative py-32 lg:py-40 overflow-hidden" style={{ background: "linear-gradient(180deg, oklch(0.20 0.015 60), oklch(0.16 0.02 70))" }}>
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow reveal" style={{ color: "oklch(0.82 0.11 100)" }}>Recognition</p>
          <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-cream text-balance">
            Awarded, <span className="italic shimmer-text">accredited</span>, and quietly proud.
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-cream/10 rounded-2xl overflow-hidden border border-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map((a, i) => (
            <div key={a.t} className={`reveal reveal-delay-${(i % 4) + 1} p-8 flex items-start gap-5`} style={{ background: "oklch(0.22 0.015 60)" }}>
              <Medal />
              <div>
                <h3 className="font-display text-xl text-cream leading-tight">{a.t}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/60">{a.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
