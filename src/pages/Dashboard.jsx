import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/date-range-picker";
import {
  DataCard,
  DataCartTitle,
  DataCardValue,
  DataCardDescription,
} from "@/components/data-card";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { Chart } from "@/components/chart";
import { RecentSales } from "@/components/recent-sales";
import { useWindowSize } from "@uidotdev/usehooks";
import { Download } from "lucide-react";

export default function Dashboard() {
  const { width } = useWindowSize();
  const isMobile = width < 640;

  return (
    <section className="pb-4">
      {/* Title */}
      <div className="flex flex-col justify-between items-start my-4 gap-2 sm:flex-row sm:items-center">
        <h1 className="text-5xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex align-middle gap-1">
          <DatePickerWithRange />
          <Button variant={isMobile ? "outline" : ""}>
            {isMobile ? <Download /> : "Download"}
          </Button>
        </div>
      </div>

      {/* Data Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DataCard>
          <DataCartTitle icon={<DollarSign />}>Total Revenue</DataCartTitle>
          <DataCardValue>$28,551,000</DataCardValue>
          <DataCardDescription>+20.1% from last month</DataCardDescription>
        </DataCard>
        <DataCard>
          <DataCartTitle icon={<Users />}>Subscriptions</DataCartTitle>
          <DataCardValue>+4218</DataCardValue>
          <DataCardDescription>+180.1% from last month</DataCardDescription>
        </DataCard>
        <DataCard>
          <DataCartTitle icon={<CreditCard />}>Sales</DataCartTitle>
          <DataCardValue>+29500</DataCardValue>
          <DataCardDescription>+19% from last month</DataCardDescription>
        </DataCard>
        <DataCard>
          <DataCartTitle icon={<Activity />}>Active Now</DataCartTitle>
          <DataCardValue>+986</DataCardValue>
          <DataCardDescription>+201 since last hour</DataCardDescription>
        </DataCard>
      </div>

      {/* Chart */}
      <div className="flex-grow grid gap-4 sm:grid-cols-1 lg:grid-cols-7 mt-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow sm:col-span-1 lg:col-span-4">
          <h2 className="p-6 text-xl font-semibold">Overview</h2>
          <Chart />
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow sm:col-span-1 lg:col-span-3">
          <div className="p-6">
            <h2 className="text-xl font-semibold">Recent Sales</h2>
            <p className="text-sm text-muted-foreground">
              You made 265 sales this month.
            </p>
            <RecentSales />
          </div>
        </div>
      </div>
    </section>
  );
}
