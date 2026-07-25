import { useRef, useState } from "react";
import beforeV from "@/assets/before-veneers.jpg";
import afterV from "@/assets/after-veneers.jpg";
import beforeW from "@/assets/before-whitening.jpg";
import afterW from "@/assets/after-whitening.jpg";

const CASES = [
  { treatment: "Porcelain Veneers", desc: "Hand-layered ceramic shells restoring translucency and proportion.", summary: "10 upper veneers · 3 visits", before: beforeV, after: afterV },
  { treatment: "Professional Whitening", desc: "In-clinic enamel-safe whitening protocol tailored to natural shade.", summary: "8 shades brighter · single visit", before: beforeW, after: afterW },
  { treatment: "Invisalign Alignment", desc: "Custom clear aligners engineered from a single digital scan.", summary: "14 months · discreet correction", before: beforeV, after: afterV },
  { treatment: "Smile Makeover", desc: "Composite of alignment, whitening, and micro-veneering for a cohesive result.", summary: "Complete arch · 4 visits", before: beforeW, after: afterW },
];

function Slider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] overflow-hidden rounded-2xl select-none cursor-ew-resize shadow-inset-line"
      onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      onClick={(e) => move(e.clientX)}
    >
      <img src={after} alt={`${alt} — after`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt={`${alt} — before`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
      </div>
      {/* Labels */}
      <span className="absolute top-4 left-4 rounded-full bg-ink/70 backdrop-blur px-3 py-1 text-[0.6rem] uppercase tracking-[0.28em] text-cream">Before</span>
      <span className="absolute top-4 right-4 rounded-full bg-gold-deep/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.28em] text-cream">After</span>
      {/* Divider */}
      <div className="absolute inset-y-0 w-px bg-cream/90 shadow-[0_0_20px_rgba(0,0,0,0.3)]" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-cream border border-gold-deep shadow-elegant flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="transformations" className="relative py-32 lg:py-40" style={{ background: "var(--gradient-cream)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow reveal">Smile Transformations</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
              Before, and <span className="italic">after</span>.
            </h2>
          </div>
          <p className="reveal reveal-delay-2 lg:col-span-4 text-muted-foreground leading-relaxed">
            Drag the divider to reveal each result. Every case documented in-house, retouched only for lighting consistency.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {CASES.map((c, i) => (
            <article key={i} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <Slider before={c.before} after={c.after} alt={c.treatment} />
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl">{c.treatment}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">{c.desc}</p>
                </div>
                <span className="mt-1 whitespace-nowrap text-[0.65rem] uppercase tracking-[0.22em] text-gold-deep">{c.summary}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
