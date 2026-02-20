import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Tooltip,
} from "recharts";

const ComparisonChart = ({ success, hospitalRating, doctorRating }) => {
  const successValue = parseInt(success.replace("%", ""));

  const data = [
    { name: "Success Rate", value: successValue, fill: "#76a4f9" },
    { name: "Hospital Rating", value: hospitalRating, fill: "#1835da" },
    { name: "Doctor Rating", value: doctorRating, fill: "#365088" },
  ];

  const overallScore = Math.round(
    (successValue + hospitalRating + doctorRating) / 3,
  );

  return (
    <div style={{ width: "100%", height: "300px", position: "relative" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="45%"
          outerRadius="85%"
          barSize={16}
          data={data}
          startAngle={225}
          endAngle={-45}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

          <Tooltip formatter={(value) => `${value}%`} />

          <RadialBar
            dataKey="value"
            cornerRadius={20}
            background={{ fill: "#e5e7eb" }}
            animationDuration={1000}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* Center Score */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "22px" }}>{overallScore}%</h2>

        <p style={{ fontSize: "11px", color: "#6b7280" }}>
          Overall Performance
        </p>
      </div>

      {/* Legend with Color Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          fontSize: "13px",
        }}
      >
        {data.map((item) => (
          <div
            key={item.name}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: item.fill,
              }}
            />
            <span>
              {item.name} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonChart;
