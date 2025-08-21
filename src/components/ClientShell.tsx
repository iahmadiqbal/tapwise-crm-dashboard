"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar: fixed on desktop, drawer on mobile */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main area */}
      <div className="min-h-screen flex flex-col lg:pl-64">
        {/* 👆 IMPORTANT: desktop par left padding = sidebar width */}

        {/* Topbar with consistent padding */}
        <div className="px-4 sm:px-6 lg:px-8">
          <Topbar onMenuClick={() => setSidebarOpen(true)} />
        </div>

        {/* Content with same padding */}
        <main className="flex-1 min-w-0 overflow-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
