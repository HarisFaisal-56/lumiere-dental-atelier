const SERVICES = [
  {
    n: "01",
    title: "Diagnostic Cleaning",
    body: "Micro-precise scaling, polishing, and preventive counsel — the quiet foundation of every smile we shape.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M40 12l12 12-22 22a8 8 0 0 1-3.6 2.1L16 51l2.9-10.4A8 8 0 0 1 21 37z"/>
        <path d="M36 16l12 12"/>
        <path d="M20 44l4 4"/>
        <path d="M12 16l1.6 3.4L17 21l-3.4 1.6L12 26l-1.6-3.4L7 21l3.4-1.6z"/>
      </svg>
    ),
  },
  {
    n: "02",
    title: "Porcelain Veneers",
    body: "Whisper-thin bespoke shells hand-sculpted for translucency and light. Cinema-grade smiles, discreetly done.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M18 22h9v13a4.5 4.5 0 0 1-9 0z"/>
        <path d="M29 22h9v15a4.5 4.5 0 0 1-9 0z"/>
        <path d="M40 22h7v11a3.5 3.5 0 0 1-7 0z"/>
        <path d="M14 17c8-4 30-4 38 0"/>
        <path d="M50 44c0 6-8 10-18 10S14 50 14 44"/>
      </svg>
    ),
  },
  {
    n: "03",
    title: "Full-Mouth Renewal",
    body: "Complete reconstructions delivered across a single arc of care — architecture, aesthetics, and function in unison.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M10 26c0 14 10 24 22 24s22-10 22-24"/>
        <path d="M10 26c6-6 14-9 22-9s16 3 22 9"/>
        <path d="M22 20.5V44M32 17.5V50M42 20.5V44"/>
        <path d="M32 8v6M27 11l5-3 5 3"/>
      </svg>
    ),
  },
  {
    n: "04",
    title: "Invisible Alignment",
    body: "Custom clear aligners engineered from a single high-resolution scan. Progress you can feel — never see.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M14 20c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v6c0 12-8 22-18 22S14 38 14 26z"/>
        <path d="M20 30h24"/>
        <path d="M26 24v12M38 24v12"/>
        <path d="M32 12v40"/>
      </svg>
    ),
  },

  },
  {
    n: "05",
    title: "Ceramic Implants",
    body: "Metal-free biocompatible implants placed with digitally-planned precision. Discreet, permanent, unwaveringly you.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M32 8c-4 0-8 4-8 8 0 3 2 5 2 8s-2 5-2 8 2 5 2 8-2 5-2 8c0 4 4 6 8 6s8-2 8-6c0-3-2-5-2-8s2-5 2-8-2-5-2-8 2-5 2-8c0-4-4-8-8-8z"/>
        <path d="M26 20h12M26 28h12M26 36h12"/>
      </svg>
    ),
  },
  {
    n: "06",
    title: "Sedation Comfort",
    body: "A calming protocol designed for anxious patients — soft lighting, aromatherapy, and gentle IV sedation on request.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M44 32a12 12 0 1 1-14-12 10 10 0 0 0 14 12z"/>
        <path d="M46 12l2 2-2 2-2-2zM52 20l3 3-3 3-3-3z"/>
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="expertise" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow reveal">The Expertise</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
              Six disciplines,<br /> practiced as one <span className="italic">craft</span>.
            </h2>
            <p className="reveal reveal-delay-2 mt-6 max-w-md text-muted-foreground leading-relaxed">
              Our clinicians move fluidly across restorative, cosmetic, and preventive
              dentistry — coordinating every treatment through a single lead practitioner.
            </p>
            <a href="#contact" className="reveal reveal-delay-3 mt-10 inline-flex items-center gap-3 text-sm font-medium tracking-[0.14em] uppercase text-foreground gold-underline w-fit">
              Consult our team
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="lg:col-span-7 grid gap-px bg-border sm:grid-cols-2 rounded-2xl overflow-hidden border border-border shadow-[0_24px_70px_-40px_color-mix(in_oklab,var(--ink)_28%,transparent)]">
            {SERVICES.map((s, i) => (
              <article
                key={s.n}
                className={`reveal reveal-delay-${(i % 4) + 1} group relative bg-card px-8 pt-9 pb-10 transition-[background-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[2px] hover:bg-accent/25 hover:shadow-[0_18px_46px_-28px_color-mix(in_oklab,var(--ink)_26%,transparent)] hover:z-10`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.7rem] tracking-widest text-gold-deep">{s.n}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold-deep)_18%,transparent)] bg-[color-mix(in_oklab,var(--gold-deep)_5%,transparent)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--gold-deep)_32%,transparent)]">
                    <div className="h-7 w-7 text-gold-deep transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105">
                      {s.icon}
                    </div>
                  </div>
                </div>
                <h3 className="mt-7 font-display text-[1.6rem] leading-[1.15] tracking-[-0.015em]">{s.title}</h3>
                <p className="mt-4 max-w-[34ch] text-sm leading-[1.75] text-muted-foreground">{s.body}</p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-deep transition-[width] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
