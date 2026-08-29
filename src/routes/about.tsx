import { createFileRoute, Link } from "@tanstack/react-router";
import { careModel, facilityHighlights, images, missionVision, philosophy, stats } from "@/lib/site-data";
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
          "A different approach to pain and a more complete approach to wellness. Physician-led interventional pain care with physiotherapy, psychology, nutrition and wellness therapies in Hyderabad.",
      },
      { property: "og:title", content: "About Thrive Pain & Wellness Clinic" },
      {
        property: "og:description",
        content: "Physician-led pain medicine and integrative wellness under one roof in Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        title="A different approach to pain."
        accent="A more complete approach to wellness."
        description="Thrive Pain & Wellness Clinic was created with a simple belief: effective pain care should look beyond the pain itself."
      >
        <Link to="/doctors" className="btn btn-primary">
          Meet our doctors
        </Link>
        <Link to="/gallery" className="btn btn-outline">
          See the facility
        </Link>
      </PageHero>

      <section className="container-x py-10 sm:py-16">
        <Reveal>
          <img
            src="https://res.cloudinary.com/dizaawlyl/image/upload/v1787908392/DSC03413_gisw1i.jpg"
            alt="Thrive Pain & Wellness Clinic Team"
            loading="lazy"
            decoding="async"
            className="aspect-video w-full rounded-[2rem] object-cover shadow-lg"
          />
        </Reveal>
      </section>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:items-center sm:py-24">
        <Reveal>
          <h2 className="display-lg">Care brought together, not scattered.</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>
              We bring physician-led interventional pain management together with physiotherapy, psychology, nutrition
              and advanced wellness therapies to create a more connected approach to healing.
            </p>
            <p>
              Instead of treating each part of your wellbeing separately, Thrive brings different areas of care together
              under one roof, allowing your treatment journey to be more coordinated, personalised and focused on what
              matters most: your quality of life.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <img
            src={images.wellness}
            alt="A quiet wellness therapy room at Thrive"
            loading="lazy"
            decoding="async"
            width={1024}
            height={1280}
            className="aspect-4/5 w-full rounded-[2rem] object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-secondary/50">
        <div className="container-x py-20 sm:py-24">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Our philosophy</span>
            <h2 className="display-lg mt-6">Heal. Restore. Thrive.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {philosophy.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <p
                  className="text-xs font-semibold tracking-[0.2em] text-primary uppercase"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  {item.title}
                </p>
                <p className="mt-4 text-lg leading-relaxed">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 sm:py-24">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Mission &amp; vision</span>
          <h2 className="display-lg mt-6">Why Thrive exists.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {missionVision.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="card-soft h-full p-8">
                <h3 className="display-md">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                <p className="mt-6 border-l-2 border-primary pl-4 text-base leading-relaxed text-deep">{item.quote}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20 sm:py-24">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">More than pain relief</span>
          <h2 className="display-lg mt-6">Because feeling better is only the beginning.</h2>
          <p className="mt-5 text-muted-foreground">
            Chronic pain can influence your physical health, emotional wellbeing, sleep, work and relationships. That is
            why our approach extends beyond procedures.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careModel.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} variant="up">
              <article className="card-soft h-full p-6">
                <h3 className="display-md">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-x py-20 sm:py-24">
          <Reveal className="max-w-3xl">
            <span className="eyebrow !bg-card">Our facility</span>
            <h2 className="display-lg mt-6">4,000 sq. ft. of integrated care.</h2>
            <p className="mt-5 text-muted-foreground">
              Thrive is designed as a complete destination for pain management and wellness. The facility brings together
              consultation, diagnostics, procedures, rehabilitation and wellness services in a thoughtfully designed
              environment that balances clinical confidence with calm.
            </p>
            <Link to="/gallery" className="btn btn-primary mt-8">
              Explore our gallery
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: images.recovery, alt: "Dedicated recovery room at Thrive" },
              { src: images.wellness, alt: "Wellness treatment room for IV-based therapies" },
              { src: images.physio, alt: "Physiotherapy and rehabilitation space" },
            ].map((item, index) => (
              <Reveal key={item.alt} delay={index * 70} variant="clip">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={768}
                  className="aspect-4/3 w-full rounded-3xl object-cover"
                />
              </Reveal>
            ))}
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilityHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <li className="card-flat h-full p-5">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card-flat p-5">
                <dt className="font-display text-2xl font-bold text-deep">{stat.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
