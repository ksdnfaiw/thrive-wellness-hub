import { Link } from "@tanstack/react-router";
import { clinic, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";

export function ClosingCta() {
  return (
    <section className="container-x">
      <Reveal className="overflow-hidden rounded-[2rem] bg-deep px-6 py-16 text-center text-deep-foreground sm:px-12 sm:py-20">
        <span className="eyebrow !border-white/25 !bg-white/10 !text-deep-foreground">Heal. Restore. Thrive.</span>
        <h2 className="display-lg mx-auto mt-6 max-w-3xl">
          Your pain ends here.
          <span className="script-accent lowercase"> your life begins.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm opacity-85 sm:text-base">
          Talk to a pain physician, not a call centre. Same-week appointments across all seven departments.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/book" className="btn bg-white text-deep hover:opacity-90">
            Book an Appointment
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "closing_cta" })}
            className="btn btn-ghost-light"
          >
            WhatsApp us
          </a>
          <a
            href={clinic.phoneHref}
            onClick={() => trackEvent("phone_click", { location: "closing_cta" })}
            className="btn btn-ghost-light"
          >
            Call {clinic.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
