import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";

const media = [
  { src: images.reception, alt: "Reception and waiting lounge", span: "lg:col-span-2", w: 1280, h: 853 },
  { src: images.procedureSuite, alt: "Interventional procedure suite with C-arm fluoroscopy", span: "", w: 1024, h: 768 },
  { src: images.diagnostics, alt: "In-house diagnostics with digital X-ray and ultrasound", span: "", w: 1024, h: 768 },
  { src: images.physio, alt: "One-to-one physiotherapy bay", span: "lg:col-span-2", w: 1024, h: 768 },
  { src: images.wellness, alt: "Private wellness therapy suite", span: "", w: 1024, h: 1280 },
  { src: images.psychology, alt: "Psychology consultation room", span: "", w: 1024, h: 768 },
  { src: images.nutrition, alt: "Clinical nutrition consultation", span: "", w: 1024, h: 768 },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Inside Thrive Pain & Wellness Clinic, Hyderabad" },
      {
        name: "description",
        content:
          "Look inside our 4,000 sq. ft. facility — the interventional procedure suite, diagnostics floor, physiotherapy bays and wellness therapy rooms.",
      },
      { property: "og:title", content: "Gallery | Thrive Pain & Wellness Clinic" },
      { property: "og:description", content: "Our procedure suite, diagnostics floor, rehab bays and wellness rooms." },
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
        title="A clinic that feels like a"
        accent="retreat."
        description="Our facility was designed so that precision equipment and quiet recovery spaces can share the same floor plan."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((item, index) => (
            <Reveal key={item.alt} delay={index * 50} className={item.span}>
              <figure className="overflow-hidden rounded-3xl border border-border bg-card">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
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
          Placeholder imagery — to be replaced with the clinic's own facility, OT and equipment photography and walkthrough
          video before launch.
        </p>
      </section>

      <ClosingCta />
    </>
  );
}
