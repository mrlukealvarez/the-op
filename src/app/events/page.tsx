import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Mic,
  Brain,
  Film,
  Music,
  PartyPopper,
  Palette,
  Coffee,
  Rocket,
  DollarSign,
  Users,
  MapPin,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Community events and gatherings at THE OP in Custer, SD. Small-scale events and a community bulletin board. For full-scale conventions, visit THE CULT Events LLC.",
  openGraph: {
    title: "Events | THE OP",
    description:
      "Community events and gatherings at THE OP. For full-scale conventions, visit THE CULT Events LLC.",
  },
};

const upcomingEvents = [
  {
    icon: Mic,
    title: "Open Mic Nights",
    date: "Every Thursday, 7:00 PM",
    description:
      "Local musicians, poets, comedians — bring your talent or just bring your ears. Sign-ups start at 6:30 PM. Free entry, food and drink revenue.",
    tag: "Weekly",
  },
  {
    icon: Brain,
    title: "Trivia Nights",
    date: "Every Tuesday, 7:30 PM",
    description:
      "Black Hills history, tech trivia, pop culture, food and drink. Teams of 4, prizes for top 3. Categories rotate weekly.",
    tag: "Weekly",
  },
  {
    icon: Film,
    title: "Outpost Media Live",
    date: "First Saturday of each month, 2:00 PM",
    description:
      "Live podcast recordings of The Session and other Outpost Media shows. Audience Q&A. Become part of the content.",
    tag: "Monthly",
  },
  {
    icon: Music,
    title: "Acoustic Sessions",
    date: "Every Friday, 6:00 PM",
    description:
      "Local and touring acoustic artists in an intimate setting. Full menu available throughout the show.",
    tag: "Weekly",
  },
  {
    icon: PartyPopper,
    title: "Looking for Conventions?",
    date: "Visit THE CULT Events LLC",
    description:
      "Full-scale events, conventions, and festivals are now managed by THE CULT Events LLC. THE OP focuses on small community gatherings and daily campus life.",
    tag: "Note",
  },
  {
    icon: Rocket,
    title: "Startup Pitch Night",
    date: "Third Thursday of each month, 6:00 PM",
    description:
      "Seed Labs and Auric Labs founders pitch to the local audience. Community feedback, investor introductions. Where great ideas get their first real test.",
    tag: "Monthly",
  },
  {
    icon: Palette,
    title: "Art Shows",
    date: "Second Friday of each month",
    description:
      "Local Black Hills artists featured on the cafe walls. Opening night receptions with the artists. 15% commission to THE OP on all sales.",
    tag: "Monthly",
  },
  {
    icon: Coffee,
    title: "Sunday Morning Sessions",
    date: "Every Sunday, 9:00 AM",
    description:
      "Coffee and conversation. Community planning, town hall style. Where Custer residents shape what comes next. No agenda, just people.",
    tag: "Weekly",
  },
  {
    icon: Calendar,
    title: "Community Board Meetup",
    date: "Second Wednesday, 6:00 PM",
    description:
      "Local business owners, nonprofits, and community organizers gather to share updates and collaborate on regional projects.",
    tag: "Monthly",
  },
];

const weeklySchedule = [
  { day: "Monday", event: "Happy Hour (4-6 PM)", detail: "Discounted drinks for campus workers" },
  { day: "Tuesday", event: "Trivia Night (7:30 PM)", detail: "Teams of 4, prizes" },
  { day: "Wednesday", event: "Wellness Wednesday", detail: "Specialty drinks + local wellness vendors" },
  { day: "Thursday", event: "Open Mic (7 PM)", detail: "Music, comedy, poetry" },
  { day: "Friday", event: "Acoustic Sessions (6 PM)", detail: "Live music + Art Show (2nd Fri)" },
  { day: "Saturday", event: "Rotating Special", detail: "Outpost Media Live (1st Sat)" },
  { day: "Sunday", event: "Morning Sessions (9 AM)", detail: "Coffee + community conversation" },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              The Living Room of the Empire
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Events at THE OP</h1>
            <p className="max-w-xl text-cream/70">
              Small-scale community events and gatherings. Open mics, trivia, live
              recordings, art shows, and conversations. <span className="text-amber">Looking for large conventions? Visit THE CULT Events LLC.</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Revenue Model Callout */}
      <section className="bg-amber/5 px-6 py-12 border-b border-espresso/10">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Users, value: "14.9M", label: "Annual tourists past Custer" },
                { icon: Coffee, value: "2M+", label: "Tourists past campus yearly" },
                { icon: DollarSign, value: "$0", label: "Rent (owned campus)" },
                { icon: MapPin, value: "25 min", label: "From Mount Rushmore" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-espresso/10">
                    <stat.icon className="h-5 w-5 text-espresso" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-espresso">{stat.value}</p>
                    <p className="text-xs text-warm-gray">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-warm-gray leading-relaxed max-w-3xl">
              Every visitor to THE OP becomes a potential GrowWise lead, Seed Academy student,
              or Settle the West relocator. The BHC flywheel means every cup of coffee sold
              generates value across all 11 entities.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold text-espresso">Event Calendar</h2>
            <p className="mt-2 text-warm-gray">
              Weekly staples, monthly showcases, and quarterly festivals.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <StaggerItem key={event.title}>
                <div className="flex h-full flex-col rounded-2xl border border-espresso/10 bg-white p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10">
                      <event.icon className="h-5 w-5 text-amber-dark" />
                    </div>
                    <span className="rounded-full bg-amber/10 px-3 py-1 text-xs font-medium text-amber-dark">
                      {event.tag}
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-espresso">
                    {event.title}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-amber-dark">
                    {event.date}
                  </p>
                  <p className="flex-1 text-sm leading-relaxed text-warm-gray">
                    {event.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold">Weekly Schedule</h2>
          </FadeIn>

          <StaggerContainer className="space-y-3">
            {weeklySchedule.map((day) => (
              <StaggerItem key={day.day}>
                <div className="flex flex-col rounded-xl border border-cream/10 bg-cream/5 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="w-28 text-sm font-semibold text-amber">
                      {day.day}
                    </span>
                    <span className="font-medium text-cream">{day.event}</span>
                  </div>
                  <span className="mt-2 text-sm text-cream/50 sm:mt-0">
                    {day.detail}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Host Your Event CTA */}
      <section className="px-6 py-20 text-center">
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-espresso">
              Host Your Event at THE OP
            </h2>
            <p className="mb-8 text-warm-gray">
              Private parties, corporate events, product launches, and more. THE
              OP&apos;s space can be configured for groups of 20 to 100+.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-espresso px-8 py-3 font-semibold text-cream transition-colors hover:bg-espresso-light"
            >
              Inquire About Events
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
