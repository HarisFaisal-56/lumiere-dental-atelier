import { useEffect, useRef, useState } from "react";
import exteriorImg from "@/assets/clinic-exterior.jpg";
import smileImg from "@/assets/smile-portrait.jpg";

function useCount(target: number, active: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
}

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setActive(true), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const satisfaction = useCount(98, active);
  const smiles = useCount(4700, active, 1800);
  const dashArray = 283;
  const dashOffset = dashArray - (dashArray * satisfaction) / 100;

  return (
    <section ref={ref} id="philosophy" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow reveal">The Philosophy</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-4xl lg:text-5xl leading-[1.05] text-balance">
              Advanced dental care you can genuinely <span className="italic">trust</span>.
            </h2>
          </div>
          <div className="lg:col-span-8 lg:pl-12 flex items-end">
            <p className="reveal reveal-delay-2 text-muted-foreground text-lg leading-relaxed">
              We combine modern dentistry, personalised care, and proven techniques to
              deliver treatments that are comfortable, effective, and long-lasting.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* Card 1 — Comprehensive services */}
          <article className="reveal card-elegant lg:col-span-4 p-8 flex flex-col justify-between" style={{ background: "linear-gradient(160deg, oklch(0.93 0.05 100), oklch(0.86 0.09 105))" }}>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-ink/10 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em] text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
                Trusted Dentistry
              </span>
              <h3 className="mt-6 font-display text-2xl leading-tight">
                Comprehensive services under one atelier
              </h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                From general dentistry to cosmetic and restorative treatments — a single roof,
                a single practitioner, no handoffs.
              </p>
            </div>
            <div className="mt-8 aspect-[16/9] rounded-xl overflow-hidden shadow-inset-line">
              <img src={exteriorImg} alt="Clinic exterior at dusk" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
          </article>

          {/* Card 2 — Ring stat */}
          <article className="reveal reveal-delay-1 card-elegant lg:col-span-4 p-8 flex flex-col items-center text-center" style={{ background: "linear-gradient(180deg, oklch(0.94 0.03 95), oklch(0.88 0.07 100))" }}>
            <div className="relative h-40 w-40">
              <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                <circle cx="50" cy="50" r="45" fill="none" stroke="oklch(0.22 0.015 60 / 0.12)" strokeWidth="4" />
                <circle
                  cx="50" cy="50" r="45"
                  fill="none"
                  stroke="var(--gold-deep)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={dashArray}
                  strokeDashoffset={dashOffset}
                  style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.2,0.8,0.2,1)" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-4xl">{satisfaction}%</span>
                <span className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground mt-1">satisfaction</span>
              </div>
            </div>
            <h3 className="mt-8 font-display text-2xl">Patient satisfaction</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Measured across every visit, every year. Reliable care, quietly delivered.
            </p>
          </article>

          {/* Card 3 — Big number */}
          <article className="reveal reveal-delay-2 card-elegant lg:col-span-4 p-8 flex flex-col justify-between overflow-hidden relative" style={{ background: "linear-gradient(160deg, oklch(0.96 0.015 88), oklch(0.90 0.03 95))" }}>
            <div>
              <div className="font-display text-6xl lg:text-7xl leading-none tracking-tight">
                {smiles.toLocaleString()}<span className="text-gold-deep">.</span>
              </div>
              <div className="mt-3 h-px w-16 bg-gold-deep" />
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.26em] text-muted-foreground">Smiles restored</p>
              <h3 className="mt-6 font-display text-2xl">Confidence, reawakened</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Helping patients regain confidence through healthy, natural-looking, and
                long-lasting smiles.
              </p>
            </div>
            <div className="mt-8 aspect-[16/9] rounded-xl overflow-hidden shadow-inset-line">
              <img
                src={smileImg}
                alt="Restored natural smile"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </article>
        </div>

        {/* CTA banner */}
        <div className="reveal mt-24 relative overflow-hidden rounded-3xl border border-border p-10 lg:p-16 text-center" style={{ background: "linear-gradient(115deg, oklch(0.20 0.015 60), oklch(0.28 0.02 80))" }}>
          <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
          <p className="eyebrow relative" style={{ color: "oklch(0.82 0.11 100)" }}>Begin the journey</p>
          <h3 className="relative mt-6 font-display text-4xl lg:text-6xl text-cream text-balance">
            Your smile is waiting. <span className="italic shimmer-text">We are ready.</span>
          </h3>
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-gold">Book Your Appointment</a>
            <a href="tel:+15550100" className="text-sm font-medium tracking-[0.14em] uppercase text-cream/80 gold-underline inline-flex items-center gap-2">
              or call +1 555 010 0
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
