/* ============================================================
 * Floating WhatsApp button — Lumière Dental Atelier
 * CONFIGURATION: edit the two constants below only.
 * ============================================================ */

/** Full international number, digits only (no +, spaces or dashes). */
const WHATSAPP_NUMBER = "15550100";

/** Optional pre-filled message. Set to "" to disable. */
const WHATSAPP_MESSAGE =
  "Hello Lumière Dental Atelier — I'd like to enquire about a consultation.";

/** Dynamically build the wa.me link from the constants above. */
const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}` +
  (WHATSAPP_MESSAGE ? `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}` : "");

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.04 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.73 6.41L3.2 28.8l6.56-1.71a12.75 12.75 0 0 0 6.28 1.63h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.71 12.71 0 0 0-9.06-3.67Zm0 23.02h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.58 10.58 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.64-10.64 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.11 7.53c0 5.87-4.77 10.61-10.64 10.61Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.68.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.42 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] sm:bottom-8 sm:right-8 print:hidden">
      <div className="group relative flex items-center">
        {/* Tooltip — desktop only */}
        <span
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-border/70 bg-card/95 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground/80 opacity-0 shadow-soft backdrop-blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 lg:block lg:translate-x-1"
          aria-hidden="true"
        >
          Chat on WhatsApp
        </span>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Lumière Dental Atelier on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground shadow-[0_12px_34px_-14px_color-mix(in_oklab,var(--gold-deep)_70%,transparent)] outline-none ring-offset-2 ring-offset-background transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_22px_46px_-14px_color-mix(in_oklab,var(--gold-deep)_78%,transparent)] focus-visible:ring-2 focus-visible:ring-ring"
          style={{ background: "var(--gradient-gold)" }}
        >
          <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[color-mix(in_oklab,white_28%,transparent)]" />
          <WhatsAppGlyph className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
}
