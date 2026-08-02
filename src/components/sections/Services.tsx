const SERVICES = [
  {
    n: "01",
    title: "Diagnostic Cleaning",
    body: "Micro-precise scaling, polishing, and preventive counsel — the quiet foundation of every smile we shape.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M26 22c-5.4 0-9.4 3.8-9.4 9.6 0 5 1.4 8.6 2.8 12.2.9 2.3 1.5 4.6 1.9 6.6.4 2.2 3.4 2.4 4.1.3l1.6-4.8c.6-1.9 3.3-1.9 3.9 0l1.6 4.8c.7 2.1 3.7 1.9 4.1-.3.3-1.6.7-3.3 1.3-5"/>
        <path d="M26 22c2 0 3.8.6 5.6 1.3 1.3.5 2.6.9 3.9.9"/>
        <circle cx="42" cy="27" r="10.5"/>
        <path d="m49.6 34.4 4.6 4.6a2.4 2.4 0 0 1-3.4 3.4l-4.6-4.6"/>
        <path d="M28.5 8.5 30 13.4l4.9 1.6-4.9 1.6-1.5 4.9-1.5-4.9-4.9-1.6 4.9-1.6z"/>
      </svg>

    ),
  },
  {
    n: "02",
    title: "Porcelain Veneers",
    body: "Whisper-thin bespoke shells hand-sculpted for translucency and light. Cinema-grade smiles, discreetly done.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M8 30c-1.5-6 .5-12 6-13.6 6-1.8 12 .4 18 3 6-2.6 12-4.8 18-3 5.5 1.6 7.5 7.6 6 13.6"/>
        <path d="M14 28.5c0-3.5 2-5.5 4.6-5.5 3 0 5.4 2.4 5.4 6v7c0 1.6-1 2.4-3.6 2.4-4 0-6-1-6.2-2.6z"/>
        <path d="M26 28.8c0-3.6 2.2-6.2 5.8-6.2 3.6 0 5.6 2.6 5.6 6.2v6.8c0 1.8-1.2 2.6-5.6 2.6s-5.8-.8-5.8-2.6z"/>
        <path d="M39.6 28.8c0-3.4 2.2-5.8 5-5.8 2.8 0 5 2 5 5.5v7c-.2 1.8-2.2 2.6-6 2.6-2.6 0-4-.8-4-2.4z"/>
        <path d="M46 44l1.4 3 3 1.4-3 1.4L46 53l-1.4-3.2-3-1.4 3-1.4z"/>
        <path d="M18 46l1 2.2 2.2 1-2.2 1L18 52.4l-1-2.2-2.2-1 2.2-1z"/>
      </svg>
    ),
  },
  {
    n: "03",
    title: "Full-Mouth Renewal",
    body: "Complete reconstructions delivered across a single arc of care — architecture, aesthetics, and function in unison.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M12 26c6-5 14-7 20-7s14 2 20 7c0 12-9 21-20 21s-20-9-20-21z"/>
        <path d="M14.5 30h35"/>
        <path d="M22 30v6M32 30v8M42 30v6"/>
        <path d="M20 40c4 2.5 8 3.6 12 3.6S38 42.5 44 40"/>
      </svg>
    ),
  },
  {
    n: "04",
    title: "Invisible Alignment",
    body: "Custom clear aligners engineered from a single high-resolution scan. Progress you can feel — never see.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M15 54V36c0-11.6 7.6-20 17-20s17 8.4 17 20v18"/>
        <path d="M23 54V36c0-7.6 4-13 9-13s9 5.4 9 13v18"/>
        <path d="M32 16v7"/>
        <path d="M17.4 30.5h5.8M40.8 30.5h5.8"/>
        <path d="M16 41h7M41 41h7"/>
      </svg>
    ),
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
