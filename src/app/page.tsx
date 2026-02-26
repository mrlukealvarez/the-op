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
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  CountUp,
  AmberShimmer,
  ParallaxSection,
  WarmGlow,
  ScaleReveal,
} from "@/components/motion";

const stats = [
  {
    label: "Annual Park Visitors",
    value: "2M+",
    icon: MapPin,
    end: 2,
    prefix: "",
    suffix: "M+",
    decimals: 0,
  },
  {
    label: "Year 1 Revenue Target",
    value: "$380K",
    icon: TrendingUp,
    end: 380,
    prefix: "$",
    suffix: "K",
    decimals: 0,
  },
  {
    label: "Annual SD Tourists",
    value: "14.9M",
    icon: Coffee,
    end: 14.9,
    prefix: "",
    suffix: "M",
    decimals: 1,
  },
  {
    label: "BHC Campus Entities",
    value: "11",
    icon: Building,
    end: 11,
    prefix: "",
    suffix: "",
    decimals: 0,
  },
];

const features = [
  {
    icon: Coffee,
    title: "Craft Coffee & More",
    description:
      "Locally roasted beans, specialty espresso, local beer and cider on tap, and house-baked pastries. Every cup tells a Black Hills story.",
  },
  {
    icon: Calendar,
    title: "Events & Culture",
    description:
      "Open mic nights, trivia, live Outpost Media recordings. Looking for conventions? Visit THE CULT Events LLC for full-scale events.",
  },
  {
    icon: Users,
    title: "Community Hub",
    description:
      "The living room of the BHC campus. Remote workers, students, locals, and tourists all find their place here.",
  },
  {
    icon: Leaf,
    title: "Employee Perks",
    description:
      "Campus staff get exclusive perks — discounted meals, priority seating, free workspace, and special employee-only events.",
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
        {/* Decorative orb behind hero text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber/5 blur-3xl pointer-events-none" />
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
              <AmberShimmer>Come Together</AmberShimmer>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-cream/70">
              Coffee shop and tourist stop on the BHC campus. Craft coffee,
              local merch, drive-through convenience, and community — serving
              locals, tourists, and campus staff.
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
                  <p className="text-2xl font-bold text-espresso">
                    <CountUp
                      end={stat.end}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </p>
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
              More Than a <AmberShimmer>Cafe</AmberShimmer>
            </h2>
            <p className="mx-auto max-w-2xl text-warm-gray">
              THE OP is the beating heart of the Black Hills Consortium campus —
              a place where coffee, culture, and community converge.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <WarmGlow className="rounded-2xl">
                  <div className="rounded-2xl border border-espresso/10 bg-white p-8 transition-shadow hover:shadow-lg">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber/10">
                      <feature.icon className="h-6 w-6 text-amber" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-espresso">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-warm-gray">
                      {feature.description}
                    </p>
                  </div>
                </WarmGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why THE OP */}
      <ParallaxSection className="bg-espresso px-6 py-24 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-16">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              The Advantage
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Why THE OP Wins</h2>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {whyItems.map((item, i) => (
              <ScaleReveal key={item.title} delay={i * 0.12}>
                <div className="rounded-2xl border border-cream/10 bg-cream/5 p-8">
                  <item.icon className="mb-4 h-8 w-8 text-amber" />
                  <h3 className="mb-3 text-xl font-semibold text-cream">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-cream/60">
                    {item.description}
                  </p>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <ScaleReveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-espresso md:text-4xl">
              Pull Up a Chair
            </h2>
            <p className="mb-8 text-lg text-warm-gray">
              Whether you&apos;re a local, a tourist, or a remote worker looking
              for your new favorite spot — THE OP has a seat for you.
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
        </ScaleReveal>
      </section>
    </>
  );
}
