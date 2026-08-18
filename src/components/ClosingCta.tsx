import { Link } from "@tanstack/react-router";
import { clinic, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";

export function ClosingCta() {
  return (
    <section className="bg-deep text-deep-foreground">
      <div className="container-x grid gap-10 py-16 lg:grid-cols-[1.3fr_1fr] lg:items-end sm:py-20">
        <Reveal>
          <p className="text-sm opacity-70">Take the first step</p>
          <h2 className="display-xl mt-5">
            Your pain ends here.
            <br />
            Your life begins.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-sm leading-relaxed opacity-80">
            You have more to life than managing pain. Take the first step towards better movement, greater comfort and a
            healthier tomorrow.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/book" className="btn btn-lime">
              Book an appointment
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "closing_cta" })}
              className="btn btn-ghost-light"
            >
              Talk to Thrive
            </a>
          </div>
          <p className="mt-4 text-xs opacity-70">
            Prefer to call?{" "}
            <a href={clinic.phoneHref} className="underline">
              {clinic.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
