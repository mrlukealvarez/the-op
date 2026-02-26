import {
  getCafeEvents,
  getUpcomingEvents,
  getCafeStats,
  getEventsByType,
} from "@/lib/db/dashboard-queries";
import EventsClient from "./events-client";

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const events = await getCafeEvents(50);
  const upcomingEvents = await getUpcomingEvents();
  const stats = await getCafeStats();
  const eventsByType = await getEventsByType();

  return (
    <EventsClient
      events={events}
      upcomingEvents={upcomingEvents}
      stats={stats}
      eventsByType={eventsByType}
    />
  );
}
