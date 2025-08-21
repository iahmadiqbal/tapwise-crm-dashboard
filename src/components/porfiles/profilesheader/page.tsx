"use client";
import React from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

const ProfilesHeader = () => {
  return (
    <div className="w-full">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Client Profiles</h1>

      {/* Search + Button Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Search Box */}
        <div className="relative w-full sm:w-72">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search Profiles"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        {/* Add Profile Button */}
        <div className="flex justify-end sm:w-auto ml-2">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FFD900] text-black rounded-md hover:bg-[#e6c800] transition">
            <FiPlus className="h-5 w-5" />
            Add Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilesHeader;
