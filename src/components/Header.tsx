import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { clinic, services } from "@/lib/site-data";
import { Logo } from "@/components/Logo";


const primaryNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const morePages = [
  { label: "Doctors & Team", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Insurance & Billing", to: "/insurance" },
  { label: "Book an Appointment", to: "/book" },
];

const linkClass =
  "rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-deep";

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"services" | "pages" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-5">
      <div className="container-x">
        <div
          className={`flex min-h-[64px] items-center gap-4 rounded-2xl border border-border bg-card/95 px-4 backdrop-blur transition-shadow sm:px-6 ${
            scrolled ? "shadow-soft" : ""
          }`}
        >
          <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
            <Logo className="h-8 w-8" />

            <span className="min-w-0">
              <span className="block truncate font-display text-base font-bold tracking-tight uppercase">Thrive</span>
              <span className="block text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Pain & Wellness</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="mx-auto hidden items-center gap-1 lg:flex">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "!text-deep" }} className={linkClass}>
              Home
            </Link>
            <Link to="/about" activeProps={{ className: "!text-deep" }} className={linkClass}>
              About
            </Link>

            <div className="relative" onMouseEnter={() => setMenu("services")} onMouseLeave={() => setMenu(null)}>
              <Link
                to="/services"
                activeProps={{ className: "!text-deep" }}
                className={linkClass}
                onFocus={() => setMenu("services")}
                aria-expanded={menu === "services"}
              >
                Services
              </Link>
              {menu === "services" ? (
                <div className="absolute top-full left-0 w-80 pt-3">
                  <div className="card-flat p-2 shadow-soft">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                        className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sand"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <Link to="/blog" activeProps={{ className: "!text-deep" }} className={linkClass}>
              Blog
            </Link>

            <div className="relative" onMouseEnter={() => setMenu("pages")} onMouseLeave={() => setMenu(null)}>
              <button
                type="button"
                className={`${linkClass} inline-flex items-center gap-1`}
                onFocus={() => setMenu("pages")}
                aria-expanded={menu === "pages"}
              >
                Pages
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {menu === "pages" ? (
                <div className="absolute top-full left-0 w-64 pt-3">
                  <div className="card-flat p-2 shadow-soft">
                    {morePages.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sand"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <a href={clinic.phoneHref} className="hidden text-sm font-semibold text-deep xl:inline">
              {clinic.phone}
            </a>
            <Link to="/contact" className="btn btn-primary hidden sm:inline-flex">
              Contact us
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
          <nav aria-label="Mobile" className="card-flat mt-2 p-3 shadow-soft lg:hidden">
            <div className="flex flex-col">
              {primaryNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/services" onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-sm font-medium">
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
              {morePages.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 flex gap-2">
                <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary flex-1">
                  Contact us
                </Link>
                <a href={clinic.phoneHref} className="btn btn-outline flex-1" onClick={() => setOpen(false)}>
                  Call now
                </a>
              </div>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
