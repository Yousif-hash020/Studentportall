import React from "react";
import {
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "./Components/Sidebar";

function Attendance() {
  const courses = [
  {
    name: "Web Application Development",
    total: 42,
    present: 39,
    absent: 3,
    percent: 93,
    status: "Excellent",
    color: "green",
  },
  {
    name: "Operating Systems - Lab",
    total: 42,
    present: 36,
    absent: 6,
    percent: 85.7,
    status: "Good Standing",
    color: "green",
  },
  {
    name: "Introduction to Software Engineering",
    total: 42,
    present: 32,
    absent: 10,
    percent: 77,
    status: "Satisfactory",
    color: "orange",
  },
  {
    name: "Operating Systems",
    total: 42,
    present: 30,
    absent: 12,
    percent: 71,
    status: "Needs Attention",
    color: "orange",
  },
  {
    name: "Database Systems",
    total: 42,
    present: 37,
    absent: 5,
    percent: 89,
    status: "Good Standing",
    color: "green",
  },
  {
    name: "Computer Networks",
    total: 35,
    present: 28,
    absent: 7,
    percent: 80,
    status: "Below Average",
    color: "yellow",
  },
];



  return (

    <div className=" min-h-screen bg-gray-100 w-full flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-white ">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className=" mb-8  w-full md:w-4/5 flex flex-col ">
       <div className="px-10 py-10 rounded-xl">
         <h1 className="text-2xl font-bold mb-2">Attendance Overview</h1>
        <p className="text-gray-600 mb-6">
          Your attendance record across all courses
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center ">
                <h2 className="font-semibold text-lg ">{course.name}</h2>
                <span className=" bg-green-100 text-green-700 text-[14px] font-medium rounded-full px-4 py-1">
                  {course.percent}%
                </span>
              </div>

              <div className="flex  justify-between text-sm px-11 mb-6 mt-4">
                <span className="font-semibold flex flex-col justify-between items-center text-[20px] ">{course.total} <span className="text-[13px] font-normal "> Total</span> </span>
                <span className="text-green-600 font-semibold flex flex-col justify-between items-center text-[20px] ">{course.present} <span className="text-[13px] font-normal"> Present</span></span>
                <span className="text-red-500 font-semibold flex flex-col justify-between items-center text-[20px] ">{course.absent} <span className="text-[13px] font-normal">Absent</span></span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-200 rounded-lg mb-3">
                <div
                  className={`h-2 rounded-lg ${course.color === "green"
                      ? "bg-green-500"
                      : course.color === "yellow"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  style={{ width: `${course.percent}%` }}
                ></div>
              </div>

              {/* Status */}
              <p
                className={`text-sm font-medium text-center ${course.color === "green"
                    ? "text-green-600"
                    : course.color === "yellow"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
              >
                {course.status}
              </p>
            </div>
          ))}
        </div>
       </div>
      </main>
    </div>
  );
}

export default Attendance;
