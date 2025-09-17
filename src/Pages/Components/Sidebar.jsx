import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  AcademicCapIcon,
  BookOpenIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: <HomeIcon className="h-5 w-5" /> },
    { to: "/courses", label: "Courses", icon: <BookOpenIcon className="h-5 w-5" /> },
    { to: "/result", label: "Results", icon: <AcademicCapIcon className="h-5 w-5" /> },
    { to: "/attendance", label: "Attendance", icon: <ClipboardDocumentCheckIcon className="h-5 w-5" /> },
    { to: "/profile", label: "Profile", icon: <UserCircleIcon className="h-5 w-5" /> },
    { to: "/", label: "Log Out", icon: <ArrowRightOnRectangleIcon className="h-5 w-5" />, isLogout: true },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-4 right-5 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md bg-white shadow-md"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-full md:w-1/5 bg-white shadow-md flex flex-col justify-between transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6">
          {/* Logo + Title */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500 text-white font-bold">
              DX
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">DevXcript</h1>
              <p className="text-sm text-gray-500">Student Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <ul className="space-y-2 text-[15px] font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-3 rounded-lg transition relative ${
                      isActive && !item.isLogout
                        ? "bg-emerald-50 text-emerald-600 font-semibold"
                        : item.isLogout
                        ? "text-gray-700 hover:bg-red-50 hover:text-red-500"
                        : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {/* Active Dot */}
                  {!item.isLogout && window.location.pathname === item.to && (
                    <span className="absolute right-3 w-2 h-2 rounded-full bg-emerald-500"></span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <p className="text-center text-xs text-gray-500">
            Developed By{" "}
            <span className="text-emerald-600 font-medium">Muhammad Yousaf</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
