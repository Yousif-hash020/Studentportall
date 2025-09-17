import React from "react";
import Sidebar from "./Components/Sidebar";

function Result() {
  const results = [
    { id: 1, term: "Spring 2023", gp: 63.34, cumulative: 63.34, cr: 19, totalCr: 19, sgpa: 3.33, cgpa: 3.33 },
    { id: 2, term: "Fall 2023", gp: 52.32, cumulative: 115.6, cr: 17, totalCr: 36, sgpa: 3.08, cgpa: 3.21 },
    { id: 3, term: "Spring 2024", gp: 59.33, cumulative: 174.9, cr: 16, totalCr: 52, sgpa: 3.71, cgpa: 3.37 },
    { id: 4, term: "Fall 2024", gp: 61.25, cumulative: 236.15, cr: 18, totalCr: 70, sgpa: 3.4, cgpa: 3.37 },
    { id: 5, term: "Spring 2025", gp: 67.8, cumulative: 303.95, cr: 20, totalCr: 90, sgpa: 3.39, cgpa: 3.38 },
  ];

  return (
    // Prevent page-level horizontal scrolling
    <div className=" min-h-screen bg-gray-100 overflow-x-hidden w-full flex flex-col md:flex-row">
      
     <div className="w-full md:w-1/5 bg-white ">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="w-full md:w-4/5 flex flex-col p-4 overflow-x-hidden">

<div className="bg-white mt-8 w-full px-4 py-4 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)]">
  
        <h1 className="text-xl sm:text-2xl font-bold mb-6">Your Results</h1>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 bg-white px-3 sm:px-4 py-3 sm:py-4 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)]">
          <input
            type="text"
            placeholder="Search by term, ID, SGPA, or CGPA..."
            className="flex-1 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <select className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-400 outline-none">
            <option>All Terms</option>
            <option>Spring 2023</option>
            <option>Fall 2023</option>
            <option>Spring 2024</option>
            <option>Fall 2024</option>
            <option>Spring 2025</option>
          </select>
        </div>

        <div className="w-full max-w-full overflow-x-auto rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)]">
          <table className="min-w-[900px] md:min-w-0 w-auto md:w-full border-collapse bg-white">
            <thead>
              <tr className="bg-[#F0FDFA] text-[11px] sm:text-[12px] font-light text-[#277873] text-center">
                <th className="px-3 sm:px-6 py-2 sm:py-3 whitespace-nowrap">ID</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 whitespace-nowrap">TERM</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 whitespace-nowrap">GRADING POINTS</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 whitespace-nowrap">CUMULATIVE GP</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 whitespace-nowrap">CR</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 whitespace-nowrap">TOTAL CR</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 whitespace-nowrap">SGPA</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 whitespace-nowrap">CGPA</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm">
              {results.map((r) => (
                <tr
                  key={r.id}
                  className="border-t border-gray-200 hover:bg-gray-50 text-center"
                >
                  <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{r.id}</td>
                  <td className="px-3 sm:px-6 py-3 text-teal-600 font-medium whitespace-nowrap">
                    {r.term}
                  </td>
                  <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{r.gp}</td>
                  <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{r.cumulative}</td>
                  <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{r.cr}</td>
                  <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{r.totalCr}</td>
                  <td className="px-3 sm:px-6 py-3 text-green-600 font-semibold whitespace-nowrap">
                    {r.sgpa}
                  </td>
                  <td className="px-3 sm:px-6 py-3 text-blue-600 font-semibold whitespace-nowrap">
                    {r.cgpa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

</div>


      </main>

    </div>
  );
}

export default Result;
