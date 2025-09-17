import React from 'react'
import { BellIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
     <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      {/* Left Section (Page Title) */}
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="relative">
          <BellIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
          <span className="absolute top-0 right-0 block w-2 h-2 bg-teal-500 rounded-full"></span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-teal-500 text-white font-bold">
            BA
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-800">Babar Azam</h2>
            <p className="text-xs text-gray-500">babar@devxcript.com</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header