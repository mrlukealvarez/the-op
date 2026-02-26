import type { Metadata } from "next";
import {
  Briefcase,
  DollarSign,
  Mountain,
  Coffee,
  Heart,
  Shield,
  Shirt,
  TreePine,
  GraduationCap,
  Home,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Car,
  TrendingUp,
  Bot,
  CalendarClock,
  Wifi,
  Laptop,
  Star,
  CheckCircle,
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
    "THE OP is coming to Custer, SD. When the cafe opens, we hire. General Manager at $145K+, baristas at competitive local wages, and perks nobody else in the Black Hills can match.",
  openGraph: {
    title: "Careers | THE OP",
    description:
      "Doors open, then we hire. The best-paid cafe team in South Dakota is forming.",
  },
};

const currentTeam = [
  {
    name: "Luke Alvarez",
    role: "Concept, Menu & Branding",
    hours: "1-2 hrs/week",
    icon: Star,
    description:
      "Strategic direction: vendor selection, brand standards, investor tour experience design, menu pricing, and FlowBot POS configuration.",
  },
  {
    name: "Ryan",
    role: "Buildout Coordination",
    hours: "2-4 hrs/week",
    icon: Briefcase,
    description:
      "Contractor management, interior design oversight, equipment sourcing, and construction timeline coordination for the Grow Campus cafe space.",
  },
  {
    name: "Barista Bot (AI)",
    role: "Pre-Launch Operations",
    hours: "Always on",
    icon: Bot,
    description:
      "Vendor research, menu planning, competitive analysis, financial modeling, inventory planning simulations, and social media content.",
  },
];

const futureRoles = [
  {
    title: "General Manager",
    salary: "$145K - $165K",
    type: "Full-Time",
    location: "Custer, SD",
    icon: Coffee,
    trigger: "30 days before cafe opening",
    perksLevel: "Full founding package",
    description:
      "Run daily operations, hire and train baristas, manage inventory and supplier relationships, build community, and serve as the face of THE OP. You report directly to the founder. Your Starbucks counterpart makes $55K. You make $145K+, drive a Tesla, and own equity.",
  },
  {
    title: "Head Barista",
    salary: "$35K - $45K",
    type: "Full-Time / Flexible",
    location: "Custer, SD",
    icon: Sparkles,
    trigger: "2-4 weeks before opening day",
    perksLevel: "Partial perks",
    description:
      "Third-wave espresso, dirty sodas, local beer on tap. Set the quality standard for every drink. Competitive pay for the Black Hills market, plus park passes, free coffee, and employee discounts across all BHC entities.",
  },
  {
    title: "Barista",
    salary: "$30K - $40K",
    type: "Part-Time",
    location: "Custer, SD",
    icon: Coffee,
    trigger: "2-4 weeks before opening day",
    perksLevel: "Partial perks",
    description:
      "Counter service, drink prep, merch sales, drive-through window. We train the right personality. Friendly, outgoing, and ready to make tourists feel like locals. 2-3 positions available at launch.",
  },
];

const gmPerks = [
  {
    icon: Car,
    title: "Tesla Model Y Performance",
    value: "$750/mo lease",
    description: "Company-provided vehicle. Drive the Black Hills in style.",
  },
  {
    icon: Wifi,
    title: "Starlink Mini",
    value: "$150/mo",
    description: "High-speed internet wherever you are in the Hills.",
  },
  {
    icon: TreePine,
    title: "National Park Annual Pass",
    value: "$80/yr",
    description: "Access to every national park in the country.",
  },
  {
    icon: Mountain,
    title: "SD + WY State Park Passes",
    value: "$65/yr",
    description: "Custer State Park, Devils Tower, and beyond.",
  },
  {
    icon: Shirt,
    title: "Clothing Allowance",
    value: "$2,500/yr",
    description: "Premium branded wardrobe. You are a walking ambassador.",
  },
  {
    icon: Laptop,
    title: "Mac Workstation",
    value: "$2,500",
    description: "For scheduling, inventory, POS management, and Barista Bot.",
  },
  {
    icon: Bot,
    title: "Claude Max",
    value: "$200/mo",
    description: "AI tools for inventory, reporting, and menu optimization.",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    value: "$1,000/mo",
    description: "ICHRA or small group plan. Employer-funded from day one.",
  },
  {
    icon: Shield,
    title: "Founding Equity",
    value: "4-year vest",
    description: "Own a piece of the company you are building.",
  },
  {
    icon: CalendarClock,
    title: "Unlimited PTO",
    value: "Take what you need",
    description: "Results matter, not hours logged. We trust our people.",
  },
  {
    icon: Home,
    title: "Relocation Stipend",
    value: "$10,000",
    description: "Moving to the Black Hills? We cover the transition.",
  },
];

