"use client"

import { Bar, BarChart, Line, LineChart } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const eventTypeBreakdown = [
  { type: "Open Mic", count: 4 },
  { type: "Trivia Night", count: 3 },
  { type: "Live Recordings", count: 2 },
  { type: "CULT Pre-Events", count: 2 },
  { type: "Community Meetings", count: 1 },
]

const revenueByEventType = [
  { type: "Live Recordings", revenue: 8500 },
  { type: "CULT Pre-Events", revenue: 7200 },
  { type: "Open Mic", revenue: 4800 },
  { type: "Trivia Night", revenue: 3600 },
  { type: "Community Meetings", revenue: 1200 },
]

const attendanceTrends = [
  { month: "Aug", avg: 45 },
  { month: "Sep", avg: 52 },
  { month: "Oct", avg: 61 },
  { month: "Nov", avg: 68 },
  { month: "Dec", avg: 75 },
  { month: "Jan", avg: 82 },
]

const upcomingEvents = [
  {
    name: "Open Mic Night",
    date: "Feb 12, 2026",
    time: "7:00 PM",
    expected: 65,
  },
  {
    name: "Trivia: Cannabis History",
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

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-cream">Event Analytics</h1>
        <p className="mt-2 text-warm-gray-light">
          Track performance across all event types
        </p>
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
                  className="h-full bg-cannabis-green"
                  style={{ width: `${(event.revenue / 8500) * 100}%` }}
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
          {upcomingEvents.map((event, index) => (
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
