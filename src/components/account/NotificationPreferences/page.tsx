"use client";
import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

type ToggleProps = {
  label: string;
  description?: string;
  checked?: boolean;
  onChange?: (v: boolean) => void;
};

const Toggle: React.FC<ToggleProps> = ({
  label,
  description,
  checked = false,
  onChange,
}) => {
  const [on, setOn] = useState<boolean>(checked);

  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
        {description ? (
          <p className="text-sm text-gray-500">{description}</p>
        ) : null}
      </div>

      {/* ✔️ Compact checkbox */}
      <button
        type="button"
        aria-pressed={on}
        onClick={() => {
          const next = !on;
          setOn(next);
          onChange?.(next);
        }}
        className={`flex items-center justify-center h-4 w-4 rounded border transition-colors
          ${
            on
              ? "border-black bg-black"
              : "border-gray-400 bg-white hover:border-black"
          }`}
      >
        {on ? <FiCheck className="h-2.5 w-2.5 text-white" /> : null}
      </button>
    </div>
  );
};

const NotificationPreferences: React.FC = () => {
  return (
    <div className="w-full max-w-[820px] bg-white rounded-xl border p-6 shadow-sm">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Notification Preferences
      </h2>

      <div className="space-y-6">
        <Toggle
          label="Email Notifications"
          description="Receive updates via email"
          checked
        />
        <Toggle
          label="Lead Alerts"
          description="Get notified about new leads"
          checked
        />
        <Toggle
          label="Card Activity"
          description="Notifications for card scans"
        />
      </div>

      {/* Footer buttons */}
      <div className="mt-10 -mb-4 -mx-6 px-6 py-3 border-t bg-gray-50 rounded-b-xl flex items-center gap-3">
        <button
          type="button"
          className="px-3 py-1.5 text-sm font-medium rounded-md border border-[#FFD900] bg-[#FFD900] text-black hover:bg-[#e6c500] focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
        >
          Save Changes
        </button>
        <button
          type="button"
          className="px-3 py-1.5 text-sm font-medium rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NotificationPreferences;
