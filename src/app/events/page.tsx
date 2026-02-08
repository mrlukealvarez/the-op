import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Mic, Brain, Film, Music, PartyPopper } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Live events at THE OP in Custer, SD — open mic nights, trivia, live recordings, and community gatherings.",
  openGraph: {
    title: "Events | THE OP",
    description:
      "Live events at THE OP — open mic nights, trivia, live recordings, and community gatherings.",
  },
};

const upcomingEvents = [
  {
    icon: Mic,
    title: "Open Mic Night",
    date: "Every Thursday, 7:00 PM",
    description:
      "Poets, musicians, comedians — bring your talent or just bring your ears. Sign-ups start at 6:30 PM.",
    tag: "Weekly",
  },
  {
    icon: Brain,
    title: "THE OP Trivia",
    date: "Every Tuesday, 7:30 PM",
    description:
      "Teams of up to 6. Categories rotate weekly — cannabis culture, Black Hills history, pop culture, and more.",
    tag: "Weekly",
  },
  {
    icon: Film,
    title: "Outpost Media Live Recording",
    date: "First Saturday of each month, 2:00 PM",
    description:
      "Watch The Session and other Outpost Media shows record live from THE OP. Free admission, great vibes.",
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
    title: "THE CULT Pre-Party",
    date: "Quarterly (planned — launching 2026)",
    description:
      "The official pre-event for THE CULT convention. Networking, product tastings, and exclusive previews.",
    tag: "Planned",
  },
  {
    icon: Calendar,
    title: "Community Board Meetup",
    date: "Second Wednesday, 6:00 PM",
    description:
      "Local business owners, nonprofits, and community organizers gather to share updates and collaborate.",
    tag: "Monthly",
  },
];

const weeklySchedule = [
  { day: "Monday", event: "Coworking Happy Hour (4-6 PM)", detail: "Discounted drinks for remote workers" },
  { day: "Tuesday", event: "Trivia Night (7:30 PM)", detail: "Teams of up to 6" },
  { day: "Wednesday", event: "Wellness Wednesday", detail: "CBD specials all day" },
  { day: "Thursday", event: "Open Mic (7 PM)", detail: "Music, comedy, poetry" },
  { day: "Friday", event: "Acoustic Sessions (6 PM)", detail: "Live music" },
  { day: "Saturday", event: "Rotating Special", detail: "Check socials for details" },
  { day: "Sunday", event: "Slow Sunday", detail: "Extended brunch menu, chill vibes" },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-espresso px-6 py-20 text-cream">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
              What&apos;s Happening
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Events at THE OP</h1>
            <p className="max-w-xl text-cream/70">
              Something happening every night. Open mics, trivia, live
              recordings, community meetups, and more.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold text-espresso">Upcoming Events</h2>
          </FadeIn>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <StaggerItem key={event.title}>
                <div className="flex h-full flex-col rounded-2xl border border-espresso/10 bg-white p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10">
                      <event.icon className="h-5 w-5 text-amber-dark" />
                    </div>
                    <span className="rounded-full bg-cannabis-green/10 px-3 py-1 text-xs font-medium text-cannabis-green-dark">
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