const baristaPerks = [
  {
    icon: TreePine,
    title: "National Park Annual Pass",
    description: "Every national park in the country, on us.",
  },
  {
    icon: Mountain,
    title: "SD + WY State Park Passes",
    description: "Custer State Park, Crazy Horse, and more.",
  },
  {
    icon: Coffee,
    title: "Free Coffee + Merch",
    description: "Never pay for coffee. Employee merch included.",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Available for full-time barista positions.",
  },
  {
    icon: DollarSign,
    title: "BHC Entity Discounts",
    description: "Employee discount at all 13 BHC entities.",
  },
  {
    icon: GraduationCap,
    title: "Seed Academy Access",
    description: "Free tech skills training and AI fluency courses.",
  },
];

const culturePoints = [
  {
    title: "Evening Monopoly",
    description:
      "THE OP is the ONLY cafe open after 6:30pm in Custer. Zero competition in the evening window. You own the night.",
  },
  {
    title: "Zero-Rent Advantage",
    description:
      "Campus-owned real estate means 15-20% margin advantage over every competitor. That margin funds your compensation.",
  },
  {
    title: "Tourist Gateway",
    description:
      "2M+ visitors pass the Grow Campus via Custer State Park every year. You are the face of the Black Hills for thousands of tourists.",
  },
  {
    title: "Black Hills Lifestyle",
    description:
      "Mountains, clean air, low cost of living, and a community that knows your name. This is not a job. It is a life upgrade.",
  },
  {
    title: "FlowBot POS Live Demo",
    description:
      "Every coffee order runs through FlowBot. Visiting investors watch the platform in action while you serve them espresso.",
  },
];

const phases = [
  {
    phase: "Phase 1",
    label: "Pre-Opening (Now)",
    detail:
      "Luke handles buildout oversight, menu design, and supplier contracts. Barista Bot runs pre-launch simulations. Zero payroll.",
    icon: Bot,
  },
  {
    phase: "Phase 2",
    label: "Construction Complete",
    detail:
      "General Manager hired 30 days before doors open. GM assists with final setup, equipment testing, staff training, and soft opening.",
    icon: Briefcase,
  },
  {
    phase: "Phase 3",
    label: "Doors Open",
    detail:
      "Baristas hired 2-4 weeks before opening day. Revenue from Day 1 funds payroll. Break-even by Month 5-6 of operations.",
    icon: Coffee,
  },
];

const industryComp = [
  { label: "Starbucks Store Manager", value: "$55K" },
  { label: "Local Cafe Manager (SD)", value: "$42K" },
  { label: "Peet's Store Manager", value: "$52K" },
  { label: "Dutch Bros Manager", value: "$48K" },
];

const opComp = [
  { label: "Base Salary", value: "$145K - $165K" },
  { label: "Tesla Model Y Lease", value: "$750/mo" },
  { label: "Founding Equity", value: "4-year vest" },
  { label: "Health Insurance", value: "$1,000/mo" },
  { label: "Unlimited PTO", value: "Included" },
  { label: "Relocation Stipend", value: "$10,000" },
];

