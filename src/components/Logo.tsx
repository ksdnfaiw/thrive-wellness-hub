import logoAsset from "@/assets/thrive-logo.webp.asset.json";

export function Logo({ className = "h-16 w-auto", title = "Thrive Pain Clinic, Wellness & More" }) {
  return (
    <img
      src={logoAsset.url}
      alt={title}
      width={1920}
      height={878}
      className={`object-contain transition-all duration-200 ${className}`}
    />
  );
}
