import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/date-range-picker";
import {
  DataCard,
  DataCartTitle,
  DataCardValue,
  DataCardValueDescription,
} from "@/components/data-card";
import { DollarSign } from "lucide-react";

export default function Home() {
  return (
    <section>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex gap-1">
          <DatePickerWithRange />
          <Button className="">Download</Button>
        </div>
      </div>
      <div>
        <DataCard>
          <DataCartTitle icon={<DollarSign />}>Total Revenue</DataCartTitle>
          <DataCardValue>$28,551,000</DataCardValue>
          <DataCardValueDescription>Since last month</DataCardValueDescription>
        </DataCard>
      </div>
    </section>
  );
}
