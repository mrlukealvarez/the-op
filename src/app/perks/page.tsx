"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Coffee,
  MapPin,
  Mountain,
  Landmark,
  UtensilsCrossed,
  Laptop,
  GraduationCap,
  Home,
  TreePine,
  Snowflake,
  Sun,
  Leaf,
  ChevronLeft,
  ChevronRight,
  Filter,
  Bike,
  Fish,
  Music,
  Tent,
  Dumbbell,
  Wifi,
  Shirt,
  Gift,
  Star,
  Palette,
  Trophy,
  Waves,
  Ticket,
  BookOpen,
  Beer,
  Heart,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AmberShimmer,
  WarmGlow,
  ScaleReveal,
  CountUp,
} from "@/components/motion";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

type PerkCategory =
  | "meals"
  | "campus"
  | "outdoor"
  | "cultural"
  | "tech"
  | "housing"
  | "learning";

type Season = "year-round" | "summer" | "winter" | "fall" | "spring";
type CostTier = "free" | "discounted" | "employee-rate";

interface Perk {
  title: string;
  description: string;
  category: PerkCategory;
  season: Season;
  costTier: CostTier;
  location: string;
  value?: string;
}

// ---------------------------------------------------------------------------
// CATEGORY & SEASON METADATA
// ---------------------------------------------------------------------------

const categoryMeta: Record<
  PerkCategory,
  { label: string; icon: LucideIcon; colorClass: string }
> = {
  meals: {
    label: "Employee Meal & Drink Credits",
    icon: Coffee,
    colorClass: "text-amber",
  },
  campus: {
    label: "Campus Perks",
    icon: Users,
    colorClass: "text-espresso",
  },
  outdoor: {
    label: "Outdoor Adventures",
    icon: Mountain,
    colorClass: "text-pine-green",
  },
  cultural: {
    label: "Cultural Experiences",
    icon: Landmark,
    colorClass: "text-amber-dark",
  },
  tech: {
    label: "Tech & Gear",
    icon: Laptop,
    colorClass: "text-espresso-light",
  },
  housing: {
    label: "Housing & Living",
    icon: Home,
    colorClass: "text-warm-gray",
  },
  learning: {
    label: "Learning & Growth",
    icon: GraduationCap,
    colorClass: "text-pine-green",
  },
};

const seasonMeta: Record<Season, { label: string; icon: LucideIcon }> = {
  "year-round": { label: "Year-Round", icon: Star },
  summer: { label: "Summer", icon: Sun },
  winter: { label: "Winter", icon: Snowflake },
  fall: { label: "Fall", icon: Leaf },
  spring: { label: "Spring", icon: TreePine },
};

const costLabels: Record<
  CostTier,
  { label: string; bg: string; text: string; border: string }
> = {
  free: {
    label: "Free",
    bg: "bg-pine-green/10",
    text: "text-pine-green",
    border: "border-pine-green/30",
  },
  discounted: {
    label: "Discounted",
    bg: "bg-amber/10",
    text: "text-amber-dark",
    border: "border-amber/30",
  },
  "employee-rate": {
    label: "Employee Rate",
    bg: "bg-espresso/10",
    text: "text-espresso",
    border: "border-espresso/30",
  },
};

// ---------------------------------------------------------------------------
// PERKS DATA — 53 total, customized for THE OP coffee shop + merch
// ---------------------------------------------------------------------------

