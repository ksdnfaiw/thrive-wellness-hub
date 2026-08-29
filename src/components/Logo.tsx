/**
 * Brand mark placeholder.
 * Swap the <svg> below for the clinic's real logo (SVG preferred, or an
 * imported PNG/WebP from src/assets) — nothing else in the app needs editing.
 */
export function Logo({ className = "h-16 w-auto", title = "Thrive Pain Clinic, Wellness & More" }) {
  return (
    <img
      src="/logo.png"
      alt={title}
      className={`object-contain transition-all duration-200 ${className}`}
    />
  );
}
