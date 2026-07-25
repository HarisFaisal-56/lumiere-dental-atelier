import { useEffect, useState } from "react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed z-[55] bottom-5 right-5 lg:bottom-8 lg:right-8 flex flex-col items-end gap-3 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/15550100"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-full bg-card border border-border shadow-elegant hover:-translate-y-1 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-gold-deep/20 animate-ping opacity-60" />
        <svg viewBox="0 0 32 32" className="relative h-6 w-6 text-gold-deep" fill="currentColor" aria-hidden>
          <path d="M16 3C9 3 3.4 8.6 3.4 15.6c0 2.4.7 4.7 1.9 6.7L3 29l6.9-2.2c1.9 1 4 1.6 6.1 1.6h.1c7 0 12.6-5.6 12.6-12.6C28.7 8.6 23 3 16 3zm7.3 17.9c-.3.9-1.8 1.7-2.5 1.8-.7.1-1.5.1-2.4-.2-.6-.2-1.3-.4-2.2-.8-3.9-1.7-6.5-5.7-6.7-6-.2-.3-1.6-2.2-1.6-4.2s1-3 1.4-3.4c.3-.4.7-.5 1-.5h.7c.2 0 .5-.1.8.6.3.7 1 2.5 1.1 2.7.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.5-.6.7-.2.2-.4.4-.2.8s1 1.7 2.2 2.8c1.5 1.4 2.8 1.8 3.2 2 .4.2.6.2.9-.1.2-.3.9-1.1 1.2-1.5.3-.4.5-.3.9-.2s2.4 1.1 2.8 1.3c.4.2.7.3.8.5.1.2.1 1-.2 1.9z"/>
        </svg>
      </a>

      {/* Book / Call */}
      <a href="#contact" className="btn-gold shadow-elegant hidden sm:inline-flex">
        Book Consultation
      </a>
      <a
        href="tel:+15550100"
        className="btn-gold shadow-elegant sm:hidden !py-3 !px-5 !text-[0.72rem]"
      >
        Call Now
      </a>
    </div>
  );
}
