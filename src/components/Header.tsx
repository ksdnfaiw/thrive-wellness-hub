import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { clinic, services } from "@/lib/site-data";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

const leftNav = [
  { label: "Home", to: "/", exact: true },
  { label: "About", to: "/about" },
  { label: "Treatments", to: "/interventions" },
];

const rightNav = [
  { label: "Doctors", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
];

const mobileAllNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Treatments", to: "/interventions" },
  { label: "Doctors & Team", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Book an Appointment", to: "/book" },
];

const linkClass =
  "relative px-1 py-1 text-sm font-medium tracking-wide text-foreground/75 transition-colors duration-200 hover:text-deep after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-deep after:transition-all after:duration-300 hover:after:w-full";

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3 opacity-60 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"services" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      {/* ── Desktop pill ── */}
      <div
        className={`
           hidden xl:grid
          grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
          items-center
          rounded-2xl border border-border
          bg-card/95 backdrop-blur-md
          px-6 py-1
          transition-all duration-300
          ${scrolled ? "shadow-soft" : ""}
        `}
      >
        {/* Left nav */}
          <nav aria-label="Primary left" className="flex min-w-0 items-center gap-4 2xl:gap-6">
          {leftNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={item.exact ? { exact: true } : {}}
              activeProps={{ className: "!text-deep after:!w-full font-semibold" }}
              className={linkClass}
            >
              {item.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMenu("services")}
            onMouseLeave={() => setMenu(null)}
             onFocus={() => setMenu("services")}
             onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setMenu(null); }}
          >
            <Link
              to="/services"
              activeProps={{ className: "!text-deep after:!w-full font-semibold" }}
              className={`${linkClass} inline-flex items-center gap-1`}
              aria-expanded={menu === "services"}
            >
              Services <ChevronDown />
            </Link>
            {menu === "services" && (
              <div className="absolute top-full left-0 w-72 pt-3">
                <div className="card-flat overflow-hidden rounded-xl border border-border p-1.5 shadow-soft bg-card">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      onClick={() => setMenu(null)}
                      className="block rounded-lg px-3.5 py-2 text-sm transition-colors hover:bg-sand"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Center — Logo perfectly centered & prominent */}
        <div className="flex h-28 min-w-0 items-center justify-center px-4 2xl:h-32">
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
            onClick={() => setOpen(false)}
          >
            <Logo className="h-auto w-64 max-w-full 2xl:w-72" />
            <span className="sr-only">Thrive Pain Clinic - Home</span>
          </Link>
        </div>

        {/* Right nav */}
        <nav aria-label="Primary right" className="flex min-w-0 items-center justify-end gap-4 2xl:gap-5">
          {rightNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "!text-deep after:!w-full font-semibold" }}
              className={linkClass}
            >
              {item.label}
            </Link>
          ))}

          <div className="ml-2 flex shrink-0 items-center gap-3 border-l border-border pl-4">
            <a
              href={clinic.phoneHref}
              className="hidden whitespace-nowrap text-sm font-semibold text-deep min-[1800px]:inline hover:opacity-75 transition-opacity"
            >
              {clinic.phone}
            </a>
            <span className="hidden min-[1800px]:inline text-sm text-deep/40">|</span>
            <a
              href={clinic.phone2Href}
              className="hidden whitespace-nowrap text-sm font-semibold text-deep min-[1800px]:inline hover:opacity-75 transition-opacity"
            >
              {clinic.phone2}
            </a>
            <Link to="/contact" className="btn btn-primary whitespace-nowrap text-xs sm:text-sm px-4 py-2">
              Contact us
            </Link>
          </div>
        </nav>
      </div>

      {/* ── Mobile bar ── */}
      <div
        className={`
          grid grid-cols-[minmax(0,1fr)_auto] xl:hidden items-center gap-3
          rounded-2xl border border-border
          bg-card/95 backdrop-blur-md
          px-4 py-2.5
          transition-all duration-300
          ${scrolled ? "shadow-soft" : ""}
        `}
      >
        {/* Logo left on mobile */}
        <Link to="/" onClick={() => setOpen(false)} aria-label="Thrive home" className="flex min-w-0 items-center">
          <Logo className="h-auto w-full max-w-56 sm:max-w-64" />
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <Link to="/contact" className="btn btn-primary hidden sm:inline-flex text-sm px-4 py-2">
            Contact us
          </Link>
          <Button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
             aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="btn btn-outline h-10 w-10 shrink-0 !px-0"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <path d="M6 6l12 12M18 6 6 18" />
                : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </Button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div id="mobile-navigation" data-lenis-prevent className="xl:hidden mt-2 max-h-[calc(100dvh-9rem)] overflow-y-auto overscroll-contain rounded-2xl border border-border shadow-soft bg-card">
          {/* Logo centered in drawer */}
          <div className="flex justify-center border-b border-border py-4">
            <Logo className="h-auto w-60 max-w-full" />
          </div>

          <nav aria-label="Mobile" className="p-3">
            <div className="flex flex-col gap-0.5">
              {mobileAllNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "!bg-sand !text-deep font-semibold" }}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-sand hover:text-deep"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-2">
              <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary flex-1">
                Contact us
              </Link>
            <div className="flex flex-col gap-2 flex-1">
              <a href={clinic.phoneHref} onClick={() => setOpen(false)} className="btn btn-outline w-full">
                {clinic.phone}
              </a>
              <a href={clinic.phone2Href} onClick={() => setOpen(false)} className="btn btn-outline w-full">
                {clinic.phone2}
              </a>
            </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
