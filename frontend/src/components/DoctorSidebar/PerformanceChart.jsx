import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", patients: 30 },
  { day: "Tue", patients: 45 },
  { day: "Wed", patients: 38 },
  { day: "Thu", patients: 50 },
  { day: "Fri", patients: 42 },
];

const PerformanceChart = () => {
  return (
    <div className="card">
      <h3>Weekly Patients</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="patients" fill="#2563eb" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
