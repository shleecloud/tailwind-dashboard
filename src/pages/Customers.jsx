import { DataTable } from "@/components/data-table/data-table";

export default function Customers() {
  return (
    <section className="pb-4">
      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight">Customers</h1>

      {/* Table */}
      <DataTable />
    </section>
  );
}
