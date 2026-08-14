import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Pain, Recovery & Wellness Insights from Thrive" },
      {
        name: "description",
        content:
          "Physician-written articles on interventional pain management, rehabilitation, nutrition and mental wellness from Thrive Pain & Wellness Clinic, Hyderabad.",
      },
      { property: "og:title", content: "Blog | Thrive Pain & Wellness Clinic" },
      { property: "og:description", content: "Physician-written insight on pain, recovery and wellness." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Insight from our"
        accent="clinicians."
        description="Our physicians, physiotherapists and psychologists write here about what actually helps chronic pain — no clickbait, no miracle cures."
      />

      <section className="container-x py-16 sm:py-20">
        <Reveal className="card-soft mx-auto max-w-2xl p-8 text-center sm:p-12">
          <span className="eyebrow">Coming soon</span>
          <h2 className="display-lg mt-6 text-2xl">The first articles are being written.</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            This journal is SEO-ready and set up for publishing. Until the first pieces go live, our care team is happy to
            answer your questions directly.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/services" className="btn btn-primary">
              Explore our services
            </Link>
            <Link to="/book" className="btn btn-outline">
              Book an appointment
            </Link>
          </div>
        </Reveal>
      </section>

      <ClosingCta />
    </>
  );
}
