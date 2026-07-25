const PARTNERS = ["Bupa", "AXA Health", "Cigna", "Aetna", "Vitality", "Allianz", "Denplan", "WPA"];

export function Insurance() {
  return (
    <section id="insurance" className="relative py-24 lg:py-28 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="eyebrow reveal">Insurance Partners</p>
          <h2 className="reveal reveal-delay-1 mt-4 font-display text-3xl lg:text-4xl">Accepted providers</h2>
        </div>
        <div className="reveal reveal-delay-2 mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {PARTNERS.map((p) => (
            <div key={p} className="bg-card py-10 flex items-center justify-center transition-colors hover:bg-accent/30">
              <span className="font-display text-2xl tracking-tight text-foreground/70">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
