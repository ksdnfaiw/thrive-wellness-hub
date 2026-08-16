import { Link } from "@tanstack/react-router";
import { clinic, services, socials, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctors & Team", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Insurance & Billing", to: "/insurance" },
  { label: "Blog", to: "/blog" },
];

export function Footer() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="container-x pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-sm font-bold tracking-[0.12em] uppercase">About us</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-75">
              At Thrive, we believe healing is more than recovery. It is restoring strength, confidence and independence
              through physician-led pain care.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
              className="btn btn-ghost-light mt-6"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <p className="font-display text-sm font-bold tracking-[0.12em] uppercase">Contact info</p>
            <div className="mt-4 flex flex-col gap-3 text-sm opacity-75">
              <a href={clinic.phoneHref} onClick={() => trackEvent("phone_click", { location: "footer" })}>
                {clinic.phone}
              </a>
              <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
              <p>{clinic.address}</p>
              {clinic.hours.map((entry) => (
                <p key={entry.days}>
                  {entry.days}: {entry.time}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-bold tracking-[0.12em] uppercase">Quick links</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="opacity-75 transition-opacity hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold tracking-[0.12em] uppercase">Our services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="opacity-75 transition-opacity hover:opacity-100"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="wordmark-fade mt-14 w-full text-center text-[clamp(3.5rem,17vw,13rem)] select-none"
        >
          Thrive
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-100"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