const perks: Perk[] = [
  // ── Employee Meal & Drink Credits ───────────────────────────────────────
  {
    title: "Free Espresso Drinks on Shift",
    description:
      "Every shift starts and ends with whatever you want off the bar. Latte, cortado, cold brew, matcha — on the house, every day.",
    category: "meals",
    season: "year-round",
    costTier: "free",
    location: "THE OP",
    value: "$1,500/yr",
  },
  {
    title: "Daily Meal Credit",
    description:
      "$15/day toward food while you work. Sandwiches, salads, baked goods — fuel your shift without spending a dime.",
    category: "meals",
    season: "year-round",
    costTier: "free",
    location: "THE OP",
    value: "$3,900/yr",
  },
  {
    title: "30% Employee Discount Off-Shift",
    description:
      "Not working today? Still your shop. 30% off everything when you come in on your day off — coffee, food, merch, all of it.",
    category: "meals",
    season: "year-round",
    costTier: "discounted",
    location: "THE OP",
  },
  {
    title: "Monthly Coffee Bean Allowance",
    description:
      "1 pound of locally roasted beans free every month. Take the best Black Hills coffee home with you.",
    category: "meals",
    season: "year-round",
    costTier: "free",
    location: "THE OP",
    value: "$240/yr",
  },
  {
    title: "Free Beer & Cider Tastings",
    description:
      "Weekly tastings of new taps from local breweries and cideries. Know the menu inside and out — by drinking it.",
    category: "meals",
    season: "year-round",
    costTier: "free",
    location: "THE OP",
  },
  {
    title: "Guest Discount Passes",
    description:
      "2 passes per month for friends and family. Bring your people in for 20% off — show them where you work.",
    category: "meals",
    season: "year-round",
    costTier: "discounted",
    location: "THE OP",
  },
  {
    title: "Kokada Premium Snacks",
    description:
      "Healthy snack boxes from Forbes 30 Under 30 founders Jared & Bre Golestani. Delivered to the shop, always stocked.",
    category: "meals",
    season: "year-round",
    costTier: "free",
    location: "THE OP",
    value: "$300/yr",
  },
  {
    title: "Dirty Sodas on Tap",
    description:
      "Custom craft sodas with flavored syrups, cream, and mix-ins. The regional obsession — free for staff, always.",
    category: "meals",
    season: "year-round",
    costTier: "free",
    location: "THE OP",
  },

  // ── Campus Perks ────────────────────────────────────────────────────────
  {
    title: "Grow Campus Co-Working",
    description:
      "Free access to the co-working space on your days off. Standing desks, meeting rooms, high-speed Starlink. Your second office.",
    category: "campus",
    season: "year-round",
    costTier: "free",
    location: "Grow Campus",
    value: "$3,600/yr",
  },
  {
    title: "Gym & Fitness Center",
    description:
      "On-campus fitness center access included. Stay sharp, stay healthy. Open early, open late.",
    category: "campus",
    season: "year-round",
    costTier: "free",
    location: "Grow Campus",
  },
  {
    title: "THE CULT Events & Concerts",
    description:
      "VIP access to campus events, live music, movie nights, and the annual convention. Free for all THE OP staff.",
    category: "campus",
    season: "year-round",
    costTier: "free",
    location: "Grow Campus",
    value: "$500+/yr",
  },
  {
    title: "Campus Housing Options",
    description:
      "Priority access to Pass Creek housing development. Subsidized rates, minutes from the shop. No commute, no stress.",
    category: "campus",
    season: "year-round",
    costTier: "employee-rate",
    location: "Pass Creek",
    value: "$6K-$9K/yr savings",
  },
  {
    title: "Free Parking",
    description:
      "Dedicated employee parking at Grow Campus. No meters, no permits, no walking three blocks in the snow.",
    category: "campus",
    season: "year-round",
    costTier: "free",
    location: "Grow Campus",
  },
  {
    title: "Dog-Friendly Workspace",
    description:
      "Bring your dog to campus. Outdoor seating area is pet-friendly, and the team loves meeting your four-legged co-worker.",
    category: "campus",
    season: "year-round",
    costTier: "free",
    location: "Grow Campus",
  },
  {
    title: "Podcast Studio Access",
    description:
      "THE BARN recording studio on campus. Professional podcast, video, and music production — free for employees with a creative itch.",
    category: "campus",
    season: "year-round",
    costTier: "free",
    location: "Grow Campus",
    value: "$100-$200/hr retail",
  },

  // ── Outdoor Adventures ──────────────────────────────────────────────────
  {
    title: "Custer State Park Annual Pass",
    description:
      "71,000 acres of Black Hills wilderness. Bison herds, Sylvan Lake, Wildlife Loop. Your family pass is covered.",
    category: "outdoor",
    season: "year-round",
    costTier: "free",
    location: "Custer, SD",
    value: "$60/yr",
  },
  {
    title: "Needles Highway Drives",
    description:
      "14-mile scenic drive through granite spires and narrow tunnels. One of the most dramatic roads in America, 10 minutes away.",
    category: "outdoor",
    season: "summer",
    costTier: "free",
    location: "Custer, SD",
  },
  {
    title: "Sylvan Lake Swimming & Paddleboarding",
    description:
      "The crown jewel of the park. Crystal clear water, Cathedral Spires backdrop. Swim, kayak, or just float after your shift.",
    category: "outdoor",
    season: "summer",
    costTier: "free",
    location: "Custer, SD",
  },
  {
    title: "Black Elk Peak Hiking",
    description:
      "Highest point east of the Rockies. 7,244 feet, panoramic views, a 3.5-mile trail from Sylvan Lake. Your Tuesday afternoon hike.",
    category: "outdoor",
    season: "summer",
    costTier: "free",
    location: "Custer, SD",
  },
  {
    title: "Mickelson Trail Biking",
    description:
      "109 miles of converted rail trail through the Black Hills. Tunnels, bridges, and pine forests. Bike rentals at employee rates.",
    category: "outdoor",
    season: "year-round",
    costTier: "employee-rate",
    location: "Regional",
  },
  {
    title: "Rock Climbing at Sylvan Lake",
    description:
      "World-class granite climbing on the Needles. Sport, trad, bouldering from beginner to expert. Guided sessions at employee rates.",
    category: "outdoor",
    season: "summer",
    costTier: "employee-rate",
    location: "Custer, SD",
  },
  {
    title: "Fly Fishing on French Creek",
    description:
      "Trout streams wind through the hills minutes from campus. Equipment discounts through our outdoor partner network.",
    category: "outdoor",
    season: "year-round",
    costTier: "discounted",
    location: "Custer, SD",
  },
  {
    title: "Cross-Country Skiing",
    description:
      "Groomed trails through the Black Hills National Forest in winter. Quiet, beautiful, and free with your park pass.",
    category: "outdoor",
    season: "winter",
    costTier: "free",
    location: "Regional",
  },
  {
    title: "Snowshoeing",
    description:
      "Explore the Black Hills in winter silence. Trails through Custer State Park and national forest. Gear discounts for employees.",
    category: "outdoor",
    season: "winter",
    costTier: "discounted",
    location: "Regional",
  },
  {
    title: "Mountain Biking",
    description:
      "Centennial Trail singletrack, Flume Trail, and dozens more. Some of the best mountain biking between Colorado and nowhere.",
    category: "outdoor",
    season: "summer",
    costTier: "free",
    location: "Regional",
  },
  {
    title: "Wildlife Safari Drives",
    description:
      "Drive the Wildlife Loop Road through herds of bison, pronghorn, and wild burros. Your commute home might take an extra hour.",
    category: "outdoor",
    season: "year-round",
    costTier: "free",
    location: "Custer, SD",
  },
  {
    title: "Horseback Riding",
    description:
      "Guided trail rides through Custer State Park and the Black Hills. Employee rates at partner ranches.",
    category: "outdoor",
    season: "summer",
    costTier: "employee-rate",
    location: "Custer, SD",
  },
  {
    title: "ATV Trails",
    description:
      "Black Hills National Forest ATV trails for off-road adventure. Rental discounts through our partner network.",
    category: "outdoor",
    season: "summer",
    costTier: "discounted",
    location: "Regional",
  },

  // ── Cultural Experiences ────────────────────────────────────────────────
  {
    title: "Crazy Horse Memorial Pass",
    description:
      "The world's largest mountain carving in progress. Night blasts in summer, cultural events year-round. Employee access included.",
    category: "cultural",
    season: "year-round",
    costTier: "free",
    location: "Crazy Horse, SD",
    value: "$15/visit",
  },
  {
    title: "Mount Rushmore Annual Entry",
    description:
      "America's most iconic monument, 20 minutes from the shop. Parking pass covered for you and your family.",
    category: "cultural",
    season: "year-round",
    costTier: "free",
    location: "Keystone, SD",
    value: "$10/visit",
  },
  {
    title: "Deadwood Gaming & Historic Tours",
    description:
      "Wild West history meets modern gaming. Historic Main Street, the graves of Wild Bill and Calamity Jane. Comp nights available.",
    category: "cultural",
    season: "year-round",
    costTier: "discounted",
    location: "Deadwood, SD",
  },
  {
    title: "Sturgis Rally VIP Access",
    description:
      "The world's largest motorcycle rally. 500,000+ attendees, $800M economic impact. VIP and vendor passes for THE OP staff.",
    category: "cultural",
    season: "summer",
    costTier: "free",
    location: "Sturgis, SD",
    value: "$500+",
  },
  {
    title: "Custer County Fair",
    description:
      "Small-town Americana at its best. Rodeo, livestock, carnival, live music. The whole team goes — it is mandatory fun.",
    category: "cultural",
    season: "summer",
    costTier: "free",
    location: "Custer, SD",
  },
  {
    title: "Native American Powwows",
    description:
      "Lakota, Nakota, and Dakota cultural celebrations with traditional dancing, drumming, and artistry. Deeply meaningful regional events.",
    category: "cultural",
    season: "fall",
    costTier: "free",
    location: "Rapid City, SD",
  },
  {
    title: "Black Hills Playhouse Theater",
    description:
      "Professional summer theater in Custer State Park since 1946. Discounted season passes for THE OP employees.",
    category: "cultural",
    season: "summer",
    costTier: "discounted",
    location: "Custer, SD",
  },
  {
    title: "Hot Springs Mammoth Site",
    description:
      "Active paleontological dig with 61 mammoths discovered. One of the world's greatest Pleistocene fossil sites, 30 minutes south.",
    category: "cultural",
    season: "year-round",
    costTier: "discounted",
    location: "Hot Springs, SD",
  },
  {
    title: "Wind Cave Tours",
    description:
      "One of the longest caves in the world with rare boxwork formations. Guided tours year-round, 15 minutes from campus.",
    category: "cultural",
    season: "year-round",
    costTier: "free",
    location: "Hot Springs, SD",
  },
  {
    title: "Jewel Cave Tours",
    description:
      "Third-longest cave in the world. Calcite crystals, stalactites, and guided discovery tours at employee rates.",
    category: "cultural",
    season: "year-round",
    costTier: "employee-rate",
    location: "Custer, SD",
  },
  {
    title: "1880 Train Rides",
    description:
      "Vintage steam train between Hill City and Keystone through pine forests and meadows. A 2-hour scenic journey through history.",
    category: "cultural",
    season: "summer",
    costTier: "discounted",
    location: "Hill City, SD",
  },

  // ── Tech & Gear ─────────────────────────────────────────────────────────
  {
    title: "MacBook Pro",
    description:
      "Latest generation MacBook Pro for every team member. Refreshed on a 3-year cycle. Your tools should never hold you back.",
    category: "tech",
    season: "year-round",
    costTier: "free",
    location: "Shipped to You",
    value: "$3,000",
  },
  {
    title: "AirPods Pro",
    description:
      "Noise-cancelling AirPods for focus, calls, and music. Because sometimes you need to tune out the espresso machine.",
    category: "tech",
    season: "year-round",
    costTier: "free",
    location: "Shipped to You",
    value: "$250",
  },
  {
    title: "Meta Smart Glasses",
    description:
      "Ray-Ban Meta smart glasses for field staff and content creation. Hands-free video, AI assistant, and camera on the go.",
    category: "tech",
    season: "year-round",
    costTier: "free",
    location: "Shipped to You",
    value: "$1,500",
  },
  {
    title: "E-Bike Campus Access",
    description:
      "Shared e-bikes for getting around the 15-acre Grow Campus. From THE OP to THE BARN to the co-working space in 2 minutes flat.",
    category: "tech",
    season: "year-round",
    costTier: "free",
    location: "Grow Campus",
  },
  {
    title: "Branded THE OP Merch",
    description:
      "Full wardrobe of THE OP branded gear — free. Aprons, tees, hoodies, caps. Look good, represent the brand, keep the merch.",
    category: "tech",
    season: "year-round",
    costTier: "free",
    location: "THE OP",
    value: "$500/yr",
  },
  {
    title: "Annual Gear Allowance",
    description:
      "$500/year for outdoor gear, personal tech, or anything that makes your life better. Spend it however you want.",
    category: "tech",
    season: "year-round",
    costTier: "free",
    location: "Anywhere",
    value: "$500/yr",
  },

  // ── Housing & Living ────────────────────────────────────────────────────
  {
    title: "Campus Housing at Pass Creek",
    description:
      "Priority access to subsidized housing. Market rate $1,500/mo, employee rate $750-$1,000. Walk to work in 5 minutes.",
    category: "housing",
    season: "year-round",
    costTier: "employee-rate",
    location: "Custer, SD",
    value: "$6K-$9K/yr savings",
  },
  {
    title: "Relocation Assistance",
    description:
      "$5,000 relocation package through the Settle the West program. Moving costs, first/last month, community integration.",
    category: "housing",
    season: "year-round",
    costTier: "free",
    location: "Custer, SD",
    value: "$5,000",
  },
  {
    title: "Cost of Living: 30% Below Average",
    description:
      "Custer, SD costs 30% less than the national average. Your $145K salary goes further than $200K in Denver or $250K in San Francisco.",
    category: "housing",
    season: "year-round",
    costTier: "free",
    location: "Custer, SD",
  },
  {
    title: "Safest Small Town",
    description:
      "Custer consistently ranks among the safest small towns in the state. Leave your doors unlocked. Know your neighbors by name.",
    category: "housing",
    season: "year-round",
    costTier: "free",
    location: "Custer, SD",
  },
  {
    title: "5-Minute Commute",
    description:
      "From anywhere in town to THE OP in 5 minutes or less. No highway, no traffic, no road rage. Just a short drive through pine trees.",
    category: "housing",
    season: "year-round",
    costTier: "free",
    location: "Custer, SD",
  },

  // ── Learning & Growth ───────────────────────────────────────────────────
  {
    title: "Seed Academy Courses",
    description:
      "Free access to all Seed Academy professional development courses. AI fluency, business strategy, leadership — grow beyond the counter.",
    category: "learning",
    season: "year-round",
    costTier: "free",
    location: "Grow Campus",
    value: "$2,500/course",
  },
  {
    title: "Barista Certification",
    description:
      "SCA (Specialty Coffee Association) certification program fully covered. Become a certified barista on our dime.",
    category: "learning",
    season: "year-round",
    costTier: "free",
    location: "THE OP",
  },
  {
    title: "Food Handler Certification",
    description:
      "ServSafe and state food handler certifications covered. Required for the job, paid for by us, and yours to keep forever.",
    category: "learning",
    season: "year-round",
    costTier: "free",
    location: "Online",
  },
  {
    title: "Tuition Reimbursement",
    description:
      "$5,250/year for continuing education, online degrees, certifications, or specialized courses relevant to your growth.",
    category: "learning",
    season: "year-round",
    costTier: "free",
    location: "Anywhere",
    value: "$5,250/yr",
  },
  {
    title: "Conference Attendance Budget",
    description:
      "Annual budget for industry conferences, coffee expos, and professional development events. Travel and registration covered.",
    category: "learning",
    season: "year-round",
    costTier: "free",
    location: "Anywhere",
    value: "$3,000/yr",
  },
  {
    title: "Mentorship from BHC Leadership",
    description:
      "Direct access to BHC founders and senior leaders. You report to the founder. Learn how to build, operate, and lead.",
    category: "learning",
    season: "year-round",
    costTier: "free",
    location: "Grow Campus",
  },
];

