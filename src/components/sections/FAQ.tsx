import { useState } from "react";

const FAQS = [
  { q: "How long do porcelain veneers last?", a: "Properly maintained veneers from our atelier typically last 15–20 years. We use hand-layered feldspathic porcelain bonded with adhesives calibrated to your enamel — the longevity is a matter of both material and technique." },
  { q: "Is Invisalign painful?", a: "Most patients report mild pressure for 24–48 hours after switching to a new aligner. There is no soreness from wires or brackets, and our concierge check-ins ensure any discomfort is addressed immediately." },
  { q: "How many appointments will I need?", a: "Cosmetic consultations begin with a single 90-minute session. Veneers typically require 3 visits over 3 weeks; a full-mouth rehabilitation spans 4–8 visits depending on complexity." },
  { q: "What is included in a smile makeover?", a: "A digital smile design consultation, whitening if indicated, alignment or micro-veneering as needed, a mock-up preview, and all aftercare. Every stage is documented and priced in advance." },
  { q: "Are payment plans available?", a: "Yes — we offer 0% interest financing on treatments over £3,000, and bespoke instalment plans across 6, 12, or 24 months. Our concierge team will structure one to suit your circumstances." },
  { q: "How long does treatment take?", a: "Whitening: a single visit. Veneers: 3 weeks. Invisalign: 6–18 months. Implants: 3–6 months for full integration. We publish a clear timeline before you commit." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow reveal">Frequently Asked</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
              Considered <span className="italic">answers</span>.
            </h2>
            <p className="reveal reveal-delay-2 mt-6 text-muted-foreground leading-relaxed max-w-sm">
              A curated selection of questions our patients ask most often. For anything else, our concierge team is available by phone.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="reveal border-t border-border">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className="border-b border-border">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    >
                      <span className="font-display text-xl lg:text-2xl leading-snug pr-4 transition-colors group-hover:text-gold-deep">
                        {f.q}
                      </span>
                      <span
                        className={`shrink-0 h-9 w-9 rounded-full border border-border flex items-center justify-center transition-all duration-500 ${
                          isOpen ? "bg-gold-deep border-gold-deep text-cream rotate-45" : "text-foreground"
                        }`}
                        aria-hidden
                      >
                        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-500 ${
                        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="pb-6 pr-16 text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
