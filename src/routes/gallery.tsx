import { createFileRoute, Link } from "@tanstack/react-router";
import { galleryCategories, images } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";

const media = [
  { src: images.reception, alt: "Reception and waiting area", span: "lg:col-span-2", w: 1280, h: 853 },
  { src: images.procedureSuite, alt: "Procedure space with C-arm imaging support", span: "", w: 1024, h: 768 },
  { src: images.diagnostics, alt: "In-house diagnostics with digital X-ray and ultrasound", span: "", w: 1024, h: 768 },
  { src: images.physio, alt: "Physiotherapy and rehabilitation area", span: "lg:col-span-2", w: 1024, h: 768 },
  { src: images.wellness, alt: "Private wellness therapy room", span: "", w: 1024, h: 1280 },
  { src: images.psychology, alt: "Consultation room for psychology and mental wellness", span: "", w: 1024, h: 768 },
  { src: images.nutrition, alt: "Nutrition consultation space", span: "", w: 1024, h: 768 },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Inside Thrive Pain & Wellness Clinic, Hyderabad" },
      {
        name: "description",
        content:
          "Explore the Thrive facility: clinical and procedure spaces, diagnostics and equipment, rehabilitation and wellness rooms across a 4,000 sq. ft. clinic.",
      },
      { property: "og:title", content: "Gallery | Thrive Pain & Wellness Clinic" },
      {
        property: "og:description",
        content: "A space designed to make healthcare feel different.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Welcome to"
        accent="Thrive."
        description="A space designed to make healthcare feel different. From our clinical setup to our wellness spaces, every part of Thrive has been designed around comfort, confidence and care."
      >
        <Link to="/book" className="btn btn-primary">
          Book a visit
        </Link>
      </PageHero>

      <section className="container-x py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Gallery categories</span>
          <h2 className="display-lg mt-5 text-2xl">Explore the facility</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 60} variant="clip">
              <article className="card-soft h-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={768}
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="display-md">{category.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{category.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((item, index) => (
            <Reveal key={item.alt} delay={index * 50} className={item.span}>
              <figure className="overflow-hidden rounded-3xl border border-border bg-card">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={item.w}
                  height={item.h}
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <figcaption className="px-5 py-4 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {item.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Placeholder imagery. To be replaced with the clinic's own facility, procedure and equipment photography before
          launch.
        </p>
      </section>

      <ClosingCta />
    </>
  );
}
