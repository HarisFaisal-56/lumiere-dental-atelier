import heroImg from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Image layer with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Lumière Dental Atelier — clinic interior bathed in warm light"
          className="h-full w-full object-cover object-[65%_center] sm:object-[60%_center] md:object-[58%_center] lg:object-center animate-ken-burns"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="absolute inset-0 grain opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32 lg:pt-48">
        <div className="max-w-3xl">
          <p className="eyebrow reveal">Est. 2011 · A private dental atelier</p>

          <h1 className="reveal reveal-delay-1 mt-8 font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-foreground text-balance">
            A new smile
            <br />
            <span className="italic font-normal">transforms</span> more
            <br />
            than just <span className="shimmer-text">your teeth.</span>
          </h1>

          <p className="reveal reveal-delay-2 mt-8 max-w-xl text-base leading-relaxed text-foreground/75 lg:text-lg">
            Quiet rooms, patient hands, and a philosophy of restraint. Every treatment
            at Lumière is composed like a piece of couture — measured, personal, and
            entirely yours.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-gold">Reserve a Visit</a>
            <a href="#expertise" className="btn-ghost-ink">Discover the Atelier</a>
          </div>

          <div className="reveal reveal-delay-4 mt-16 flex flex-wrap items-center gap-10 border-t border-border/60 pt-8">
            <Metric value="14" label="Years of practice" />
            <div className="hairline hidden h-8 w-px md:block" />
            <Metric value="4,700+" label="Smiles restored" />
            <div className="hairline hidden h-8 w-px md:block" />
            <Metric value="9.8" suffix="/10" label="Patient rating" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-6 z-10 hidden lg:flex flex-col items-center gap-3 text-foreground/60">
        <span className="text-[0.65rem] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">scroll</span>
        <span className="h-16 w-px bg-foreground/40 overflow-hidden relative">
          <span className="absolute inset-x-0 top-0 h-6 bg-gold-deep animate-[reveal-in_1.6s_ease-in-out_infinite_alternate]" />
        </span>
      </div>
    </section>
  );
}

function Metric({ value, label, suffix }: { value: string; label: string; suffix?: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-foreground">
        {value}
        {suffix && <span className="text-lg text-muted-foreground">{suffix}</span>}
      </div>
      <div className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
    </div>
  );
}
