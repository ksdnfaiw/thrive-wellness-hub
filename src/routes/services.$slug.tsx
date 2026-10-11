import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    const title =
      service.seo?.metaTitle || `${service.title} in Hyderabad | Thrive Pain Clinic, Raidurgam`;
    const description =
      service.seo?.metaDescription ||
      `Looking for ${service.title.toLowerCase()} in Hyderabad? Consult our experienced medical team at Thrive in Raidurgam for personalised care. Book a visit.`;

    const scripts: Array<{ type: string; children: string }> = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.title,
          provider: {
            "@type": ["MedicalClinic", "LocalBusiness"],
            name: "Thrive Pain Clinic, Wellness & More",
            telephone: "+91 86395 09446",
            url: "https://www.thrivepainandwellness.com/",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "4th Floor, Bharathi Square, Plot No. 58, Sy No. 5/3, Nandi Hills, Raidurg, Cyberabad, Raidurgam, Shaikpet",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500081",
              addressCountry: "IN",
            },
          },
          areaServed: ["Hyderabad", "Raidurg", "Gachibowli", "Madhapur", "Kondapur"],
          description: service.intro || service.short,
        }),
      },
    ];

    if (service.faqs && service.faqs.length > 0) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      });
    }

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `https://www.thrivepainandwellness.com/services/${params.slug}` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(service.image.startsWith("https://") ? [
          { property: "og:image", content: service.image },
          { name: "twitter:image", content: service.image },
        ] : []),
      ],
      links: [{ rel: "canonical", href: `https://www.thrivepainandwellness.com/services/${params.slug}` }],
      scripts,
    };
  },
  component: ServiceDetail,
});

