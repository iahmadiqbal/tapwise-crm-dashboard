"use client";
import React from "react";

const CurrentPlanBox = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6">
      {/* Heading */}
      <h2 className="text-3xl mb-4 flex items-center gap-2 text-black">
        {/* icon of current plan */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3 7 7-2-5 6 2 9-7-4-7 4 2-9-5-6 7 2z" />
        </svg>
        Current Plan
      </h2>

      {/* Plan Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Plan */}
        <div className="space-y-1">
          <p className="text-2xl font-bold text-black">Professional</p>
          <p className="text-sm text-gray-500">Current Plan</p>
        </div>

        {/* Price */}
        <div className="space-y-1 px-12">
          <p className="text-2xl font-bold text-[#FFD900] ">$97</p>
          <span className="text-gray-500 text-sm">Per Month</span>
        </div>

        {/* Cards Used */}
        <div className="space-y-1 mr-2">
          <p className="text-2xl font-bold text-[#22C55E]">15/25</p>
          <p className="text-sm text-gray-500">Cards Used</p>
        </div>

        {/* Next Billing */}
        <div className="space-y-1">
          <p className="text-2xl font-bold text-[#3B82F6]">Mar 15, 2024</p>
          <p className="text-sm text-gray-500 ml-9">Next Billing</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlanBox;
