import { ChevronDown, Info } from "lucide-react";
import { treatments } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function TreatmentList() {
  return (
    <div className="mt-10 grid gap-4">
      {treatments.map((treatment, index) => (
        <Reveal key={treatment.name} delay={index * 50} variant="up">
          <details className="group card-flat overflow-hidden border border-border">
            <summary className="flex cursor-pointer list-none items-start gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 flex-1">
                <span className="display-md block break-words">{treatment.name}</span>
                <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                  {treatment.summary}
                </span>
              </span>
              <ChevronDown
                className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="border-t border-border bg-sand/40 p-5 sm:p-6">
              <ul className="grid gap-2.5 text-sm leading-relaxed text-foreground/85">
                {treatment.details.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="min-w-0 break-words">{point}</span>
                  </li>
                ))}
              </ul>
              {treatment.goodToKnow ? (
                <p className="mt-4 flex gap-2 rounded-xl border border-border/70 bg-card p-4 text-xs leading-relaxed text-muted-foreground">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0 break-words">{treatment.goodToKnow}</span>
                </p>
              ) : null}
            </div>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
