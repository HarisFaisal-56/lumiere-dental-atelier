import receptionImg from "@/assets/reception.jpg";
import dentistImg from "@/assets/dentist.jpg";

export function Atelier() {
  return (
    <section id="atelier" className="relative overflow-hidden py-32 lg:py-40" style={{ background: "var(--gradient-cream)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6 relative">
            <div className="reveal relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
              <img
                src={dentistImg}
                alt="Dr. Elyse Laurent, lead clinician at Lumière"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream/80">Lead Clinician</p>
                <p className="mt-1 font-display text-2xl">Dr. Elyse Laurent, DMD</p>
              </div>
            </div>
            <div className="reveal reveal-delay-2 absolute -bottom-10 -right-6 hidden md:block w-56 rounded-2xl overflow-hidden shadow-elegant border-4 border-background animate-float-slow">
              <img src={receptionImg} alt="Reception" loading="lazy" className="h-40 w-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-10">
            <p className="eyebrow reveal">The Atelier</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
              Dentistry is our art.<br />
              <span className="italic text-gold-deep">Your smile</span> is the masterpiece.
            </h2>

            <p className="reveal reveal-delay-2 mt-8 text-lg leading-relaxed text-foreground/80">
              Founded on the belief that healthcare deserves the intimacy of a private
              atelier, Lumière pairs museum-grade equipment with an unhurried,
              considered approach. No production line — only long consultations,
              tailored plans, and clinicians who remember your name.
            </p>

            <ul className="reveal reveal-delay-3 mt-10 space-y-5">
              {[
                ["Two decades of specialist expertise", "Led by internationally-published clinicians."],
                ["Cinematic 3D digital imaging", "Zeiss microscopes and CBCT scanners."],
                ["Patient-composed treatment", "Every plan drafted around your life, not ours."],
                ["Concierge sedation & aftercare", "House visits available within the district."],
              ].map(([t, s]) => (
                <li key={t} className="flex gap-4 border-b border-border pb-5">
                  <span className="mt-1 text-gold-deep">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 10l4 4 8-8" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-4 mt-12 rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold-deep">Why patients choose Dr. Laurent</p>
              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
                {[
                  ["15+", "Years of practice"],
                  ["4,000+", "Smile transformations"],
                  ["International", "Training & fellowships"],
                  ["Advanced", "Cosmetic expertise"],
                  ["Personalised", "Treatment planning"],
                  ["Published", "In clinical journals"],
                ].map(([k, v]) => (
                  <div key={v} className="flex items-baseline gap-3 border-b border-border/60 pb-3">
                    <span className="font-display text-lg text-foreground">{k}</span>
                    <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
