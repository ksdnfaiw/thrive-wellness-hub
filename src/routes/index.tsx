import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  blogPosts,
  clinic,
  funFacts,
  images,
  insurers,
  pillars,
  ratings,
  recoveryBars,
  services,
  testimonials,
  whatsappLink,
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
          "Hyderabad's physician-led clinic for interventional pain management with in-house physiotherapy, psychology, nutrition and wellness therapies. Heal. Restore. Thrive.",
      },
      { property: "og:title", content: "Thrive Pain & Wellness Clinic | Hyderabad" },
      {
        property: "og:description",
        content: "Physician-led interventional pain care and integrative wellness under one 4,000 sq. ft. roof.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: images.hero, fetchPriority: "high" },
    ],
  }),
  component: Home,
});

const carousel = [images.wellness, images.physio, images.psychology, images.nutrition];

function Stars() {
  return (
    <span className="flex gap-0.5 text-deep" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
          <path d="m12 2 3 6.9 7.5.6-5.7 5 1.7 7.3L12 17.9 5.5 21.8l1.7-7.3-5.7-5 7.5-.6Z" />
        </svg>
      ))}
    </span>
  );
}

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [slide, setSlide] = useState(0);
  const testimonial = testimonials[activeTestimonial]!;

  return (
    <>
      {/* Hero */}
      <section className="container-x grid items-center gap-10 py-10 lg:grid-cols-[1.02fr_1fr] lg:gap-14 lg:py-16">
        <Reveal>
          <span className="eyebrow">Heal. Restore. Thrive.</span>
          <h1 className="display-xl mt-6">Pain care that is physician-led, not guesswork.</h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Interventional pain medicine with an integrated in-house team: physiotherapy, clinical psychology, nutrition
            and next-generation wellness therapies across 4,000 sq. ft. in Banjara Hills.
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
              WhatsApp us
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
            {ratings.map((rating) => (
              <div key={rating.source}>
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-bold">{rating.score}</span>
                  <Stars />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {rating.source} · {rating.count}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} variant="scale">
          <img
            src={images.hero}
            alt="A pain physician assessing a patient's knee in a calm, sunlit treatment room"
            fetchPriority="high"
            decoding="async"
            width={1280}
            height={1024}
            className="aspect-4/3 w-full rounded-2xl object-cover"
          />
          <div className="mt-3 grid gap-3 sm:grid-cols-[auto_1fr_auto]">
            <img
              src={images.physio}
              alt="Physiotherapist guiding a patient through a movement drill"
              loading="lazy" decoding="async"
              className="hidden h-24 w-24 rounded-xl object-cover sm:block"
            />
            <div className="rounded-xl bg-sand p-4">
              <p className="font-display text-xs font-bold tracking-[0.1em] uppercase">Srinivas R.</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                &ldquo;Six weeks after my procedure I walked my daughter down the aisle.&rdquo;
              </p>
            </div>
            <img
              src={images.procedureSuite}
              alt="The image-guided procedure suite at Thrive"
              loading="lazy" decoding="async"
              className="hidden h-24 w-24 rounded-xl object-cover sm:block"
            />
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section className="container-x py-16 text-center sm:py-24">
        <Reveal>
          <span className="eyebrow">About our clinic</span>
          <h2 className="display-lg mx-auto mt-6 max-w-4xl">
            Your journey begins with a thorough evaluation by a pain physician who explains exactly what is causing it.
          </h2>
        </Reveal>

        <Reveal delay={100} variant="clip" className="mt-12">
          <img
            src={images.procedureSuite}
            alt="Image-guided procedure being performed in the Thrive interventional suite"
            loading="lazy" decoding="async"
            width={1280}
            height={720}
            className="aspect-16/9 w-full rounded-2xl object-cover"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 text-left sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 90} variant="up">
              <h3 className="display-md">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Insurer marquee */}
      <section className="border-y border-border py-8">
        <Marquee
          items={insurers}
          slow
          className="font-display text-lg font-bold tracking-tight text-deep/60 uppercase sm:text-xl"
        />
      </section>

      {/* Services */}
      <section className="container-x py-16 sm:py-24">
        <Reveal className="text-center">
          <span className="eyebrow">Our services</span>
          <h2 className="display-lg mx-auto mt-6 max-w-3xl">
            We believe every patient deserves focused, compassionate care.
          </h2>
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
                  loading="lazy" decoding="async"
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

      {/* Why choose us */}
      <section className="bg-sand">
        <div className="container-x py-16 sm:py-24">
          <Reveal className="text-center">
            <span className="eyebrow !bg-card">Why choose us</span>
            <h2 className="display-lg mx-auto mt-6 max-w-3xl">
              Get back to your life safely with a customised recovery plan.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal className="card-flat p-6">
                <p className="text-xs text-muted-foreground">Measured outcomes across 12 months</p>
                <div className="mt-6 flex h-40 items-end gap-3">
                  {recoveryBars.map((bar, index) => (
                    <div key={bar.label} className="flex h-full flex-1 flex-col justify-end gap-2">
                      <div
                        className="bar-grow w-full rounded-t-md"
                        style={{
                          height: `${bar.value}%`,
                          background: index % 2 === 0 ? "var(--deep)" : "var(--lime)",
                          transitionDelay: `${index * 110}ms`,
                        }}
                        title={bar.label}
                      />
                      <span className="text-center font-display text-xs font-bold">{bar.value}%</span>
                    </div>
                  ))}
                </div>

                <h3 className="display-md mt-6">Support for spine, joint and nerve pain</h3>
              </Reveal>

              <Reveal delay={90} className="card-flat flex flex-col justify-between p-6">
                <h3 className="display-md">
                  Track your recovery plan, sessions and reports from your phone.
                </h3>
                <div className="mt-8 flex items-center gap-4">
                  <a
                    href={whatsappLink("Hello Thrive, please send me my recovery plan updates.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("whatsapp_click", { location: "why_choose_us" })}
                    className="btn btn-primary"
                  >
                    Get updates
                  </a>
                  <div className="grid h-16 w-16 shrink-0 grid-cols-4 gap-0.5 rounded-md bg-card p-1" aria-hidden="true">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <span
                        key={index}
                        className={index % 3 === 0 || index % 7 === 0 ? "bg-deep" : "bg-transparent"}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140} className="card-flat p-6 sm:col-span-2">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[images.diagnostics, images.physio, images.wellness].map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="Care in progress at Thrive Pain & Wellness Clinic"
                      loading="lazy" decoding="async"
                      className="aspect-4/3 w-full rounded-xl object-cover"
                    />
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    Diagnostics, rehabilitation and recovery therapy, all in one building.
                  </p>
                  <Link to="/services" className="btn btn-outline">
                    Explore services
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <img
                src={images.wellness}
                alt="A patient receiving manual therapy in a private treatment room"
                loading="lazy" decoding="async"
                className="h-full min-h-[320px] w-full rounded-2xl object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-16 sm:py-24">
        <Reveal className="text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="display-lg mx-auto mt-6 max-w-3xl">What our patients say about working with us.</h2>
        </Reveal>

        <div className="mt-12 space-y-5">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 80} variant="scale">
              <button
                type="button"
                onClick={() => setActiveTestimonial(index)}
                className={`card-flat grid w-full gap-6 p-5 text-left transition-colors sm:grid-cols-[160px_1fr_auto] sm:items-center ${
                  activeTestimonial === index ? "border-deep/40" : ""
                }`}
              >
                <img
                  src={carousel[index % carousel.length]}
                  alt=""
                  loading="lazy" decoding="async"
                  className="aspect-4/3 w-full rounded-xl object-cover"
                />
                <div>
                  <p className="text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-4 font-display text-xs font-bold tracking-[0.1em] uppercase">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
                <div className="border-border pl-0 sm:border-l sm:pl-8">
                  <p className="font-display text-4xl font-bold">99%</p>
                  <p className="text-xs text-muted-foreground">Would recommend</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Currently reading: <span className="font-semibold text-deep">{testimonial.name}</span>
        </p>
      </section>

      {/* Experience + carousel */}
      <section className="bg-sand">
        <div className="container-x grid items-center gap-10 py-16 lg:grid-cols-2 sm:py-24">
          <Reveal>
            <span className="eyebrow !bg-card">Experience</span>
            <h2 className="display-lg mt-6">With 15 years of experience treating patients of all ages</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Our physicians hold interventional pain fellowships and perform every procedure themselves. Nothing is
              delegated, and every plan is signed off by a doctor.
            </p>
            <Link to="/book" className="btn btn-primary mt-8">
              Book your session today
            </Link>
          </Reveal>

          <Reveal delay={120} variant="clip" className="relative">
            <div className="grid grid-cols-2 gap-3">
              {[carousel[slide % carousel.length]!, carousel[(slide + 1) % carousel.length]!].map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt="Therapy in progress at Thrive Pain & Wellness Clinic"
                  loading="lazy" decoding="async"
                  className="aspect-3/4 w-full rounded-2xl object-cover"
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Previous images"
              onClick={() => setSlide((value) => (value + carousel.length - 1) % carousel.length)}
              className="absolute top-1/2 left-2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card/90 text-deep shadow-soft"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m14 6-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next images"
              onClick={() => setSlide((value) => (value + 1) % carousel.length)}
              className="absolute top-1/2 right-2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card/90 text-deep shadow-soft"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m10 6 6 6-6 6" />
              </svg>
            </button>
          </Reveal>
        </div>
      </section>

      {/* Fun facts */}
      <section className="container-x py-16 text-center sm:py-24">
        <Reveal>
          <span className="eyebrow">Fun facts</span>
          <h2 className="display-lg mx-auto mt-6 max-w-3xl">
            A safe, professional environment equipped with modern facilities and evidence-based techniques.
          </h2>
        </Reveal>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {funFacts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 80} variant="up">
              <dt className="font-display text-4xl font-bold text-deep">{fact.value}</dt>
              <dd className="mx-auto mt-2 max-w-[15rem] text-xs text-muted-foreground">{fact.label}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <ContactSection />

      {/* Blog */}
      <section className="container-x py-16 sm:py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">From the journal</span>
            <h2 className="display-lg mt-6 max-w-2xl">Insight our clinicians actually stand behind.</h2>
          </div>
          <Link to="/blog" className="btn btn-outline">
            All articles
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
                  loading="lazy" decoding="async"
                  className="aspect-16/10 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="display-md">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                    {post.author} · {post.displayDate}
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
