import React from "react";
import Sidebar from "./Components/Sidebar";
import CourseCard from "./Components/CourseCard";
import coursesData from "./Components/Data";
import CourseHeader from "./Components/CourseHeader";

function Courses() {
  return (

    <div className="w-full flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-white ">
        <Sidebar />
      </div>


      {/* Parent Wrapper for Courses */}
      <div className="w-full md:w-4/5 flex flex-col p-4">

        <div>
          <CourseHeader />
        </div>

        <div className=" bg-white py-8 mb-8 mt-8 shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-xl p-6">   <h1 className="text-2xl font-bold text-gray-800 mb-4">Current Courses</h1>
        <p className="text-gray-500 mb-6">
          Spring 2025 • {coursesData.length} Enrolled Courses
        </p>

        {/* Cards Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div></div>


      </div>
    </div>
  );
}

export default Courses;
