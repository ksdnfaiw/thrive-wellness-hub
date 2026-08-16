import { Link } from "@tanstack/react-router";
import { clinic } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function ClosingCta() {
  return (
    <section className="bg-deep text-deep-foreground">
      <div className="container-x grid gap-10 py-16 lg:grid-cols-[1.3fr_1fr] lg:items-end sm:py-20">
        <Reveal>
          <p className="text-sm opacity-70">Got pain that will not settle?</p>
          <h2 className="display-xl mt-5">
            Let&apos;s make it
            <br />
            happen together.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-sm leading-relaxed opacity-75">
            Talk to a pain physician, not a call centre. Same-week appointments across all seven departments, with a
            written estimate before anything is planned.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/book" className="btn btn-lime">
              Let&apos;s begin
            </Link>
            <a href={clinic.phoneHref} className="btn btn-ghost-light">
              Call {clinic.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
