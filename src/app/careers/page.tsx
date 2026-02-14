import type { Metadata } from "next";
import { Briefcase, DollarSign, Users, Mountain } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { CareersForm } from "./careers-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work at THE OP in Custer, South Dakota. $145K average base salary. No resumes — show us your work, tell us your story, book a meeting.",
  openGraph: {
    title: "Careers | THE OP",
    description:
      "Work at THE OP in Custer, South Dakota. $145K average base salary. No resumes required.",
  },
};

const philosophyCards = [
  {
    icon: Users,
    color: "amber" as const,
    title: "Small Teams, Big Impact",
    description:
      "2-3 people. Every person is critical. No middle management — you report directly to the founder.",
  },
  {
    icon: DollarSign,
    color: "espresso" as const,
    title: "$145K Average Base",
    description:
      "Above market because we want the best. You're not an employee — you're an operator running a company within our ecosystem.",
  },
  {
    icon: Briefcase,
    color: "amber" as const,
    title: "No Resumes",
    description:
      "Show us your work. Send a portfolio link, record a 60-90 second video, and book a time to talk. That's it.",
  },
  {
    icon: Mountain,
    color: "espresso" as const,
    title: "Black Hills Lifestyle",
    description:
      "Custer, South Dakota. Gateway to Custer State Park. Mountains, community, and a campus that's building something unprecedented.",
  },
];

const roles = [
  {
    title: "GM / Operator",
    salary: "$145K Average Base",
    description:
      "You run THE OP. Opening, closing, vendors, staff, menu curation, customer experience. You report to Luke. You ARE the person who makes this shop legendary in the Black Hills.",
  },
  {
    title: "Barista / Counter Lead",
    salary: "$145K Average Base",
    description:
      "Coffee, craft beer, sandwiches, merch. You're not making coffee — you're building a community landmark. Growing into a leadership role across the BHC ecosystem.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              Join the Team
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Work at THE OP
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-cream/70">
              We&apos;re hiring operators — people who run the show, not just
              fill shifts. THE OP pays franchise-CEO-level compensation because
              you&apos;re building a community landmark.
            </p>
            <div className="inline-flex flex-col rounded-2xl border border-amber/20 bg-amber/10 px-8 py-6">
              <div className="text-5xl font-bold text-amber">$145K</div>
              <div className="mt-1 text-sm font-medium text-amber/70">
                Average Base Salary
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {philosophyCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="rounded-xl border border-espresso/10 bg-white p-8">
                  <card.icon
                    className={`mb-4 h-8 w-8 ${
                      card.color === "amber" ? "text-amber" : "text-espresso"
                    }`}
                  />
                  <h3 className="mb-2 text-xl font-bold text-espresso">
                    {card.title}
                  </h3>
                  <p className="text-warm-gray">{card.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Roles */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-espresso">
              Open Positions — Year 1
            </h2>
          </FadeIn>
          <StaggerContainer className="space-y-6">
            {roles.map((role) => (
              <StaggerItem key={role.title}>
                <div className="rounded-xl border border-espresso/10 bg-cream-dark p-8">
                  <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-espresso">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-lg font-semibold text-amber">
                        {role.salary}
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 text-warm-gray">{role.description}</p>
                  <a
                    href="#apply"
                    className="inline-flex rounded-full bg-espresso px-6 py-2 text-sm font-semibold text-cream transition-colors hover:bg-espresso/90"
                  >
                    Apply Below
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <h2 className="mb-2 text-center text-3xl font-bold text-espresso">
              Apply to THE OP
            </h2>
            <p className="mb-12 text-center text-warm-gray">
              No resumes. No cover letters. Show us who you are.
            </p>
            <CareersForm />
          </FadeIn>
        </div>
      </section>

      {/* How We Sustain This */}
      <section className="bg-espresso px-6 py-16 text-cream">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="mb-4 text-center text-2xl font-bold">
              Venture-Backed, Not Bootstrapped
            </h2>
            <p className="text-center text-cream/70">
              THE OP is part of the Black Hills Consortium&apos;s $52M capital
              raise. Our compensation philosophy is backed by institutional
              investment — not revenue alone. We build for the long term.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BHC Ecosystem Note */}
      <section className="bg-cream-dark px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-warm-gray">
              THE OP is one of 11 companies in the Black Hills Consortium. Your
              work here feeds the flywheel — a thriving cafe drives campus foot
              traffic, foot traffic drives events, events drive investment,
              investment builds the community.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
