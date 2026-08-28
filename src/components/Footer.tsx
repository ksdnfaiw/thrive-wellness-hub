import { Link } from "@tanstack/react-router";
import { clinic, services, socials, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Interventions", to: "/interventions" },
  { label: "Doctors & Team", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
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
              className="btn btn-ghost-light mt-6 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 fill-current">
                <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.56 3.75 1.53 5.28L2 22l4.99-1.7a9.82 9.82 0 0 0 5.05 1.39c5.44 0 9.84-4.4 9.84-9.85C21.88 6.4 17.48 2 12.04 2Zm5.72 13.9c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.03.24-3.5-.96-2.47-1.2-4.02-3.9-4.14-4.08-.12-.19-.98-1.4-.94-2.62.04-1.22.7-1.8.94-2.05.24-.24.52-.3.7-.3h.5c.16 0 .38-.06.58.45.2.5.7 1.74.76 1.87.06.12.1.27.01.44-.09.17-.17.28-.34.47-.17.19-.36.42-.19.72.17.3.75 1.25 1.62 2.02 1.11.99 2.04 1.3 2.34 1.45.3.15.47.12.65-.07.17-.2.72-.85.92-1.14.2-.3.4-.24.66-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" />
              </svg>
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
