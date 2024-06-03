import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";
import { fetchCardData, fetchLatestInvoices } from "../../lib/data"
import CardWrapper, { Card } from "../../ui/dashboard/cards"
import LatestInvoices from "../../ui/dashboard/latest-invoices"
import RevenueChart from "../../ui/dashboard/revenue-chart"
import { lusitana } from "../../ui/fonts";
import { Suspense } from "react";

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        {/* <Card title="Collected" value={`${cardData.totalPaidInvoices}`} type="collected" />
        <Card title="Pending" value={`${cardData.totalPendingInvoices}`} type="pending" />
        <Card title="Total Invoices" value={cardData.numberOfInvoices} type="invoices" />
        <Card title="Total Customers" value={cardData.numberOfCustomers} type="customers" /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />  
        </Suspense>
      </div>
    </main>
  )
}