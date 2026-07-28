import { GoogleG } from "@/components/brand/GoogleG";
import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";

type Review = {
  name: string;
  avatar: string;
  date: string;
  tag?: string;
  quote: string;
  large?: boolean;
};

/** Swap `avatar` with a new image import to change a patient photo. */
const REVIEWS: Review[] = [
  {
    name: "Amélie Rousseau",
    avatar: avatar1,
    date: "2 months ago",
    tag: "Smile Makeover",
    quote:
      "I came in unsure about what I actually needed, and left with a plan that made sense. Six months later the result still looks like my own teeth — just the version I always hoped for.",
    large: true,
  },
  {
    name: "James Whitfield",
    avatar: avatar2,
    date: "5 weeks ago",
    tag: "Veneers",
    quote:
      "The shade matching was done over two appointments rather than rushed into one. That patience shows every time I look in the mirror.",
  },
  {
    name: "Meera Kapoor",
    avatar: avatar3,
    date: "3 months ago",
    tag: "Invisalign",
    quote:
      "Fourteen months of aligners, and every review appointment started on time. The team explained each stage clearly, which made the whole thing far easier than I expected.",
  },
  {
    name: "Daniel Okonkwo",
    avatar: avatar4,
    date: "6 months ago",
    tag: "Implants",
    quote:
      "I had put off an implant for years out of nerves. The treatment itself was genuinely painless and I was called the next morning to check how I was doing.",
    large: true,
  },
  {
    name: "Claire Bennett",
    avatar: avatar5,
    date: "3 weeks ago",
    tag: "Whitening",
    quote:
      "A calm, quiet clinic — nothing like the dental practices I grew up with. The whitening was gentle and the result looks natural rather than artificial.",
  },
  {
    name: "Kenji Sato",
    avatar: avatar6,
    date: "4 months ago",
    quote:
      "Attention to detail is the thing that stands out. Small adjustments were made until the bite felt exactly right, with no sense of being hurried along.",
  },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[3px] ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 text-gold-deep" fill="currentColor" aria-hidden="true">
          <path d="M10 1.6l2.47 5.1 5.53.78-4.02 3.9.96 5.52L10 14.3l-4.94 2.6.96-5.52L2 7.48l5.53-.78L10 1.6z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <article
      className="card-elegant group relative flex w-[78vw] max-w-[340px] shrink-0 flex-col justify-between p-7 text-left sm:w-[320px] lg:w-[360px] lg:p-9"
      style={{ aspectRatio: "4 / 5", background: "linear-gradient(170deg, oklch(0.99 0.008 88), oklch(0.955 0.018 90))" }}
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex min-w-0 items-center gap-2">
            <GoogleG className="h-4 w-4 shrink-0" />
            <span className="truncate text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
              Google Reviews
            </span>
          </span>
          {r.tag && (
            <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.18em] text-ink-soft">
              {r.tag}
            </span>
          )}
        </div>

        <div className="mt-6 hairline" />

        <svg viewBox="0 0 24 24" className="mt-6 h-5 w-5 text-gold-deep/40" fill="currentColor" aria-hidden="true">
          <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0 0-2zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0 0-2z" />
        </svg>

        <blockquote className="mt-4 font-display text-[1.15rem] leading-[1.55] text-foreground lg:text-[1.3rem]">
          {r.quote}
        </blockquote>
      </div>

      <footer className="mt-6 flex items-center gap-4">
        <img
          src={r.avatar}
          alt={r.name}
          loading="lazy"
          width={512}
          height={512}
          className={`shrink-0 rounded-full object-cover shadow-inset-line ${r.large ? "h-14 w-14" : "h-12 w-12"}`}
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium tracking-wide">{r.name}</p>
          <p className="mt-0.5 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
            Verified Google Reviewer
          </p>
          <div className="mt-2 flex items-center gap-2">
            <Stars />
            <span className="text-[0.68rem] text-muted-foreground">{r.date}</span>
          </div>
        </div>
      </footer>

    </article>
  );
}

export function Testimonials() {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section id="voices" className="relative py-32 lg:py-40 bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <p className="eyebrow reveal">Voices</p>
        <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
          What our patients <span className="italic">whisper</span>.
        </h2>
        <p className="reveal reveal-delay-2 mt-6 inline-flex flex-wrap items-center justify-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
          <Stars />
          <span>4.9 Rating</span>
          <span className="h-1 w-1 rounded-full bg-gold-deep/50" />
          <span>Based on 320+ Google Reviews</span>
        </p>
      </div>

      <div className="reveal reveal-delay-3 mt-16 marquee-mask group relative overflow-hidden">
        <ul className="flex w-max items-stretch gap-6 px-6 animate-drift-x group-hover:[animation-play-state:paused] lg:gap-8 lg:px-10">
          {loop.map((r, i) => (
            <li key={`${r.name}-${i}`} className="flex" aria-hidden={i >= REVIEWS.length}>
              <ReviewCard r={r} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
