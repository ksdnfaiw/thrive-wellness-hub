import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { clinic, services } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Insurance", to: "/insurance" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-x flex min-h-[68px] items-center gap-4 py-2">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-deep text-deep-foreground">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M12 21s-7.5-4.7-7.5-10a4.5 4.5 0 0 1 7.5-3.3A4.5 4.5 0 0 1 19.5 11c0 5.3-7.5 10-7.5 10Z" />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-bold tracking-tight uppercase">Thrive</span>
            <span className="block text-[10px] tracking-[0.18em] text-muted-foreground uppercase">Pain & Wellness</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
            className="rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/about"
            activeProps={{ className: "text-primary" }}
            className="rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              activeProps={{ className: "text-primary" }}
              className="rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              onFocus={() => setServicesOpen(true)}
              aria-expanded={servicesOpen}
            >
              Services
            </Link>
            {servicesOpen ? (
              <div className="absolute left-0 top-full w-72 rounded-2xl border border-border bg-card p-2 shadow-soft">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-secondary hover:text-secondary-foreground"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {nav.slice(2).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href={clinic.phoneHref}
            onClick={() => trackEvent("phone_click", { location: "header" })}
            className="hidden text-sm font-semibold text-deep sm:inline"
          >
            {clinic.phone}
          </a>
          <Link to="/book" className="btn btn-primary hidden sm:inline-flex">
            Book Appointment
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="btn btn-outline h-11 w-11 shrink-0 !px-0 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-border bg-card lg:hidden">
          <div className="container-x flex flex-col py-3">
            {[nav[0], nav[1]].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/services" onClick={() => setOpen(false)} className="rounded-xl px-2 py-3 text-sm font-medium">
              Services
            </Link>
            <div className="mb-1 ml-2 flex flex-col border-l border-border pl-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm text-muted-foreground"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            {nav.slice(2).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Link to="/book" onClick={() => setOpen(false)} className="btn btn-primary flex-1">
                Book Appointment
              </Link>
              <a href={clinic.phoneHref} className="btn btn-outline flex-1" onClick={() => setOpen(false)}>
                Call now
              </a>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
