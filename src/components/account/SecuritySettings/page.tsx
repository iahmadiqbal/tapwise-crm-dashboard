"use client";
import React from "react";

const SecuritySettings: React.FC = () => {
  return (
    <div className="w-full max-w-[820px] bg-white rounded-xl border p-4 shadow-sm mt-5">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Security Settings
      </h2>

      <div className="space-y-6">
        {/* Change Password */}
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Change Password
            </h3>
            <p className="text-sm text-gray-500">
              Update your account password
            </p>
          </div>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium rounded-md border border-[#FFD900] bg-white text-gray-800 hover:bg-[#FFD900] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#FFD900] transition-colors"
          >
            Change
          </button>
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Two-Factor Authentication
            </h3>
            <p className="text-sm text-gray-500">
              Add an extra layer of security
            </p>
          </div>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium rounded-md border border-[#FFD900] bg-white text-gray-800 hover:bg-[#FFD900] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#FFD900] transition-colors"
          >
            Enable
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
