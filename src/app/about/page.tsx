import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Mountain, Coffee, Leaf, Building, Users } from "lucide-react";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of THE OP — an Amsterdam-inspired cafe born from the Black Hills Consortium campus vision in Custer, South Dakota.",
  openGraph: {
    title: "About | THE OP",
    description:
      "The story of THE OP — an Amsterdam-inspired cafe born from the Black Hills Consortium campus vision in Custer, South Dakota.",
  },
};

const timeline = [
  { year: "2024", event: "BHC campus vision conceived — 15 acres in Custer, SD" },
  { year: "2025", event: "South Dakota legalizes recreational cannabis" },
  { year: "2025", event: "THE OP concept developed — Amsterdam meets Black Hills" },
  { year: "2026", event: "BHC raises $52M — THE OP buildout begins" },
  { year: "2026", event: "Grand opening — Custer's first cannabis-adjacent cafe" },
  { year: "2027", event: "THE OP becomes the top-rated cafe in the Black Hills" },
];

const pillars = [
  {
    icon: Coffee,
    title: "World-Class Coffee",
    description: "We don't settle for mediocre. Locally roasted, hand-brewed, and made with care every single time.",
  },
  {
    icon: Leaf,
    title: "Cannabis Culture",
    description: "Pioneering the legal cannabis cafe experience in South Dakota. Responsible, educated, and welcoming.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Every design decision, every event, every menu item asks: does this bring people together?",
  },
  {
    icon: Mountain,
    title: "Black Hills Rooted",
    description: "Local sourcing, local hiring, local partnerships. THE OP exists to strengthen the region, not extract from it.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              Our Story
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Amsterdam Meets the Black Hills
            </h1>
            <p className="max-w-xl text-cream/70">
              THE OP was born from a simple question: what if the best cafe in the
              region was also the most forward-thinking?
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Origin Story */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <SlideIn direction="left">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-espresso">
                The Origin
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  In the Netherlands, a &ldquo;coffee shop&rdquo; is more than a
                  place to buy espresso. It&apos;s a third place — a community
                  anchor where conversation flows as freely as the coffee.
                  Cannabis is part of the culture, not separate from it.
                </p>
                <p>
                  When South Dakota legalized recreational cannabis, the Black
                  Hills Consortium saw an opportunity: build the first
                  Amsterdam-style cafe in the state, right on the BHC campus in
                  Custer. Not a dispensary. Not a smoke shop. A genuine community
                  space where great coffee, responsible cannabis, and local
                  culture coexist.
                </p>
                <p>
                  THE OP sits at the gateway to Custer State Park, one of the
                  most visited natural destinations in America. With 14.9 million
                  annual tourists passing through the Black Hills and zero
                  cannabis cafes in the state, the timing is perfect.
                </p>
              </div>
            </div>
          </SlideIn>
          <SlideIn direction="right" delay={0.2}>
            <div className="flex items-center justify-center rounded-2xl bg-espresso/5 p-12">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 h-12 w-12 text-amber" />
                <h3 className="mb-2 text-xl font-bold text-espresso">
                  Custer, South Dakota
                </h3>
                <p className="text-warm-gray">
                  15 acres &middot; BHC Campus &middot; Gateway to Custer State Park
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-espresso">14.9M</p>
                    <p className="text-xs text-warm-gray">Annual SD tourists</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-espresso">2M+</p>
                    <p className="text-xs text-warm-gray">Custer SP visitors</p>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Luke bio */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-6 text-3xl font-bold text-espresso">
              Founded by Luke Alvarez
            </h2>
            <p className="mb-4 leading-relaxed text-warm-gray">
              Luke Alvarez is the founder of the Black Hills Consortium and all
              11 of its entities. A South Dakota native with experience building
              enterprise SaaS at scale (Instructure/Canvas), Luke returned to the
              Black Hills with a vision: use technology and community to revitalize
              rural America.
            </p>
            <p className="leading-relaxed text-warm-gray">
              THE OP represents the human side of that vision. While GrowWise
              builds the technology and Seed Foundation builds the programs,
              THE OP builds the relationships. It&apos;s where you go when you
              want to feel the energy of what BHC is creating.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-espresso">Our Philosophy</h2>
          </FadeIn>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cannabis-green/10">
                    <p.icon className="h-7 w-7 text-cannabis-green" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-espresso">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm-gray">
                    {p.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Our Journey</h2>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {timeline.map((item) => (
              <StaggerItem key={item.event}>
                <div className="flex gap-6 rounded-xl border border-cream/10 bg-cream/5 p-5">
                  <span className="shrink-0 text-sm font-bold text-amber">
                    {item.year}
                  </span>
                  <span className="text-cream/70">{item.event}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* BHC connection */}
      <section className="px-6 py-20 text-center">
        <FadeIn>
          <div className="mx-auto flex max-w-xl flex-col items-center">
            <Building className="mb-4 h-10 w-10 text-espresso" />
            <h2 className="mb-4 text-2xl font-bold text-espresso">
              Part of Black Hills Consortium
            </h2>
            <p className="mb-8 text-warm-gray">
              THE OP is one of 11 entities in the Black Hills Consortium — a
              $52M initiative to revitalize rural America through technology,
              media, education, and community.
            </p>
            <Link
              href="https://bhconsortium.com"
              className="inline-flex rounded-full bg-espresso px-8 py-3 font-semibold text-cream transition-colors hover:bg-espresso-light"
            >
              Learn About BHC
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
