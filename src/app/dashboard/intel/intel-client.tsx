"use client"

import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { EntityFinancial, CrmStats, CafeStats, CafeSale } from "@/lib/db/dashboard-queries"

interface IntelClientProps {
  entityFinancial: EntityFinancial | null
  crmStats: CrmStats
  cafeStats: CafeStats | null
  recentSales: CafeSale[] | null
}

// ── Static Data from Sprint 138 Pricing Model ──────────────────────

const kpiCards = [
  { label: "Y1 Revenue", value: "$380K", sub: "V5 floor", accent: "text-amber" },
  { label: "Y5 Revenue", value: "$1.9M", sub: "31% margin", accent: "text-green-400" },
  { label: "Daily Customers", value: "80", sub: "4 dayparts", accent: "text-amber" },
  { label: "Avg Transaction", value: "$10.09", sub: "Blended", accent: "text-amber" },
  { label: "Break-Even", value: "Month 5-6", sub: "P&L crossover", accent: "text-green-400" },
  { label: "Evening Monopoly", value: "$77K/yr", sub: "Zero competition 6-9pm", accent: "text-amber", glow: true },
]

const daypartData = [
  { name: "Morning\n6-10am", revenue: 212, fill: "#F59E0B" },
  { name: "Midday\n10am-2pm", revenue: 240, fill: "#D97706" },
  { name: "Afternoon\n2-6pm", revenue: 135, fill: "#92400E" },
  { name: "Evening\n6-9pm", revenue: 220, fill: "#F59E0B" },
]

const margins = [
  { name: "Dirty Sodas", margin: 90, color: "#10b981" },
  { name: "Coffee", margin: 84, color: "#F59E0B" },
  { name: "Merch", margin: 72, color: "#D97706" },
  { name: "Food", margin: 65, color: "#92400E" },
  { name: "Beer", margin: 63, color: "#5D4037" },
]

const plData = [
  { year: "Y1", revenue: 380, expenses: 362, net: 18 },
  { year: "Y2", revenue: 600, expenses: 507, net: 93 },
  { year: "Y3", revenue: 900, expenses: 702, net: 198 },
  { year: "Y4", revenue: 1300, expenses: 958, net: 342 },
  { year: "Y5", revenue: 1900, expenses: 1310, net: 589 },
]

const expensesY1 = [
  { name: "COGS F&B", value: 120, pct: 33.1 },
  { name: "Labor", value: 115, pct: 31.8 },
  { name: "Operating", value: 55, pct: 15.2 },
  { name: "COGS Merch", value: 40, pct: 11.0 },
  { name: "Rent", value: 24, pct: 6.6 },
  { name: "Tech", value: 8, pct: 2.2 },
]

const competitors = [
  { name: "Minder's Cup", hours: 30, extra: "+61 hrs", status: "Closed Sun-Mon", color: "text-red-400" },
  { name: "Wild Spruce", hours: 58, extra: "+33 hrs", status: "Closes 6:30pm", color: "text-amber" },
  { name: "Baker's", hours: 66.5, extra: "+24.5 hrs", status: "Closes 4pm", color: "text-amber" },
  { name: "Calamity Jane's", hours: 52.5, extra: "+38.5 hrs", status: "Closes 2pm", color: "text-red-400" },
  { name: "Skogen Kitchen", hours: 15, extra: "+76 hrs", status: "Dinner only Tue-Sat", color: "text-red-400" },
  { name: "THE OP", hours: 91, extra: "\u2014", status: "8am-9pm, 7 days", color: "text-green-400" },
]

const staffing = [
  { role: "GM/Lead Barista", y1: "$55K", y5: "$70K" },
  { role: "Barista/Counter", y1: "$38K", y5: "$46K" },
  { role: "Part-Time", y1: "$22K", y5: "$30K" },
  { role: "Barista #2", y1: "\u2014", y5: "$40K" },
  { role: "Merch Manager", y1: "\u2014", y5: "$50K" },
  { role: "Additional PT", y1: "\u2014", y5: "$124K" },
]

