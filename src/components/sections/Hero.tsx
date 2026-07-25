import type { ReactNode } from "react";
import heroImg from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Image layer with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Lumière Dental Atelier — clinic interior bathed in warm light"
          className="h-full w-full object-cover animate-ken-burns"
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
            Premium cosmetic dentistry, veneers, smile makeovers, implants, and Invisalign
            treatments designed around you.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-gold">Reserve a Visit</a>
            <a href="#expertise" className="btn-ghost-ink">Discover the Atelier</a>
          </div>

          {/* Trust indicators */}
          <div className="reveal reveal-delay-4 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 max-w-2xl border-t border-border/60 pt-8">
            <Trust icon="star" label="4.9 / 5" sub="Google Rating" />
            <Trust icon="heart" label="47,000+" sub="Patients Served" />
            <Trust icon="clock" label="15+ Years" sub="Experience" />
            <Trust icon="award" label="Award-Winning" sub="Cosmetic Dentistry" />
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

function Trust({ icon, label, sub }: { icon: "star" | "heart" | "clock" | "award"; label: string; sub: string }) {
  const paths: Record<string, ReactNode> = {
    star: <path d="M12 2l3 6.5 7 .9-5 4.9 1.2 7-6.2-3.5-6.2 3.5L7 14.3l-5-4.9 7-.9z" />,
    heart: <path d="M12 21s-8-5.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-8 11-8 11z" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    award: <><circle cx="12" cy="9" r="6" /><path d="M9 14l-2 8 5-3 5 3-2-8" /></>,
  };
  return (
    <div className="flex items-start gap-3">
      <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
        {paths[icon]}
      </svg>
      <div>
        <div className="font-display text-lg leading-tight">{label}</div>
        <div className="mt-0.5 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}
