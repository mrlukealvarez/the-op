export const dynamic = "force-dynamic";

import {
  getEntityFinancial,
  getCrmStats,
  getCafeStats,
  getCafeSales,
} from "@/lib/db/dashboard-queries";
import IntelClient from "./intel-client";

export default async function IntelPage() {
  let entityFinancial = null;
  let crmStats = {
    total_accounts: 0,
    total_opportunities: 0,
    total_contacts: 0,
  };
  let cafeStats = null;
  let cafeSales: any[] | null = null;

  try {
    const [ef, cs, cas, sal] = await Promise.all([
      getEntityFinancial("the-op"),
      getCrmStats(),
      getCafeStats(),
      getCafeSales(90),
    ]);
    entityFinancial = ef;
    crmStats = cs;
    cafeStats = cas;
    cafeSales = sal;
  } catch (error) {
    console.error("Dashboard data fetch failed:", error);
  }

  return (
    <IntelClient
      entityFinancial={entityFinancial}
      crmStats={crmStats}
      cafeStats={cafeStats}
      recentSales={cafeSales}
    />
  );
}