const botCapabilities = [
  "Menu optimization (daily sales analysis)",
  "Inventory forecasting (predictive reorders)",
  "Dynamic pricing (daypart adjustments)",
  "Loyalty engine (personalized rewards)",
  "Financial reporting (auto-generated P&L)",
  "Social media content scheduling",
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
              Doors Open, Then We Hire
            </p>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              The Cafe Is <AmberShimmer>Coming</AmberShimmer>
            </h1>
            <p className="mb-4 max-w-2xl text-lg leading-relaxed text-cream/70">
              THE OP opens when the Grow Campus opens. Until then, AI runs the
              planning. When the doors open, we build the best-paid cafe team in
              South Dakota.
            </p>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-cream/50">
              We&apos;re designing the cafe before we pour the first cup. No
              staff until doors open — that&apos;s the model.
            </p>
            <div className="flex flex-wrap items-end gap-6">
              <div className="rounded-2xl border border-amber/20 bg-amber/10 px-8 py-6">
                <CountUp
                  end={145}
                  prefix="$"
                  suffix="K+"
                  className="text-5xl font-bold text-amber"
                />
                <div className="mt-1 text-sm font-medium text-amber/70">
                  GM Salary Floor
                </div>
              </div>
              <div className="rounded-2xl border border-cream/10 bg-cream/5 px-8 py-6">
                <div className="text-5xl font-bold text-cream">0</div>
                <div className="mt-1 text-sm font-medium text-cream/50">
                  Staff Until Doors Open
                </div>
              </div>
              <a
                href="#waitlist"
                className="inline-flex rounded-full bg-amber px-8 py-3 font-semibold text-espresso transition-colors hover:bg-amber-dark"
              >
                Join the Waitlist
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SD Tax Advantage */}
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
                    $145K in Custer = $190K+ in San Francisco
                  </h3>
                  <p className="mt-1 text-warm-gray">
                    Zero state income tax in South Dakota. Median home price in
                    Custer:{" "}
                    <span className="font-semibold text-espresso">$285K</span>{" "}
                    vs{" "}
                    <span className="font-semibold text-espresso">$1.3M+</span>{" "}
                    in SF.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 gap-4 text-center">
                <div className="rounded-xl border border-amber/20 bg-white px-5 py-3">
                  <div className="text-2xl font-bold text-amber">0%</div>
                  <div className="text-xs text-warm-gray">
                    State income
                    <br />
                    tax
                  </div>
                </div>
                <div className="rounded-xl border border-amber/20 bg-white px-5 py-3">
                  <div className="text-2xl font-bold text-amber">30%</div>
                  <div className="text-xs text-warm-gray">
                    Below national
                    <br />
                    cost of living
                  </div>
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
            {(
              [
                {
                  icon: CalendarClock,
                  color: "amber",
                  title: "Doors Open, Then Hire",
                  description:
                    "No staff until the physical cafe exists. Revenue from Day 1 funds payroll. Zero pre-opening burn.",
                },
                {
                  icon: DollarSign,
                  color: "espresso",
                  title: "The $145K Cafe Manager",
                  description:
                    "Your local Starbucks manager makes $55K. Our GM makes $145K+, drives a Tesla, and owns equity in a $52M-backed company.",
                },
                {
                  icon: Bot,
                  color: "amber",
                  title: "AI Handles Spreadsheets",
                  description:
                    "Barista Bot runs inventory, forecasting, and reports. Humans make the coffee. The best of both worlds.",
                },
                {
                  icon: Mountain,
                  color: "espresso",
                  title: "Black Hills Lifestyle",
                  description:
                    "Custer, South Dakota. Gateway to Custer State Park. Mountains, community, and a 15-acre campus.",
                },
              ] as const
            ).map((card) => (
              <StaggerItem key={card.title}>
                <WarmGlow className="rounded-xl">
                  <div className="rounded-xl border border-espresso/10 bg-white p-8 h-full">
                    <card.icon
                      className={`mb-4 h-8 w-8 ${card.color === "amber" ? "text-amber" : "text-espresso"}`}
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

      {/* Current Operating Model */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              Right Now
            </p>
            <h2 className="mb-4 text-3xl font-bold text-espresso">
              How THE OP Operates Today
            </h2>
            <p className="mb-12 text-warm-gray">
              THE OP opens when the campus opens. No staff until doors open. Two
              founders and an AI handle everything pre-launch — vendor research,
              menu planning, buildout coordination, and social media.
            </p>
          </FadeIn>
          <StaggerContainer className="space-y-6">
            {currentTeam.map((m) => (
              <StaggerItem key={m.name}>
                <div className="flex gap-4 rounded-xl border border-espresso/10 bg-cream-dark p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber/10">
                    <m.icon className="h-6 w-6 text-amber" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="text-xl font-bold text-espresso">
                        {m.name}
                      </h3>
                      <span className="text-sm text-warm-gray">{m.role}</span>
                    </div>
                    <span className="mt-1 mb-2 inline-flex rounded-full bg-amber/10 px-3 py-0.5 text-xs font-semibold text-amber">
                      {m.hours}
                    </span>
                    <p className="text-sm text-warm-gray">{m.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Doors Open, Then Hire Explainer */}
      <ParallaxSection className="bg-espresso px-6 py-24 text-cream">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              The Model
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Doors Open, <AmberShimmer>Then Hire</AmberShimmer>
            </h2>
            <p className="mb-12 max-w-2xl text-cream/70">
              Unlike tech roles that can start remote, cafe positions require a
              physical space. You cannot pour espresso into a Zoom call. THE OP
              follows a strict sequence: build first, hire second, serve
              customers from Day 1.
            </p>
          </FadeIn>
          <StaggerContainer className="space-y-4">
            {phases.map((step, i) => (
              <ScaleReveal key={step.phase} delay={i * 0.1}>
                <div className="flex gap-4 rounded-xl border border-cream/10 bg-cream/5 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber/10">
                    <step.icon className="h-5 w-5 text-amber" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber">
                        {step.phase}
                      </span>
                      <h3 className="font-semibold text-cream">{step.label}</h3>
                    </div>
                    <p className="mt-1 text-sm text-cream/60">{step.detail}</p>
                  </div>
                </div>
              </ScaleReveal>
            ))}
          </StaggerContainer>
          <FadeIn>
            <div className="mt-12 rounded-xl border border-amber/20 bg-amber/10 p-6">
              <h3 className="mb-2 font-bold text-amber">
                Why this works for investors
              </h3>
              <p className="text-sm text-cream/70">
                Traditional cafes hire 5-8 people before generating a dollar of
                revenue. THE OP opens profitable, stays profitable, and scales
                headcount only when transaction volume demands it. Pre-opening
                payroll burn: $0. Break-even: Month 5-6. Year 1 net income:
                $18K.
              </p>
            </div>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Future Roles */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              When the Doors Open
            </p>
            <h2 className="mb-4 text-3xl font-bold text-espresso">
              Future Roles
            </h2>
            <p className="mb-12 text-warm-gray">
              These positions activate when the cafe build-out is complete and
              permits are approved. Not before. Get on the waitlist and
              we&apos;ll contact you when hiring begins.
            </p>
          </FadeIn>
          <StaggerContainer className="space-y-6">
            {futureRoles.map((role) => (
              <StaggerItem key={role.title}>
                <PulseGlow className="rounded-xl">
                  <div className="rounded-xl border border-espresso/10 bg-cream-dark p-8">
                    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber/10">
                          <role.icon className="h-6 w-6 text-amber" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-espresso">
                            {role.title}
                          </h3>
                          <div className="mt-1 flex flex-wrap gap-2">
                            <span className="inline-flex rounded-full bg-amber/10 px-3 py-0.5 text-sm font-semibold text-amber">
                              {role.salary}
                            </span>
                            <span className="inline-flex rounded-full border border-espresso/10 px-3 py-0.5 text-sm text-warm-gray">
                              {role.type}
                            </span>
                            <span className="inline-flex items-center rounded-full border border-espresso/10 px-3 py-0.5 text-sm text-warm-gray">
                              <MapPin className="mr-1 h-3 w-3" />
                              {role.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-2">
                        <span className="inline-flex items-center rounded-full bg-espresso/10 px-3 py-0.5 text-xs font-medium text-espresso">
                          <Clock className="mr-1 h-3 w-3" />
                          {role.trigger}
                        </span>
                        <span className="text-xs text-warm-gray">
                          {role.perksLevel}
                        </span>
                      </div>
                    </div>
                    <p className="text-warm-gray">{role.description}</p>
                  </div>
                </PulseGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The $145K Cafe Manager */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              The Hook
            </p>
            <h2 className="mb-6 text-3xl font-bold text-espresso">
              Why a Cafe Manager Gets <AmberShimmer>$145K</AmberShimmer>
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-xl border border-espresso/10 bg-white p-8">
                <h3 className="mb-4 text-lg font-bold text-espresso">
                  Industry Standard
                </h3>
                <div className="space-y-3">
                  {industryComp.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border-b border-espresso/5 pb-2"
                    >
                      <span className="text-warm-gray">{item.label}</span>
                      <span className="font-semibold text-espresso">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="rounded-xl border border-amber/30 bg-amber/5 p-8">
                <h3 className="mb-4 text-lg font-bold text-amber">
                  THE OP General Manager
                </h3>
                <div className="space-y-3">
                  {opComp.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border-b border-amber/10 pb-2"
                    >
                      <span className="text-warm-gray">{item.label}</span>
                      <span className="font-semibold text-espresso">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <p className="mt-8 rounded-xl border border-espresso/10 bg-white p-6 text-warm-gray">
              The person running your daily experience deserves executive
              compensation. Our GM runs a profit center on a venture-backed
              campus, manages a team, owns equity, and serves as the first face
              investors see when they visit. That is not a shift manager job.
              That is a founding operator role.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* GM Perks */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              General Manager
            </p>
            <h2 className="mb-4 text-3xl font-bold text-espresso">
              Full Founding <AmberShimmer>Perks Package</AmberShimmer>
            </h2>
            <p className="mx-auto max-w-2xl text-warm-gray">
              The GM gets the same founding-level perks as every BHC executive.
              Tesla, health insurance, equity, unlimited PTO, and more.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gmPerks.map((perk) => (
              <StaggerItem key={perk.title}>
                <WarmGlow className="rounded-xl">
                  <div className="rounded-xl border border-espresso/10 bg-cream-dark p-6 h-full">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10">
                        <perk.icon className="h-5 w-5 text-amber" />
                      </div>
                      <span className="text-xs font-semibold text-amber">
                        {perk.value}
                      </span>
                    </div>
                    <h4 className="mb-1 text-lg font-bold text-espresso">
                      {perk.title}
                    </h4>
                    <p className="text-sm text-warm-gray">{perk.description}</p>
                  </div>
                </WarmGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Barista Perks */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              Barista Team
            </p>
            <h2 className="mb-4 text-3xl font-bold text-espresso">
              Barista Perks
            </h2>
            <p className="mx-auto max-w-2xl text-warm-gray">
              Barista roles are part-time local positions at competitive Black
              Hills wages ($30K-$45K). They are the one exception to the $145K
              founding floor — but the perks still beat anything else in Custer.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {baristaPerks.map((perk) => (
              <StaggerItem key={perk.title}>
                <WarmGlow className="rounded-xl">
                  <div className="rounded-xl border border-espresso/10 bg-white p-6 h-full">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10">
                      <perk.icon className="h-5 w-5 text-amber" />
                    </div>
                    <h4 className="mb-1 text-lg font-bold text-espresso">
                      {perk.title}
                    </h4>
                    <p className="text-sm text-warm-gray">{perk.description}</p>
                  </div>
                </WarmGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Barista Bot */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="flex gap-4 rounded-xl border border-espresso/10 bg-cream-dark p-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber/10">
                <Bot className="h-7 w-7 text-amber" />
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-bold text-espresso">
                  Barista Bot: AI That Runs the Back Office
                </h2>
                <p className="mb-4 text-warm-gray">
                  AI handles the spreadsheets. Humans make the coffee. Barista
                  Bot saves 9 hours per week on inventory, pricing, reporting,
                  and menu optimization — the equivalent of 0.25 FTE. One GM
                  plus Barista Bot produces the output of a 3-person management
                  team.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {botCapabilities.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                      <span className="text-sm text-warm-gray">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Culture */}
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
              This is not a barista job at a chain. This is a founding team role
              at a venture-backed campus company with views of the Black Hills
              from the patio.
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
                    <h3 className="font-semibold text-cream">{point.title}</h3>
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

      {/* Waitlist Form */}
      <section id="waitlist" className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <ScaleReveal>
            <h2 className="mb-2 text-center text-3xl font-bold text-espresso">
              Get on the List
            </h2>
            <p className="mb-12 text-center text-warm-gray">
              When the doors open, we&apos;ll need you. Join the waitlist and be
              first to know when hiring begins.
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
              raise across 13 companies. Our compensation philosophy is backed
              by institutional investment — not revenue guesses. We pay cafe
              operators like executives because that is what they are.
            </p>
          </ScaleReveal>
        </div>
      </section>

      {/* BHC Ecosystem */}
      <section className="bg-cream-dark px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-warm-gray">
              THE OP is one of 13 companies in the Black Hills Consortium. Your
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
