import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Pain, Recovery & Wellness Insight from Thrive" },
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
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Insight from our"
        accent="clinicians."
        description="Our physicians, physiotherapists and psychologists write about what actually helps chronic pain. No clickbait, no miracle cures."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 80}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="card-soft flex h-full flex-col overflow-hidden"
              >
                <img src={post.image} alt={post.title} loading="lazy" className="aspect-16/10 w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="display-md">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                    {post.author} · {post.displayDate} · {post.readTime}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
