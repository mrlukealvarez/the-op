import { createAdminClient } from "@/lib/supabase/admin"

export interface EntitySummary {
  entity_name: string
  metric_type: string
  metric_value: string
  last_updated: string
}

export interface CrmStats {
  total_accounts: number
  total_opportunities: number
  total_contacts: number
}

export async function getEntitySummary(): Promise<EntitySummary[]> {
  const supabase = createAdminClient()
  if (!supabase) {
    console.warn("Supabase client not configured — returning empty array")
    return []
  }

  const { data, error } = await supabase.rpc("get_entity_summary")

  if (error) {
    console.error("Error fetching entity summary:", error)
    return []
  }

  return data || []
}

export async function getCrmStats(): Promise<CrmStats> {
  const supabase = createAdminClient()
  if (!supabase) {
    console.warn("Supabase client not configured — returning defaults")
    return { total_accounts: 0, total_opportunities: 0, total_contacts: 0 }
  }

  const { data, error } = await supabase.rpc("get_crm_stats")

  if (error) {
    console.error("Error fetching CRM stats:", error)
    return { total_accounts: 0, total_opportunities: 0, total_contacts: 0 }
  }

  const stats = Array.isArray(data) ? data[0] : data
  return {
    total_accounts: stats?.total_accounts ?? 0,
    total_opportunities: stats?.total_opportunities ?? 0,
    total_contacts: stats?.total_contacts ?? 0,
  }
}