const partners = [
  { name: "Lost Cabin Beer Co", type: "Brewery", distance: "0.3 mi", category: "Beer" },
  { name: "Custer Wolf Coffee", type: "Roaster", distance: "Local", category: "Coffee" },
  { name: "Dakota Shivers Ice Cream", type: "Ice Cream", distance: "0.1 mi", category: "Food" },
  { name: "Laughing Water Brewing", type: "Brewery", distance: "0.5 mi", category: "Beer" },
  { name: "Black Hills Honey", type: "Producer", distance: "Local", category: "Food" },
  { name: "Hot Springs Herbs", type: "Supplier", distance: "30 mi", category: "Food" },
  { name: "Pine & Petal", type: "Florist", distance: "0.2 mi", category: "Merch" },
  { name: "Sage Creek Gallery", type: "Gallery", distance: "0.1 mi", category: "Merch" },
  { name: "Black Hills Bagels", type: "Bakery", distance: "15 mi", category: "Food" },
  { name: "Custer County Candy", type: "Confections", distance: "0.3 mi", category: "Food" },
]

const transactions = [
  { year: "Y1", txns: "12,000" },
  { year: "Y2", txns: "20,000" },
  { year: "Y3", txns: "32,000" },
  { year: "Y4", txns: "43,000" },
  { year: "Y5", txns: "55,000" },
]

const benefits = [
  { metric: "Avg family plan (SD)", y1: "$22K/yr", y5: "$24K/yr" },
  { metric: "Total insurance cost", y1: "$66K", y5: "$168K" },
  { metric: "Labor (base salaries)", y1: "$115K", y5: "$360K" },
  { metric: "Total comp + benefits", y1: "$181K", y5: "$528K", bold: true },
  { metric: "Revenue", y1: "$380K", y5: "$1.9M" },
  { metric: "Non-labor expenses", y1: "$247K", y5: "$951K" },
  { metric: "Net after full benefits", y1: "-$48K", y5: "$421K", bold: true },
  { metric: "Margin after benefits", y1: "-12.6%", y5: "22.2%", bold: true },
]

const insights = [
  "Full family coverage costs $66K Y1 -- investor runway covers the gap",
  "By Y3 ($900K revenue), full benefits are sustainable at 14.5% margin",
  "By Y5, $421K net AFTER insuring every employee's family",
  "Zero rent + evening monopoly = margin buffer for real benefits",
]

// ── Chart Configs ───────────────────────────────────────────────────

const daypartChartConfig = {
  revenue: { label: "Revenue ($/day)", color: "#F59E0B" },
}

const plChartConfig = {
  revenue: { label: "Revenue ($K)", color: "#F59E0B" },
  net: { label: "Net Income ($K)", color: "#10b981" },
}

// ── Component ───────────────────────────────────────────────────────

const card = "rounded-xl border border-amber/20 bg-cream/5 p-6 backdrop-blur-xl"

