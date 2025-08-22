"use client";

import React from "react";
import { FaUser, FaQrcode, FaUsers } from "react-icons/fa";

const StatCards: React.FC = () => {
  const stats = [
    {
      title: "Cards Created",
      value: "15",
      sub: "of 25 available",
      icon: <FaUser className="h-6 w-6 text-blue-600" />,
      accent: "bg-blue-50",
    },
    {
      title: "NFC Scans",
      value: "1,248",
      sub: "this month",
      icon: <FaQrcode className="h-6 w-6 text-emerald-600" />,
      accent: "bg-emerald-50",
    },
    {
      title: "Team Members",
      value: "8",
      sub: "active",
      icon: <FaUsers className="h-6 w-6 text-violet-600" />,
      accent: "bg-violet-50",
    },
  ];

  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-5 flex items-center justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            {/* Left side text */}
            <div>
              <p className="text-sm text-gray-500">{s.title}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {s.value}
              </h3>
              <p className="text-sm text-gray-500">{s.sub}</p>
            </div>

            {/* Right side icon */}
            <div
              className={`h-12 w-12 rounded-full flex items-center justify-center ${s.accent}`}
            >
              {s.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCards;
