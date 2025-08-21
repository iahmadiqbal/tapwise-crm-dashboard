"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUser,
  FiUsers,
  FiSettings,
  FiCreditCard,
  FiLogOut,
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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen w-64 bg-white border-r flex flex-col justify-between">
      {/* Logo */}
      <div>
        <h2 className="text-2xl font-bold p-4 text-yellow-600">Tapwise</h2>
        <p className="px-4 text-sm text-gray-500 font-medium">CRM DASHBOARD</p>

        <nav className="mt-4 flex flex-col gap-1">
          {menuItems.map(({ name, path, icon: Icon }) => {
            const active = pathname === path;
            return (
              <Link
                key={name}
                href={path}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-yellow-100 ${
                  active ? "bg-yellow-400 text-white font-semibold" : ""
                }`}
              >
                <Icon className="h-5 w-5" />
                {name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4">
        <button className="flex items-center gap-2 w-full px-4 py-2 border rounded-md hover:bg-gray-100 text-gray-700">
          <FiLogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
