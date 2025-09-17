import React from "react";
import { useAppContext } from "../context/AppContext";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  IdentificationIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "./Components/Sidebar";

const ProfileDetails = () => {
  const { user } = useAppContext();

  return (
    <div className="w-full flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-white md:border-r shadow-sm">
        <Sidebar />
      </div>

      {/* Profile Content */}
      <div className="flex-1 flex  p-4 sm:p-6 md:p-8 w-full">
        <div className="bg-white w-full  rounded-2xl shadow-[0_0_12px_rgba(0,0,0,0.1)] p-4 sm:p-8">
          {/* Header */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <UserIcon className="w-6 h-6 text-teal-600" />
            Profile Details
          </h2>

          {/* Top Section: Avatar + Basic Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
            {/* Avatar */}
            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-teal-500 text-white text-xl sm:text-2xl font-bold">
              {user.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>

            {/* Basic Info */}
            <div className="text-center sm:text-left">
              <p className="text-lg sm:text-xl font-bold text-gray-800">
                {user.name}
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-2 justify-center sm:justify-start">
                <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                {user.email}
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-2 justify-center sm:justify-start">
                <PhoneIcon className="w-4 h-4 text-gray-400" />
                {user.phone || "N/A"}
              </p>
            </div>
          </div>

          {/* Academic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
            <InfoRow
              icon={<IdentificationIcon className="w-5 h-5 text-teal-500" />}
              label="Roll Number"
              value={user.rollNo}
            />
            <InfoRow
              icon={<BuildingLibraryIcon className="w-5 h-5 text-teal-500" />}
              label="Faculty"
              value={user.faculty}
            />
            <InfoRow
              icon={<AcademicCapIcon className="w-5 h-5 text-teal-500" />}
              label="Program"
              value={user.program}
            />
            <InfoRow
              icon={<CalendarDaysIcon className="w-5 h-5 text-teal-500" />}
              label="Semester"
              value={user.semester}
            />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8">
            <StatBox label="CGPA" value={user.cgpa} color="text-green-600" />
            <StatBox
              label="Earned Credits"
              value={user.earnedCredits}
              color="text-blue-600"
            />
            <StatBox
              label="Total Credits"
              value={user.totalCredits}
              color="text-purple-600"
            />
            <StatBox
              label="In Progress"
              value={user.inProgress}
              color="text-orange-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm">
    {icon}
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-gray-800">{value || "N/A"}</p>
    </div>
  </div>
);

const StatBox = ({ label, value, color }) => (
  <div className="p-3 sm:p-4 bg-gray-50 rounded-xl text-center shadow-sm">
    <p className="text-xs sm:text-sm text-gray-500">{label}</p>
    <p className={`text-base sm:text-lg font-bold ${color || "text-gray-800"}`}>
      {value}
    </p>
  </div>
);

export default ProfileDetails;
