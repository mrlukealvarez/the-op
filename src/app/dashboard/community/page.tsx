"use client"

const partnerEcosystem = [
  {
    category: "Real Estate",
    partners: 4,
    referrals: 38,
    value: "$15,200",
    description: "Connecting relocators with housing",
  },
  {
    category: "Restaurants",
    partners: 6,
    referrals: 124,
    value: "$8,400",
    description: "Local dining recommendations",
  },
  {
    category: "Breweries",
    partners: 3,
    referrals: 89,
    value: "$6,700",
    description: "Craft beer partnerships",
  },
  {
    category: "Tour Operators",
    partners: 2,
    referrals: 56,
    value: "$19,700",
    description: "Black Hills experiences",
  },
]

const relocatorFunnel = [
  { stage: "Visitor", count: 1250, conversion: "100%" },
  { stage: "Regular", count: 380, conversion: "30.4%" },
  { stage: "Community Member", count: 142, conversion: "37.4%" },
  { stage: "Relocator", count: 28, conversion: "19.7%" },
]

const settleTheWestMetrics = [
  { metric: "Settle Inquiries Generated", value: "64", period: "Last Quarter" },
  { metric: "Campus Tours Scheduled", value: "31", period: "Last Quarter" },
  { metric: "Relocators via THE OP", value: "28", period: "All Time" },
  { metric: "Average Stay Before Move", value: "6.2 mos", period: "Average" },
]

const localBusinessPartnerships = [
  { name: "Hay Camp Brewing", type: "Brewery", referrals: 45, status: "Active" },
  { name: "Tally's Silver Spoon", type: "Restaurant", referrals: 38, status: "Active" },
  { name: "Homestead Realty", type: "Real Estate", referrals: 22, status: "Active" },
  { name: "Black Hills Adventure Co", type: "Tours", referrals: 31, status: "Active" },
  { name: "Custer State Park Tours", type: "Tours", referrals: 25, status: "Active" },
  { name: "Dakota Ridge Properties", type: "Real Estate", referrals: 16, status: "Active" },
  { name: "Murphy's Pub", type: "Restaurant", referrals: 34, status: "Active" },
  { name: "Lost Cabin Beer Co", type: "Brewery", referrals: 28, status: "Active" },
]

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-cream">Community Metrics</h1>
        <p className="mt-2 text-warm-gray-light">
          Hub for connection, partnership, and growth
        </p>
      </div>

      {/* Partner Ecosystem Cards */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-cream">Partner Ecosystem</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnerEcosystem.map((partner) => (
            <div
              key={partner.category}
              className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold text-cream">
                {partner.category}
              </h3>
              <p className="mt-1 text-xs text-warm-gray-light">
                {partner.description}
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-warm-gray-light">Partners</span>
                  <span className="font-mono text-amber">{partner.partners}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-warm-gray-light">Referrals</span>
                  <span className="font-mono text-amber">{partner.referrals}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-warm-gray-light">Value</span>
                  <span className="font-mono text-cannabis-green">{partner.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-warm-gray-light">Total Partner Value</p>
              <p className="mt-1 text-3xl font-bold text-cannabis-green">$50,000</p>
            </div>
            <div>
              <p className="text-sm text-warm-gray-light">Active Partnerships</p>
              <p className="mt-1 text-3xl font-bold text-amber">15</p>
            </div>
          </div>
        </div>
      </div>

      {/* Relocator Funnel */}
      <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-bold text-cream">
          Relocator Conversion Funnel
        </h2>
        <div className="space-y-4">
          {relocatorFunnel.map((stage, index) => (
            <div key={stage.stage} className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cream font-medium">{stage.stage}</span>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-warm-gray-light">
                    {stage.conversion}
                  </span>
                  <span className="font-mono text-amber">{stage.count}</span>
                </div>
              </div>
              <div className="h-12 overflow-hidden rounded-lg bg-espresso-light">
                <div
                  className="h-full bg-amber transition-all"
                  style={{
                    width: `${(stage.count / relocatorFunnel[0].count) * 100}%`,
                  }}
                ></div>
              </div>
              {index < relocatorFunnel.length - 1 && (
                <div className="absolute left-1/2 -bottom-2 h-4 w-0.5 bg-cream/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Settle the West Connection */}
      <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-bold text-cream">
          Settle the West Connection
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {settleTheWestMetrics.map((item) => (
            <div key={item.metric}>
              <p className="text-sm text-warm-gray-light">{item.metric}</p>
              <p className="mt-2 text-2xl font-bold text-amber">{item.value}</p>
              <p className="mt-1 text-xs text-warm-gray-light">{item.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Local Business Partnerships Table */}
      <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-xl font-bold text-cream">
          Active Partnerships (15 Total)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cream/10">
                <th className="pb-3 text-left text-sm font-medium text-warm-gray-light">
                  Business
                </th>
                <th className="pb-3 text-left text-sm font-medium text-warm-gray-light">
                  Type
                </th>
                <th className="pb-3 text-right text-sm font-medium text-warm-gray-light">
                  Referrals
                </th>
                <th className="pb-3 text-right text-sm font-medium text-warm-gray-light">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {localBusinessPartnerships.map((business, index) => (
                <tr
                  key={index}
                  className="border-b border-cream/5 last:border-0"
                >
                  <td className="py-3 text-cream">{business.name}</td>
                  <td className="py-3 text-warm-gray-light">{business.type}</td>
                  <td className="py-3 text-right font-mono text-amber">
                    {business.referrals}
                  </td>
                  <td className="py-3 text-right">
                    <span className="inline-flex items-center rounded-full bg-cannabis-green/20 px-2 py-1 text-xs font-medium text-cannabis-green">
                      {business.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
