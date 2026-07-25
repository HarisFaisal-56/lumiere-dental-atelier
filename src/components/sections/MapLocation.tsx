const HOURS = [
  ["Mon — Fri", "09:00 — 19:00"],
  ["Saturday", "10:00 — 16:00"],
  ["Sunday", "By appointment"],
];

export function MapLocation() {
  return (
    <section id="visit" className="relative py-32 lg:py-40 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow reveal">Visit Us</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
              Visit our <span className="italic">atelier</span>.
            </h2>
          </div>
          <p className="reveal reveal-delay-2 lg:col-span-5 text-muted-foreground leading-relaxed">
            A quiet address in the design district. Valet and covered parking available; a private entrance for evening consultations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="reveal lg:col-span-8 relative overflow-hidden rounded-3xl border border-border shadow-elegant aspect-[16/10]">
            <iframe
              title="Lumière Dental Atelier — location"
              src="https://www.google.com/maps?q=Louvre%20Paris&output=embed"
              loading="lazy"
              className="absolute inset-0 h-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "grayscale(0.4) contrast(0.95)" }}
            />
          </div>

          <div className="reveal reveal-delay-1 lg:col-span-4 flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-gold-deep">The Studio</p>
              <p className="mt-3 font-display text-2xl leading-snug">14 Rue de la Lumière<br />Suite 3F</p>
              <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                <p>+1 555 010 0</p>
                <p>hello@lumiereatelier.com</p>
              </div>
              <a
                href="https://maps.google.com/?q=14+Rue+de+la+Lumiere"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.18em] uppercase text-foreground gold-underline w-fit"
              >
                Get directions →
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-gold-deep">Hours</p>
              <div className="mt-4 space-y-3">
                {HOURS.map(([d, h]) => (
                  <div key={d} className="flex items-center justify-between text-sm border-b border-border/60 pb-2 last:border-0">
                    <span className="text-foreground/80">{d}</span>
                    <span className="font-mono text-foreground">{h}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
                Valet parking available. Emergency visits accepted on the same day — please call ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
