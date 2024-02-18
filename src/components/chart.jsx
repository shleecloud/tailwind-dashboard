import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export const Chart = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
    },
    {
      name: "Feb",
      uv: 3000,
    },
    {
      name: "Mar",
      uv: 2000,
    },
    {
      name: "Apr",
      uv: 2780,
    },
    {
      name: "May",
      uv: 1890,
    },
    {
      name: "Jun",
      uv: 2390,
    },
    {
      name: "Jul",
      uv: 3490,
    },
    {
      name: "Aug",
      uv: 6420,
    },
    {
      name: "Sep",
      uv: 9490,
    },
    {
      name: "Oct",
      uv: 12470,
    },
    {
      name: "Nov",
      uv: 14590,
    },
    {
      name: "Dec",
      uv: 20000,
    },
  ];

  return (
    <>
      <ResponsiveContainer className="p-3" width="100%" height={500}>
        <BarChart data={data}>
          <Bar radius={[6, 6, 0, 0]} dataKey="uv" fill="#181818" />
          <XAxis dataKey="name" />
          <YAxis unit="$" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