export default function IntelClient({ entityFinancial, crmStats, cafeStats, recentSales }: IntelClientProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-cream">Intel Command Center</h1>
        <p className="mt-2 text-warm-gray-light">
          GTM intelligence -- Sprint 138 pricing model + live Supabase data
        </p>
      </div>

      {/* Row 1: GTM KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpiCards.map((kpi) => (
          <div
            key={kpi.label}
            className={`rounded-xl border ${kpi.glow ? "border-amber/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]" : "border-amber/20"} bg-cream/5 p-4 backdrop-blur-xl`}
          >
            <p className="text-xs text-warm-gray-light uppercase tracking-wider">{kpi.label}</p>
            <p className="text-2xl font-bold font-mono text-cream mt-1">{kpi.value}</p>
            <p className={`text-xs ${kpi.accent} mt-1`}>{kpi.sub}</p>
          </div>
        ))}
      </div>

      {/* Row 2: Daypart Revenue + Margin Analysis */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* LEFT: Revenue by Daypart */}
        <div className={card}>
          <h2 className="text-lg font-bold text-cream mb-4">Revenue by Daypart</h2>
          <ChartContainer config={daypartChartConfig} className="h-[280px]">
            <BarChart data={daypartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,248,225,0.1)" />
              <XAxis dataKey="name" tick={{ fill: "#A89B93", fontSize: 11 }} />
              <YAxis tick={{ fill: "#A89B93", fontSize: 11 }} />
              <ChartTooltip content={<ChartTooltipContent className="bg-espresso text-cream" />} />
              <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                {daypartData.map((entry, i) => (
                  <rect key={i} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
          <div className="flex items-center gap-3 mt-3">
            <p className="text-sm text-warm-gray-light">Total: $807/day -- $282K/year F&B</p>
            <span className="text-xs bg-amber/20 text-amber px-2 py-0.5 rounded-full font-mono">EVENING MONOPOLY</span>
          </div>
        </div>

        {/* RIGHT: Margin Analysis */}
        <div className={card}>
          <h2 className="text-lg font-bold text-cream mb-4">Margin Analysis</h2>
          <div className="space-y-4">
            {margins.map((m) => (
              <div key={m.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-warm-gray-light">{m.name}</span>
                  <span className="text-sm font-mono text-cream">{m.margin}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-espresso-light overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${m.margin}%`, backgroundColor: m.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: P&L + Expense Breakdown */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* LEFT: P&L Projection */}
        <div className={card}>
          <h2 className="text-lg font-bold text-cream mb-4">P&L Projection Y1-Y5</h2>
          <ChartContainer config={plChartConfig} className="h-[280px]">
            <AreaChart data={plData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,248,225,0.1)" />
              <XAxis dataKey="year" tick={{ fill: "#A89B93", fontSize: 12 }} />
              <YAxis tick={{ fill: "#A89B93", fontSize: 11 }} />
              <ChartTooltip content={<ChartTooltipContent className="bg-espresso text-cream" />} />
              <Area type="monotone" dataKey="revenue" stroke="#F59E0B" fillOpacity={1} fill="url(#colorRevenue)" />
              <Area type="monotone" dataKey="net" stroke="#10b981" fillOpacity={1} fill="url(#colorNet)" />
            </AreaChart>
          </ChartContainer>
        </div>

        {/* RIGHT: Y1 Expense Breakdown */}
        <div className={card}>
          <h2 className="text-lg font-bold text-cream mb-4">Y1 Expense Breakdown</h2>
          <div className="space-y-3">
            {expensesY1.map((e) => (
              <div key={e.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-warm-gray-light">{e.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-warm-gray-light">${e.value}K</span>
                    <span className="text-xs font-mono text-cream w-12 text-right">{e.pct}%</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-espresso-light overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber"
                    style={{ width: `${e.pct * 3}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-warm-gray-light mt-4 font-mono">Total: $362K</p>
        </div>
      </div>

      {/* Row 4: Competitive Hours + Dirty Soda */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* LEFT: Competitive Hours */}
        <div className={card}>
          <h2 className="text-lg font-bold text-cream mb-4">Competitive Hours Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cream/10">
                  <th className="text-left py-2 text-warm-gray-light font-medium">Competitor</th>
                  <th className="text-right py-2 text-warm-gray-light font-medium">Wkly Hrs</th>
                  <th className="text-right py-2 text-warm-gray-light font-medium">OP Extra</th>
                  <th className="text-right py-2 text-warm-gray-light font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr
                    key={c.name}
                    className={`border-b border-cream/5 ${c.name === "THE OP" ? "bg-amber/10 font-bold" : ""}`}
                  >
                    <td className="py-2 text-cream">{c.name}</td>
                    <td className="py-2 text-right font-mono text-cream">{c.hours}</td>
                    <td className={`py-2 text-right font-mono ${c.color}`}>{c.extra}</td>
                    <td className="py-2 text-right text-xs text-warm-gray-light">{c.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT: Dirty Soda Spotlight */}
        <div className={`${card} border-green-500/30`}>
          <h2 className="text-lg font-bold text-cream mb-4">Dirty Soda Intelligence</h2>
          <div className="text-center mb-6">
            <p className="text-4xl font-bold font-mono text-green-400">$41.5K</p>
            <p className="text-sm text-warm-gray-light mt-1">Annual Revenue -- 90% Margin</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-lg font-mono font-bold text-cream">25</p>
              <p className="text-xs text-warm-gray-light">drinks/day</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-mono font-bold text-cream">$4.75</p>
              <p className="text-xs text-warm-gray-light">avg price</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-mono font-bold text-cream">$2,500</p>
              <p className="text-xs text-warm-gray-light">equipment</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-mono font-bold text-cream">24 days</p>
              <p className="text-xs text-warm-gray-light">payback</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-2xl font-mono font-bold text-amber">1,480% ROI</p>
          </div>
          <div className="mt-4 flex justify-center">
            <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-mono">
              First dirty soda in the Black Hills
            </span>
          </div>
        </div>
      </div>

      {/* Row 5: Staffing + Partners */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* LEFT: Staffing Plan */}
        <div className={card}>
          <h2 className="text-lg font-bold text-cream mb-4">Staffing Plan</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cream/10">
                <th className="text-left py-2 text-warm-gray-light font-medium">Role</th>
                <th className="text-right py-2 text-warm-gray-light font-medium">Y1</th>
                <th className="text-right py-2 text-warm-gray-light font-medium">Y5</th>
              </tr>
            </thead>
            <tbody>
              {staffing.map((s) => (
                <tr key={s.role} className="border-b border-cream/5">
                  <td className="py-2 text-cream">{s.role}</td>
                  <td className="py-2 text-right font-mono text-cream">{s.y1}</td>
                  <td className="py-2 text-right font-mono text-cream">{s.y5}</td>
                </tr>
              ))}
              <tr className="bg-amber/10 font-bold">
                <td className="py-2 text-cream">Total</td>
                <td className="py-2 text-right font-mono text-cream">$115K (3)</td>
                <td className="py-2 text-right font-mono text-cream">$360K (7)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* RIGHT: Local Partners */}
        <div className={card}>
          <h2 className="text-lg font-bold text-cream mb-4">Local Partners</h2>
          <div className="grid grid-cols-2 gap-3">
            {partners.map((p) => (
              <div key={p.name} className="rounded-lg border border-cream/10 bg-cream/5 p-3">
                <p className="text-sm font-medium text-cream">{p.name}</p>
                <p className="text-xs text-warm-gray-light">{p.type} -- {p.distance}</p>
                <span className="mt-1 inline-block text-xs bg-amber/15 text-amber px-2 py-0.5 rounded-full">
                  {p.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 6: Market Capture + Transactions */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* LEFT: Market Capture */}
        <div className={card}>
          <h2 className="text-lg font-bold text-cream mb-4">Market Capture Targets</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-amber/20 bg-cream/5 p-4">
              <p className="text-xs text-warm-gray-light uppercase tracking-wider">Local Custer</p>
              <p className="text-3xl font-bold font-mono text-amber mt-1">40%</p>
              <p className="text-xs text-warm-gray-light">pop 2,100</p>
            </div>
            <div className="rounded-lg border border-amber/20 bg-cream/5 p-4">
              <p className="text-xs text-warm-gray-light uppercase tracking-wider">Tourist Traffic</p>
              <p className="text-3xl font-bold font-mono text-amber mt-1">0.5% - 2.5%</p>
              <p className="text-xs text-warm-gray-light">Y1 to Y5 (14.9M annual visitors)</p>
            </div>
            <div className="rounded-lg border border-amber/20 bg-cream/5 p-4">
              <p className="text-xs text-warm-gray-light uppercase tracking-wider">BHC Employees</p>
              <p className="text-3xl font-bold font-mono text-green-400 mt-1">80%+</p>
              <p className="text-xs text-warm-gray-light">51 to 175 staff (Y1 to Y5)</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Transaction Projections */}
        <div className={card}>
          <h2 className="text-lg font-bold text-cream mb-4">Transaction Projections</h2>
          <div className="space-y-3">
            {transactions.map((t) => (
              <div key={t.year} className="flex items-center justify-between py-3 border-b border-cream/5">
                <span className="text-sm text-warm-gray-light">{t.year}</span>
                <span className="text-lg font-mono font-bold text-cream">{t.txns}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 7: Benefits & Insurance */}
      <div className={card}>
        <h2 className="text-lg font-bold text-cream mb-4">Benefits & Insurance -- Profitability Proof</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cream/10">
                <th className="text-left py-2 text-warm-gray-light font-medium">Metric</th>
                <th className="text-right py-2 text-warm-gray-light font-medium">Y1 (3 staff)</th>
                <th className="text-right py-2 text-warm-gray-light font-medium">Y5 (7 staff)</th>
              </tr>
            </thead>
            <tbody>
              {benefits.map((b) => (
                <tr key={b.metric} className={`border-b border-cream/5 ${b.bold ? "bg-amber/10 font-bold" : ""}`}>
                  <td className="py-2 text-cream">{b.metric}</td>
                  <td className={`py-2 text-right font-mono ${b.metric.includes("Net") && b.y1.startsWith("-") ? "text-red-400" : "text-cream"}`}>{b.y1}</td>
                  <td className={`py-2 text-right font-mono ${b.metric.includes("Net") ? "text-green-400" : "text-cream"}`}>{b.y5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {insights.map((text, i) => (
            <div key={i} className="rounded-lg border border-cream/10 bg-cream/5 p-4">
              <p className="text-sm text-warm-gray-light">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
