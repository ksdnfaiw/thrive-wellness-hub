import { createFileRoute, Link } from "@tanstack/react-router";
import { images, stats } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Thrive Pain & Wellness Clinic | Who We Are" },
      {
        name: "description",
        content:
          "Our founding story, mission and 4,000 sq. ft. multidisciplinary facility in Hyderabad — physician-led pain care with an integrated in-house wellness team.",
      },
      { property: "og:title", content: "About Thrive Pain & Wellness Clinic" },
      {
        property: "og:description",
        content: "Physician-led pain medicine and integrative wellness under one roof in Hyderabad.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Built for people who were told to"
        accent="live with it."
        description="Thrive was founded on a simple observation: chronic pain in India is treated in fragments — a scan here, a physiotherapist there, painkillers in between. We built one place where the whole plan happens."
      >
        <Link to="/doctors" className="btn btn-primary">
          Meet our doctors
        </Link>
        <Link to="/gallery" className="btn btn-outline">
          See the facility
        </Link>
      </PageHero>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:items-center sm:py-24">
        <Reveal>
          <h2 className="display-lg">Our founding story.</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>
              Our founding pain physician spent over a decade watching the same pattern: patients arriving after years of
              escalating medication, multiple opinions and one or two operations they may not have needed. The medicine
              existed. The coordination did not.
            </p>
            <p>
              Thrive was designed backwards from that problem — starting with a diagnostic floor, a dedicated
              interventional suite, and therapy departments that share a single patient record and a single plan.
            </p>
            <p>
              The result is a clinic that behaves like a hospital when precision matters, and like a retreat when
              recovery does.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <img
            src={images.wellness}
            alt="A quiet wellness therapy room with soft linens and teal walls"
            loading="lazy" decoding="async"
            width={1024}
            height={1280}
            className="aspect-4/5 w-full rounded-[2rem] object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-secondary/50">
        <div className="container-x grid gap-8 py-20 md:grid-cols-3 sm:py-24">
          {[
            {
              title: "Our mission",
              body: "To end avoidable pain with precise, image-guided medicine — and to make the recovery around it just as deliberate.",
            },
            {
              title: "Our vision",
              body: "A Hyderabad where no one accepts chronic pain as permanent because care was too scattered to follow.",
            },
            {
              title: "Our philosophy",
              body: "One team, one record, one plan. Physicians, therapists, psychologists and nutritionists review patients together.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{item.title}</p>
              <p className="mt-4 text-lg leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20 sm:py-24">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">The facility</span>
          <h2 className="display-lg mt-6">4,000 sq. ft. designed around one patient journey.</h2>
          <p className="mt-5 text-muted-foreground">
            A diagnostic floor, a dedicated interventional procedure suite with C-arm fluoroscopy, one-to-one
            physiotherapy bays, private consultation rooms for psychology and nutrition, quiet wellness therapy suites,
            and an in-house pharmacy — all reachable without leaving the building.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: images.procedureSuite, alt: "Interventional procedure suite with C-arm fluoroscopy" },
            { src: images.diagnostics, alt: "In-house diagnostics room with digital X-ray and ultrasound" },
            { src: images.physio, alt: "Physiotherapist guiding a patient through shoulder rehabilitation" },
          ].map((item, index) => (
            <Reveal key={item.alt} delay={index * 70}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy" decoding="async"
                width={1024}
                height={768}
                className="aspect-4/3 w-full rounded-3xl object-cover"
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

      <ClosingCta />
    </>
  );
}
