"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

const categoryColors: Record<string, string> = {
  Culture: "border-amber text-amber",
  Community: "border-cannabis-green text-cannabis-green",
  Business: "border-espresso-light text-espresso-light",
};

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      {/* Article Header */}
      <section className="bg-espresso px-6 py-12 text-cream sm:py-16">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1 text-sm text-cream/60 hover:text-cream transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-4 flex items-center gap-3">
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                  categoryColors[post.category] ?? "border-warm-gray text-warm-gray"
                }`}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-cream/60">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl font-bold sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-4 text-sm text-cream/60">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <section className="border-t border-espresso/10 px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <FadeIn delay={0.1}>
            <article className="space-y-6">
              {paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-warm-gray sm:text-lg sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          </FadeIn>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-espresso/10 bg-cream-dark px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <h2 className="mb-8 text-2xl font-bold text-espresso">
                More from the Blog
              </h2>
            </FadeIn>
            <StaggerContainer className="grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <StaggerItem key={related.slug}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group block h-full"
                  >
                    <div className="h-full rounded-xl border border-espresso/10 bg-white p-6 transition-colors group-hover:border-amber/40">
                      <div className="mb-2 flex items-center gap-2">
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                            categoryColors[related.category] ?? "border-warm-gray text-warm-gray"
                          }`}
                        >
                          {related.category}
                        </span>
                        <span className="text-xs text-warm-gray-light">
                          {related.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-espresso group-hover:text-amber-dark transition-colors">
                        {related.title}
                      </h3>
                      <p className="mt-2 text-sm text-warm-gray line-clamp-2">
                        {related.excerpt}
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-sm text-amber opacity-0 transition-opacity group-hover:opacity-100">
                        Read article
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </>
  );
}
