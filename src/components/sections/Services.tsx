const SERVICES = [
  {
    n: "01",
    title: "Diagnostic Cleaning",
    body: "Micro-precise scaling, polishing, and preventive counsel — the quiet foundation of every smile we shape.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M22 14c-4 0-6.5 3-6.5 6.8 0 3.3 1.4 5.3 2.4 8 .9 2.7.8 5.6 1.8 8.6.7 2.4 1.9 4.6 3.5 4.6 2 0 2.5-2.4 3-5.4.4-2 .9-3.8 2-3.8s1.6 1.8 2 3.8c.5 3 1 5.4 3 5.4 1.6 0 2.8-2.2 3.5-4.6 1-3 .9-5.9 1.8-8.6 1-2.7 2.4-4.7 2.4-8 0-3.8-2.5-6.8-6.5-6.8-2.5 0-3.8 1-5.6 1.9-1.1.5-1.7.7-2.6.7s-1.5-.2-2.6-.7C25.8 15 24.5 14 22 14z"/>
        <path d="M42 10l2 3 3-1M20 8l-2 3-3-1"/>
      </svg>
    ),
  },
  {
    n: "02",
    title: "Porcelain Veneers",
    body: "Whisper-thin bespoke shells hand-sculpted for translucency and light. Cinema-grade smiles, discreetly done.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M12 26c8-10 32-10 40 0"/>
        <path d="M18 28c0 8 5 14 14 14s14-6 14-14"/>
        <path d="M24 28v10M32 28v12M40 28v10"/>
      </svg>
    ),
  },
  {
    n: "03",
    title: "Full-Mouth Renewal",
    body: "Complete reconstructions delivered across a single arc of care — architecture, aesthetics, and function in unison.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M14 20c0-4 3-8 8-8s6 3 10 3 5-3 10-3 8 4 8 8-2 6-3 10-1 8-3 12-4 6-6 6-3-3-5-8-2-8-4-8-2 3-4 8-3 8-5 8-4-2-6-6-2-8-3-12-3-6-3-10z"/>
        <circle cx="32" cy="30" r="2"/>
      </svg>
    ),
  },
  {
    n: "04",
    title: "Invisible Alignment",
    body: "Custom clear aligners engineered from a single high-resolution scan. Progress you can feel — never see.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.2" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M12 22c0-3 3-6 6-6h28c3 0 6 3 6 6v6c0 12-10 22-20 22S12 40 12 28z"/>
        <path d="M20 20v14M28 20v18M36 20v18M44 20v14"/>
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

          <div className="lg:col-span-7 grid gap-px bg-border sm:grid-cols-2 rounded-2xl overflow-hidden border border-border">
            {SERVICES.map((s, i) => (
              <article
                key={s.n}
                className={`reveal reveal-delay-${(i % 4) + 1} group relative bg-card p-8 transition-colors duration-500 hover:bg-accent/40`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.7rem] tracking-widest text-gold-deep">{s.n}</span>
                  <div className="h-10 w-10 text-gold-deep transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {s.icon}
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-deep transition-[width] duration-700 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
