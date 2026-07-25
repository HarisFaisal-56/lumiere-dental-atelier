import { Logo } from "./brand/Logo";
import { useEffect, useState } from "react";

const NAV = [
  { label: "The Atelier", href: "#atelier" },
  { label: "Expertise", href: "#expertise" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Voices", href: "#voices" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo />

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="gold-underline text-[0.82rem] font-medium tracking-[0.14em] uppercase text-foreground/80 hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+15550100" className="text-[0.8rem] font-medium tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            +1 555 010 0
          </a>
          <a href="#contact" className="btn-gold">Reserve a Visit</a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
          aria-label="Menu"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-px w-5 bg-foreground transition-all ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-foreground transition-all ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-6 mt-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
          <nav className="flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-wide text-foreground/80"
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-2">
              Reserve a Visit
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