// ---------------------------------------------------------------------------
// ICON MAPPING — unique icon per perk for visual variety
// ---------------------------------------------------------------------------

const perkIcons: Record<string, LucideIcon> = {
  "Free Espresso Drinks on Shift": Coffee,
  "Daily Meal Credit": UtensilsCrossed,
  "30% Employee Discount Off-Shift": Gift,
  "Monthly Coffee Bean Allowance": Coffee,
  "Free Beer & Cider Tastings": Beer,
  "Guest Discount Passes": Ticket,
  "Kokada Premium Snacks": Gift,
  "Dirty Sodas on Tap": Sparkles,
  "Grow Campus Co-Working": Laptop,
  "Gym & Fitness Center": Dumbbell,
  "THE CULT Events & Concerts": Music,
  "Campus Housing Options": Home,
  "Free Parking": MapPin,
  "Dog-Friendly Workspace": Heart,
  "Podcast Studio Access": Music,
  "Custer State Park Annual Pass": TreePine,
  "Needles Highway Drives": MapPin,
  "Sylvan Lake Swimming & Paddleboarding": Waves,
  "Black Elk Peak Hiking": Mountain,
  "Mickelson Trail Biking": Bike,
  "Rock Climbing at Sylvan Lake": Mountain,
  "Fly Fishing on French Creek": Fish,
  "Cross-Country Skiing": Snowflake,
  Snowshoeing: Snowflake,
  "Mountain Biking": Bike,
  "Wildlife Safari Drives": Leaf,
  "Horseback Riding": TreePine,
  "ATV Trails": Mountain,
  "Crazy Horse Memorial Pass": Landmark,
  "Mount Rushmore Annual Entry": Mountain,
  "Deadwood Gaming & Historic Tours": Ticket,
  "Sturgis Rally VIP Access": Trophy,
  "Custer County Fair": Star,
  "Native American Powwows": Palette,
  "Black Hills Playhouse Theater": Music,
  "Hot Springs Mammoth Site": BookOpen,
  "Wind Cave Tours": Mountain,
  "Jewel Cave Tours": Star,
  "1880 Train Rides": MapPin,
  "MacBook Pro": Laptop,
  "AirPods Pro": Music,
  "Meta Smart Glasses": Sparkles,
  "E-Bike Campus Access": Bike,
  "Branded THE OP Merch": Shirt,
  "Annual Gear Allowance": Gift,
  "Campus Housing at Pass Creek": Home,
  "Relocation Assistance": MapPin,
  "Cost of Living: 30% Below Average": Heart,
  "Safest Small Town": Star,
  "5-Minute Commute": MapPin,
  "Seed Academy Courses": GraduationCap,
  "Barista Certification": Coffee,
  "Food Handler Certification": BookOpen,
  "Tuition Reimbursement": GraduationCap,
  "Conference Attendance Budget": Tent,
  "Mentorship from BHC Leadership": Users,
};

