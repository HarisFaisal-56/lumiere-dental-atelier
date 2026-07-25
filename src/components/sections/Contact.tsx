import receptionImg from "@/assets/reception.jpg";
import { useState } from "react";

const HOURS = [
  ["Monday — Friday", "09:00 — 19:00"],
  ["Saturday", "10:00 — 16:00"],
  ["Sunday", "By appointment"],
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden" style={{ background: "linear-gradient(180deg, oklch(0.97 0.014 88), oklch(0.93 0.02 90))" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow reveal">Contact Us</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
              Let's begin,<br /> <span className="italic">quietly</span>.
            </h2>
            <p className="reveal reveal-delay-2 mt-6 text-muted-foreground max-w-md leading-relaxed">
              Reach out through the form or call the atelier directly. A member of our
              concierge team will respond personally within one business day.
            </p>

            <div className="reveal reveal-delay-3 mt-10 space-y-6">
              <Row label="Studio" value="14 Rue de la Lumière, Suite 3F" />
              <Row label="Telephone" value="+1 555 010 0" href="tel:+15550100" />
              <Row label="WhatsApp" value="Message the concierge" href="https://wa.me/15550100" />
              <Row label="Correspondence" value="hello@lumiereatelier.com" href="mailto:hello@lumiereatelier.com" />
              <Row label="Emergency" value="Same-day · +1 555 010 9" href="tel:+15550109" />
            </div>

            <div className="reveal reveal-delay-4 mt-10 rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">Working Hours</p>
              <div className="mt-4 space-y-3">
                {HOURS.map(([d, h]) => (
                  <div key={d} className="flex items-center justify-between text-sm border-b border-border/60 pb-3 last:border-0">
                    <span className="text-foreground/80">{d}</span>
                    <span className="font-mono text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="reveal rounded-3xl overflow-hidden shadow-elegant mb-10 aspect-[16/9]">
              <img src={receptionImg} alt="Reception at Lumière Dental Atelier" loading="lazy" className="h-full w-full object-cover" />
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="reveal reveal-delay-1 rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-soft"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="First name" name="first" required />
                <Field label="Last name" name="last" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Telephone" name="phone" />
              </div>
              <div className="mt-6">
                <Field label="How can we help?" name="message" textarea required />
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground max-w-sm">
                  By submitting you agree to be contacted by Lumière Dental Atelier. We treat your details with clinical confidentiality.
                </p>
                <button type="submit" className="btn-gold">
                  {sent ? "Message received ✓" : "Send your message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  const Tag = href ? "a" : "div";
  return (
    <div className="border-b border-border pb-4">
      <div className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">{label}</div>
      <Tag {...(href ? { href } : {})} className={`mt-2 block font-display text-xl text-foreground ${href ? "gold-underline w-fit" : ""}`}>
        {value}
      </Tag>
    </div>
  );
}

function Field({ label, name, type = "text", required, textarea }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  return (
    <label className="block group">
      <span className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">{label}{required && <span className="text-gold-deep">*</span>}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className="mt-2 w-full resize-none border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-gold-deep"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className="mt-2 w-full border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-gold-deep"
        />
      )}
    </label>
  );
}
