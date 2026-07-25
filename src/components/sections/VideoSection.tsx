import { useState } from "react";
import thumb from "@/assets/video-thumb.jpg";
import dentist from "@/assets/dentist.jpg";

const VIDEOS = [
  { title: "A welcome from Dr. Laurent", meta: "02:14 · The Founder", img: thumb },
  { title: "Amélie's smile — a patient story", meta: "03:47 · Patient Journey", img: dentist },
];

export function VideoSection() {
  const [playing, setPlaying] = useState<number | null>(null);
  return (
    <section id="journey" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow reveal">Cinema Room</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
              Your journey <span className="italic">begins</span> here.
            </h2>
          </div>
          <p className="reveal reveal-delay-2 lg:col-span-5 text-muted-foreground leading-relaxed">
            Short films from the atelier — a welcome from our lead clinician and a patient's own account of their transformation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {VIDEOS.map((v, i) => (
            <figure
              key={i}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-3xl shadow-elegant aspect-[16/10] cursor-pointer`}
              onClick={() => setPlaying(playing === i ? null : i)}
            >
              <img src={v.img} alt={v.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/10" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex h-24 w-24 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-cream/50 group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute inset-2 rounded-full bg-cream/95 flex items-center justify-center backdrop-blur transition-transform duration-500 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 translate-x-0.5 text-gold-deep" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </div>

              <figcaption className="absolute bottom-6 left-6 right-6 text-cream flex items-end justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">{v.meta}</p>
                  <p className="mt-1 font-display text-2xl">{v.title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
