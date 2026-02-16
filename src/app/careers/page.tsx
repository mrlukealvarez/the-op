import type { Metadata } from "next";
import {
  Briefcase,
  DollarSign,
  Users,
  Mountain,
  Coffee,
  Heart,
  Shield,
  Laptop,
  Smartphone,
  Headphones,
  Shirt,
  TreePine,
  GraduationCap,
  Home,
  MapPin,
  Package,
  ShoppingBag,
  UserCheck,
  UtensilsCrossed,
  Clock,
  Sparkles,
  ArrowRight,
  Car,
  TrendingUp,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  CountUp,
  AmberShimmer,
  WarmGlow,
  ScaleReveal,
  PulseGlow,
  ParallaxSection,
} from "@/components/motion";
import { CareersForm } from "./careers-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work at THE OP in Custer, South Dakota. $145K minimum salary floor for every position. Coffee, community, and the Black Hills lifestyle.",
  openGraph: {
    title: "Careers | THE OP",
    description:
      "Work at THE OP in Custer, South Dakota. $145K minimum salary floor. No resumes required.",
  },
};

// ---------------------------------------------------------------------------
// Open Positions — 5 roles, $145K-$165K salary range
// ---------------------------------------------------------------------------

const positions = [
  {
    title: "Cafe Manager",
    salary: "$145K - $165K",
    type: "Full-Time",
    location: "Custer, SD",
    icon: Coffee,
    description:
      "Oversee daily operations at THE OP. Manage the team, maintain coffee program quality, handle inventory and supplier relationships, and ensure every customer leaves with a story. You are the person who makes this shop legendary in the Black Hills.",
  },
  {
    title: "Lead Barista",
    salary: "$145K - $155K",
    type: "Full-Time",
    location: "Custer, SD",
    icon: Sparkles,
    description:
      "Third-wave espresso, latte art, and an unmatched customer experience. Train new baristas, curate the rotating roster of Black Hills roasters, and set the standard for every drink that leaves the counter. This is craft, not just coffee.",
  },
  {
    title: "Merch Coordinator",
    salary: "$145K - $155K",
    type: "Full-Time",
    location: "Custer, SD",
    icon: ShoppingBag,
    description:
      "Curate BHC branded apparel, local artisan goods, and tourist souvenirs. Manage inventory, build relationships with local makers, and turn THE OP merch counter into the most talked-about gift shop in the Black Hills.",
  },
  {
    title: "Campus Host",
    salary: "$145K - $150K",
    type: "Full-Time",
    location: "Custer, SD",
    icon: UserCheck,
    description:
      "Welcome every visitor to the Grow Campus. Manage the drive-through window, lead investor tour experiences, and serve as the community ambassador. You are the first face people see and the reason they come back.",
  },
  {
    title: "Prep Cook",
    salary: "$145K - $150K",
    type: "Full-Time",
    location: "Custer, SD",
    icon: UtensilsCrossed,
    description:
      "Daily prep for counter service items, baked goods sourcing, and local supplier coordination. Work with Black Hills farms and bakeries to keep the menu fresh, seasonal, and unmistakably local.",
  },
];

// ---------------------------------------------------------------------------
// Benefits — adapted from benefits-data.ts for campus/cafe roles
// ---------------------------------------------------------------------------

