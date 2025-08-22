"use client";
import React from "react";
import { FiUsers, FiBarChart2, FiCreditCard } from "react-icons/fi";
import { HiArrowTrendingUp } from "react-icons/hi2";

const stats = [
  {
    title: "Active Clients",
    value: "1,234",
    change: "+12.5%",
    icon: FiUsers,
  },
  {
    title: "Total Leads",
    value: "456",
    change: "+8.2%",
    icon: FiBarChart2,
    withArrow: true,
  },
  {
    title: "Cards Customized",
    value: "789",
    change: "+15.3%",
    icon: FiCreditCard,
  },
  {
    title: "Conversion Rate",
    value: "65%",
    change: "+3.1%",
    icon: FiBarChart2,
  },
];

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex justify-between items-center hover:shadow-lg transition"
          >
            {/* LEFT: Title + Value + Change */}
            <div>
              <h3 className="text-gray-500 text-sm font-medium">
                {item.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {item.value}
              </p>

              {item.withArrow ? (
                // only for 2nd box: arrow + %
                <div className="flex items-center gap-1 mt-2">
                  <HiArrowTrendingUp className="text-[#22C55E] text-lg" />
                  <span className="text-sm font-semibold text-[#22C55E]">
                    {item.change}
                  </span>
                </div>
              ) : (
                //   Rest of all boxes
                <span className="text-sm font-semibold text-[#22C55E] mt-2 block">
                  {item.change}
                </span>
              )}
            </div>

            {/* RIGHT: Icon */}
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-gray-600">
              <Icon className="text-xl" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;
