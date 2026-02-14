import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Users,
  Building,
  Laptop,
  GraduationCap,
  Tv,
  Tent,
  Sprout,
  Home,
  UtensilsCrossed,
  Beer,
  Compass,
  Briefcase,
  ShoppingBag,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, AmberShimmer, WarmGlow, ScaleReveal, PulseGlow } from "@/components/motion";

export const metadata: Metadata = {
  title: "Community",
  description:
    "THE OP is more than a cafe — it's the community anchor for the Black Hills Consortium campus. Local partnerships, ecosystem connections, and the Settle the West partner list.",
  openGraph: {
    title: "Community | THE OP",
    description:
      "THE OP is more than a cafe — it's the community anchor for the Black Hills Consortium campus.",
  },
};

const ecosystemConnections = [
  {
    icon: Laptop,
    entity: "GrowWise",
    connection: "GrowWise employees eat, meet, and work from THE OP daily. Team standup spot.",
  },
  {
    icon: Tv,
    entity: "Outpost Media",
    connection: "Live recordings, podcast interviews, and content creation happen right from the cafe floor.",
  },
  {
    icon: GraduationCap,
    entity: "Seed Academy",
    connection: "Students use THE OP as a study hall and networking space. Discounted drinks for enrollees.",
  },
  {
    icon: Tent,
    entity: "THE CULT",
    connection: "Convention pre-parties, product tastings, and after-parties center on THE OP.",
  },
  {
    icon: Users,
    entity: "Settle the West",
    connection: "New relocates get their first taste of Custer at THE OP. Welcome packets include a free drink.",
  },
  {
    icon: Sprout,
    entity: "Auric Labs",
    connection: "Accelerator teams pitch and prototype at THE OP. Investors visit here first.",
  },
  {
    icon: Building,
    entity: "Pass Creek Campus",
    connection: "THE OP is the front door to the entire 15-acre campus. First thing visitors see.",
  },
  {
    icon: Heart,
    entity: "Seed Foundation",
    connection: "Foundation programs host community events and fundraisers at THE OP regularly.",
  },
];

const partnerCategories = [
  {
    icon: Home,
    category: "Real Estate",
    desc: "Realtors who understand the vision. Percentage of commission on Settle the West move-ins. First stop for every relocator looking for a home.",
  },
  {
    icon: UtensilsCrossed,
    category: "Restaurants",
    desc: "Featured dining list for visitors and relocators. Catering opportunities for campus events. Cross-promotion through Outpost Media content.",
  },
  {
    icon: Beer,
    category: "Breweries & Beverage",
    desc: "Local breweries: tap takeover nights at THE OP, revenue share on featured pours. Coffee roasters as THE OP suppliers with permanent branding.",
  },
  {
    icon: Compass,
    category: "Tours & Activities",
    desc: "Tour operators: package deals for visitors, referral fees for bookings. Outdoor guides for employee perks and investor entertainment.",
  },
  {
    icon: Briefcase,
    category: "Professional Services",
    desc: "Lawyers, accountants, insurance agents, and banks with preferred rates for BHC community members. The professional backbone of relocation.",
  },
  {
    icon: ShoppingBag,
    category: "Shops & Retail",
    desc: "Local businesses that stock BHC merch. Exclusive offers for community members. Featured in the Settle the West welcome guide.",
  },
];

