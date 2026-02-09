export const dynamic = "force-dynamic"

import { getEntitySummary, getCrmStats } from "@/lib/db/dashboard-queries"
import OverviewClient from "./_components/overview-client"

export default async function DashboardPage() {
  const [entitySummary, crmStats] = await Promise.all([
    getEntitySummary(),
    getCrmStats(),
  ])

  // Filter metrics relevant to the_op
  const entityMetrics = entitySummary
    .filter((e) => e.entity_name === "the_op")
    .map((e) => ({ metric_type: e.metric_type, metric_value: e.metric_value }))

  return (
    <OverviewClient
      crmAccountCount={crmStats.total_accounts}
      entityMetrics={entityMetrics}
    />
  )
}
