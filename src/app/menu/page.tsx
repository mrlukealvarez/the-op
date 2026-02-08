import type { Metadata } from "next";
import { Coffee, Leaf, UtensilsCrossed, ShoppingBag } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Craft coffee, cannabis-infused beverages, house-baked pastries, and merchandise at THE OP in Custer, South Dakota.",
  openGraph: {
    title: "Menu | THE OP",
    description:
      "Craft coffee, cannabis-infused beverages, house-baked pastries, and merchandise at THE OP.",
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
    icon: Leaf,
    title: "Cannabis-Infused Beverages",
    description: "CBD and THC options where legally permitted",
    items: [
      { name: "CBD Cold Brew", description: "25mg CBD, smooth finish", price: "$8" },
      { name: "THC Sparkling Water", description: "5mg THC, assorted flavors", price: "$7" },
      { name: "CBD Matcha Latte", description: "Ceremonial grade matcha + 15mg CBD", price: "$9" },
      { name: "Cannabis Lemonade", description: "House-made, seasonal infusion", price: "$8" },
      { name: "Relaxation Tonic", description: "CBD + adaptogens, non-caffeinated", price: "$9" },
      { name: "Microdose Flight", description: "Three 2.5mg THC mini beverages", price: "$12" },
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
      { name: "Energy Bites", description: "Oat, peanut butter, hemp seed", price: "$3" },
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
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Menu</h1>
            <p className="max-w-xl text-cream/70">
              Craft coffee, cannabis-infused beverages, house-baked pastries, and
              gear. Everything made with care, sourced with intention.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-center text-sm text-warm-gray-light">
            Menu items vary by season and availability. Cannabis products
            available where legally permitted. Ask your barista for details.
          </p>

          <div className="space-y-20">
            {categories.map((cat) => (
              <div key={cat.title}>
                <FadeIn>
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
                      <div className="flex items-start justify-between rounded-xl border border-espresso/10 bg-white p-5">
                        <div className="mr-4">
                          <h3 className="font-semibold text-espresso">{item.name}</h3>
                          <p className="mt-1 text-sm text-warm-gray">{item.description}</p>
                        </div>
                        <span className="shrink-0 text-sm font-semibold text-cannabis-green">
                          {item.price}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
