import type { Metadata } from "next";
import { Coffee, Beer, Wheat, Heart, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "THE OP proudly sources from Black Hills producers. Every cup, every pint, every bite supports our neighbors.",
  openGraph: {
    title: "Partners | THE OP",
    description:
      "Local partners and producers who make THE OP possible.",
  },
};

const coffeeRoasters = [
  {
    name: "Black Hills Coffee Co",
    location: "Rapid City, SD",
    distance: "23 mi",
    description:
      "Small-batch roasted in the heart of the Black Hills. Our house drip and espresso base.",
  },
  {
    name: "Dark Canyon Coffee",
    location: "Rapid City, SD",
    distance: "23 mi",
    description:
      "Single-origin specialty roasts. Featured on our rotating pour-over bar.",
  },
  {
    name: "Spearfish Coffee Roasters",
    location: "Spearfish, SD",
    distance: "52 mi",
    description:
      "Northern Hills roasters bringing unique blends to our seasonal menu.",
  },
];

const breweries = [
  {
    name: "Lost Cabin Beer Co",
    location: "Hill City + Rapid City, SD",
    distance: "8 mi",
    description:
      "Our closest brewery neighbor. IPAs, stouts, and seasonals on rotating tap.",
    badge: "On tap now",
  },
  {
    name: "Crow Peak Brewing",
    location: "Spearfish, SD",
    distance: "52 mi",
    description:
      "Northern Hills craft since 2007. Their Pile O' Dirt Porter is a customer favorite.",
    badge: "Rotating tap",
  },
  {
    name: "Sawyer Brewing Co",
    location: "Spearfish, SD",
    distance: "52 mi",
    description:
      "From lagers to sours, always something new on our tap list.",
    badge: "Rotating tap",
  },
  {
    name: "Dakota Point Brewing",
    location: "Rapid City, SD",
    distance: "23 mi",
    description:
      "Rapid City's newest craft brewery. Fresh seasonal selections.",
    badge: "Rotating tap",
  },
];

const localProducers = [
  {
    name: "Baker's Bakery & Cafe",
    location: "Custer, SD",
    distance: "Local",
    description:
      "Fresh pastries and baked goods delivered daily. Our croissants and muffins come straight from their ovens.",
    badge: "Delivered daily",
  },
  {
    name: "Black Hills Honey Farm",
    location: "Black Hills, SD",
    distance: "Local",
    description:
      "Raw local honey for our chai lattes, hot chocolate, and sourdough toast.",
    badge: "On our bar",
  },
  {
    name: "Black Hills Meat Co",
    location: "Hot Springs, SD",
    distance: "20 mi",
    description:
      "Premium jerky and meat snacks. A must-grab for hikers heading to Custer State Park.",
    badge: "In stock",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              OUR PARTNERS
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Made in the Black Hills
            </h1>
            <p className="max-w-2xl text-lg text-cream/80">
              Every cup, every pint, every bite supports our neighbors. THE OP
              sources exclusively from Black Hills producers within 52 miles of
              our campus.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {/* Coffee Roasters */}
          <div className="mb-20">
            <FadeIn>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10">
                  <Coffee className="h-6 w-6 text-amber" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-espresso">
                    Coffee Roasters
                  </h2>
                  <p className="text-sm text-warm-gray">
                    Small-batch roasters from across the Black Hills
                  </p>
                </div>
              </div>
            </FadeIn>

            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coffeeRoasters.map((partner) => (
                <StaggerItem key={partner.name}>
                  <div className="overflow-hidden rounded-xl border border-espresso/10 bg-white">
                    <div
                      className="h-48 rounded-t-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                      }}
                    />
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-espresso">
                        {partner.name}
                      </h3>
                      <div className="mb-3 flex items-center gap-1 text-sm text-warm-gray">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {partner.location} • {partner.distance}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-warm-gray">
                        {partner.description}
                      </p>
                      <div className="mt-4 inline-block rounded-full bg-amber/10 px-3 py-1 text-xs font-medium text-amber">
                        Rotating on our bar
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Breweries */}
          <div className="mb-20">
            <FadeIn>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pine-green/10">
                  <Beer className="h-6 w-6 text-pine-green" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-espresso">
                    Breweries
                  </h2>
                  <p className="text-sm text-warm-gray">
                    Craft beer from the closest taps in the Black Hills
                  </p>
                </div>
              </div>
            </FadeIn>

            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {breweries.map((partner) => (
                <StaggerItem key={partner.name}>
                  <div className="overflow-hidden rounded-xl border border-espresso/10 bg-white">
                    <div
                      className="h-48 rounded-t-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, #2D5016 0%, #1a2f0c 100%)",
                      }}
                    />
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-espresso">
                        {partner.name}
                      </h3>
                      <div className="mb-3 flex items-center gap-1 text-sm text-warm-gray">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {partner.location} • {partner.distance}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-warm-gray">
                        {partner.description}
                      </p>
                      <div className="mt-4 inline-block rounded-full bg-pine-green/10 px-3 py-1 text-xs font-medium text-pine-green">
                        {partner.badge}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Local Producers */}
          <div className="mb-20">
            <FadeIn>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-espresso/10">
                  <Wheat className="h-6 w-6 text-espresso" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-espresso">
                    Local Producers
                  </h2>
                  <p className="text-sm text-warm-gray">
                    Fresh ingredients and goods from our neighbors
                  </p>
                </div>
              </div>
            </FadeIn>

            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {localProducers.map((partner) => (
                <StaggerItem key={partner.name}>
                  <div className="overflow-hidden rounded-xl border border-espresso/10 bg-white">
                    <div
                      className="h-48 rounded-t-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, #FFF8E1 0%, #F5E6C3 100%)",
                      }}
                    />
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-espresso">
                        {partner.name}
                      </h3>
                      <div className="mb-3 flex items-center gap-1 text-sm text-warm-gray">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {partner.location} • {partner.distance}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-warm-gray">
                        {partner.description}
                      </p>
                      <div className="mt-4 inline-block rounded-full bg-espresso/10 px-3 py-1 text-xs font-medium text-espresso">
                        {partner.badge}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Why Local Section */}
          <FadeIn>
            <div className="rounded-2xl border border-espresso/10 bg-white p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber/10">
                    <Heart className="h-6 w-6 text-amber" />
                  </div>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-espresso">
                  The Rotating Roster
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-warm-gray">
                  You never know exactly what&apos;s on tap or what roast is
                  featured — and that&apos;s the point. Our menu changes with
                  the seasons, our suppliers&apos; harvests, and our
                  baristas&apos; curiosity. Every visit to THE OP is a little
                  different, because the Black Hills are always changing.
                </p>
                <div className="rounded-xl border border-amber/20 bg-amber/5 p-6">
                  <p className="text-sm font-medium text-espresso">
                    Interested in becoming a partner?
                  </p>
                  <p className="mt-1 text-sm text-warm-gray">
                    We&apos;re always looking for local producers.{" "}
                    <a
                      href="/contact"
                      className="font-semibold text-amber hover:underline"
                    >
                      Contact us
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
