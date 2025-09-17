import React from "react";
import Sidebar from "./Components/Sidebar";
import TodayClasses from "./Components/TodayClasses";
import CourseCard from "./Components/CourseCard";
import coursesData from "./Components/Data";
import StatsCard from "./Components/StatsCard"
import { BookOpenIcon } from "@heroicons/react/24/outline";
import DashboardHeader from "./Components/DashboardHeader";



function Dashboard() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-white ">
        <Sidebar />
      </div>



      {/* Main Content */}
      <div className="w-full md:w-4/5 flex flex-col p-4">

   
<div className="mt-4">
       <DashboardHeader/>
</div>

     <div className="mt-4 mb-4">
         <StatsCard />
     </div>
      

        <TodayClasses />

        {/* Parent Wrapper for Courses */}
        <div className="flex flex-col w-full bg-white py-8 mb-8 mt-8 shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-xl">
          <div className="flex gap-2 px-4 items-center">
            <div className="h-9 w-9 bg-[#CBFBF1] flex justify-center items-center rounded-lg">
              <BookOpenIcon className="h-5 w-5 text-[#14B8A6]" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-0">
              Current Courses
            </h1>
          </div>

          <p className="text-[#007873] mb-6 px-8">
            Spring 2025 • {coursesData.length} Enrolled Courses
          </p>

          {/* Cards Wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
            {coursesData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
