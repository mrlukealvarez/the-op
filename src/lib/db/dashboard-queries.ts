import { createAdminClient } from "@/lib/supabase/admin";

export interface EntitySummary {
  entity_name: string;
  metric_type: string;
  metric_value: string;
  last_updated: string;
}

export interface CrmStats {
  total_accounts: number;
  total_opportunities: number;
  total_contacts: number;
}

export async function getEntitySummary(): Promise<EntitySummary[]> {
  const supabase = createAdminClient();
  if (!supabase) {
    console.warn("Supabase client not configured — returning empty array");
    return [];
  }

  const { data, error } = await supabase.rpc("get_entity_summary");

  if (error) {
    console.error("Error fetching entity summary:", error);
    return [];
  }

  return data || [];
}

export interface EntityFinancial {
  entity_name: string;
  entity_slug: string;
  role: string;
  allocation_millions: number;
  y1_revenue_millions: number | null;
  y1_revenue_label: string;
  y5_revenue_millions: number | null;
  y5_revenue_label: string | null;
  y1_projection: number | null;
  y2_projection: number | null;
  y3_projection: number | null;
  y4_projection: number | null;
  y5_projection: number | null;
}

export async function getEntityFinancial(
  slug: string,
): Promise<EntityFinancial | null> {
  const supabase = createAdminClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("entity_financials")
    .select("*")
    .eq("entity_slug", slug)
    .single();

  if (error) {
    console.error("Error fetching entity financial:", error);
    return null;
  }

  return data as EntityFinancial;
}

export async function getCrmStats(): Promise<CrmStats> {
  const supabase = createAdminClient();
  if (!supabase) {
    console.warn("Supabase client not configured — returning defaults");
    return { total_accounts: 0, total_opportunities: 0, total_contacts: 0 };
  }

  const { data, error } = await supabase.rpc("get_crm_stats");

  if (error) {
    console.error("Error fetching CRM stats:", error);
    return { total_accounts: 0, total_opportunities: 0, total_contacts: 0 };
  }

  const stats = Array.isArray(data) ? data[0] : data;
  return {
    total_accounts: stats?.total_accounts ?? 0,
    total_opportunities: stats?.total_opportunities ?? 0,
    total_contacts: stats?.total_contacts ?? 0,
  };
}

// ── Cafe Events & Sales (Sprint 80) ─────────────────────────────────

export interface CafeEvent {
  id: string;
  event_name: string;
  event_type: string;
  date: string;
  start_time: string | null;
  end_time: string | null;
  expected_attendance: number | null;
  actual_attendance: number | null;
  revenue: number | null;
  expenses: number | null;
  status: string;
  notes: string | null;
  created_at: string;
}

export interface CafeSale {
  id: string;
  date: string;
  total_revenue: number;
  food_revenue: number | null;
  beverage_revenue: number | null;
  merchandise_revenue: number | null;
  transaction_count: number | null;
  avg_ticket: number | null;
  created_at: string;
}

export interface CafeStats {
  total_events: number;
  monthly_revenue: number;
  avg_attendance: number;
  upcoming_count: number;
  avg_ticket: number;
}

export async function getCafeEvents(
  limit?: number,
): Promise<CafeEvent[] | null> {
  const supabase = createAdminClient();
  if (!supabase) return null;

  let query = supabase
    .from("crm_cafe_events")
    .select("*")
    .order("date", { ascending: false });

  if (limit) query = query.limit(limit);

  const { data, error } = await query;
  if (error) {
    console.error("Error fetching cafe events:", error);
    return null;
  }
  return data as CafeEvent[];
}

export async function getCafeSales(days?: number): Promise<CafeSale[] | null> {
  const supabase = createAdminClient();
  if (!supabase) return null;

  let query = supabase
    .from("crm_cafe_sales")
    .select("*")
    .order("date", { ascending: false });

  if (days) {
    const since = new Date();
    since.setDate(since.getDate() - days);
    query = query.gte("date", since.toISOString().split("T")[0]);
  }

  const { data, error } = await query;
  if (error) {
    console.error("Error fetching cafe sales:", error);
    return null;
  }
  return data as CafeSale[];
}

export async function getCafeStats(): Promise<CafeStats | null> {
  const supabase = createAdminClient();
  if (!supabase) return null;

  const { data, error } = await supabase.rpc("get_cafe_stats");
  if (error) {
    console.error("Error fetching cafe stats:", error);
    return null;
  }

  const stats = Array.isArray(data) ? data[0] : data;
  if (!stats) return null;
  return {
    total_events: stats.total_events ?? 0,
    monthly_revenue: stats.monthly_revenue ?? 0,
    avg_attendance: stats.avg_attendance ?? 0,
    upcoming_count: stats.upcoming_count ?? 0,
    avg_ticket: stats.avg_ticket ?? 0,
  };
}

export async function getUpcomingEvents(): Promise<CafeEvent[] | null> {
  const supabase = createAdminClient();
  if (!supabase) return null;

  const today = new Date().toISOString().split("T")[0];
  const { data, error } = await supabase
    .from("crm_cafe_events")
    .select("*")
    .gte("date", today)
    .in("status", ["scheduled", "confirmed"])
    .order("date", { ascending: true })
    .limit(10);

  if (error) {
    console.error("Error fetching upcoming events:", error);
    return null;
  }
  return data as CafeEvent[];
}

export async function getEventsByType(): Promise<Array<{
  type: string;
  count: number;
  revenue: number;
}> | null> {
  const supabase = createAdminClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("crm_cafe_events")
    .select("event_type, revenue");

  if (error) {
    console.error("Error fetching events by type:", error);
    return null;
  }

  const grouped: Record<string, { count: number; revenue: number }> = {};
  for (const row of data || []) {
    const t = row.event_type || "other";
    if (!grouped[t]) grouped[t] = { count: 0, revenue: 0 };
    grouped[t].count++;
    grouped[t].revenue += row.revenue || 0;
  }

  return Object.entries(grouped).map(([type, v]) => ({
    type,
    count: v.count,
    revenue: v.revenue,
  }));
}
