import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/date-range-picker";

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
    </section>
  );
}
