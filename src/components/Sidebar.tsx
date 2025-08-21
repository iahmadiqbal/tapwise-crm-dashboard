"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUser,
  FiUsers,
  FiSettings,
  FiCreditCard,
  FiLogOut,
  FiX,
} from "react-icons/fi";
import { LuPalette } from "react-icons/lu";

type MenuItem = {
  name: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const menuItems: MenuItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: FiHome },
  { name: "Profiles", path: "/profiles", icon: FiUser },
  { name: "Leads", path: "/leads", icon: FiUsers },
  { name: "Theme", path: "/theme", icon: LuPalette },
  { name: "Account", path: "/account", icon: FiSettings },
  { name: "Subscription", path: "/subscription", icon: FiCreditCard },
];

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const isActive = (p: string) =>
    pathname === p || pathname?.startsWith(p + "/");

  return (
    <>
      {/* Overlay (mobile) */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 lg:hidden ${
          open ? "block" : "hidden"
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />

      {/* Sidebar */}
      <aside
        className={[
          "fixed lg:fixed z-50 lg:z-40 top-0 left-0 h-screen w-64",
          "bg-white border-r px-4 flex flex-col justify-between overflow-y-auto",
          "transform",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
        aria-label="Sidebar"
      >
        <div className="pt-4">
          {/* Logo + Close */}
          <div className="flex items-center justify-between">
            <Image
              src="/images/tapwise-dark-logo.png"
              alt="Tapwise Logo"
              width={120}
              height={42}
              priority
            />
            <button
              type="button"
              className="lg:hidden p-2"
              onClick={onClose}
              aria-label="Close menu"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          <div className="border-b border-gray-200 mt-4" />

          {/* Nav */}
          <nav className="mt-6 flex flex-col gap-1">
            {menuItems.map(({ name, path, icon: Icon }) => {
              const active = isActive(path);
              return (
                <Link
                  key={name}
                  href={path}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "flex items-center gap-3 rounded-lg px-3 py-2 bg-[#FFD900] text-black font-semibold"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-[#FFD900] hover:text-black"
                  }
                >
                  <Icon
                    className={
                      active ? "h-5 w-5 text-black" : "h-5 w-5 text-gray-500"
                    }
                  />
                  <span className="truncate">{name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="p-3">
          <button
            type="button"
            className="flex items-center gap-2 w-full px-3 py-2 border rounded-md text-gray-700 hover:bg-[#FFD900] hover:text-black"
          >
            <FiLogOut className="h-5 w-5" />
            <span className="truncate">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
