import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { ClosingCta } from "@/components/ClosingCta";
import { HumanoidMap } from "@/components/HumanoidMap";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Pain Management & Wellness in Hyderabad" },
      {
        name: "description",
        content:
          "Looking for integrated pain management in Hyderabad? We combine interventional procedures, physiotherapy, diagnostics and nutrition under one roof. Book today.",
      },
      { property: "og:title", content: "Our Services | Pain Management & Wellness in Hyderabad" },
      {
        property: "og:description",
        content:
          "Looking for integrated pain management in Hyderabad? We combine interventional procedures, physiotherapy, diagnostics and nutrition under one roof. Book today.",
      },
      { property: "og:url", content: "https://www.thrivepainandwellness.com/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.thrivepainandwellness.com/services" }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Complete care for"
        accent="a better life."
        description="Pain rarely has a single dimension. Neither should your care. At Thrive, different areas of expertise come together to create a personalised treatment journey."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="card-soft flex h-full flex-col overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy" decoding="async"
                  width={1024}
                  height={768}
                  className="aspect-16/10 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold">{service.title}</h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{service.short}</p>
                  <span className="mt-5 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                    Explore this service
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Conditions we treat (Humanoid Map) */}
      <section className="container-x py-16 sm:py-20">
        <Reveal className="mb-12 text-center">
          <span className="eyebrow">Conditions we treat</span>
          <h2 className="display-lg mx-auto mt-6 max-w-3xl">Comprehensive pain management</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
            Explore our interactive map to see the wide range of chronic and acute pain conditions we treat across the body.
          </p>
        </Reveal>
        <HumanoidMap />
      </section>

      <section className="container-x pb-20">
        <Reveal className="mx-auto max-w-2xl">
          <LeadForm
            mode="inquiry"
            title="Not sure where to start?"
            description="Tell us what you are experiencing and our team will help you understand the next step."
          />
        </Reveal>
      </section>

      <ClosingCta />
    </>
  );
}
