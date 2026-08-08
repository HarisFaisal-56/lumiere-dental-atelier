import { Logo } from "@/components/brand/Logo";

export function SiteFooter() {
  return (
    <footer className="relative bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-8 max-w-sm text-cream/70 leading-relaxed">
              A private dental atelier practising cinematic, considered care. Restoring
              smiles the way we would restore a work of art — patiently, precisely, and
              in dialogue with the patient.
            </p>
          </div>

          <FooterCol title="Atelier">
            <a href="#atelier">The Studio</a>
            <a href="#expertise">Expertise</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#voices">Patient Voices</a>
          </FooterCol>

          <FooterCol title="Visit">
            <span>14 Rue de la Lumière</span>
            <span>Suite 3F</span>
            <a href="tel:+15550100">+1 555 010 0</a>
            <a href="mailto:hello@lumiereatelier.com">hello@lumiereatelier.com</a>
          </FooterCol>

          <FooterCol title="Follow">
            <a href="#">Instagram</a>
            <a href="#">Journal</a>
            <a href="#">Google Reviews</a>
            <a href="#">Concierge WhatsApp</a>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-cream/10 pt-8">
          <p className="text-xs text-cream/50">© {new Date().getFullYear()} Lumière Dental Atelier. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-cream/50">
            <a href="#" className="hover:text-cream">Privacy</a>
            <a href="#" className="hover:text-cream">Clinical Terms</a>
            <a href="#" className="hover:text-cream">Accessibility</a>
          </div>
        </div>
      </div>

      {/* Marquee word */}
      <div className="overflow-hidden border-t border-cream/10">
        <div className="flex w-max animate-marquee whitespace-nowrap py-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 font-display text-6xl lg:text-8xl text-cream/10 italic">
              Lumière · Dental · Atelier ·
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="lg:col-span-2 flex flex-col">
      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">{title}</p>
      <div className="mt-6 flex flex-col gap-3 text-sm text-cream/75 [&>a]:transition-colors [&>a:hover]:text-cream">
        {children}
      </div>
    </div>
  );
}
