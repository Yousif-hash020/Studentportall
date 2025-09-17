import React from "react";
import {
  CalendarDaysIcon,
  UserIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function TodayClasses() {
  const classes = [
    {
      id: 1,
      title: "Web Application Development",
      code: "CSSE3143",
      teacher: "Asad Kamal",
      time: "09:00 AM - 10:30 AM",
      location: "Lab 1",
      type: "Lab",
    },
    {
      id: 2,
      title: "Operating Systems",
      code: "CSCS3553",
      teacher: "Dr Adnan Ghafoor",
      time: "11:00 AM - 12:30 PM",
      location: "Lab 2",
      type: "Lecture",
    },
    {
      id: 3,
      title: "Database Systems",
      code: "CSCS3601",
      teacher: "Dr Saad Ahmad",
      time: "02:00 PM - 03:30 PM",
      location: "Lab 3",
      type: "Lecture",
    },
    {
      id: 4,
      title: "Computer Networks",
      code: "CSCS3702",
      teacher: "Dr Imran Khan",
      time: "04:00 PM - 05:30 PM",
      location: "Lab 4",
      type: "Lab",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] p-6 mt-6 w-full px-4  ">
      {/* Header */}
      <div className="flex items-center gap-3  pb-8">
        <div className="bg-[#CBFBF1] py-2 px-2 rounded-lg ">
          <CalendarDaysIcon className="h-5 w-5 text-[#14B8A6]" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Today&apos;s Classes
          </h2>
          <p className="text-sm text-gray-500">Tuesday, Sep 16</p>
        </div>
      </div>

      {/* Scrollable Class List with hidden scrollbar */}
      <div className="space-y-4 max-h-64 overflow-y-auto px-8 pt-2 no-scrollbar">
        {classes.map((item) => (
          <div
            key={item.id}
            className="shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between mb-4  transition"
          >
            {/* Left side */}
            <div className="flex flex-col gap-2 ">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-semibold">
                  {item.title}
                </span>
                <span className="text-xs text-gray-500">{item.code}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 gap-1">
                <UserIcon className="h-4 w-4" />
                {item.teacher}
              </div>
              <div className="flex items-center text-sm text-gray-600 gap-1">
                <ClockIcon className="h-4 w-4" />
                {item.time}
              </div>
              <div className="flex items-center text-sm text-gray-600 gap-1">
                <MapPinIcon className="h-4 w-4" />
                {item.location}
              </div>
            </div>

            {/* Right side */}
            <div className="mt-3 md:mt-0">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  item.type === "Lab"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <p>{classes.length} classes scheduled</p>
        <button className="text-emerald-600 font-medium hover:underline">
          View Full Schedule
        </button>
      </div>
    </div>
  );
}

export default TodayClasses;
