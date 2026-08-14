import { Link } from "@tanstack/react-router";
import { clinic, services, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Doctors & Team", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Insurance & Billing", to: "/insurance" },
  { label: "Book an Appointment", to: "/book" },
  { label: "Contact & Locate Us", to: "/contact" },
  { label: "Blog", to: "/blog" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-deep text-deep-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold uppercase">{clinic.name}</p>
          <p className="script-accent mt-2 text-lg opacity-90">{clinic.brandLine}</p>
          <p className="mt-5 text-sm opacity-80">{clinic.address}</p>
          <div className="mt-5 space-y-1 text-sm opacity-80">
            {clinic.hours.map((entry) => (
              <p key={entry.days}>
                <span className="font-semibold opacity-100">{entry.days}:</span> {entry.time}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-70">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="opacity-80 transition-opacity hover:opacity-100">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-70">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-70">Reach us</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a
              href={clinic.phoneHref}
              onClick={() => trackEvent("phone_click", { location: "footer" })}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {clinic.phone}
            </a>
            <a href={`mailto:${clinic.email}`} className="opacity-80 transition-opacity hover:opacity-100">
              {clinic.email}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
              className="btn btn-ghost-light w-full sm:w-auto"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-[11px] tracking-wide uppercase opacity-80">
            {["Physician-led care", "NABH-aligned protocols", "Cashless insurance desk"].map((badge) => (
              <span key={badge} className="rounded-full border border-white/25 px-3 py-1.5">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-x flex flex-col gap-2 py-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p>Hyderabad · Interventional pain management & integrative wellness</p>
        </div>
      </div>
    </footer>
  );
}