const serviceGuides: Record<string, Array<{ to: string; label: string }>> = {
  "interventional-procedures": [
    { to: "/back-pain-treatment-in-hyderabad", label: "Back Pain Treatment Guide (Hyderabad)" },
    { to: "/knee-pain-treatment-in-hyderabad", label: "Knee Pain Treatment Guide (Hyderabad)" },
    { to: "/blog/causes-of-chronic-lower-back-pain", label: "Causes of Chronic Lower Back Pain" },
    { to: "/blog/prp-therapy-for-knee-osteoarthritis", label: "Evidence for PRP Knee Osteoarthritis" },
  ],
  "diagnostics-and-imaging": [
    { to: "/back-pain-treatment-in-hyderabad", label: "Back Pain Clinical Diagnostics" },
    { to: "/knee-pain-treatment-in-hyderabad", label: "Knee Joint Ultrasound Evaluation" },
    { to: "/blog/what-to-expect-from-an-image-guided-procedure", label: "Guide to Image-Guided Diagnostics" },
  ],
  "physiotherapy-and-rehabilitation": [
    { to: "/back-pain-treatment-in-hyderabad", label: "Spine Rehabilitation Pathway" },
    { to: "/knee-pain-treatment-in-hyderabad", label: "Knee Kinetic Chain Strengthening" },
    { to: "/blog/understanding-persistent-back-pain", label: "Understanding Movement & Recovery" },
  ],
  "psychology-and-mental-wellness": [
    { to: "/blog/sleep-mood-and-chronic-pain", label: "Sleep, Mood and Chronic Pain Connection" },
    { to: "/back-pain-treatment-in-hyderabad", label: "Nociplastic Pain & Central Sensitization" },
  ],
  "nutrition": [
    { to: "/blog/inflammation-and-adjuvant-therapies", label: "Dietary Modulation of Inflammation" },
    { to: "/services/wellness-therapies", label: "Integrative Wellness Therapies" },
  ],
  "wellness-therapies": [
    { to: "/blog/inflammation-and-adjuvant-therapies", label: "HBOT, Cold Plunge & Ozone Evidence" },
    { to: "/services/interventional-procedures", label: "Interventional Procedures Department" },
  ],
  "in-house-pharmacy": [
    { to: "/services/interventional-procedures", label: "Medication Management & Procedures" },
    { to: "/doctors", label: "Consult Prescribing Physicians" },
  ],
  "polyclinic": [
    { to: "/back-pain-treatment-in-hyderabad", label: "Spine & Joint Clinical Care" },
    { to: "/doctors", label: "Meet all Multi-Specialty Physicians" },
  ],
};

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="bg-secondary/50">
        <div className="container-x grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="text-primary">{service.title}</span>
            </nav>
            <h1 className="display-xl mt-5">{service.title}</h1>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">{service.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary">
                Book a consultation
              </Link>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <img
              src={service.image}
              alt={service.title}
              width={1024}
              height={768}
              className="aspect-4/3 w-full rounded-[2rem] object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <span className="eyebrow">What we treat with</span>
            <h2 className="display-lg mt-5 text-2xl">Inside this department</h2>
            <ul className="mt-7 space-y-3">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <span className="eyebrow">Your pathway</span>
            <h2 className="display-lg mt-5 text-2xl">How the journey runs</h2>
            <ol className="mt-7 space-y-4">
              {service.journey.map((step, index) => (
                <li key={step.stage} className="card-soft p-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                    Step {index + 1} · {step.stage}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{step.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {service.overview ? (
        <section className="bg-sand">
          <div className="container-x grid gap-10 py-16 lg:grid-cols-2 sm:py-20">
            <Reveal>
              <span className="eyebrow !bg-card">Who it helps</span>
              <h2 className="display-lg mt-5 text-2xl">Is this right for me?</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.overview.suitableFor}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <span className="eyebrow !bg-card">What you can expect</span>
              <h2 className="display-lg mt-5 text-2xl">Benefits of this care</h2>
              <ul className="mt-6 grid gap-3">
                {service.overview.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 rounded-2xl border border-border bg-card p-4 text-sm">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="min-w-0 break-words">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ) : null}


      <section className="container-x grid gap-10 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-start">
        <Reveal>
          <span className="eyebrow">Related departments</span>
          <h2 className="display-lg mt-5 text-2xl">Often paired with</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                to="/services/$slug"
                params={{ slug: item.slug }}
                className="card-soft p-5 text-sm font-semibold"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <LeadForm
            mode="inquiry"
            defaultService={service.title}
            title={`Ask about ${service.title.toLowerCase()}`}
            description="A clinician from this department reviews your enquiry and calls you back."
          />
        </Reveal>
      </section>

      {service.faqs && service.faqs.length > 0 && (
        <section className="bg-sand/60 py-16 sm:py-20">
          <div className="container-x max-w-4xl">
            <Reveal>
              <span className="eyebrow !bg-card">Frequently asked questions</span>
              <h2 className="display-lg mt-5 text-2xl">Questions about {service.title.toLowerCase()}</h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {service.faqs.map((faq) => (
                <Reveal key={faq.question} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {serviceGuides[service.slug] && (
        <section className="border-t border-border bg-sand/30 py-12">
          <div className="container-x">
            <span className="eyebrow !bg-card">Clinical resources & reading</span>
            <h3 className="display-md mt-2 text-xl font-bold">Related treatment guides and articles</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {serviceGuides[service.slug].map((guide) => (
                <Link
                  key={guide.to}
                  to={guide.to}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-4 text-sm font-medium hover:border-primary/50 hover:bg-secondary/40 transition-colors"
                >
                  <span>{guide.label}</span>
                  <span aria-hidden="true" className="text-primary text-xs">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-border bg-card py-12">
        <div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <span className="eyebrow">Physician-led oversight</span>
            <h3 className="display-md mt-2 text-xl">Guided by our clinical team</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Every procedure and rehabilitation protocol is overseen by our pain physicians in Raidurgam.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/doctors" className="btn btn-primary text-xs">
              Meet our pain specialists
            </Link>
            <Link to="/blog" className="btn btn-outline text-xs">
              Read clinical articles
            </Link>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
