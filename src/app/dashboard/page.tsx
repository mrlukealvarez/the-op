"use client"

import { Area, AreaChart, Cell, Pie, PieChart } from "recharts"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const stats = [
  { name: "Y1 Revenue", value: "$600K", change: "+35% vs projection" },
  { name: "Daily Customers", value: "150", change: "+22% vs last month" },
  { name: "Events/Month", value: "12", change: "Consistent schedule" },
  { name: "Community Members", value: "500", change: "+18% this quarter" },
]

const revenueByCategory = [
  { name: "Coffee/Drinks", value: 35, fill: "#F59E0B" },
  { name: "Food", value: 25, fill: "#D97706" },
  { name: "Cannabis Menu", value: 20, fill: "#4CAF50" },
  { name: "Events", value: 15, fill: "#B45309" },
  { name: "Merch", value: 5, fill: "#92400E" },
]

const monthlyFootTraffic = [
  { month: "M1", customers: 120 },
  { month: "M2", customers: 135 },
  { month: "M3", customers: 150 },
  { month: "M4", customers: 165 },
  { month: "M5", customers: 180 },
  { month: "M6", customers: 195 },
  { month: "M7", customers: 210 },
  { month: "M8", customers: 225 },
  { month: "M9", customers: 240 },
  { month: "M10", customers: 255 },
  { month: "M11", customers: 270 },
  { month: "M12", customers: 285 },
]

const chartConfig = {
  customers: {
    label: "Daily Customers",
    color: "#F59E0B",
  },
}

const pieChartConfig = {
  "Coffee/Drinks": {
    label: "Coffee/Drinks",
    color: "#F59E0B",
  },
  Food: {
    label: "Food",
    color: "#D97706",
  },
  "Cannabis Menu": {
    label: "Cannabis Menu",
    color: "#4CAF50",
  },
  Events: {
    label: "Events",
    color: "#B45309",
  },
  Merch: {
    label: "Merch",
    color: "#92400E",
  },
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-cream">Cafe Overview</h1>
        <p className="mt-2 text-warm-gray-light">
          Living Room of the Empire — Real-time metrics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl"
          >
            <p className="text-sm text-warm-gray-light">{stat.name}</p>
            <p className="mt-2 text-3xl font-bold text-cream">{stat.value}</p>
            <p className="mt-1 text-xs text-amber">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Revenue by Category */}
      <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-bold text-cream">
          Revenue by Category
        </h2>
        <ChartContainer config={pieChartConfig} className="h-[300px]">
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent className="bg-espresso text-cream" />}
            />
            <Pie
              data={revenueByCategory}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {revenueByCategory.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <ChartLegend content={<ChartLegendContent payload={[]} />} />
          </PieChart>
        </ChartContainer>
      </div>

      {/* Monthly Foot Traffic */}
      <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-bold text-cream">
          Monthly Foot Traffic Projection
        </h2>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <AreaChart data={monthlyFootTraffic}>
            <defs>
              <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <ChartTooltip
              content={<ChartTooltipContent className="bg-espresso text-cream" />}
            />
            <Area
              type="monotone"
              dataKey="customers"
              stroke="#F59E0B"
              fillOpacity={1}
              fill="url(#colorCustomers)"
            />
          </AreaChart>
        </ChartContainer>
      </div>

      {/* Engagement Score */}
      <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl">
        <h2 className="mb-4 text-xl font-bold text-cream">
          Living Room of the Empire
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-warm-gray-light">Community Engagement</span>
              <span className="font-mono text-amber">92/100</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-espresso-light">
              <div
                className="h-full bg-amber"
                style={{ width: "92%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-warm-gray-light">Settle the West Referrals</span>
              <span className="font-mono text-amber">87/100</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-espresso-light">
              <div
                className="h-full bg-amber"
                style={{ width: "87%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-warm-gray-light">Local Business Partnerships</span>
              <span className="font-mono text-amber">95/100</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-espresso-light">
              <div
                className="h-full bg-amber"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