const benefitCategories = [
  {
    category: "Insurance & Retirement",
    items: [
      {
        icon: Heart,
        title: "Health/Dental/Vision",
        description:
          "Family coverage, 100% employer-paid PPO. No deductible games. Mental health coverage included.",
      },
      {
        icon: Shield,
        title: "Life & Disability",
        description:
          "Group life plus short-term and long-term disability insurance included from day one.",
      },
      {
        icon: DollarSign,
        title: "401(k) with 4% Match",
        description:
          "Vested immediately. No cliff. Start building wealth the same week you start pulling espresso.",
      },
    ],
  },
  {
    category: "Hardware & Tools",
    items: [
      {
        icon: Laptop,
        title: "MacBook Pro",
        description:
          "Latest model, refreshed on a 3-year cycle. For scheduling, inventory, and campus comms.",
      },
      {
        icon: Smartphone,
        title: "iPhone + AirPods Pro",
        description:
          "Company-owned iPhone and AirPods Pro. Stay connected across the campus.",
      },
      {
        icon: Headphones,
        title: "Full Apple Ecosystem",
        description:
          "iPad Pro and Apple Watch included. All devices provided and maintained.",
      },
    ],
  },
  {
    category: "Perks & Lifestyle",
    items: [
      {
        icon: Coffee,
        title: "Daily Meal & Drink Credit",
        description:
          "Free coffee, lunch, and Kokada snacks every shift. You never pay for a meal on campus.",
      },
      {
        icon: Shirt,
        title: "And Collar Wardrobe",
        description:
          "$500/yr premium branded athleisure. You are a walking brand ambassador.",
      },
      {
        icon: TreePine,
        title: "State & National Park Passes",
        description:
          "Family passes to Custer State Park, Mount Rushmore, Crazy Horse, and regional attractions.",
      },
      {
        icon: Mountain,
        title: "VIP Tourism Access",
        description:
          "Deadwood, Sturgis, and Black Hills adventures. This is your backyard.",
      },
      {
        icon: Car,
        title: "$1,500/mo Car Allowance",
        description:
          "Field reps and campus roles get a monthly vehicle stipend. Drive the Black Hills on us.",
      },
    ],
  },
  {
    category: "Housing & Education",
    items: [
      {
        icon: Home,
        title: "Campus Housing Available",
        description:
          "Pass Creek housing at internal transfer pricing. Relocation assistance for out-of-state hires.",
      },
      {
        icon: GraduationCap,
        title: "Seed Academy Access",
        description:
          "Free tuition for your children. AI fluency, entrepreneurship, and leadership curriculum.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Day 1 Kit — what arrives on your first day
// ---------------------------------------------------------------------------

const dayOneItems = [
  {
    icon: Laptop,
    title: "MacBook Pro",
    description: "Latest model, configured and ready for your first shift",
  },
  {
    icon: Headphones,
    title: "AirPods Pro",
    description: "For campus comms, music during prep, and podcast listening",
  },
  {
    icon: Shirt,
    title: "THE OP Branded Gear",
    description: "Premium And Collar wardrobe package with THE OP branding",
  },
  {
    icon: Package,
    title: "Welcome Package",
    description:
      "Kokada snacks, local coffee sampler, park passes, and BHC swag",
  },
  {
    icon: MapPin,
    title: "Campus Tour",
    description:
      "Walk the 15-acre Grow Campus, meet the BHC team, and see what you are part of",
  },
  {
    icon: Coffee,
    title: "First Cup On Us",
    description:
      "Pull your first espresso shot, mark your name on the wall, and join the family",
  },
];

// ---------------------------------------------------------------------------
// Culture highlights
// ---------------------------------------------------------------------------

const culturePoints = [
  {
    title: "Tourist Gateway",
    description:
      "2M+ visitors pass the Grow Campus via Custer State Park every year. You are the face of the Black Hills for thousands of tourists.",
  },
  {
    title: "Evening Monopoly",
    description:
      "THE OP is the ONLY cafe open after 6:30pm in Custer. Zero competition in the evening window. You own the night.",
  },
  {
    title: "Zero-Rent Advantage",
    description:
      "Campus-owned real estate means 15-20% margin advantage over every competitor. That margin funds your salary.",
  },
  {
    title: "Black Hills Lifestyle",
    description:
      "Mountains, clean air, low cost of living, and a community that knows your name. This is not a job. It is a life upgrade.",
  },
  {
    title: "GrowWise POS Live Demo",
    description:
      "Every coffee order runs through GrowWise. Visiting investors watch the platform in action while you serve them espresso.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-espresso px-6 py-24 text-cream md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-espresso-light/30 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber">
              5 Open Positions
            </p>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Work at <AmberShimmer>THE OP</AmberShimmer>
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-cream/70">
              We&apos;re hiring operators — people who run the show, not just
              fill shifts. THE OP pays franchise-CEO-level compensation because
              you&apos;re building a community landmark in the heart of the
              Black Hills.
            </p>
            <div className="flex flex-wrap items-end gap-8">
              <div className="rounded-2xl border border-amber/20 bg-amber/10 px-8 py-6">
                <CountUp
                  end={145}
                  prefix="$"
                  suffix="K+"
                  className="text-5xl font-bold text-amber"
                />
                <div className="mt-1 text-sm font-medium text-amber/70">
                  Minimum Salary Floor
                </div>
              </div>
              <a
                href="#apply"
                className="inline-flex rounded-full bg-amber px-8 py-3 font-semibold text-espresso transition-colors hover:bg-amber-dark"
              >
                Apply Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cost-of-Living Comparison */}
      <section className="bg-amber/5 px-6 py-12 border-y border-amber/20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber/10">
                  <TrendingUp className="h-7 w-7 text-amber" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-espresso">
                    $145K here = $210K+ in Denver or Austin
                  </h3>
                  <p className="mt-1 text-warm-gray">
                    Median home price in Custer: <span className="font-semibold text-espresso">$285K</span> vs{" "}
                    <span className="font-semibold text-espresso">$550K+</span> in major tech hubs.
                    Your dollar goes further. Your quality of life goes through the roof.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 gap-4 text-center">
                <div className="rounded-xl border border-amber/20 bg-white px-5 py-3">
                  <div className="text-2xl font-bold text-amber">45%</div>
                  <div className="text-xs text-warm-gray">Lower cost<br />of living</div>
                </div>
                <div className="rounded-xl border border-amber/20 bg-white px-5 py-3">
                  <div className="text-2xl font-bold text-amber">0</div>
                  <div className="text-xs text-warm-gray">State income<br />tax</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                color: "amber" as const,
                title: "Small Teams, Big Impact",
                description:
                  "3 people Year 1. Every person is critical. No middle management — you report directly to the founder.",
              },
              {
                icon: DollarSign,
                color: "espresso" as const,
                title: "$145K Minimum",
                description:
                  "Barista to CEO, everyone starts at $145K. Above market because we want the best people in the Black Hills.",
              },
              {
                icon: Briefcase,
                color: "amber" as const,
                title: "No Resumes",
                description:
                  "Show us your work. Send a portfolio link, record a 60-90 second video, and book a time to talk.",
              },
              {
                icon: Mountain,
                color: "espresso" as const,
                title: "Black Hills Lifestyle",
                description:
                  "Custer, South Dakota. Gateway to Custer State Park. Mountains, community, and a 15-acre campus.",
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <WarmGlow className="rounded-xl">
                  <div className="rounded-xl border border-espresso/10 bg-white p-8 h-full">
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
                </WarmGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="mb-4 text-center text-3xl font-bold text-espresso">
              Open Positions
            </h2>
            <p className="mb-12 text-center text-warm-gray">
              Every role starts at $145K+. Full benefits from day one. No
              exceptions.
            </p>
          </FadeIn>
          <StaggerContainer className="space-y-6">
            {positions.map((position) => (
              <StaggerItem key={position.title}>
                <PulseGlow className="rounded-xl">
                  <div className="rounded-xl border border-espresso/10 bg-cream-dark p-8">
                    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber/10">
                          <position.icon className="h-6 w-6 text-amber" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-espresso">
                            {position.title}
                          </h3>
                          <div className="mt-1 flex flex-wrap gap-2">
                            <span className="inline-flex rounded-full bg-amber/10 px-3 py-0.5 text-sm font-semibold text-amber">
                              {position.salary}
                            </span>
                            <span className="inline-flex rounded-full border border-espresso/10 px-3 py-0.5 text-sm text-warm-gray">
                              {position.type}
                            </span>
                            <span className="inline-flex items-center rounded-full border border-espresso/10 px-3 py-0.5 text-sm text-warm-gray">
                              <MapPin className="mr-1 h-3 w-3" />
                              {position.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#apply"
                        className="inline-flex shrink-0 rounded-full bg-espresso px-6 py-2 text-sm font-semibold text-cream transition-colors hover:bg-espresso/90"
                      >
                        Apply Below
                      </a>
                    </div>
                    <p className="text-warm-gray">{position.description}</p>
                  </div>
                </PulseGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Day 1 Kit */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              Day 1
            </p>
            <h2 className="mb-4 text-3xl font-bold text-espresso">
              Your First Day at <AmberShimmer>THE OP</AmberShimmer>
            </h2>
            <p className="mx-auto max-w-xl text-warm-gray">
              No waiting for equipment. No hunting for logins. You walk in ready
              to work from day one.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dayOneItems.map((item) => (
              <StaggerItem key={item.title}>
                <WarmGlow className="rounded-xl">
                  <div className="rounded-xl border border-espresso/10 bg-white p-6 h-full">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10">
                      <item.icon className="h-5 w-5 text-amber" />
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-espresso">
                      {item.title}
                    </h3>
                    <p className="text-sm text-warm-gray">
                      {item.description}
                    </p>
                  </div>
                </WarmGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Deep-Dive */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-espresso">
              Benefits
            </h2>
            <p className="mx-auto max-w-2xl text-warm-gray">
              Every full-time role gets $145K+ salary, full Apple kit, premium
              healthcare, and perks designed for the Black Hills lifestyle.
            </p>
          </FadeIn>

          <div className="space-y-12">
            {benefitCategories.map((cat) => (
              <div key={cat.category}>
                <FadeIn>
                  <h3 className="mb-4 text-lg font-semibold text-amber">
                    {cat.category}
                  </h3>
                </FadeIn>
                <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((benefit) => (
                    <StaggerItem key={benefit.title}>
                      <WarmGlow className="rounded-xl">
                        <div className="rounded-xl border border-espresso/10 bg-cream-dark p-6 h-full">
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10">
                            <benefit.icon className="h-5 w-5 text-amber" />
                          </div>
                          <h4 className="mb-1 text-lg font-bold text-espresso">
                            {benefit.title}
                          </h4>
                          <p className="text-sm text-warm-gray">
                            {benefit.description}
                          </p>
                        </div>
                      </WarmGlow>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <ParallaxSection className="bg-espresso px-6 py-24 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-16">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              The Culture
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why <AmberShimmer>THE OP</AmberShimmer> Is Different
            </h2>
            <p className="max-w-2xl text-cream/70">
              This is not a barista job. This is an operator role at a
              venture-backed campus company with a $145K salary floor and a view
              of the Black Hills from your break room.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {culturePoints.map((point, i) => (
              <ScaleReveal key={point.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-xl border border-cream/10 bg-cream/5 p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber/10">
                    <ArrowRight className="h-4 w-4 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm text-cream/60">
                      {point.description}
                    </p>
                  </div>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Application Form */}
      <section id="apply" className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <ScaleReveal>
            <h2 className="mb-2 text-center text-3xl font-bold text-espresso">
              Apply to THE OP
            </h2>
            <p className="mb-12 text-center text-warm-gray">
              No resumes. No cover letters. Show us who you are.
            </p>
            <CareersForm />

            <div className="mt-8 text-center">
              <p className="text-sm text-warm-gray">
                Or email us directly at{" "}
                <a
                  href="mailto:careers@theopcuster.com"
                  className="font-semibold text-amber underline-offset-2 hover:underline"
                >
                  careers@theopcuster.com
                </a>
              </p>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* Venture-Backed */}
      <section className="bg-espresso px-6 py-16 text-cream">
        <div className="mx-auto max-w-3xl">
          <ScaleReveal>
            <h2 className="mb-4 text-center text-2xl font-bold">
              Venture-Backed, Not Bootstrapped
            </h2>
            <p className="text-center text-cream/70">
              THE OP is part of the Black Hills Consortium&apos;s $52M capital
              raise. Our compensation philosophy is backed by institutional
              investment — not revenue alone. We build for the long term.
            </p>
          </ScaleReveal>
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
