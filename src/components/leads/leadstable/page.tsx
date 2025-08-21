"use client";
import React from "react";
import { FiEye, FiEdit2, FiTrash2, FiUser, FiStar } from "react-icons/fi";

type Status = "new" | "interested" | "pending" | "converted";

interface LeadRow {
  name: string;
  email: string;
  business: string;
  phone: string;
  status: Status;
}

const rows: LeadRow[] = [
  {
    name: "John Smith",
    email: "john@techcorp.com",
    business: "Tech Corp",
    phone: "+1 234-567-8901",
    status: "new",
  },
  {
    name: "Sarah Johnson",
    email: "sarah@marketing.com",
    business: "Marketing Pro",
    phone: "+1 234-567-8902",
    status: "interested",
  },
  {
    name: "Michael Chen",
    email: "michael@design.com",
    business: "Creative Studio",
    phone: "+1 234-567-8903",
    status: "pending",
  },
  {
    name: "Emily Davis",
    email: "emily@startup.com",
    business: "Startup Hub",
    phone: "+1 234-567-8904",
    status: "converted",
  },
];

const STATUS_STYLES: Record<Status, string> = {
  new: "bg-[#FFD900]/20 text-gray-800 border-[#FFD900]",
  interested: "bg-blue-50 text-blue-700 border-blue-200",
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  converted: "bg-green-50 text-green-700 border-green-200",
};

const LeadsTable: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl text-gray-800 flex items-center gap-3">
          Leads (4)
          <span className="text-base font-semibold px-3 py-1 rounded-md text-black">
            {rows.length}
          </span>
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="px-4 py-4 font-medium">Name</th>
              <th className="px-4 py-4 font-medium">Email</th>
              <th className="px-4 py-4 font-medium">Business</th>
              <th className="px-4 py-4 font-medium">Phone</th>
              <th className="px-4 py-4 font-medium">Status</th>
              <th className="px-4 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {rows.map((r, i) => (
              <tr
                key={i}
                className="border-b last:border-0 hover:bg-gray-50/60"
              >
                <td className="px-4 py-4">{r.name}</td>
                <td className="px-4 py-4">{r.email}</td>
                <td className="px-4 py-4">{r.business}</td>
                <td className="px-4 py-4">{r.phone}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${
                      STATUS_STYLES[r.status]
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      title="View"
                      className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
                    >
                      <FiEye className="h-4 w-4 text-gray-600" />
                    </button>
                    <button
                      title="Edit"
                      className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
                    >
                      <FiEdit2 className="h-4 w-4 text-gray-600" />
                    </button>
                    <button
                      title="Profile"
                      className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <FiUser className="h-4 w-4 text-blue-600" />
                    </button>
                    <button
                      title="Favorite"
                      className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <FiStar className="h-4 w-4 text-yellow-500" />
                    </button>
                    <button
                      title="Delete"
                      className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <FiTrash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {/* Light divider inside table after last row */}
            <tr>
              <td colSpan={6} className="px-4">
                <div className="h-px bg-gray-200" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;
