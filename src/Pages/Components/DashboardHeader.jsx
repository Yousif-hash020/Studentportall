import React from "react";
import { useAppContext } from "../../context/AppContext";
import { UserIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const DashboardHeader = () => {
  const { user } = useAppContext();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Gradient Icon */}
        <div className="h-14 w-14 flex items-center justify-center rounded-xl text-[#14B8A6] bg-[#CBFBF1]">
          <UserIcon className="w-8 h-8" />
        </div>

        {/* User Info */}
        <div>
          <h2 className="font-bold text-xl text-gray-900 uppercase">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500">{user.rollNo}</p>
          <p className="text-sm text-gray-500">{user.faculty}</p>
          <p className="flex items-center gap-2 mt-2">
            <span className="flex items-center gap-1 px-3 py-1 border border-teal-400 text-teal-600 text-xs font-medium rounded-full">
              <AcademicCapIcon className="w-4 h-4" />
              {user.program}
            </span>
          </p>
        </div>
      </div>

      {/* Right Section (Stats) */}
      <div className="grid grid-cols-2 sm:flex gap-4">
        <InfoBox label="CGPA" value={user.cgpa} />
        <InfoBox label="EARNED CREDITS" value={user.earnedCredits} color="text-emerald-600" />
        <InfoBox label="TOTAL CREDITS" value={user.totalCredits} />
        <InfoBox label="IN PROGRESS" value={user.inProgress} color="text-orange-600" />
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

export default DashboardHeader;
