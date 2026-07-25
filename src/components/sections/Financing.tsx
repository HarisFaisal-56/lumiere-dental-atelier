const PLANS = [
  { t: "Bespoke Payment Plans", d: "Structured monthly instalments across 6, 12, or 24 months — no hidden fees, no surprises.", n: "01" },
  { t: "0% Interest Financing", d: "Interest-free arrangements available on cosmetic and full-mouth treatments over £3,000.", n: "02" },
  { t: "Insurance Support", d: "We handle direct billing for most major providers and provide pre-approval assistance.", n: "03" },
  { t: "Transparent Treatment Planning", d: "Every proposal itemised in writing, with no obligation and unlimited revisions.", n: "04" },
];

export function Financing() {
  return (
    <section id="financing" className="relative py-32 lg:py-40 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow reveal">Investment</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
              Flexible payment,<br /> <span className="italic">quiet</span> reassurance.
            </h2>
            <p className="reveal reveal-delay-2 mt-6 max-w-md text-muted-foreground leading-relaxed">
              Exceptional care should never feel out of reach. Our concierge team will draft a plan that fits your treatment and your calendar.
            </p>
            <a href="#contact" className="reveal reveal-delay-3 btn-gold mt-10">Speak with our concierge</a>
          </div>

          <div className="lg:col-span-7 grid gap-px bg-border rounded-2xl overflow-hidden border border-border sm:grid-cols-2">
            {PLANS.map((p, i) => (
              <div key={p.n} className={`reveal reveal-delay-${(i % 4) + 1} bg-card p-8`}>
                <span className="font-mono text-[0.7rem] tracking-widest text-gold-deep">{p.n}</span>
                <h3 className="mt-4 font-display text-2xl leading-tight">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
