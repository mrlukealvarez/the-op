export const dynamic = "force-dynamic"

import { getEntityFinancial, getCrmStats, getCafeStats, getCafeSales } from "@/lib/db/dashboard-queries"
import IntelClient from "./intel-client"

export default async function IntelPage() {
  const [entityFinancial, crmStats, cafeStats, cafeSales] = await Promise.all([
    getEntityFinancial("the-op"),
    getCrmStats(),
    getCafeStats(),
    getCafeSales(90),
  ])

  return (
    <IntelClient
      entityFinancial={entityFinancial}
      crmStats={crmStats}
      cafeStats={cafeStats}
      recentSales={cafeSales}
    />
  )
}
