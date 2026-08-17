/**
 * Brand mark placeholder.
 * Swap the <svg> below for the clinic's real logo (SVG preferred, or an
 * imported PNG/WebP from src/assets) — nothing else in the app needs editing.
 */
export function Logo({ className = "h-8 w-8", title = "Thrive Pain & Wellness Clinic" }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-lg bg-deep text-deep-foreground ${className}`}
      role="img"
      aria-label={title}
    >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2 fill-current" aria-hidden="true" focusable="false">
        <path d="M12 2 4 12l8 10 8-10Zm0 5.4 4 4.6-4 5.4-4-5.4Z" />
      </svg>
    </span>
  );
}
