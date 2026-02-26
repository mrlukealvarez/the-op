import {
  getCafeEvents,
  getCafeSales,
  getCafeStats,
} from "@/lib/db/dashboard-queries";
import CommunityClient from "./community-client";

export const dynamic = "force-dynamic";

export default async function CommunityPage() {
  const events = await getCafeEvents(100);
  const sales = await getCafeSales(90);
  const stats = await getCafeStats();

  return <CommunityClient events={events} sales={sales} stats={stats} />;
}
