"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { blogPosts } from "@/lib/blog-posts";

const categories = ["All", "Culture", "Community", "Business"] as const;

const categoryColors: Record<string, string> = {
  Culture: "border-amber text-amber",
  Community: "border-amber text-amber",
  Business: "border-espresso-light text-espresso-light",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-espresso px-6 py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
                <BookOpen className="mr-1 inline h-3 w-3" />
                THE OP Blog
              </p>
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                Stories from the{" "}
                <span className="text-amber">Third Place</span>
              </h1>
              <p className="mt-4 text-lg text-cream/70">
                Coffee, community, and the culture of gathering in the
                Black Hills.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category Filters */}
      <section className="border-b border-espresso-light/20 bg-cream-dark px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-espresso text-cream"
                      : "border border-espresso/20 text-espresso hover:bg-espresso/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Post Grid */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="h-full rounded-xl border border-espresso/10 bg-white p-6 transition-colors group-hover:border-amber/40">
                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                          categoryColors[post.category] ?? "border-warm-gray text-warm-gray"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-warm-gray">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold leading-snug text-espresso group-hover:text-amber-dark transition-colors">
                      {post.title}
                    </h3>

                    <p className="mt-2 text-sm text-warm-gray line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-warm-gray-light">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-warm-gray-light transition-transform group-hover:translate-x-1 group-hover:text-amber" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <FadeIn>
              <div className="py-16 text-center text-warm-gray">
                No posts in this category yet. Check back soon.
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
