export const dynamic = "force-dynamic";

import {
  getEntitySummary,
  getCrmStats,
  getEntityFinancial,
} from "@/lib/db/dashboard-queries";
import OverviewClient from "./_components/overview-client";

export default async function DashboardPage() {
  let crmAccountCount = 0;
  let entityMetrics: Array<{ metric_type: string; metric_value: string }> = [];
  let entityFinancial = null;

  try {
    const [entitySummary, crmStats, financial] = await Promise.all([
      getEntitySummary(),
      getCrmStats(),
      getEntityFinancial("the-op"),
    ]);

    entityMetrics = entitySummary
      .filter((e) => e.entity_name === "the_op")
      .map((e) => ({
        metric_type: e.metric_type,
        metric_value: e.metric_value,
      }));

    crmAccountCount = crmStats.total_accounts;
    entityFinancial = financial;
  } catch (err) {
    console.error("Dashboard data fetch failed:", err);
  }

  return (
    <OverviewClient
      crmAccountCount={crmAccountCount}
      entityMetrics={entityMetrics}
      entityFinancial={entityFinancial}
    />
  );
}
