"use client";
import React from "react";
import { FiCamera } from "react-icons/fi";

const ProfileInformation: React.FC = () => {
  return (
    <div className="w-full max-w-[820px] bg-white rounded-xl border p-4 shadow-sm">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Profile Information
      </h2>

      {/* Avatar + Change Photo */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#FFD900] text-xl font-bold text-black">
          JD
        </div>

        <div>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-medium border border-[#FFD900] bg-[#FFD900] text-black px-3 py-1.5 rounded-md hover:bg-[#e6c500] focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
          >
            <FiCamera className="h-4 w-4" />
            Change Photo
          </button>
          <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 2MB</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            defaultValue="John"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            defaultValue="Doe"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
          />
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            defaultValue="john@example.com"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
          />
        </div>

        {/* Phone */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            defaultValue="+1 234-567-8900"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
