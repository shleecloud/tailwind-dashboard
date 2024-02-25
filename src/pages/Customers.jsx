import { DataTable } from "@/components/customers-table/data-table";
import { fetchDataTable } from "@/api/fetchDataTable";
import { columns } from "@/components/customers-table/columns";

export default function Customers() {
  const data = fetchDataTable();

  return (
    <section className="pb-4">
      {/* Title */}
      <h1 className="py-4 text-3xl font-bold tracking-tight">Customers</h1>

      {/* Table */}
      <DataTable columns={columns} data={data} />
    </section>
  );
}
