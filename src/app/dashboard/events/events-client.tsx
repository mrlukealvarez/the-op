"use client"

import { Bar, BarChart, Line, LineChart } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { CafeEvent, CafeStats } from "@/lib/db/dashboard-queries"

// ── Seed Data (fallback when Supabase not configured) ────────────────

const SEED_EVENT_TYPE_BREAKDOWN = [
  { type: "Open Mic", count: 4 },
  { type: "Trivia Night", count: 3 },
  { type: "Live Recordings", count: 2 },
  { type: "CULT Pre-Events", count: 2 },
  { type: "Community Meetings", count: 1 },
]

const SEED_REVENUE_BY_TYPE = [
  { type: "Live Recordings", revenue: 8500 },
  { type: "CULT Pre-Events", revenue: 7200 },
  { type: "Open Mic", revenue: 4800 },
  { type: "Trivia Night", revenue: 3600 },
  { type: "Community Meetings", revenue: 1200 },
]

const SEED_ATTENDANCE_TRENDS = [
  { month: "Aug", avg: 45 },
  { month: "Sep", avg: 52 },
  { month: "Oct", avg: 61 },
  { month: "Nov", avg: 68 },
  { month: "Dec", avg: 75 },
  { month: "Jan", avg: 82 },
]

const SEED_UPCOMING_EVENTS = [
  {
    name: "Open Mic Night",
    date: "Feb 12, 2026",
    time: "7:00 PM",
    expected: 65,
  },
  {
    name: "Trivia: Black Hills History",
    date: "Feb 15, 2026",
    time: "6:30 PM",
    expected: 55,
  },
  {
    name: "The Session Podcast Recording",
    date: "Feb 18, 2026",
    time: "3:00 PM",
    expected: 85,
  },
  {
    name: "CULT Pre-Party Meetup",
    date: "Feb 22, 2026",
    time: "8:00 PM",
    expected: 90,
  },
]

const chartConfig = {
  count: {
    label: "Events",
    color: "#F59E0B",
  },
  revenue: {
    label: "Revenue",
    color: "#4CAF50",
  },
  avg: {
    label: "Avg Attendance",
    color: "#F59E0B",
  },
}

// ── Event type display name mapping ──────────────────────────────────

const EVENT_TYPE_LABELS: Record<string, string> = {
  open_mic: "Open Mic",
  trivia: "Trivia Night",
  live_recording: "Live Recordings",
  cult_event: "CULT Pre-Events",
  community: "Community Meetings",
  private: "Private Events",
  workshop: "Workshop",
}

// ── Types ────────────────────────────────────────────────────────────

interface EventsClientProps {
  events?: CafeEvent[] | null
  upcomingEvents?: CafeEvent[] | null
  stats?: CafeStats | null
  eventsByType?: Array<{ type: string; count: number; revenue: number }> | null
}

export default function EventsClient({ events, upcomingEvents, stats, eventsByType }: EventsClientProps) {
  // Derive event type breakdown from live data or use seed
  const eventTypeBreakdown = eventsByType && eventsByType.length > 0
    ? eventsByType.map(e => ({ type: EVENT_TYPE_LABELS[e.type] || e.type, count: e.count }))
    : SEED_EVENT_TYPE_BREAKDOWN

  // Derive revenue by type from live data or use seed
  const revenueByEventType = eventsByType && eventsByType.length > 0
    ? eventsByType
        .map(e => ({ type: EVENT_TYPE_LABELS[e.type] || e.type, revenue: e.revenue }))
        .sort((a, b) => b.revenue - a.revenue)
    : SEED_REVENUE_BY_TYPE

  const maxRevenue = revenueByEventType.reduce((max, e) => Math.max(max, e.revenue), 1)

  // Attendance trends from completed events or seed
  const attendanceTrends = events && events.length > 0
    ? (() => {
        const months: Record<string, { total: number; count: number }> = {}
        for (const e of events) {
          if (e.actual_attendance && e.date) {
            const m = new Date(e.date).toLocaleString("default", { month: "short" })
            if (!months[m]) months[m] = { total: 0, count: 0 }
            months[m].total += e.actual_attendance
            months[m].count++
          }
        }
        return Object.entries(months).map(([month, v]) => ({
          month,
          avg: Math.round(v.total / v.count),
        }))
      })()
    : SEED_ATTENDANCE_TRENDS

  // Upcoming events from live data or seed
  const upcoming = upcomingEvents && upcomingEvents.length > 0
    ? upcomingEvents.map(e => ({
        name: e.event_name,
        date: new Date(e.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        time: e.start_time ? e.start_time.slice(0, 5) : "TBD",
        expected: e.expected_attendance ?? 0,
      }))
    : SEED_UPCOMING_EVENTS

  const isLive = !!(events && events.length > 0)

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-cream">Event Analytics</h1>
          <p className="mt-2 text-warm-gray-light">
            Track performance across all event types
          </p>
        </div>
        <div className={`px-3 py-1.5 ${isLive ? "bg-emerald-500/10 border-emerald-500/20" : "bg-amber-500/10 border-amber-500/20"} border rounded-lg`}>
          <p className={`${isLive ? "text-emerald-400" : "text-amber-400"} text-xs font-medium`}>
            {isLive ? "Live Data" : "Sample Data"}
          </p>
        </div>
      </div>

      {/* Event Type Breakdown */}
      <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-bold text-cream">
          Events This Month by Type
        </h2>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <BarChart data={eventTypeBreakdown}>
            <ChartTooltip
              content={<ChartTooltipContent className="bg-espresso text-cream" />}
            />
            <Bar dataKey="count" fill="#F59E0B" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </div>

      {/* Revenue per Event Type */}
      <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-bold text-cream">
          Revenue by Event Type (Last 30 Days)
        </h2>
        <div className="space-y-4">
          {revenueByEventType.map((event) => (
            <div key={event.type}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-cream">{event.type}</span>
                <span className="font-mono text-amber">
                  ${event.revenue.toLocaleString()}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-espresso-light">
                <div
                  className="h-full bg-amber"
                  style={{ width: `${(event.revenue / maxRevenue) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance Trends */}
      <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-bold text-cream">
          Attendance Trends (6 Months)
        </h2>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <LineChart data={attendanceTrends}>
            <ChartTooltip
              content={<ChartTooltipContent className="bg-espresso text-cream" />}
            />
            <Line
              type="monotone"
              dataKey="avg"
              stroke="#F59E0B"
              strokeWidth={3}
              dot={{ fill: "#F59E0B", r: 4 }}
            />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Upcoming Events Calendar */}
      <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-bold text-cream">
          Upcoming Events (Next 4 Weeks)
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {upcoming.map((event, index) => (
            <div
              key={index}
              className="rounded-xl border border-cream/10 bg-espresso-light/50 p-4"
            >
              <h3 className="font-semibold text-cream">{event.name}</h3>
              <p className="mt-2 text-sm text-warm-gray-light">
                {event.date} at {event.time}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-warm-gray-light">
                  Expected Attendance
                </span>
                <span className="font-mono text-sm text-amber">
                  {event.expected} people
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
