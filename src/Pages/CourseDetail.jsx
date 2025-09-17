import React from "react";
import { useParams, Link } from "react-router-dom";
import Data from "./Components/Data";

import {
  UserIcon,
  BookOpenIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

import Sidebar from "./Components/Sidebar";


function CourseDetail() {
  const { id } = useParams(); // URL se id nikalna (React Router use kar rahe ho)
  const course = Data.find((c) => c.id === parseInt(id));

  if (!course) {
    return <p className="text-center text-red-500 mt-10">Course not found!</p>;
  }

  return (

    <div className="w-full flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-white ">
        <Sidebar />
      </div>

      <div className="p-6 md:p-12 bg-gray-50 min-h-screen w-full md:w-4/5 flex flex-col ">
        {/* Back Button */}
        <Link
          to="/courses"
          className="flex items-center text-gray-600 hover:text-teal-600 mb-6"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Courses
        </Link>


        {/* Top Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-8 md:flex-row md:justify-between md:items-center mb-8 border border-gray-100">
          {/* Left Side Info */}
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              {course.title}
            </h1>
            <p className="text-sm md:text-base text-gray-500">{course.code}</p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-600 text-sm md:text-base">
              <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                <UserIcon className="h-5 w-5 text-gray-500" />
                <span className="font-medium">{course.teacher}</span>
              </span>
              <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                <BookOpenIcon className="h-5 w-5 text-gray-500" />
                <span className="font-medium">{course.credits} Credits</span>
              </span>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-sm p-4 text-center border border-teal-100">
              <p className="text-xs md:text-sm text-gray-500 tracking-wide">TOTAL SCORE</p>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">
                {course.totalScore}/{course.totalMarks}
              </h2>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-sm p-4 text-center border border-green-100">
              <p className="text-xs md:text-sm text-gray-500 tracking-wide">PERCENTAGE</p>
              <h2 className="text-2xl font-extrabold text-green-600 mt-1">
                {course.percentage}%
              </h2>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm p-4 text-center border border-blue-100">
              <p className="text-xs md:text-sm text-gray-500 tracking-wide">CURRENT GRADE</p>
              <h2 className="text-2xl font-extrabold text-blue-600 mt-1">
                {course.grade}
              </h2>
            </div>
          </div>
        </div>



      {/* Assessments Table */}
<div className="bg-white rounded-xl shadow-md overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[600px] text-left border-collapse">
      <thead>
        <tr className="bg-[#F0FDFA] text-[#009689] text-[12px] font-light px-2">
          <th className="py-3 px-4 font-semibold">ASSESSMENT TYPE</th>
          <th className="py-3 px-4 font-semibold">OBTAINED MARKS</th>
          <th className="py-3 px-4 font-semibold">TOTAL MARKS</th>
          <th className="py-3 px-4 font-semibold">PERCENTAGE</th>
        </tr>
      </thead>
      <tbody>
        {course.assessments.map((a, index) => {
          const percentage = ((a.obtained / a.total) * 100).toFixed(1);
          return (
            <tr key={index} className="border-b border-gray-100 last:border-0">
              <td className="py-3 px-4">{a.type}</td>
              <td className="py-3 px-4 text-[#009689] font-medium">
                {a.obtained}
              </td>
              <td className="py-3 px-4">{a.total}</td>
              <td className="py-3 px-4 text-green-600 font-medium">
                {percentage}%
              </td>
            </tr>
          );
        })}

        {/* Total Row */}
        <tr className="bg-gray-50 font-bold">
          <td className="py-3 px-4">Total</td>
          <td className="py-3 px-4 text-teal-700">{course.totalScore}</td>
          <td className="py-3 px-4">{course.totalMarks}</td>
          <td className="py-3 px-4 text-green-600">
            {course.percentage}%
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

      </div>

    </div>
  );
}

export default CourseDetail;
