import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export const Chart = () => {
  const data = [
    {
      name: "Jan",
      revenue: 4000,
    },
    {
      name: "Feb",
      revenue: 3000,
    },
    {
      name: "Mar",
      revenue: 2000,
    },
    {
      name: "Apr",
      revenue: 2780,
    },
    {
      name: "May",
      revenue: 1890,
    },
    {
      name: "Jun",
      revenue: 2390,
    },
    {
      name: "Jul",
      revenue: 3490,
    },
    {
      name: "Aug",
      revenue: 6420,
    },
    {
      name: "Sep",
      revenue: 9490,
    },
    {
      name: "Oct",
      revenue: 12470,
    },
    {
      name: "Nov",
      revenue: 14590,
    },
    {
      name: "Dec",
      revenue: 20000,
    },
  ];

  return (
    <>
      <ResponsiveContainer className="p-3" width="100%" height={400}>
        <BarChart data={data}>
          <Tooltip />
          <XAxis axisLine={false} tickLine={false} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} unit="$" />
          <Bar radius={[6, 6, 0, 0]} dataKey="revenue" fill="#181818" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
