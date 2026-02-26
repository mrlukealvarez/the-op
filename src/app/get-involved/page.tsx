"use client";

import Link from "next/link";
import {
  Handshake,
  CalendarDays,
  Users,
  ShoppingBag,
  Heart,
} from "lucide-react";
import {
  FadeIn,
  AmberShimmer,
  WarmGlow,
  ParallaxSection,
  PulseGlow,
  ScaleReveal,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from "@/components/motion";

const involvementCards = [
  {
    icon: Handshake,
    title: "Become a Partner",
    description:
      "Local businesses: cross-promote with THE OP. Pop-ups, co-branded events, and shared customers.",
    cta: "Partner With Us",
    href: "/contact",
  },
  {
    icon: CalendarDays,
    title: "Host an Event",
    description:
      "Book THE OP for your next gathering. Community meetups, workshops, and private events.",
    cta: "Book a Space",
    href: "/contact",
  },
  {
    icon: Users,
    title: "Join the Community",
    description:
      "Regular programming, coworking hours, and community potlucks. Everyone's welcome at THE OP.",
    cta: "See Events",
    href: "/events",
  },
  {
    icon: ShoppingBag,
    title: "Supply Local Goods",
    description:
      "Local producers: supply baked goods, coffee, or artisan products. We prioritize Black Hills sourcing.",
    cta: "Become a Supplier",
    href: "/contact",
  },
  {
    icon: Heart,
    title: "Volunteer",
    description:
      "Help with community events, campus activities, and outreach programs. Make a direct impact.",
    cta: "Get Started",
    href: "/contact",
  },
];

const stats = [
  { end: 12, suffix: "+", label: "Monthly Events" },
  { end: 500, suffix: "+", label: "Weekly Visitors" },
  { end: 15, suffix: "", label: "Local Partners" },
  { end: 100, suffix: "%", label: "Community Owned" },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <ParallaxSection className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <FadeIn>
            <h1 className="mb-4 text-4xl font-bold text-espresso md:text-5xl">
              Get <AmberShimmer>Involved</AmberShimmer>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-warm-gray">
              THE OP is more than a cafe — it&apos;s a community hub.
              Here&apos;s how you can be part of it.
            </p>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Involvement Cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {involvementCards.map((card) => (
              <StaggerItem key={card.title}>
                <WarmGlow className="h-full rounded-xl">
                  <div className="h-full rounded-xl border border-espresso/10 bg-white p-8">
                    <card.icon className="mb-4 h-8 w-8 text-espresso" />
                    <h3 className="mb-2 text-xl font-bold text-espresso">
                      {card.title}
                    </h3>
                    <p className="mb-4 text-warm-gray">{card.description}</p>
                    <Link
                      href={card.href}
                      className="font-semibold text-espresso hover:underline"
                    >
                      {card.cta} &rarr;
                    </Link>
                  </div>
                </WarmGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-espresso px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp
                end={stat.end}
                suffix={stat.suffix}
                className="text-4xl font-bold text-cream"
              />
              <p className="mt-1 text-sm text-cream/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <ScaleReveal>
        <section className="bg-gradient-to-br from-espresso to-amber-900 px-6 py-24 text-center">
          <h2 className="mb-4 text-3xl font-bold text-cream md:text-4xl">
            Pull Up a Chair
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-cream/70">
            Whether you&apos;re a neighbor, a business owner, or just passing
            through — there&apos;s always room at THE OP.
          </p>
          <PulseGlow className="inline-block rounded-full">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-cream px-8 py-4 font-bold text-espresso transition-colors hover:bg-cream/90"
            >
              Get in Touch
            </Link>
          </PulseGlow>
        </section>
      </ScaleReveal>
    </>
  );
}
