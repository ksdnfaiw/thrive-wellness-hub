import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { ClosingCta } from "@/components/ClosingCta";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((entry) => entry.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable | Thrive" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Thrive Pain & Wellness Clinic` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: post.author },
            publisher: { "@type": "Organization", name: "Thrive Pain & Wellness Clinic" },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <section className="container-x py-24 text-center">
      <h1 className="display-lg">Article not found</h1>
      <Link to="/blog" className="btn btn-primary mt-8">
        Back to the journal
      </Link>
    </section>
  ),
  component: Article,
});

function Article() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <article className="container-x py-12 sm:py-16">
        <Reveal className="mx-auto max-w-3xl">
          <Link to="/blog" className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
            ← Journal
          </Link>
          <h1 className="display-lg mt-6">{post.title}</h1>
          <p className="mt-4 text-xs text-muted-foreground">
            {post.author} · {post.displayDate} · {post.readTime}
          </p>
          <img
            src={post.image}
            alt={post.title}
            className="mt-8 aspect-16/9 w-full rounded-2xl object-cover"
            width={1280}
            height={720}
          />
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </article>

      <ClosingCta />
    </>
  );
}
