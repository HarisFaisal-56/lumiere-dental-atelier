import hero from "@/assets/hero-clinic.jpg";
import smile from "@/assets/smile-portrait.jpg";
import reception from "@/assets/reception.jpg";
import exterior from "@/assets/clinic-exterior.jpg";
import suite from "@/assets/treatment-suite.jpg";
import equipment from "@/assets/equipment.jpg";

const TREATMENTS = [
  { title: "Porcelain Veneers", desc: "Whisper-thin, hand-layered ceramic shells for translucent, camera-ready smiles.", img: smile },
  { title: "Invisalign", desc: "Bespoke clear aligners printed from a single high-resolution scan.", img: equipment },
  { title: "Smile Makeovers", desc: "Whitening, alignment, and micro-veneering composed as one considered plan.", img: hero },
  { title: "Teeth Whitening", desc: "Enamel-safe in-clinic protocol calibrated to your natural shade.", img: reception },
  { title: "Dental Implants", desc: "Digitally-planned ceramic implants placed with millimetric precision.", img: suite },
  { title: "Full Mouth Rehabilitation", desc: "Complete reconstructions coordinated across a single arc of care.", img: exterior },
];

export function SignatureTreatments() {
  return (
    <section id="treatments" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow reveal">Signature Treatments</p>
          <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
            Six atelier disciplines,<br /><span className="italic">exquisitely</span> executed.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t, i) => (
            <article
              key={t.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl leading-tight">{t.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.18em] uppercase text-foreground gold-underline w-fit">
                  Learn more
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-deep transition-[width] duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
