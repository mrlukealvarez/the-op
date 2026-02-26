"use client";

import { Area, AreaChart, Cell, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Coffee,
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  Database,
} from "lucide-react";

/* ─── KPI Card Component ─── */
function KPICard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-cream/15 bg-cream/5 p-5">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm uppercase tracking-wider text-cream/80">
          {label}
        </span>
      </div>
      <p className="mt-2 font-mono text-2xl font-bold text-cream">{value}</p>
      <p className="mt-1 text-xs text-amber">{sub}</p>
    </div>
  );
}

/* ─── Static Data ─── */
const revenueByCategory = [
  { name: "Coffee/Drinks", value: 35, fill: "#F59E0B" },
  { name: "Dirty Sodas", value: 15, fill: "#10b981" },
  { name: "Food", value: 20, fill: "#D97706" },
  { name: "Local Beer/Cider", value: 10, fill: "#3E2723" },
  { name: "Merch", value: 20, fill: "#92400E" },
];

const monthlyFootTraffic = [
  { month: "M1", customers: 1200 },
  { month: "M2", customers: 1350 },
  { month: "M3", customers: 1500 },
  { month: "M4", customers: 1650 },
  { month: "M5", customers: 1750 },
  { month: "M6", customers: 1850 },
  { month: "M7", customers: 1950 },
  { month: "M8", customers: 2100 },
  { month: "M9", customers: 2200 },
  { month: "M10", customers: 2300 },
  { month: "M11", customers: 2350 },
  { month: "M12", customers: 2400 },
];

const chartConfig = {
  customers: {
    label: "Monthly Customers",
    color: "#F59E0B",
  },
};

const pieChartConfig = {
  "Coffee/Drinks": {
    label: "Coffee/Drinks",
    color: "#F59E0B",
  },
  "Dirty Sodas": {
    label: "Dirty Sodas",
    color: "#10b981",
  },
  Food: {
    label: "Food",
    color: "#D97706",
  },
  "Local Beer/Cider": {
    label: "Local Beer/Cider",
    color: "#3E2723",
  },
  Merch: {
    label: "Merch",
    color: "#92400E",
  },
};

const daypartData = [
  {
    daypart: "Morning",
    hours: "8-11am",
    customers: 25,
    avgTicket: "$8.50",
    dailyRev: "$213",
    annualRev: "$74K",
  },
  {
    daypart: "Lunch",
    hours: "11am-2pm",
    customers: 20,
    avgTicket: "$12.00",
    dailyRev: "$240",
    annualRev: "$84K",
  },
  {
    daypart: "Afternoon",
    hours: "2-6pm",
    customers: 15,
    avgTicket: "$9.00",
    dailyRev: "$135",
    annualRev: "$47K",
  },
  {
    daypart: "Evening",
    hours: "6-9pm",
    customers: 20,
    avgTicket: "$11.00",
    dailyRev: "$220",
    annualRev: "$77K",
  },
];

const menuEconomics = [
  {
    category: "Dirty Sodas",
    margin: 90,
    why: "Near-zero COGS — cream + syrup already stocked",
    star: true,
  },
  { category: "Coffee", margin: 78, why: "Third-wave from Black Hills Coffee" },
  {
    category: "Merch",
    margin: 70,
    why: "BHC branded + local artisan products",
  },
  { category: "Beer/Cider", margin: 65, why: "4 local breweries on tap" },
  {
    category: "Food",
    margin: 55,
    why: "Local bakery sourcing, counter prep only",
  },
];

const pnlData = [
  {
    metric: "Revenue",
    y1: "$380K",
    y2: "$600K",
    y3: "$900K",
    y4: "$1.3M",
    y5: "$1.9M",
    highlight: false,
  },
  {
    metric: "COGS",
    y1: "$160K",
    y2: "$253K",
    y3: "$380K",
    y4: "$550K",
    y5: "$805K",
    highlight: false,
  },
  {
    metric: "Gross Profit",
    y1: "$220K",
    y2: "$347K",
    y3: "$520K",
    y4: "$750K",
    y5: "$1.095M",
    highlight: false,
  },
  {
    metric: "OpEx",
    y1: "$202K",
    y2: "$254K",
    y3: "$322K",
    y4: "$408K",
    y5: "$506K",
    highlight: false,
  },
  {
    metric: "Net Income",
    y1: "$18K",
    y2: "$93K",
    y3: "$198K",
    y4: "$342K",
    y5: "$589K",
    highlight: "green",
  },
  {
    metric: "Net Margin",
    y1: "4.7%",
    y2: "15.5%",
    y3: "22.0%",
    y4: "26.3%",
    y5: "31.0%",
    highlight: "amber",
  },
];

const flywheelCards = [
  {
    text: "Remote workers \u2192 THE OP regulars \u2192 content for Outpost Media \u2192 more relocators",
  },
  {
    text: "FlowBot POS live demo \u2192 investors see platform while ordering coffee",
  },
  {
    text: "Tourists (14.9M annual SD visitors) \u2192 merch purchase \u2192 walking billboards nationwide",
  },
  {
    text: "Only evening food/drink in Custer (pop. 2,100) \u2192 monopoly position after 6pm",
  },
  {
    text: "Zero rent on owned campus \u2192 15-20% margin advantage vs. typical cafe",
  },
];

