export function AnnouncementBar() {
  return (
    <div className="relative z-[60] bg-ink text-cream/90">
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 px-6 lg:px-10 py-2.5 text-[0.7rem] tracking-[0.18em] uppercase">
        <div className="flex items-center gap-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gold-deep opacity-70 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          <span>Emergency appointments available today</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="tel:+15550100" className="hover:text-cream transition-colors">Call · +1 555 010 0</a>
          <span className="hidden sm:inline text-cream/25">/</span>
          <a href="#contact" className="hover:text-cream transition-colors">Book</a>
        </div>
      </div>
    </div>
  );
}
