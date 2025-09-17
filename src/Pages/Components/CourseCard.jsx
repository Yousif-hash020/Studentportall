import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UserIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const { id, title, code, teacher, credits, grade, attendance, status } = course;

  // Attendance color logic
  const attendanceColor =
    attendance >= 85
      ? "text-green-600"
      : attendance >= 80
        ? "text-yellow-600"
        : "text-red-600";

  return (
    <div
      onClick={() => navigate(`/courses/${id}`)}
      className=" bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-xl flex flex-col justify-between cursor-pointer hover:shadow-xl transition "
    >
      {/* Top - Title + Code */}
      <div>
        <div className=" flex-1 justify-between items-start mb-3 bg-[#F0FDFA] py-2 px-4  rounded-xl">
          <div>
            <h2 className="text-base font-semibold text-[#007873] mt-2">{title}</h2>

          </div>

          <div className="flex justify-between  mt-6 mb-2">
            <p className="text-[12.4px] text-[#007873] font-semibold ">{code}</p>

            {/* Status Badge */}
            <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 
                           text-xs font-medium rounded-full">
              <CheckCircleIcon className="h-4 w-4" />
              {status}
            </span>
          </div>

        </div>
      </div>

      {/* Bottom - Details */}
      <div className="space-y-2 text-sm text-[#007873] px-4 ">
        <p className="flex items-center gap-2 ">
          <UserIcon className="h-4 w-4 text-[#007873]" />
          <span className="font-medium">Teacher:</span> {teacher}
        </p>
        <p className="flex items-center gap-2 ">
          <BookOpenIcon className="h-4 w-4 " />
          <span className="font-medium">Credits:</span> {credits}
        </p>
        <p className="flex items-center gap-2 ">
          <AcademicCapIcon className="h-4 w-4 " />
          <span className="font-medium">Grade:</span> {grade || "N/A"}
        </p>
        <p className="flex items-center gap-2 mb-5">
          <ChartBarIcon className={`h-4 w-4 ${attendanceColor}`} />
          <span className="font-medium">Attendance:</span> {attendance}%
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