const competitors = [
  {
    name: "Minder\u2019s Cup",
    hours: "Tue-Sat, 6:30am-12:30pm",
    advantage: "+61 extra hours, Mon-Sun",
  },
  {
    name: "Wild Spruce Market",
    hours: "Mon-Sat 9:30am-6:30pm",
    advantage: "+33 extra hours, evening monopoly",
  },
  {
    name: "Baker\u2019s Bakery",
    hours: "6:30am-4pm daily",
    advantage: "+24.5 extra hours, fills evening gap",
  },
  {
    name: "Calamity Jane\u2019s",
    hours: "6:30am-2pm daily",
    advantage: "+38.5 extra hours",
  },
];

/* ─── Interfaces ─── */
interface EntityFinancialData {
  allocation_millions: number;
  y1_revenue_millions: number | null;
  y1_revenue_label: string;
  y5_revenue_millions: number | null;
  y5_revenue_label: string | null;
}

interface OverviewClientProps {
  crmAccountCount: number;
  entityMetrics: Array<{ metric_type: string; metric_value: string }>;
  entityFinancial?: EntityFinancialData | null;
}

export default function OverviewClient({
  crmAccountCount,
  entityMetrics,
  entityFinancial,
}: OverviewClientProps) {
  const y1Label = entityFinancial?.y1_revenue_label || "$380K";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-cream">Cafe Overview</h1>
        <p className="mt-2 text-cream/80">
          Living Room of the Empire — Real-time metrics
        </p>
      </div>

      {/* Live Data Banner */}
      {crmAccountCount > 0 && (
        <div className="flex items-center gap-3 rounded-xl border border-amber/20 bg-amber/5 px-4 py-3">
          <Database className="h-5 w-5 text-amber" />
          <p className="text-sm text-cream/80">
            Connected to live CRM —{" "}
            <span className="font-semibold text-amber">
              {crmAccountCount.toLocaleString()}
            </span>{" "}
            accounts in database
          </p>
        </div>
      )}

      {/* 6 KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <KPICard
          icon={<Coffee className="h-4 w-4 text-amber" />}
          label="Y1 Revenue"
          value={y1Label}
          sub="Coffee + merch + dirty sodas"
        />
        <KPICard
          icon={<DollarSign className="h-4 w-4 text-amber" />}
          label="Daily Customers"
          value="80"
          sub="4 dayparts"
        />
        <KPICard
          icon={<Users className="h-4 w-4 text-amber" />}
          label="Avg Transaction"
          value="$10.09"
          sub="Blended across menu"
        />
        <KPICard
          icon={<Clock className="h-4 w-4 text-amber" />}
          label="Evening Revenue"
          value="$77K/yr"
          sub="6-9pm monopoly — zero competition"
        />
        <KPICard
          icon={<TrendingUp className="h-4 w-4 text-amber" />}
          label="Y5 Net Margin"
          value="31%"
          sub="$589K net on $1.9M"
        />
        <KPICard
          icon={<Database className="h-4 w-4 text-amber" />}
          label="CRM Accounts"
          value={
            crmAccountCount > 0 ? crmAccountCount.toLocaleString() : "\u2014"
          }
          sub="Live from Supabase"
        />
      </div>

      {/* Daypart Economics */}
      <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
        <h2 className="mb-6 text-xl font-bold text-cream">Daypart Economics</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cream/25">
                <th className="py-3 px-4 text-left text-sm uppercase tracking-wider text-cream/80">
                  Daypart
                </th>
                <th className="py-3 px-4 text-left text-sm uppercase tracking-wider text-cream/80">
                  Hours
                </th>
                <th className="py-3 px-4 text-right text-sm uppercase tracking-wider text-cream/80">
                  Customers
                </th>
                <th className="py-3 px-4 text-right text-sm uppercase tracking-wider text-cream/80">
                  Avg Ticket
                </th>
                <th className="py-3 px-4 text-right text-sm uppercase tracking-wider text-cream/80">
                  Daily Rev
                </th>
                <th className="py-3 px-4 text-right text-sm uppercase tracking-wider text-cream/80">
                  Annual Rev
                </th>
              </tr>
            </thead>
            <tbody>
              {daypartData.map((row) => (
                <tr
                  key={row.daypart}
                  className="border-b border-cream/15 even:bg-cream/5"
                >
                  <td className="py-3 px-4 font-medium text-cream">
                    {row.daypart}
                  </td>
                  <td className="py-3 px-4 text-cream/80">{row.hours}</td>
                  <td className="py-3 px-4 text-right font-mono text-cream">
                    {row.customers}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-cream">
                    {row.avgTicket}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-cream">
                    {row.dailyRev}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-cream">
                    {row.annualRev}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-cream/25">
                <td className="py-3 px-4 font-bold text-cream">Total</td>
                <td className="py-3 px-4 text-cream/80"></td>
                <td className="py-3 px-4 text-right font-mono font-bold text-cream">
                  80
                </td>
                <td className="py-3 px-4 text-right font-mono font-bold text-cream">
                  $10.09
                </td>
                <td className="py-3 px-4 text-right font-mono font-bold text-cream">
                  $808
                </td>
                <td className="py-3 px-4 text-right font-mono font-bold text-amber">
                  $282K
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Menu Economics */}
      <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
        <h2 className="mb-6 text-xl font-bold text-cream">Menu Economics</h2>
        <div className="space-y-4">
          {menuEconomics.map((item) => (
            <div key={item.category}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-cream">
                  {item.category}
                  {item.star && (
                    <span className="ml-2 text-xs text-amber">
                      (star performer)
                    </span>
                  )}
                </span>
                <span
                  className={`font-mono font-bold ${item.star ? "text-green-400" : "text-amber"}`}
                >
                  {item.margin}%
                </span>
              </div>
              <p className="mt-1 text-xs text-cream/80">{item.why}</p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-espresso-light">
                <div
                  className={`h-full rounded-full ${item.star ? "bg-green-400" : "bg-amber"}`}
                  style={{ width: `${item.margin}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue by Category */}
      <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
        <h2 className="mb-6 text-xl font-bold text-cream">
          Revenue by Category
        </h2>
        <ChartContainer config={pieChartConfig} className="h-[300px]">
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent className="bg-espresso text-cream" />
              }
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
      <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
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
              content={
                <ChartTooltipContent className="bg-espresso text-cream" />
              }
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

      {/* P&L Table (Y1-Y5) */}
      <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
        <h2 className="mb-6 text-xl font-bold text-cream">
          P&L Projection (Y1-Y5)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cream/25">
                <th className="py-3 px-4 text-left text-sm uppercase tracking-wider text-cream/80">
                  Metric
                </th>
                <th className="py-3 px-4 text-right text-sm uppercase tracking-wider text-cream/80">
                  Y1
                </th>
                <th className="py-3 px-4 text-right text-sm uppercase tracking-wider text-cream/80">
                  Y2
                </th>
                <th className="py-3 px-4 text-right text-sm uppercase tracking-wider text-cream/80">
                  Y3
                </th>
                <th className="py-3 px-4 text-right text-sm uppercase tracking-wider text-cream/80">
                  Y4
                </th>
                <th className="py-3 px-4 text-right text-sm uppercase tracking-wider text-cream/80">
                  Y5
                </th>
              </tr>
            </thead>
            <tbody>
              {pnlData.map((row) => (
                <tr
                  key={row.metric}
                  className="border-b border-cream/15 even:bg-cream/5"
                >
                  <td
                    className={`py-3 px-4 font-medium ${row.highlight ? "font-bold text-cream" : "text-cream"}`}
                  >
                    {row.metric}
                  </td>
                  {[row.y1, row.y2, row.y3, row.y4, row.y5].map((val, i) => (
                    <td
                      key={i}
                      className={`py-3 px-4 text-right font-mono ${
                        row.highlight === "green"
                          ? "font-bold text-green-400"
                          : row.highlight === "amber"
                            ? "font-bold text-amber"
                            : "text-cream"
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Living Room of the Empire — Flywheel */}
      <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
        <h2 className="mb-4 text-xl font-bold text-cream">
          Living Room of the Empire
        </h2>
        <p className="mb-6 text-sm text-cream/80">
          THE OP sits at the center of the BHC flywheel — every entity benefits
          from foot traffic here.
        </p>
        <div className="space-y-3">
          {flywheelCards.map((card, i) => (
            <div
              key={i}
              className="rounded-lg border border-amber/15 bg-amber/5 px-4 py-3"
            >
              <p className="text-sm text-cream">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Position */}
      <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
        <h2 className="mb-2 text-xl font-bold text-cream">
          Competitive Position
        </h2>
        <p className="mb-6 text-sm text-cream/80">
          THE OP:{" "}
          <span className="font-semibold text-amber">
            8am-9pm, Mon-Sun (91 hrs/week)
          </span>{" "}
          — most hours in Custer
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cream/25">
                <th className="py-3 px-4 text-left text-sm uppercase tracking-wider text-cream/80">
                  Competitor
                </th>
                <th className="py-3 px-4 text-left text-sm uppercase tracking-wider text-cream/80">
                  Hours
                </th>
                <th className="py-3 px-4 text-left text-sm uppercase tracking-wider text-cream/80">
                  THE OP Advantage
                </th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr
                  key={c.name}
                  className="border-b border-cream/15 even:bg-cream/5"
                >
                  <td className="py-3 px-4 font-medium text-cream">{c.name}</td>
                  <td className="py-3 px-4 text-cream/80">{c.hours}</td>
                  <td className="py-3 px-4 font-semibold text-green-400">
                    {c.advantage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
