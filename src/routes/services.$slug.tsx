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
    return {
      meta: [
        { title: `${service.title} | Thrive Pain & Wellness Clinic, Hyderabad` },
        { name: "description", content: service.short },
        { property: "og:title", content: `${service.title} | Thrive Pain & Wellness Clinic` },
        { property: "og:description", content: service.short },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

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
              <Link to="/insurance" className="btn btn-outline">
                Insurance & billing
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

      <ClosingCta />
    </>
  );
}
