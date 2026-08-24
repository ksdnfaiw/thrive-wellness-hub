import {
  Activity,
  Apple,
  Brain,
  Droplets,
  Pill,
  Scan,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "interventional-procedures": Syringe,
  "diagnostics-and-imaging": Scan,
  "physiotherapy-and-rehabilitation": Activity,
  "psychology-and-mental-wellness": Brain,
  nutrition: Apple,
  "wellness-therapies": Droplets,
  "in-house-pharmacy": Pill,
  polyclinic: Stethoscope,
};

export function ServiceIcon({ slug, className = "h-5 w-5" }: { slug: string; className?: string }) {
  const Icon = map[slug] ?? Stethoscope;
  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}
