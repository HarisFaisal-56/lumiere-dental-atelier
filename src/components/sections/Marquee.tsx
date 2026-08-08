const LOGOS = [
  "Precision",
  "Craft",
  "Comfort",
  "Care",
  "Detail",
  "Balance",
  "Clarity",
  "Excellence",
];

export function Marquee() {
  return (
    <section className="border-y border-border/60 bg-card/40 py-8 overflow-hidden">
      <p className="mx-auto mb-6 max-w-7xl px-6 lg:px-10 text-center text-[0.7rem] uppercase tracking-[0.32em] text-muted-foreground">
        THE LUMIÈRE STANDARD
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
          {[0, 1].map((g) => (
            <div key={g} className="flex gap-16 pr-16" aria-hidden={g === 1 ? true : undefined}>
              {LOGOS.map((l, i) => (
                <span key={i} className="font-display text-2xl text-foreground/60 tracking-tight">
                  {l}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
