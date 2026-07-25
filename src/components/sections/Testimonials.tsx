import { useState } from "react";

const T = [
  {
    quote: "Dr. Laurent listened more carefully than any physician I've ever seen. After my alignment, I no longer hide my smile in photographs. The care was tailored, quiet, and precise.",
    name: "Amélie Rousseau",
    role: "Alignment · Aesthetic Restoration",
    initials: "AR",
  },
  {
    quote: "The atelier is closer to a private members' club than a clinic. Every appointment felt considered. My veneers look like I was simply born this way.",
    name: "James Whitfield",
    role: "Porcelain Veneers Patient",
    initials: "JW",
  },
  {
    quote: "I had been afraid of dentistry for twenty years. The sedation protocol, the lighting, the way I was spoken to — it undid decades of fear in an afternoon.",
    name: "Meera Kapoor",
    role: "Full-Mouth Renewal",
    initials: "MK",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = T[i];
  return (
    <section id="voices" className="relative py-32 lg:py-40 bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <p className="eyebrow reveal">Voices</p>
        <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
          What our patients <span className="italic">whisper</span>.
        </h2>

        <div className="reveal reveal-delay-2 mt-16 relative">
          <svg className="mx-auto h-10 w-10 text-gold-deep opacity-60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0 0-2zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0 0-2z"/>
          </svg>

          <blockquote key={i} className="mt-8 font-display text-2xl lg:text-3xl leading-relaxed text-foreground text-balance animate-[reveal-in_600ms_ease-out]">
            "{t.quote}"
          </blockquote>

          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-cream font-medium tracking-wider text-sm">
              {t.initials}
            </div>
            <p className="mt-3 font-medium tracking-wide">{t.name}</p>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{t.role}</p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            {T.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === i ? "w-10 bg-gold-deep" : "w-4 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
