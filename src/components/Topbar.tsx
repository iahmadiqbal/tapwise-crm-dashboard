"use client";
import React, { useEffect, useState } from "react";
import { FiBell, FiMenu } from "react-icons/fi";
import { FaHandPaper } from "react-icons/fa";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [avatar, setAvatar] = useState("/avatar.png");
  useEffect(
    () => setAvatar("https://randomuser.me/api/portraits/men/32.jpg"),
    []
  );

  return (
    <header className="h-24 min-h-24 bg-white border-b flex items-center justify-between px-4 sm:px-6 lg:px-10">
      <div className="flex items-center gap-3 min-w-0">
        {/* Hamburger (mobile only) */}
        <button
          type="button"
          className="lg:hidden p-2"
          aria-label="Open menu"
          onClick={onMenuClick}
        >
          <FiMenu className="h-6 w-6" />
        </button>

        <h1 className="text-lg sm:text-2xl font-semibold text-gray-800 flex items-center gap-3 truncate">
          Welcome Back, <span className="text-gray-900">Muhammad</span>
          <FaHandPaper className="text-yellow-500 h-6 w-6 sm:h-7 sm:w-7" />
        </h1>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <button
          type="button"
          className="p-3 rounded-full hover:bg-gray-100"
          aria-label="Notifications"
        >
          <FiBell className="h-6 w-6 sm:h-7 sm:w-7 text-gray-600" />
        </button>
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border">
          <img
            src={avatar}
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
