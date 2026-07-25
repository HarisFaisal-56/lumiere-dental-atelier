const REVIEWS = [
  { name: "Sophia Bellini", rating: 5, date: "2 weeks ago", text: "The most refined dental experience I have ever had. My veneers look completely natural — friends can't tell. The atelier feels more like a private salon than a clinic." },
  { name: "Rahul Menon", rating: 5, date: "1 month ago", text: "Dr. Laurent and her team are meticulous. Every step of my implant treatment was explained, unhurried, and painless. Beautifully done." },
  { name: "Isabelle Chen", rating: 5, date: "1 month ago", text: "I flew in for my smile makeover. Worth every mile. Warm, attentive, and technically outstanding — a rare combination in cosmetic dentistry." },
  { name: "Michael Osei", rating: 5, date: "2 months ago", text: "Invisalign with concierge care. Regular scans, honest advice, no upselling. My alignment finished three months early." },
  { name: "Elena Vasquez", rating: 5, date: "3 months ago", text: "Twenty years of dental anxiety, undone in a single visit. Sedation was gentle, the room was quiet, the aftercare was human." },
  { name: "James Whitmore", rating: 4, date: "3 months ago", text: "Exceptional clinical work and truly elegant surroundings. Booking took a little patience, but the result more than justified the wait." },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5 text-gold-deep">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.14 1 5.86L10 14.9l-5.25 2.76 1-5.86L1.5 7.65l5.9-.85z" />
        </svg>
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section id="reviews" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow reveal">Google Reviews</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
              Trusted by <span className="italic">thousands</span> of patients.
            </h2>
          </div>
          <div className="reveal reveal-delay-2 lg:col-span-5">
            <div className="flex items-center gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex flex-col items-center border-r border-border pr-6">
                <span className="font-display text-5xl leading-none">4.9</span>
                <Stars n={5} />
                <span className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">1,240 reviews</span>
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/40 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em] text-ink">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
                    <path fill="#4285F4" d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.6c-.2 1.3-1 2.4-2 3.1v2.6h3.3c1.9-1.8 3.1-4.4 3.1-7.5z"/>
                    <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.2H3v2.6C4.7 19.7 8.1 22 12 22z"/>
                    <path fill="#FBBC05" d="M6.4 13.8c-.2-.6-.3-1.2-.3-1.8s.1-1.2.3-1.8V7.6H3C2.4 8.9 2 10.4 2 12s.4 3.1 1 4.4z"/>
                    <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17 3 14.7 2 12 2 8.1 2 4.7 4.3 3 7.6l3.4 2.6C7.2 7.8 9.4 6 12 6z"/>
                  </svg>
                  Google Verified
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Consistent five-star care, verified across every year of practice.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <article key={r.name} className={`reveal reveal-delay-${(i % 4) + 1} card-elegant p-8 flex flex-col`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-cream text-xs font-medium tracking-wider">
                    {r.name.split(" ").map(s => s[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground mt-0.5">{r.date}</p>
                  </div>
                </div>
                <Stars n={r.rating} />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-foreground/80 flex-1">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
                  <path fill="#4285F4" d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.6c-.2 1.3-1 2.4-2 3.1v2.6h3.3c1.9-1.8 3.1-4.4 3.1-7.5z"/>
                  <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.2H3v2.6C4.7 19.7 8.1 22 12 22z"/>
                  <path fill="#FBBC05" d="M6.4 13.8c-.2-.6-.3-1.2-.3-1.8s.1-1.2.3-1.8V7.6H3C2.4 8.9 2 10.4 2 12s.4 3.1 1 4.4z"/>
                  <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17 3 14.7 2 12 2 8.1 2 4.7 4.3 3 7.6l3.4 2.6C7.2 7.8 9.4 6 12 6z"/>
                </svg>
                Posted on Google
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
