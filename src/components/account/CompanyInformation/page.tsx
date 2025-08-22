"use client";
import React from "react";

const CompanyInformation: React.FC = () => {
  return (
    <div className="w-full max-w-[820px] bg-white rounded-xl border p-4 shadow-sm mt-5">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Company Information
      </h2>

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-3">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            defaultValue="Tech Solutions Inc."
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
          />
        </div>

        {/* Position */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Position
          </label>
          <input
            type="text"
            defaultValue="CEO"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea
            defaultValue="123 Business St, City, State 12345"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD900] resize-none"
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
