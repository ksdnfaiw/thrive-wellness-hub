import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { clinic, images, insurers, services, stats, testimonials, whatsappLink } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thrive Pain & Wellness Clinic | Interventional Pain Care, Hyderabad" },
      {
        name: "description",
        content:
          "Hyderabad's physician-led clinic for interventional pain management with in-house physiotherapy, psychology, nutrition and wellness therapies. Heal. Restore. Thrive.",
      },
      { property: "og:title", content: "Thrive Pain & Wellness Clinic | Hyderabad" },
      {
        property: "og:description",
        content: "Physician-led interventional pain care and integrative wellness under one 4,000 sq. ft. roof.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active]!;

  return (
    <>
      <section className="bg-secondary/50">
        <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
          <Reveal>
            <span className="eyebrow">Heal. Restore. Thrive.</span>
            <h1 className="display-xl mt-6">
              Pain care that is
              <span className="script-accent lowercase"> physician-led,</span> not guesswork.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Hyderabad's only clinic combining interventional pain medicine with an integrated in-house team —
              physiotherapy, clinical psychology, nutrition and next-gen wellness therapies across 4,000 sq. ft.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/book" className="btn btn-primary">
                Book an Appointment
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
                className="btn btn-outline"
              >
                WhatsApp / Call
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-2xl font-bold text-deep sm:text-3xl">{stat.value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="relative">
            <img
              src={images.hero}
              alt="A pain physician assessing a patient's knee in a calm, sunlit treatment room"
              width={1280}
              height={1024}
              className="aspect-4/3 w-full rounded-[2rem] object-cover shadow-soft"
            />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="card-soft p-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Physician-led</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  MD pain physicians with FIPP-level interventional training — every plan signed off by a doctor.
                </p>
              </div>
              <div className="card-soft p-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Cashless desk</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  12+ empanelled insurers and TPAs, with written estimates before any procedure.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-x flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Empanelled insurers & TPAs
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {insurers.slice(0, 6).map((insurer) => (
              <li key={insurer} className="text-sm font-semibold text-deep/80">
                {insurer}
              </li>
            ))}
            <li>
              <Link to="/insurance" className="text-sm font-semibold text-primary underline">
                See all 12
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="container-x py-20 sm:py-24">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Our expertise</span>
          <h2 className="display-lg mt-6">
            Seven departments, one plan,
            <span className="script-accent lowercase"> one building.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Diagnosis, intervention and recovery are handled by the same team — so nothing is lost between referrals.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="card-soft group flex h-full flex-col overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-16/10 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{service.short}</p>
                  <span className="mt-5 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                    Explore →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-x grid gap-10 py-20 lg:grid-cols-2 lg:items-center sm:py-24">
          <Reveal>
            <img
              src={images.reception}
              alt="The Thrive reception and waiting lounge in teal and off-white tones"
              loading="lazy"
              width={1280}
              height={853}
              className="aspect-3/2 w-full rounded-[2rem] object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">Trust, in the open</span>
            <h2 className="display-lg mt-6">Credentials first, always.</h2>
            <ul className="mt-8 space-y-5">
              {[
                {
                  title: "MD pain physicians with interventional fellowships",
                  detail: "Procedures are performed by fellowship-trained pain physicians — never delegated.",
                },
                {
                  title: "In-house diagnostics with same-visit answers",
                  detail: "Lab, digital X-ray, ultrasound and C-arm fluoroscopy inside the facility.",
                },
                {
                  title: "Written estimates and named insurers",
                  detail: "You know your co-pay and your covered amount before you consent.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-deep text-deep-foreground">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-semibold">{item.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{item.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/doctors" className="btn btn-outline mt-8">
              Meet the team
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Patient outcomes</span>
          <h2 className="display-lg mt-6">
            What life after pain
            <span className="script-accent lowercase"> sounds like.</span>
          </h2>
        </Reveal>
        <Reveal delay={80} className="card-soft mx-auto mt-12 max-w-3xl p-7 sm:p-10">
          <p className="font-serif text-xl leading-relaxed sm:text-2xl">"{testimonial.quote}"</p>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.detail}</p>
            </div>
            <div className="flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-current={index === active}
                  onClick={() => setActive(index)}
                  className={`h-11 w-11 rounded-full border text-sm font-semibold transition-colors ${
                    index === active ? "border-deep bg-deep text-deep-foreground" : "border-border bg-card"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-x grid gap-10 pb-20 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <span className="eyebrow">Quick enquiry</span>
          <h2 className="display-lg mt-6">Not sure which department you need?</h2>
          <p className="mt-5 text-muted-foreground">
            Describe your pain in a line. A physician-side coordinator reads it and calls you back with the right next
            step — consultation, diagnostics or therapy.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={clinic.phoneHref}
              onClick={() => trackEvent("phone_click", { location: "home_inquiry" })}
              className="btn btn-outline"
            >
              Call {clinic.phone}
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <LeadForm mode="inquiry" />
        </Reveal>
      </section>

      <ClosingCta />
    </>
  );
}
