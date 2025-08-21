"use client";
import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";
import { FaHandPaper } from "react-icons/fa";

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
    <header className="h-32 sm:h-40 bg-white border-b flex items-center justify-between px-10">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 flex items-center gap-3">
        Welcome Back, <span className="text-gray-900">Muhammad</span>
        <FaHandPaper className="text-yellow-500 h-8 w-8" />
      </h1>

      <div className="flex items-center gap-6">
        <button className="p-5 rounded-full hover:bg-gray-100">
          <FiBell className="h-7 w-7 text-gray-600" />
        </button>

        <div className="h-14 w-14 rounded-full overflow-hidden border">
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