// ---------------------------------------------------------------------------
// SCROLL ROW
// ---------------------------------------------------------------------------

function ScrollRow({
  title,
  Icon,
  colorClass,
  items,
}: {
  title: string;
  Icon: LucideIcon;
  colorClass: string;
  items: Perk[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="group/row">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-xl bg-espresso/10 ${colorClass}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-espresso">{title}</h3>
          <span className="rounded-full bg-amber/10 px-2.5 py-0.5 text-xs font-semibold text-amber-dark">
            {items.length}
          </span>
        </div>
        <div className="hidden items-center gap-1 sm:flex opacity-0 group-hover/row:opacity-100 transition-opacity">
          <button
            onClick={() => scroll("left")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-espresso/10 text-warm-gray hover:bg-espresso/20 hover:text-espresso transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-espresso/10 text-warm-gray hover:bg-espresso/20 hover:text-espresso transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((perk) => (
          <PerkCard key={perk.title} perk={perk} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// PERK CARD
// ---------------------------------------------------------------------------

function PerkCard({ perk }: { perk: Perk }) {
  const PerkIcon = perkIcons[perk.title] || categoryMeta[perk.category].icon;
  const cost = costLabels[perk.costTier];
  const SeasonIcon = seasonMeta[perk.season].icon;

  return (
    <WarmGlow className="rounded-2xl">
      <div className="flex w-[280px] shrink-0 flex-col rounded-2xl border border-espresso/10 bg-white p-5 transition-shadow hover:shadow-lg">
        {/* Top: icon + cost badge */}
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10">
            <PerkIcon className="h-5 w-5 text-amber" />
          </div>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${cost.bg} ${cost.text} ${cost.border}`}
          >
            {cost.label}
          </span>
        </div>

        {/* Title */}
        <h4 className="mt-3 font-bold leading-tight text-espresso">
          {perk.title}
        </h4>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-warm-gray line-clamp-3">
          {perk.description}
        </p>

        {/* Meta: location + season */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-cream-dark px-2 py-0.5 text-[10px] font-medium text-warm-gray">
            <MapPin className="h-3 w-3" />
            {perk.location}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-cream-dark px-2 py-0.5 text-[10px] font-medium text-warm-gray">
            <SeasonIcon className="h-3 w-3" />
            {seasonMeta[perk.season].label}
          </span>
        </div>

        {/* Value */}
        {perk.value && (
          <div className="mt-3 text-xs font-semibold text-amber-dark">
            Value: {perk.value}
          </div>
        )}
      </div>
    </WarmGlow>
  );
}

// ---------------------------------------------------------------------------
// FILTER BAR
// ---------------------------------------------------------------------------

function FilterBar({
  activeCategory,
  setActiveCategory,
  activeSeason,
  setActiveSeason,
  activeCost,
  setActiveCost,
}: {
  activeCategory: PerkCategory | "all";
  setActiveCategory: (c: PerkCategory | "all") => void;
  activeSeason: Season | "all";
  setActiveSeason: (s: Season | "all") => void;
  activeCost: CostTier | "all";
  setActiveCost: (c: CostTier | "all") => void;
}) {
  return (
    <div className="rounded-2xl border border-espresso/10 bg-white p-5 sm:p-6">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-espresso">
        <Filter className="h-4 w-4" />
        Filter Perks
      </div>

      <div className="space-y-4">
        {/* Category */}
        <div>
          <div className="mb-2 text-xs font-medium uppercase tracking-wider text-warm-gray">
            Category
          </div>
          <div className="flex flex-wrap gap-2">
            <Pill
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
            >
              All
            </Pill>
            {(Object.keys(categoryMeta) as PerkCategory[]).map((cat) => {
              const meta = categoryMeta[cat];
              const CatIcon = meta.icon;
              return (
                <Pill
                  key={cat}
                  active={activeCategory === cat}
                  onClick={() =>
                    setActiveCategory(activeCategory === cat ? "all" : cat)
                  }
                >
                  <CatIcon className="h-3 w-3" />
                  {meta.label}
                </Pill>
              );
            })}
          </div>
        </div>

        {/* Season */}
        <div>
          <div className="mb-2 text-xs font-medium uppercase tracking-wider text-warm-gray">
            Season
          </div>
          <div className="flex flex-wrap gap-2">
            <Pill
              active={activeSeason === "all"}
              onClick={() => setActiveSeason("all")}
            >
              All Seasons
            </Pill>
            {(Object.keys(seasonMeta) as Season[]).map((s) => {
              const meta = seasonMeta[s];
              const SIcon = meta.icon;
              return (
                <Pill
                  key={s}
                  active={activeSeason === s}
                  onClick={() =>
                    setActiveSeason(activeSeason === s ? "all" : s)
                  }
                >
                  <SIcon className="h-3 w-3" />
                  {meta.label}
                </Pill>
              );
            })}
          </div>
        </div>

        {/* Cost */}
        <div>
          <div className="mb-2 text-xs font-medium uppercase tracking-wider text-warm-gray">
            Cost
          </div>
          <div className="flex flex-wrap gap-2">
            <Pill
              active={activeCost === "all"}
              onClick={() => setActiveCost("all")}
            >
              All
            </Pill>
            {(Object.keys(costLabels) as CostTier[]).map((c) => (
              <Pill
                key={c}
                active={activeCost === c}
                onClick={() => setActiveCost(activeCost === c ? "all" : c)}
              >
                {costLabels[c].label}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all ${
        active
          ? "border-amber/50 bg-amber/10 text-amber-dark"
          : "border-espresso/10 bg-transparent text-warm-gray hover:border-espresso/20 hover:text-espresso"
      }`}
    >
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// STATS BAR
// ---------------------------------------------------------------------------

function StatsBar() {
  const totalValue = perks
    .filter((p) => p.costTier === "free" && p.value)
    .reduce((sum, p) => {
      const match = p.value?.match(/\$([\d,]+)/);
      if (!match) return sum;
      return sum + parseInt(match[1].replace(/,/g, ""), 10);
    }, 0);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {[
        { value: perks.length, label: "Total Perks" },
        {
          value: perks.filter((p) => p.costTier === "free").length,
          label: "Completely Free",
        },
        { value: Object.keys(categoryMeta).length, label: "Categories" },
        {
          value: Math.round(totalValue / 1000),
          label: "Annual Value",
          prefix: "$",
          suffix: "K+",
        },
      ].map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-espresso/10 bg-white p-4 text-center"
        >
          <div className="text-2xl font-bold text-espresso">
            <CountUp
              end={stat.value}
              prefix={stat.prefix || ""}
              suffix={stat.suffix || ""}
            />
          </div>
          <div className="mt-1 text-xs font-medium uppercase tracking-wider text-warm-gray">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------

export default function PerksPage() {
  const [activeCategory, setActiveCategory] = useState<PerkCategory | "all">(
    "all",
  );
  const [activeSeason, setActiveSeason] = useState<Season | "all">("all");
  const [activeCost, setActiveCost] = useState<CostTier | "all">("all");

  const filteredPerks = perks.filter((p) => {
    if (activeCategory !== "all" && p.category !== activeCategory) return false;
    if (activeSeason !== "all" && p.season !== activeSeason) return false;
    if (activeCost !== "all" && p.costTier !== activeCost) return false;
    return true;
  });

  const hasFilters =
    activeCategory !== "all" || activeSeason !== "all" || activeCost !== "all";

  const categories = Object.keys(categoryMeta) as PerkCategory[];
  const groupedPerks = categories
    .map((cat) => ({
      category: cat,
      meta: categoryMeta[cat],
      items: filteredPerks.filter((p) => p.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              Employee Perks
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Working at THE OP Comes{" "}
              <AmberShimmer>With Everything</AmberShimmer>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-cream/70">
              Free coffee on every shift. National parks in your backyard. A
              campus community that feels like home. This is not your average
              coffee shop gig — it is the best job in the Black Hills.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-espresso/10 bg-cream-dark px-6 py-8">
        <FadeIn>
          <div className="mx-auto max-w-7xl">
            <StatsBar />
          </div>
        </FadeIn>
      </section>

      {/* Filter + Content */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <FilterBar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeSeason={activeSeason}
              setActiveSeason={setActiveSeason}
              activeCost={activeCost}
              setActiveCost={setActiveCost}
            />
          </FadeIn>

          {/* Results count */}
          {hasFilters && (
            <FadeIn>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-warm-gray">
                  Showing{" "}
                  <span className="font-semibold text-espresso">
                    {filteredPerks.length}
                  </span>{" "}
                  of {perks.length} perks
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setActiveSeason("all");
                    setActiveCost("all");
                  }}
                  className="text-xs font-medium text-amber-dark hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            </FadeIn>
          )}

          {/* Category Rows */}
          <div className="mt-10 space-y-10">
            {groupedPerks.map((group) => (
              <FadeIn key={group.category}>
                <ScrollRow
                  title={group.meta.label}
                  Icon={group.meta.icon}
                  colorClass={group.meta.colorClass}
                  items={group.items}
                />
              </FadeIn>
            ))}
          </div>

          {filteredPerks.length === 0 && (
            <FadeIn>
              <div className="mt-16 text-center">
                <p className="text-lg text-warm-gray">
                  No perks match your current filters.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setActiveSeason("all");
                    setActiveCost("all");
                  }}
                  className="mt-2 text-sm font-medium text-amber-dark hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Lifestyle Comparison */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Coffee Shop Job vs. <AmberShimmer>THE OP</AmberShimmer>
            </h2>
            <p className="mt-3 text-cream/60">
              We do not compete with other coffee shops. We compete with tech
              companies.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Base Pay", them: "$15/hr", us: "$145K salary" },
              {
                label: "Benefits",
                them: "Maybe dental",
                us: "Full family PPO",
              },
              { label: "Tech", them: "Your phone", us: "MacBook + AirPods" },
              { label: "Commute", them: "30+ minutes", us: "5 min or walk" },
              { label: "Growth", them: "Shift lead", us: "Run the business" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="rounded-2xl border border-cream/10 bg-cream/5 p-5">
                  <div className="mb-3 text-xs font-medium uppercase tracking-wider text-cream/40">
                    {item.label}
                  </div>
                  <div className="mb-1 text-sm text-cream/40 line-through">
                    {item.them}
                  </div>
                  <div className="text-sm font-bold text-amber">{item.us}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <ScaleReveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-espresso">
              Ready to Join the Team?
            </h2>
            <p className="mb-8 text-lg text-warm-gray">
              $145K base salary. Free coffee. National parks. A campus that is
              building something unprecedented. This is what working at THE OP
              looks like.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/careers"
                className="rounded-full bg-espresso px-8 py-3 font-semibold text-cream transition-colors hover:bg-espresso-light"
              >
                View Open Positions
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-espresso/20 px-8 py-3 font-semibold text-espresso transition-colors hover:bg-espresso/5"
              >
                Learn About THE OP
              </Link>
            </div>
          </div>
        </ScaleReveal>
      </section>
    </>
  );
}
