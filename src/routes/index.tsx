import { createFileRoute, Link } from "@tanstack/react-router";
import {
  approach,
  blogPosts,
  clinic,
  images,
  insuranceTrustPoints,
  services,
  stats,
  whatsappLink,
  whyThrive,
} from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { ContactSection } from "@/components/ContactSection";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thrive Pain & Wellness Clinic | Interventional Pain Care, Hyderabad" },
      {
        name: "description",
        content:
          "Physician-led interventional pain management with in-house diagnostics, physiotherapy, psychology, nutrition and wellness therapies in Habsiguda, Hyderabad.",
      },
      { property: "og:title", content: "Thrive Pain & Wellness Clinic | Hyderabad" },
      {
        property: "og:description",
        content: "Advanced pain care and integrated wellness, brought together under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: images.hero, fetchPriority: "high" },
    ],
  }),
  component: Home,
});

const interventionalProcedures = [
  "Neuromodulation",
  "Epiduroplasty",
  "Regenerative therapies",
  "Radiofrequency Ablation (RFA)",
  "Cryotherapy",
  "Ultrasound-guided injections",
];

const diagnosticCapabilities = ["In-house laboratory", "Digital X-ray", "Ultrasound", "Fluoroscopy / C-arm"];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-x grid items-center gap-10 py-10 lg:grid-cols-[1.02fr_1fr] lg:gap-14 lg:py-16">
        <Reveal>
          <span className="eyebrow">Heal. Restore. Thrive.</span>
          <h1 className="display-xl mt-6">Advanced pain care. Integrated wellness. One place to heal.</h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            At Thrive Pain &amp; Wellness Clinic, we bring physician-led interventional pain management and integrative
            wellness together under one roof. From diagnosis and minimally invasive procedures to physiotherapy,
            psychology, nutrition and advanced wellness therapies, every part of your care is designed around one goal:
            helping you move beyond pain and return to the life you want to live.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/book" className="btn btn-primary">
              Book an appointment
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
              className="btn btn-outline"
            >
              Talk to us on WhatsApp
            </a>
          </div>

          <p className="mt-8 text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Physician-led care &middot; Personalised treatment &middot; Multidisciplinary support
          </p>
        </Reveal>

        <Reveal delay={120} variant="scale">
          <img
            src={images.hero}
            alt="A pain physician assessing a patient in a calm, sunlit treatment room"
            fetchPriority="high"
            decoding="async"
            width={1280}
            height={1024}
            className="aspect-4/3 w-full rounded-2xl object-cover"
          />
          <div className="mt-3 grid gap-3 sm:grid-cols-[auto_1fr_auto]">
            <img
              src={images.physio}
              alt="Physiotherapist guiding a patient through a movement exercise"
              loading="lazy"
              decoding="async"
              className="hidden h-24 w-24 rounded-xl object-cover sm:block"
            />
            <div className="rounded-xl bg-sand p-4">
              <p className="font-display text-xs font-bold tracking-[0.1em] uppercase">One coordinated team</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Diagnosis, treatment, rehabilitation and wellness, planned together rather than separately.
              </p>
            </div>
            <img
              src={images.procedureSuite}
              alt="The image-guided procedure space at Thrive"
              loading="lazy"
              decoding="async"
              className="hidden h-24 w-24 rounded-xl object-cover sm:block"
            />
          </div>
        </Reveal>
      </section>

      {/* A better way to manage pain */}
      <section className="container-x py-16 text-center sm:py-24">
        <Reveal>
          <span className="eyebrow">A better way to manage pain</span>
          <h2 className="display-lg mx-auto mt-6 max-w-4xl">Pain is personal. Your treatment should be too.</h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Persistent pain can affect far more than the body. It can change how you work, sleep, move, exercise and
              experience everyday life.
            </p>
            <p>
              At Thrive, we look beyond simply managing symptoms. We work to understand the underlying cause of your pain
              and create a personalised path towards relief, recovery and long-term wellbeing.
            </p>
            <p>
              Our approach combines advanced interventional pain care with rehabilitation, mental wellness, nutrition and
              supportive wellness therapies, creating a more complete experience of healing.
            </p>
          </div>
          <Link to="/services" className="btn btn-primary mt-8">
            Explore our services
          </Link>
        </Reveal>

        <Reveal delay={100} variant="clip" className="mt-12">
          <img
            src={images.procedureSuite}
            alt="An image-guided procedure being performed at Thrive"
            loading="lazy"
            decoding="async"
            width={1280}
            height={720}
            className="aspect-16/9 w-full rounded-2xl object-cover"
          />
        </Reveal>
      </section>

      {/* Our approach */}
      <section className="bg-sand">
        <div className="container-x py-16 sm:py-24">
          <Reveal className="max-w-3xl">
            <span className="eyebrow !bg-card">Our approach</span>
            <h2 className="display-lg mt-6">Diagnose. Treat. Restore.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => (
              <Reveal key={item.step} delay={index * 80} variant="up">
                <li className="card-flat h-full p-6">
                  <span className="font-display text-3xl font-bold text-deep/30">{item.step}</span>
                  <h3 className="display-md mt-3">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-16 sm:py-24">
        <Reveal className="text-center">
          <span className="eyebrow">Our services</span>
          <h2 className="display-lg mx-auto mt-6 max-w-3xl">Complete care. One coordinated team.</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
            Thrive brings multiple disciplines together so your care does not have to stop at pain relief.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60} variant="clip">
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group relative block h-full overflow-hidden rounded-2xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={768}
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.03_158)] via-transparent to-transparent opacity-90" />
                <span className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-lg bg-deep text-deep-foreground">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
                <span className="absolute inset-x-0 bottom-0 p-5 text-deep-foreground">
                  <span className="display-md block">{service.title}</span>
                  <span className="mt-2 block text-xs leading-relaxed opacity-85">{service.short}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-deep py-6 text-deep-foreground">
        <Marquee
          items={services.map((service) => service.title)}
          className="font-display text-3xl font-bold uppercase sm:text-5xl"
        />
      </section>

      {/* Interventional pain care */}
      <section className="container-x grid gap-10 py-16 lg:grid-cols-2 lg:items-center sm:py-24">
        <Reveal>
          <span className="eyebrow">Interventional pain care</span>
          <h2 className="display-lg mt-6">Precision treatment. Minimal disruption.</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            When conventional approaches are not enough, interventional pain management can provide a targeted path
            towards relief. Every procedure begins with appropriate assessment and diagnosis, followed by a treatment
            plan tailored to the individual.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {interventionalProcedures.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-deep" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/services/$slug"
            params={{ slug: "interventional-procedures" }}
            className="btn btn-primary mt-8"
          >
            Explore pain procedures
          </Link>
        </Reveal>
        <Reveal delay={100} variant="clip">
          <img
            src={images.procedureSuite}
            alt="Procedure suite equipped with C-arm fluoroscopy"
            loading="lazy"
            decoding="async"
            width={1024}
            height={768}
            className="aspect-4/3 w-full rounded-2xl object-cover"
          />
        </Reveal>
      </section>

      {/* Diagnostics */}
      <section className="bg-sand">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-2 lg:items-center sm:py-24">
          <Reveal variant="clip" className="order-2 lg:order-1">
            <img
              src={images.diagnostics}
              alt="In-house diagnostics with digital X-ray and ultrasound"
              loading="lazy"
              decoding="async"
              width={1024}
              height={768}
              className="aspect-4/3 w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <span className="eyebrow !bg-card">Diagnosis &amp; imaging</span>
            <h2 className="display-lg mt-6">Better diagnosis. Better decisions.</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Effective pain management starts with understanding what is causing the pain. Thrive provides access to
              diagnostic and imaging capabilities that support accurate assessment and help our medical team make
              informed treatment decisions.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {diagnosticCapabilities.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-deep" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/services/$slug" params={{ slug: "diagnostics-and-imaging" }} className="btn btn-primary mt-8">
              Explore diagnostics
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why Thrive */}
      <section className="container-x py-16 sm:py-24">
        <Reveal className="text-center">
          <span className="eyebrow">Why Thrive</span>
          <h2 className="display-lg mx-auto mt-6 max-w-3xl">
            Medical expertise. Human care. A more complete approach.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyThrive.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} variant="up">
              <article className="card-soft h-full p-6">
                <h3 className="display-md">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Physician trust */}
      <section className="bg-deep text-deep-foreground">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-2 lg:items-center sm:py-24">
          <Reveal>
            <span className="text-xs tracking-[0.18em] uppercase opacity-70">Physician-led</span>
            <h2 className="display-lg mt-6">Care led by medical expertise</h2>
            <p className="mt-5 text-sm leading-relaxed opacity-80 sm:text-base">
              Thrive is built around physician-led pain management and regenerative care, supported by a
              multidisciplinary team working towards a shared goal: better outcomes and a better quality of life.
            </p>
            <Link to="/doctors" className="btn btn-lime mt-8">
              Meet our doctors &amp; team
            </Link>
          </Reveal>
          <Reveal delay={100} variant="clip">
            <img
              src={images.psychology}
              alt="A consultation room at Thrive Pain and Wellness Clinic"
              loading="lazy"
              decoding="async"
              width={1024}
              height={768}
              className="aspect-4/3 w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Facility */}
      <section className="container-x py-16 sm:py-24">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">The facility</span>
          <h2 className="display-lg mt-6">A space designed for healing</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Thrive brings clinical care and a calm, considered environment together across a 4,000 sq. ft. facility.
            Every element is designed to make the experience of seeking treatment feel more comfortable, focused and
            reassuring, from consultation and diagnostics to procedures, rehabilitation and wellness.
          </p>
          <Link to="/gallery" className="btn btn-outline mt-8">
            Explore our facility
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: images.reception, alt: "Reception and waiting area" },
            { src: images.physio, alt: "Physiotherapy and rehabilitation space" },
            { src: images.wellness, alt: "Wellness therapy room" },
          ].map((item, index) => (
            <Reveal key={item.alt} delay={index * 70} variant="clip">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width={1024}
                height={768}
                className="aspect-4/3 w-full rounded-2xl object-cover"
              />
            </Reveal>
          ))}
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-soft p-5">
              <dt className="font-display text-2xl font-bold text-deep">{stat.value}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Testimonials */}
      <section className="bg-sand">
        <div className="container-x py-16 text-center sm:py-24">
          <Reveal>
            <span className="eyebrow !bg-card">Testimonials</span>
            <h2 className="display-lg mx-auto mt-6 max-w-3xl">Hear from people who chose to Thrive</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Real experiences from patients who have trusted Thrive with their journey towards better health and
              wellbeing.
            </p>
            <Link to="/gallery" className="btn btn-primary mt-8">
              Read patient stories
            </Link>
            <p className="mx-auto mt-6 max-w-xl text-xs text-muted-foreground">
              Patient stories are published only after receiving appropriate permission. Verified testimonials will
              appear here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Insurance trust bar */}
      <section className="container-x py-16 sm:py-20">
        <Reveal className="card-flat grid gap-8 p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Insurance</span>
            <h2 className="display-lg mt-5 text-2xl">Care with greater clarity</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We believe understanding the financial side of treatment should be as straightforward as understanding the
              treatment itself. Thrive works with empanelled insurers and TPAs to help eligible patients navigate the
              cashless process.
            </p>
            <Link to="/insurance" className="btn btn-primary mt-6">
              View insurance &amp; billing
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {insuranceTrustPoints.map((point) => (
              <li key={point} className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold">
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <ContactSection />

      {/* Blog */}
      <section className="container-x py-16 sm:py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">The Thrive Journal</span>
            <h2 className="display-lg mt-6 max-w-2xl">Insight to help you understand your health.</h2>
          </div>
          <Link to="/blog" className="btn btn-outline">
            Explore the journal
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 80} variant="clip">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="card-soft flex h-full flex-col overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-16/10 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="display-md">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                    {post.author} &middot; {post.displayDate}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta />

      <p className="sr-only">
        {clinic.name}, {clinic.address}. {clinic.brandLine}
      </p>
    </>
  );
}
