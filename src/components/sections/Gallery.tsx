import reception from "@/assets/reception.jpg";
import suite from "@/assets/treatment-suite.jpg";
import equipment from "@/assets/equipment.jpg";
import lounge from "@/assets/lounge.jpg";
import exterior from "@/assets/clinic-exterior.jpg";
import dentist from "@/assets/dentist.jpg";

const IMAGES = [
  { src: reception, label: "Reception", span: "lg:col-span-5 lg:row-span-2" },
  { src: suite, label: "Consultation Room", span: "lg:col-span-4" },
  { src: equipment, label: "Advanced Equipment", span: "lg:col-span-3" },
  { src: dentist, label: "Team Culture", span: "lg:col-span-3" },
  { src: exterior, label: "Treatment Suites", span: "lg:col-span-4" },
  { src: lounge, label: "Patient Lounge", span: "lg:col-span-12" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32 lg:py-40 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow reveal">The Space</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
              Experience our <span className="italic">clinic</span>.
            </h2>
          </div>
          <p className="reveal reveal-delay-2 lg:col-span-5 text-muted-foreground leading-relaxed">
            A quiet suite of six rooms, composed to feel closer to a private residence than a medical practice.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-12 auto-rows-[260px]">
          {IMAGES.map((img, i) => (
            <figure
              key={i}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <img src={img.src} alt={img.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <figcaption className="absolute bottom-5 left-5 text-cream">
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 font-display text-xl">{img.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
