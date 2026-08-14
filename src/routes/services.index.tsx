import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Pain Management & Wellness in Hyderabad" },
      {
        name: "description",
        content:
          "Interventional procedures, diagnostics, physiotherapy, psychology, nutrition, wellness therapies and an in-house pharmacy — seven departments under one roof.",
      },
      { property: "og:title", content: "Our Services | Thrive Pain & Wellness Clinic" },
      { property: "og:description", content: "Seven in-house departments covering diagnosis, intervention and recovery." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Diagnosis, intervention,"
        accent="recovery."
        description="Every service below is delivered inside our 4,000 sq. ft. facility by our own clinicians — with one shared record so your plan never restarts."
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
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-16/10 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold">{service.title}</h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{service.short}</p>
                  <span className="mt-5 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                    View department →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <Reveal className="mx-auto max-w-2xl">
          <LeadForm
            mode="inquiry"
            title="Which department do I need?"
            description="Tell us where it hurts. We route your enquiry to the right clinician and call you back."
          />
        </Reveal>
      </section>

      <ClosingCta />
    </>
  );
}
