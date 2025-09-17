import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { BookOpenIcon, ChartBarIcon } from "@heroicons/react/24/outline";

const COLORS = ["#14B8A6", "#E5E7EB"]; // Teal for progress, Gray for remaining

const StatsCard = ({ icon, title, subtitle, data, centerText, details }) => {
  return (
    <div className="bg-white p-6 rounded-2xl flex flex-col w-full shadow-[0_0_10px_rgba(0,0,0,0.15)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#CBFBF1] text-[#14B8A6]">
          {icon}
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>

      {/* Chart + Centered Text */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="w-40 h-40">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={55}
                outerRadius={70}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="absolute text-center">
          <p className="text-2xl font-bold text-gray-900">{centerText.percent}%</p>
          <p className="text-sm text-gray-500">{centerText.label}</p>
          {centerText.sub && (
            <p className="text-xs text-gray-400">{centerText.sub}</p>
          )}
        </div>
      </div>

      {/* Footer Details */}
      <div className="mt-6">
        {details.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-sm mb-2"
          >
            <span
              className={`flex items-center gap-2 ${
                item.color || "text-gray-600"
              }`}
            >
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: item.dotColor }}
              ></span>
              {item.label}
            </span>
            <span className="font-semibold text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AcademicStats = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      {/* Credit Hours */}
      <StatsCard
        icon={<BookOpenIcon className="w-6 h-6" />}
        title="Credit Hours"
        subtitle="Academic Progress"
        data={[
          { name: "Completed", value: 69 },
          { name: "Remaining", value: 64 },
        ]}
        centerText={{
          percent: 52,
          label: "Credits",
          sub: "69 | 133",
        }}
        details={[
          { label: "Completed", value: "69 hrs", dotColor: "#14B8A6", color: "text-teal-600" },
          { label: "Remaining", value: "64 hrs", dotColor: "#E5E7EB", color: "text-gray-500" },
        ]}
      />

      {/* GPA */}
      <StatsCard
        icon={<ChartBarIcon className="w-6 h-6" />}
        title="GPA"
        subtitle="Academic Performance"
        data={[
          { name: "Current GPA", value: 3.37 },
          { name: "Remaining", value: 0.63 }, // just to complete the donut
        ]}
        centerText={{
          percent: 84,
          label: "GPA",
          sub: "3.37 | 4",
        }}
        details={[
          { label: "Current GPA", value: "3.37", dotColor: "#14B8A6", color: "text-teal-600" },
          { label: "Letter Grade", value: "B+", dotColor: "#E5E7EB", color: "text-gray-500" },
        ]}
      />
    </div>
  );
};

export default AcademicStats;
