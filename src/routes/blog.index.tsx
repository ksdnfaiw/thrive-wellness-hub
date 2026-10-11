import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Pain & Wellness Journal | Thrive Pain Clinic Hyderabad" },
      {
        name: "description",
        content:
          "Explore clinical articles on back pain, knee arthritis, and image-guided recovery from our physician team at Thrive in Raidurgam, Hyderabad. Read the journal.",
      },
      { property: "og:title", content: "Pain & Wellness Journal | Thrive Pain Clinic Hyderabad" },
      { property: "og:description", content: "Explore clinical articles on back pain, knee arthritis, and image-guided recovery from our physician team at Thrive in Raidurgam, Hyderabad." },
      { property: "og:url", content: "https://www.thrivepainandwellness.com/blog" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.thrivepainandwellness.com/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="The Thrive"
        accent="Journal."
        description="Practical insights on pain, recovery, movement, nutrition, mental wellness and living better, designed to help you make more informed decisions about your wellbeing."
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
                <img src={post.image} alt={post.title} loading="lazy" decoding="async" className="aspect-16/10 w-full object-cover" />
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
