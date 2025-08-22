"use client";

import React from "react";

type Action = {
  label: string;
  icon: React.ReactNode;
};

const QuickActions: React.FC = () => {
  const actions: Action[] = [
    {
      label: "Add New Lead",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M12 5v14M5 12h14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Customize Card",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M16.5 3.5l4 4L10 18l-4.5.5L6 14l10.5-10.5z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      label: "View Analytics",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M3 3v18h18"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M7 16l3-4 3 2 4-6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      label: "Export Data",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M12 3v10m0 0l-4-4m4 4l4-4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-[280px] bg-white border border-gray-200 rounded-xl shadow-md p-4 mt-5">
      <h2 className="text-sm font-semibold text-gray-800">Quick Actions</h2>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {actions.map((a) => (
          <div
            key={a.label}
            className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white p-3 text-gray-900"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
              {a.icon}
            </span>
            <span className="text-xs font-medium text-gray-800 text-center">
              {a.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
