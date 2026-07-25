import { useMemo, useState } from "react";

const QUESTIONS = [
  { q: "What would you most like to change?", opts: ["Colour / whiteness", "Alignment", "Shape / proportion", "Missing teeth"] },
  { q: "How soon are you hoping to begin?", opts: ["Within a month", "1–3 months", "Later this year", "Just exploring"] },
  { q: "Have you had cosmetic dentistry before?", opts: ["Never", "Whitening only", "Veneers or crowns", "Implants"] },
];

export function SmileAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");

  const pct = useMemo(() => Math.round(((step + (done ? 1 : 0)) / (QUESTIONS.length + 1)) * 100), [step, done]);

  const pick = (opt: string) => {
    const next = [...answers, opt];
    setAnswers(next);
    if (step + 1 < QUESTIONS.length) setStep(step + 1);
    else setDone(true);
  };

  const reset = () => {
    setStep(0); setAnswers([]); setDone(false); setEmail("");
  };

  return (
    <section id="assessment" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow reveal">Candidacy</p>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl lg:text-6xl leading-[1.02] text-balance">
              Am I a <span className="italic">candidate</span>?
            </h2>
            <p className="reveal reveal-delay-2 mt-6 max-w-md text-muted-foreground leading-relaxed">
              A three-question smile assessment, considered by a member of our clinical team. You'll receive a personal response within one business day — no obligation, no automated advice.
            </p>
            <div className="reveal reveal-delay-3 mt-10 space-y-4">
              {["Confidential clinical review", "Personal reply from a clinician", "Indicative treatment options"].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
                  <span className="text-sm text-foreground/80">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2 lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-elegant">
              <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                <span>Smile Assessment</span>
                <span>{pct}% complete</span>
              </div>
              <div className="mt-3 h-px bg-border overflow-hidden">
                <div className="h-full bg-gold-deep transition-[width] duration-500" style={{ width: `${pct}%` }} />
              </div>

              {!done ? (
                <div className="mt-10">
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-gold-deep">Step {step + 1} of {QUESTIONS.length}</p>
                  <h3 className="mt-4 font-display text-3xl leading-snug">{QUESTIONS[step].q}</h3>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {QUESTIONS[step].opts.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => pick(opt)}
                        className="group text-left rounded-xl border border-border bg-background/40 px-5 py-4 transition-all hover:border-gold-deep hover:-translate-y-0.5"
                      >
                        <span className="font-medium">{opt}</span>
                        <span aria-hidden className="float-right text-gold-deep opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-10">
                  <h3 className="font-display text-3xl leading-snug">Thank you — you likely are.</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Based on your answers, a personal consultation is the ideal next step. Leave your email and a clinician will reply within one business day.
                  </p>
                  <form
                    onSubmit={(e) => { e.preventDefault(); alert("Received — we'll be in touch."); reset(); }}
                    className="mt-8 flex flex-col sm:flex-row gap-3"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-gold-deep"
                    />
                    <button type="submit" className="btn-gold">Send my answers</button>
                  </form>
                  <button onClick={reset} className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground hover:text-foreground">
                    Restart assessment
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
