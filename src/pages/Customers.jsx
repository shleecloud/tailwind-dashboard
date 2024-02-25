import { DataTable } from "@/components/customers-table/data-table";

export default function Customers() {
  return (
    <section className="pb-4">
      {/* Title */}
      <h1 className="py-4 text-3xl font-bold tracking-tight">Customers</h1>

      {/* Table */}
      <DataTable />
    </section>
  );
}
