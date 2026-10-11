import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { ClosingCta } from "@/components/ClosingCta";
import React from "react";

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
    const pageTitle = post.seoTitle || `${post.title} | Thrive Pain Clinic Hyderabad`;
    const fullCanonical = `https://www.thrivepainandwellness.com/blog/${post.slug}`;
    const fullImageUrl = post.image.startsWith("http")
      ? post.image
      : `https://www.thrivepainandwellness.com${post.image}`;

    const scripts: Array<{ type: string; children: string }> = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          image: fullImageUrl,
          author: {
            "@type": "Person",
            name: post.author,
            url: "https://www.thrivepainandwellness.com/doctors",
          },
          publisher: {
            "@type": ["MedicalClinic", "LocalBusiness"],
            name: "Thrive Pain Clinic, Wellness & More",
            telephone: "+91 86395 09446",
            url: "https://www.thrivepainandwellness.com/",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "4th Floor, Bharathi Square, Plot No. 58, Sy No. 5/3, Nandi Hills, Raidurg, Cyberabad, Raidurgam, Shaikpet",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500081",
              addressCountry: "IN",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": fullCanonical,
          },
        }),
      },
    ];

    if (post.faqs && post.faqs.length > 0) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      });
    }

    return {
      meta: [
        { title: pageTitle },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: fullCanonical },
        { property: "og:image", content: fullImageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: fullImageUrl },
      ],
      links: [{ rel: "canonical", href: fullCanonical }],
      scripts,
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

function renderFormattedText(text: string) {
  // Regex to match markdown links [label](url) and bold **bold**
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  const parts: (string | React.ReactNode)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1] && match[2]) {
      const linkText = match[1];
      const linkHref = match[2];
      if (linkHref.startsWith("/")) {
        parts.push(
          <Link
            key={match.index}
            to={linkHref}
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={match.index}
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {linkText}
          </a>
        );
      }
    } else if (match[3]) {
      parts.push(<strong key={match.index} className="font-semibold text-foreground">{match[3]}</strong>);
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function Article() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <article className="container-x py-12 sm:py-16">
        <Reveal className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
            <Link to="/blog" className="hover:text-primary">
              ← Journal
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary truncate">{post.title}</span>
          </nav>
          <h1 className="display-lg mt-6">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{post.author}</span>
            <span>·</span>
            <span>{post.displayDate}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <img
            src={post.image}
            alt={post.title}
            className="mt-8 aspect-16/9 w-full rounded-2xl object-cover"
            width={1280}
            height={720}
          />
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{renderFormattedText(paragraph)}</p>
            ))}
          </div>

          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-bold tracking-[0.12em] text-primary uppercase">Related clinical resources</span>
              <p className="mt-1 text-sm text-muted-foreground">
                Explore in-depth treatment guides and department pathways at Thrive:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {post.relatedLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center justify-between rounded-xl border border-border/80 bg-background/50 px-4 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-colors"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true" className="text-primary text-xs">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-16 border-t border-border pt-12">
              <span className="eyebrow">Patient questions</span>
              <h2 className="display-lg mt-4 text-2xl">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 rounded-xl bg-muted/40 border border-border/60 p-4 text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Clinical Review Notice:</span> This article was reviewed by the Thrive Pain Clinic medical team in Raidurgam, Hyderabad. It is intended for educational purposes and is not a substitute for individualized clinical consultation or diagnosis.
          </div>
        </Reveal>
      </article>

      <ClosingCta />
    </>
  );
}
