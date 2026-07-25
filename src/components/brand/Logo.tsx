interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
}

/**
 * Lumière Dental Atelier — custom monogram
 * A stylized 'L' formed by a tooth silhouette with a subtle diamond crown,
 * sitting inside a hairline circle. Fully bespoke SVG, no external assets.
 */
export function Logo({ className = "", variant = "dark", showWordmark = true }: LogoProps) {
  const ink = variant === "dark" ? "var(--ink)" : "var(--cream)";
  const gold = "var(--gold-deep)";
  return (
    <a href="#top" className={`inline-flex items-center gap-3 ${className}`} aria-label="Lumière Dental Atelier — home">
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10 shrink-0"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" fill="none" stroke={gold} strokeWidth="0.75" opacity="0.55" />
        {/* Tooth silhouette forming an L */}
        <path
          d="M17 12c-3.2 0-5.3 2.2-5.3 5.3 0 2.6 1.1 4.1 1.9 6.3.7 2.1.6 4.4 1.4 6.8.6 1.9 1.5 3.6 2.8 3.6 1.5 0 1.9-1.9 2.4-4.2.3-1.6.7-3 1.6-3s1.3 1.4 1.6 3c.5 2.3.9 4.2 2.4 4.2 1.3 0 2.2-1.7 2.8-3.6.8-2.4.7-4.7 1.4-6.8.8-2.2 1.9-3.7 1.9-6.3 0-3.1-2.1-5.3-5.3-5.3-2 0-3 .8-4.4 1.5-.9.4-1.4.6-2 .6s-1.1-.2-2-.6c-1.4-.7-2.4-1.5-4.4-1.5z"
          fill="none"
          stroke={ink}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        {/* Diamond crown */}
        <path d="M24 6.5l1.6 2.1L24 10.7l-1.6-2.1z" fill={gold} />
        {/* Sparkle */}
        <circle cx="34" cy="16" r="0.9" fill={gold} />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="font-display text-[1.15rem] tracking-tight"
            style={{ color: ink }}
          >
            Lumi<span style={{ fontStyle: "italic" }}>è</span>re
          </span>
          <span
            className="text-[0.58rem] font-medium uppercase tracking-[0.32em] mt-1"
            style={{ color: gold }}
          >
            Dental Atelier
          </span>
        </span>
      )}
    </a>
  );
}
