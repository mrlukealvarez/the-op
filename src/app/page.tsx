import Link from "next/link";
import {
  Coffee,
  MapPin,
  Users,
  TrendingUp,
  Leaf,
  Building,
  Calendar,
  Heart,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, SlideIn } from "@/components/motion";

const stats = [
  { label: "Annual Park Visitors", value: "2M+", icon: MapPin },
  { label: "Year 1 Revenue Target", value: "$600K", icon: TrendingUp },
  { label: "Cannabis Cafes in SD", value: "Zero", icon: Coffee },
  { label: "BHC Campus Entities", value: "11", icon: Building },
];

const features = [
  {
    icon: Coffee,
    title: "Craft Coffee & More",
    description:
      "Locally roasted beans, specialty espresso, CBD-infused beverages, and house-baked pastries. Every cup tells a Black Hills story.",
  },
  {
    icon: Calendar,
    title: "Events & Culture",
    description:
      "Open mic nights, trivia, live Outpost Media recordings, and THE CULT pre-events. Something happening every night of the week.",
  },
  {
    icon: Users,
    title: "Community Hub",
    description:
      "The living room of the BHC campus. Remote workers, students, locals, and tourists all find their place here.",
  },
  {
    icon: Leaf,
    title: "Cannabis Forward",
    description:
      "Pioneering South Dakota's first cannabis cafe experience. Amsterdam-inspired vibes with Black Hills hospitality.",
  },
];

const whyItems = [
  {
    icon: Building,
    title: "Zero Rent, Maximum Margin",
    description:
      "Owned real estate on the BHC campus means 15-20% margin advantage over every competitor paying Rapid City commercial rates.",
  },
  {
    icon: MapPin,
    title: "Gateway to 14.9M Tourists",
    description:
      "Custer sits between Mount Rushmore, Crazy Horse, and Custer State Park. Captive foot traffic year-round.",
  },
  {
    icon: Heart,
    title: "The BHC Flywheel",
    description:
      "Every BHC entity drives traffic to THE OP. GrowWise employees, Outpost Media crews, Seed Academy students, and Settle the West relocates all converge here.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-espresso px-6 py-28 text-cream md:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-espresso-light/30 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber">
              Custer, South Dakota
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Where the Black Hills
              <br />
              <span className="text-amber">Come Together</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-cream/70">
              Amsterdam-style coffee shop meets Black Hills hospitality. Craft
              coffee, cannabis culture, and community — all under one roof on the
              BHC campus.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="rounded-full bg-amber px-8 py-3 font-semibold text-espresso transition-colors hover:bg-amber-dark"
              >
                View Menu
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-cream/30 px-8 py-3 font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
              >
                Visit Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-espresso/10 bg-cream-dark px-6 py-12">
        <StaggerContainer className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-espresso/10">
                  <stat.icon className="h-6 w-6 text-espresso" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-espresso">{stat.value}</p>
                  <p className="text-sm text-warm-gray">{stat.label}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Features */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-espresso md:text-4xl">
              More Than a Cafe
            </h2>
            <p className="mx-auto max-w-2xl text-warm-gray">
              THE OP is the beating heart of the Black Hills Consortium campus — a
              place where coffee, culture, cannabis, and community converge.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="rounded-2xl border border-espresso/10 bg-white p-8 transition-shadow hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cannabis-green/10">
                    <feature.icon className="h-6 w-6 text-cannabis-green" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-espresso">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-warm-gray">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why THE OP */}
      <section className="bg-espresso px-6 py-24 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-16">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              The Advantage
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Why THE OP Wins</h2>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {whyItems.map((item, i) => (
              <SlideIn key={item.title} direction="left" delay={i * 0.15}>
                <div className="rounded-2xl border border-cream/10 bg-cream/5 p-8">
                  <item.icon className="mb-4 h-8 w-8 text-amber" />
                  <h3 className="mb-3 text-xl font-semibold text-cream">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-cream/60">
                    {item.description}
                  </p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-espresso md:text-4xl">
              Pull Up a Chair
            </h2>
            <p className="mb-8 text-lg text-warm-gray">
              Whether you&apos;re a local, a tourist, or a remote worker looking for
              your new favorite spot — THE OP has a seat for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/menu"
                className="rounded-full bg-espresso px-8 py-3 font-semibold text-cream transition-colors hover:bg-espresso-light"
              >
                See the Menu
              </Link>
              <Link
                href="/events"
                className="rounded-full border border-espresso/20 px-8 py-3 font-semibold text-espresso transition-colors hover:bg-espresso/5"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
