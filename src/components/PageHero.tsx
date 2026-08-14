import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-secondary/60">
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display-xl mt-6 max-w-4xl">
            {title}
            {accent ? <span className="script-accent lowercase"> {accent}</span> : null}
          </h1>
          {description ? <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p> : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
