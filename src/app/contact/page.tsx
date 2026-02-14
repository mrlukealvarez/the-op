import type { Metadata } from "next";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, WarmGlow, ScaleReveal, AmberShimmer } from "@/components/motion";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit THE OP in Custer, South Dakota. Get directions, hours, and contact information.",
  openGraph: {
    title: "Contact | THE OP",
    description: "Visit THE OP in Custer, South Dakota. Get directions, hours, and contact information.",
  },
};

const infoCards = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["BHC Campus", "Custer, SD 57730", "Gateway to Custer State Park"],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: [
      "Mon-Fri: 8:00 AM - 6:00 PM",
      "Saturday: 8:00 AM - 6:00 PM",
      "Sunday: 9:00 AM - 5:00 PM",
    ],
  },
  {
    icon: Phone,
    title: "Contact",
    lines: ["hello@theop.cafe", "Opening 2026 — reach us by email"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@theop.cafe", "events@theop.cafe", "press@theop.cafe"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              Get in Touch
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Visit <AmberShimmer>THE OP</AmberShimmer>
            </h1>
            <p className="max-w-xl text-cream/70">
              We&apos;re on the BHC campus in Custer, South Dakota — right at the
              gateway to Custer State Park. Come say hello.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Info cards */}
      <section className="border-b border-espresso/10 bg-cream-dark px-6 py-12">
        <StaggerContainer className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card) => (
            <StaggerItem key={card.title}>
              <WarmGlow className="rounded-xl">
              <div className="rounded-xl border border-espresso/10 bg-white p-6">
                <card.icon className="mb-3 h-6 w-6 text-amber" />
                <h3 className="mb-2 font-semibold text-espresso">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-sm text-warm-gray">
                    {line}
                  </p>
                ))}
              </div>
              </WarmGlow>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Map placeholder + form */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          {/* Map placeholder */}
          <ScaleReveal>
            <div className="flex h-80 items-center justify-center rounded-2xl bg-espresso/5 lg:h-full">
              <div className="text-center">
                <MapPin className="mx-auto mb-3 h-10 w-10 text-warm-gray-light" />
                <p className="font-medium text-warm-gray">Map Coming Soon</p>
                <p className="mt-1 text-sm text-warm-gray-light">
                  Custer, SD 57730 — BHC Campus
                </p>
              </div>
            </div>
          </ScaleReveal>

          {/* Contact form */}
          <FadeIn delay={0.15}>
            <div>
              <h2 className="mb-2 text-2xl font-bold text-espresso">
                Send Us a Message
              </h2>
              <p className="mb-8 text-warm-gray">
                Questions about events, catering, careers, or just want to say
                hey? We&apos;d love to hear from you.
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="bg-espresso px-6 py-16 text-center text-cream">
        <ScaleReveal>
          <h2 className="mb-4 text-2xl font-bold">Work With Us</h2>
          <p className="mx-auto max-w-xl text-cream/60">
            THE OP is hiring operators — $145K average base salary, no resumes required.
          </p>
          <a
            href="/careers"
            className="mt-6 inline-flex rounded-full bg-amber px-8 py-3 font-semibold text-espresso transition-colors hover:bg-amber/90"
          >
            View Open Positions
          </a>
        </ScaleReveal>
      </section>
    </>
  );
}
