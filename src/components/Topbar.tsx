"use client";
import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";

// Interface for Topbar state
interface TopbarState {
  avatar: string;
}

export default function Topbar() {
  const [state, setState] = useState<TopbarState>({
    avatar: "/avatar.png",
  });

  useEffect(() => {
    setState({
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    });
  }, []);

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4">
      <h1 className="text-xl font-semibold text-gray-800"></h1>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FiBell className="h-5 w-5 text-gray-600" />
        </button>

        {/* Profile Picture */}
        <div className="h-10 w-10 rounded-full overflow-hidden border">
          <img
            src={state.avatar}
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
