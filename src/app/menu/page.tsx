import type { Metadata } from "next";
import { Coffee, Beer, UtensilsCrossed, ShoppingBag, GlassWater } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  WarmGlow,
  AmberShimmer,
  ScaleReveal,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Craft coffee, dirty sodas, local beer and cider, house-baked pastries, and merchandise at THE OP in Custer, South Dakota.",
  openGraph: {
    title: "Menu | THE OP",
    description:
      "Craft coffee, dirty sodas, local beer and cider, house-baked pastries, and merchandise at THE OP.",
  },
};

const categories = [
  {
    icon: Coffee,
    title: "Coffee & Espresso",
    description: "Locally roasted beans from Black Hills roasters",
    items: [
      { name: "Drip Coffee", description: "Single origin, rotating weekly", price: "$4 - $5" },
      { name: "Espresso", description: "Double shot, rich crema", price: "$4" },
      { name: "Cortado", description: "Equal parts espresso and steamed milk", price: "$5" },
      { name: "Latte", description: "Classic or flavored — vanilla, lavender, honey", price: "$6 - $7" },
      { name: "Cold Brew", description: "24-hour steep, smooth and bold", price: "$5 - $6" },
      { name: "Pour Over", description: "Hand-brewed, single origin", price: "$6" },
      { name: "Chai Latte", description: "House-spiced with local honey", price: "$6" },
      { name: "Hot Chocolate", description: "Belgian chocolate, house whip", price: "$5" },
    ],
  },
  {
    icon: GlassWater,
    title: "Dirty Sodas & Refreshers",
    description: "The Swig-inspired soda bar — cream, fruit, fizz",
    items: [
      { name: "Classic Dirty Soda", description: "Coca-Cola + coconut cream + lime — 24oz/32oz", price: "$4 - $5" },
      { name: "Premium Dirty Soda", description: "Dr Pepper + vanilla cream + raspberry — 24oz/32oz", price: "$5 - $6" },
      { name: "Tropical Refresher", description: "Sprite + passion fruit + coconut", price: "$5" },
      { name: "Dirty Dr Pepper", description: "Dr Pepper + coconut cream + lime", price: "$4 - $5" },
      { name: "Berry Blast", description: "Sprite + mixed berry + cream", price: "$5" },
      { name: "Kids Soda", description: "Pick your flavor, pick your cream — 12oz", price: "$2.50" },
    ],
  },
  {
    icon: Beer,
    title: "Local Beer & Cider",
    description: "Rotating taps from Black Hills breweries — never the same twice",
    items: [
      { name: "Lost Cabin IPA", description: "Hill City, SD — rotating seasonal", price: "$7.50" },
      { name: "Sawyer Brewing Lager", description: "Black Hills craft, crisp finish", price: "$7.50" },
      { name: "Black Hills Cider", description: "Local orchard, rotating variety", price: "$7" },
      { name: "Seasonal Tap", description: "Ask your barista — changes weekly", price: "$7.50 - $9" },
      { name: "Flight of 4", description: "Sample four local pours", price: "$12" },
      { name: "Kombucha", description: "House-brewed, rotating flavors", price: "$6" },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Pastries",
    description: "Baked fresh daily, locally sourced ingredients",
    items: [
      { name: "Sourdough Toast", description: "House butter, local honey or jam", price: "$5" },
      { name: "Avocado Toast", description: "Sourdough, everything seasoning, microgreens", price: "$9" },
      { name: "Breakfast Burrito", description: "Scrambled eggs, cheese, green chile", price: "$10" },
      { name: "Croissant", description: "Plain, almond, or chocolate", price: "$4 - $5" },
      { name: "Muffins", description: "Blueberry, banana walnut, rotating special", price: "$4" },
      { name: "Energy Bites", description: "Oat, peanut butter, chia seed", price: "$3" },
      { name: "Soup of the Day", description: "Seasonal, made in-house", price: "$7" },
      { name: "Grilled Cheese", description: "Three cheese blend on sourdough", price: "$8" },
    ],
  },
  {
    icon: ShoppingBag,
    title: "Merchandise",
    description: "Take a piece of THE OP home with you",
    items: [
      { name: "THE OP Mug", description: "Ceramic, 12oz, espresso brown glaze", price: "$18" },
      { name: "THE OP T-Shirt", description: "Soft cotton, unisex, 5 colorways", price: "$28" },
      { name: "THE OP Hoodie", description: "Heavyweight, embroidered logo", price: "$55" },
      { name: "Whole Bean Coffee", description: "12oz bag, rotating roast", price: "$16" },
      { name: "Sticker Pack", description: "5 die-cut vinyl stickers", price: "$8" },
      { name: "THE OP Cap", description: "Structured snapback, leather patch", price: "$32" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              THE OP
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Our <AmberShimmer>Menu</AmberShimmer>
            </h1>
            <p className="max-w-xl text-cream/70">
              Craft coffee, local beer and cider, house-baked pastries, and
              gear. Everything sourced within 50 miles of the Black Hills.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-center text-sm text-warm-gray-light">
            Menu items and taps rotate by season. Everything sourced locally.
            Ask your barista what&apos;s new this week.
          </p>

          <div className="space-y-20">
            {categories.map((cat, i) => (
              <div key={cat.title}>
                <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-espresso/10">
                      <cat.icon className="h-5 w-5 text-espresso" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-espresso">{cat.title}</h2>
                      <p className="text-sm text-warm-gray">{cat.description}</p>
                    </div>
                  </div>
                </FadeIn>

                <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((item) => (
                    <StaggerItem key={item.name}>
                      <WarmGlow className="rounded-xl">
                        <div className="flex items-start justify-between rounded-xl border border-espresso/10 bg-white p-5">
                          <div className="mr-4">
                            <h3 className="font-semibold text-espresso">{item.name}</h3>
                            <p className="mt-1 text-sm text-warm-gray">{item.description}</p>
                          </div>
                          <span className="shrink-0 text-sm font-semibold text-amber">
                            {item.price}
                          </span>
                        </div>
                      </WarmGlow>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            ))}
          </div>

          <ScaleReveal>
            <div className="mt-16 rounded-2xl border border-amber/20 bg-amber/5 p-8 text-center">
              <p className="text-lg font-semibold text-espresso">
                Open 8am – 9pm, 7 days a week
              </p>
              <p className="mt-2 text-sm text-warm-gray">
                The only cafe in Custer open past 6pm. Coffee, craft beer, dirty sodas, and good company — morning to night.
              </p>
            </div>
          </ScaleReveal>
        </div>
      </section>
    </>
  );
}
