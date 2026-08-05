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
          className="lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/80 bg-background/60 backdrop-blur-sm transition-colors hover:border-foreground/30"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-px w-5 bg-foreground transition-all duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-foreground transition-all duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`lg:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out ${
          open ? "max-h-[600px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div
          className="mx-5 mt-4 mb-2 rounded-[28px] border border-border/70 bg-card px-7 pt-8 pb-8"
          style={{ boxShadow: "0 32px 80px -24px color-mix(in oklab, var(--ink) 28%, transparent)" }}
        >
          <nav className="flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="flex min-h-[48px] items-center text-[0.95rem] font-medium leading-none tracking-[0.02em] text-foreground/85 transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="btn-gold mt-7 h-14 w-full"
            >
              Reserve a Visit
            </a>
          </nav>
        </div>
      </div>

    </header>
  );
}
