import React from "react";
import { useAppContext } from "../../Contxt/AppContext";
import { BookOpenIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

const CourseHeader = () => {
  const { courses } = useAppContext();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.15)] mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Gradient Icon */}
        <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-blue-400 text-white">
          <BookOpenIcon className="w-8 h-8" />
        </div>

        {/* Course Info */}
        <div>
          <h2 className="font-bold text-xl text-gray-900 flex items-center gap-2">
            All Courses
          </h2>
          <p className="text-sm text-gray-500">{courses.program}</p>
          <p className="flex items-center gap-2 mt-2 text-blue-600 text-sm font-medium">
            <CalendarDaysIcon className="w-4 h-4" />
            {courses.semester}
          </p>
        </div>
      </div>

      {/* Right Section (Stats) */}
      <div className="grid grid-cols-2 sm:flex gap-4">
        <InfoBox label="TOTAL COURSES" value={courses.totalCourses} />
        <InfoBox label="ACTIVE" value={courses.active} color="text-green-600" />
        <InfoBox label="WITHDRAW" value={courses.withdraw} color="text-red-600" />
        <InfoBox label="CURRENT CREDITS" value={courses.currentCredits} color="text-blue-600" />
        <InfoBox label="TOTAL CREDITS" value={courses.totalCredits} color="text-purple-600" />
      </div>
    </div>
  );
};

const InfoBox = ({ label, value, color }) => (
  <div className="bg-gray-50 px-6 py-3 rounded-lg text-center shadow-sm">
    <p className="text-xs font-medium text-gray-500 tracking-wide">{label}</p>
    <p className={`text-lg font-bold ${color || "text-gray-800"}`}>{value}</p>
  </div>
);

export default CourseHeader;
