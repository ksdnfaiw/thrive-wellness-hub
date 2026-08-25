import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { clinic, services } from "@/lib/site-data";
import { Logo } from "@/components/Logo";

const leftNav = [
  { label: "Home", to: "/", exact: true },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const rightNav = [
  { label: "Doctors", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Insurance", to: "/insurance" },
];

const mobileAllNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Doctors & Team", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Insurance & Billing", to: "/insurance" },
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
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      {/* ── Desktop pill ── */}
      <div
        className={`
          hidden lg:grid
          grid-cols-[1fr_auto_minmax(0,max-content)]
          items-center
          rounded-2xl border border-border
          bg-card/90 backdrop-blur-md
          px-6 py-0
          transition-all duration-300
          ${scrolled ? "shadow-soft" : ""}
        `}
      >
        {/* Left nav */}
        <nav aria-label="Primary left" className="flex items-center gap-5">
          {leftNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={item.exact ? { exact: true } : {}}
              activeProps={{ className: "!text-deep after:!w-full" }}
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
          >
            <Link
              to="/services"
              activeProps={{ className: "!text-deep after:!w-full" }}
              className={`${linkClass} inline-flex items-center gap-1`}
              aria-expanded={menu === "services"}
            >
              Services <ChevronDown />
            </Link>
            {menu === "services" && (
              <div className="absolute top-full left-0 w-72 pt-4">
                <div className="card-flat overflow-hidden rounded-xl border border-border p-1.5 shadow-soft">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      onClick={() => setMenu(null)}
                      className="block rounded-lg px-3.5 py-2.5 text-sm transition-colors hover:bg-sand"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Center — Logo */}
        <Link
          to="/"
          className="flex items-center justify-center px-6 py-2"
          onClick={() => setOpen(false)}
          aria-label="Thrive — home"
        >
          <Logo className="h-24 xl:h-28 w-auto" />
        </Link>

        {/* Right nav */}
        <nav aria-label="Primary right" className="flex items-center justify-end gap-5">
          {rightNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "!text-deep after:!w-full" }}
              className={linkClass}
            >
              {item.label}
            </Link>
          ))}

          <div className="ml-2 flex shrink-0 items-center gap-2.5 border-l border-border pl-5">
            <a
              href={clinic.phoneHref}
              className="hidden whitespace-nowrap text-sm font-semibold text-deep xl:inline hover:opacity-70 transition-opacity"
            >
              {clinic.phone}
            </a>
            <Link to="/contact" className="btn btn-primary whitespace-nowrap text-sm">
              Contact us
            </Link>
          </div>
        </nav>
      </div>

      {/* ── Mobile bar ── */}
      <div
        className={`
          flex lg:hidden items-center justify-between
          rounded-2xl border border-border
          bg-card/90 backdrop-blur-md
          px-4 py-3
          transition-all duration-300
          ${scrolled ? "shadow-soft" : ""}
        `}
      >
        {/* Logo left on mobile */}
        <Link to="/" onClick={() => setOpen(false)} aria-label="Thrive — home">
          <Logo className="h-14 w-auto" />
        </Link>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn btn-primary text-xs px-3 py-2 sm:text-sm sm:px-4">
            Contact us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="btn btn-outline h-10 w-10 shrink-0 !px-0"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <path d="M6 6l12 12M18 6 6 18" />
                : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="lg:hidden mt-2 card-flat overflow-hidden rounded-2xl border border-border shadow-soft">
          {/* Logo centered in drawer */}
          <div className="flex justify-center border-b border-border py-5">
            <Logo className="h-16 w-auto" />
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

            <div className="mt-4 flex gap-2 border-t border-border pt-4">
              <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary flex-1">
                Contact us
              </Link>
              <a href={clinic.phoneHref} onClick={() => setOpen(false)} className="btn btn-outline flex-1">
                {clinic.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