const testimonials = [
  {
    quote: "It's like nothing else in the Hills. The coffee is incredible, but it's the people that keep me coming back.",
    name: "Sarah M.",
    title: "Custer Resident",
  },
  {
    quote: "I relocated from Denver through Settle the West. THE OP was my first stop, and now it's my daily office.",
    name: "James K.",
    title: "Remote Worker",
  },
  {
    quote: "We record two shows a month from THE OP. The energy in the room makes for better content every time.",
    name: "Outpost Media",
    title: "Content Partner",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              The Heart of the Campus
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              More Than a <AmberShimmer>Cafe</AmberShimmer>
            </h1>
            <p className="max-w-xl text-cream/70">
              THE OP is where every thread of the Black Hills Consortium comes
              together. Eleven entities, one community anchor.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Narrative */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-6 text-3xl font-bold text-espresso">
              The Third Place
            </h2>
            <p className="mb-4 leading-relaxed text-warm-gray">
              Ray Oldenburg described the &ldquo;third place&rdquo; as the
              social space between home and work — the coffee shop, the pub, the
              barbershop. THE OP is that for the entire Black Hills region.
            </p>
            <p className="leading-relaxed text-warm-gray">
              When a GrowWise engineer needs a break, they walk to THE OP. When
              Outpost Media needs a location, they set up at THE OP. When a new
              family arrives through Settle the West, their welcome packet
              includes a free drink at THE OP. When an investor visits the
              campus, the first meeting happens at THE OP. Everything connects
              here.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Ecosystem Connections */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold text-espresso">
              How THE OP Connects the Ecosystem
            </h2>
            <p className="mt-2 text-warm-gray">
              Every BHC entity drives foot traffic to THE OP — and THE OP gives
              back.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemConnections.map((conn) => (
              <StaggerItem key={conn.entity}>
                <WarmGlow className="h-full rounded-xl">
                  <div className="flex h-full flex-col rounded-xl border border-espresso/10 bg-white p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10">
                      <conn.icon className="h-5 w-5 text-amber" />
                    </div>
                    <h3 className="mb-2 font-semibold text-espresso">
                      {conn.entity}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-warm-gray">
                      {conn.connection}
                    </p>
                  </div>
                </WarmGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Partner List for Relocators */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-4">
            <div className="flex items-center gap-3">
              <Handshake className="h-6 w-6 text-amber-dark" />
              <h2 className="text-3xl font-bold text-espresso">
                The Partner List for Relocators
              </h2>
            </div>
            <p className="mt-2 max-w-2xl text-warm-gray leading-relaxed">
              When you move to the Black Hills through Settle the West, these are
              your people. Vetted businesses that believe in what we are building.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerCategories.map((partner) => (
              <StaggerItem key={partner.category}>
                <PulseGlow className="h-full rounded-2xl">
                  <div className="flex h-full flex-col rounded-2xl border border-espresso/10 bg-white p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10">
                      <partner.icon className="h-5 w-5 text-amber-dark" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-espresso">
                      {partner.category}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-warm-gray">
                      {partner.desc}
                    </p>
                  </div>
                </PulseGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScaleReveal delay={0.2}>
            <div className="mt-12 rounded-2xl bg-amber/5 border border-amber/10 p-8">
              <h3 className="text-lg font-bold text-espresso">Revenue Share Model</h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                Every partner in the ecosystem generates revenue for themselves AND for
                the community. Referral fees, featured placements, and exclusive offers
                create a self-reinforcing local economy. When a Settle the West
                relocator buys a home, the realtor earns commission and a portion flows
                back to the program. When a brewery does a tap takeover, they sell beer
                and THE OP sells food. Rising tides.
              </p>
            </div>
          </ScaleReveal>

          <ScaleReveal delay={0.3}>
            <div className="mt-8 rounded-2xl bg-espresso/5 border border-espresso/10 p-8">
              <h3 className="text-lg font-bold text-espresso">Connection to Settle the West</h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                When remote workers relocate through our program, they get the Partner
                List on Day 1. These are not random recommendations — they are vetted
                businesses that believe in what we are building. From finding a home to
                opening a bank account to joining a hiking group, the Partner List is
                the relocator&apos;s on-ramp to Black Hills life.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-espresso hover:text-amber-dark transition-colors"
              >
                Learn about THE OP&apos;s role <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-espresso">
              The Experience We&apos;re Building
            </h2>
            <p className="mt-2 text-warm-gray">
              A vision for the community we are creating at THE OP.
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScaleReveal key={t.name} delay={i * 0.12}>
                <div className="rounded-2xl border border-espresso/10 bg-white p-8">
                  <p className="mb-6 text-lg italic leading-relaxed text-warm-gray">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-espresso">{t.name}</p>
                    <p className="text-sm text-warm-gray-light">{t.title}</p>
                  </div>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local Partnerships */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold">Planned Local Partnerships</h2>
            <p className="mx-auto mb-8 max-w-2xl text-cream/60">
              We will source from Black Hills roasters, bakers, and producers. We
              hire local. We reinvest in the community. Because that&apos;s what
              local-first in the Black Hills means.
            </p>
          </FadeIn>
          <ScaleReveal>
            <div className="flex flex-wrap justify-center gap-6 text-cream/40">
              {[
                "Black Hills Roasters",
                "Custer Bakehouse",
                "Hills Fresh Farms",
                "Dakota Artisan Co.",
                "Pine & Prairie Pottery",
              ].map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-cream/20 px-5 py-2 text-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <FadeIn>
          <h2 className="mb-4 text-3xl font-bold text-espresso">
            Be Part of the Community
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-warm-gray">
            Drop in, say hello, and find your place at THE OP.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-espresso px-8 py-3 font-semibold text-cream transition-colors hover:bg-espresso-light"
          >
            Visit THE OP
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
