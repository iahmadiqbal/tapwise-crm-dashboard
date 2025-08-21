"use client";

import { FiTrash2, FiEye, FiEdit2, FiBarChart2 } from "react-icons/fi";

const ContactProfileCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-2">
      {/* Sarah Johnson */}
      <div className="w-full">
        <div className="w-full max-w-[500px] min-h-[250px] bg-white p-6 border border-gray-200 hover:border-gray-300 rounded-3xl shadow-sm flex flex-col justify-between transition">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD900] text-sm font-bold text-gray-900">
                SJ
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900">
                  Sarah Johnson
                </p>
                <p className="text-xs text-gray-500">NFC-001</p>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <p className="text-gray-800">sarah@techsolutions.com</p>
              <p className="text-gray-800">Tech Solutions Inc.</p>

              {/* Status + Scans */}
              <div className="flex items-center justify-between">
                <span className="inline-block px-2 py-0.5 rounded bg-[#DCFCE7] text-gray-800 hover:bg-[#FFD900] hover:text-gray-900 transition">
                  active
                </span>
                <span className="inline-flex items-center gap-1 text-gray-800 font-medium">
                  <FiBarChart2 className="h-4 w-4 text-gray-600" />
                  145 scans
                </span>
              </div>

              <p className="text-gray-500">Last activity: 2 hours ago</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-4">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiEye className="h-4 w-4" /> View
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiEdit2 className="h-4 w-4" /> Edit
            </button>
            <button className="p-2 border border-red-300 bg-white text-red-500 rounded-xl hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiTrash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Michael Chen */}
      <div className="w-full">
        <div className="w-full max-w-[500px] min-h-[250px] bg-white p-6 border border-gray-200 hover:border-gray-300 rounded-3xl shadow-sm flex flex-col justify-between transition">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD900] text-sm font-bold text-gray-900">
                MC
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900">
                  Michael Chen
                </p>
                <p className="text-xs text-gray-500">NFC-002</p>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <p className="text-gray-800">michael@creativeagency.com</p>
              <p className="text-gray-800">Creative Agency</p>

              <div className="flex items-center justify-between">
                <span className="inline-block px-2 py-0.5 rounded bg-[#DCFCE7] text-gray-800 hover:bg-[#FFD900] hover:text-gray-900 transition">
                  active
                </span>
                <span className="inline-flex items-center gap-1 text-gray-800 font-medium">
                  <FiBarChart2 className="h-4 w-4 text-gray-600" />
                  89 scans
                </span>
              </div>

              <p className="text-gray-500">Last activity: 5 hours ago</p>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiEye className="h-4 w-4" /> View
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiEdit2 className="h-4 w-4" /> Edit
            </button>
            <button className="p-2 border border-red-300 bg-white text-red-500 rounded-xl hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiTrash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Emily Davis */}
      <div className="w-full">
        <div className="w-full max-w-[500px] min-h-[250px] bg-white p-6 border border-gray-200 hover:border-gray-300 rounded-3xl shadow-sm flex flex-col justify-between transition">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD900] text-sm font-bold text-gray-900">
                ED
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900">
                  Emily Davis
                </p>
                <p className="text-xs text-gray-500">NFC-003</p>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <p className="text-gray-800">emily@marketingpro.com</p>
              <p className="text-gray-800">Marketing Pro</p>

              <div className="flex items-center justify-between">
                <span className="inline-block px-2 py-0.5 rounded bg-[#FEF9C3] text-gray-800 hover:bg-[#FFD900] hover:text-gray-900 transition">
                  pending
                </span>
                <span className="inline-flex items-center gap-1 text-gray-800 font-medium">
                  <FiBarChart2 className="h-4 w-4 text-gray-600" />
                  34 scans
                </span>
              </div>

              <p className="text-gray-500">Last activity: 1 day ago</p>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiEye className="h-4 w-4" /> View
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiEdit2 className="h-4 w-4" /> Edit
            </button>
            <button className="p-2 border border-red-300 bg-white text-red-500 rounded-xl hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiTrash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* James Wilson */}
      <div className="w-full">
        <div className="w-full max-w-[500px] min-h-[250px] bg-white p-6 border border-gray-200 hover:border-gray-300 rounded-3xl shadow-sm flex flex-col justify-between transition">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD900] text-sm font-bold text-gray-900">
                JW
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900">
                  James Wilson
                </p>
                <p className="text-xs text-gray-500">NFC-004</p>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <p className="text-gray-800">james@startup.com</p>
              <p className="text-gray-800">Startup Hub</p>

              <div className="flex items-center justify-between">
                <span className="inline-block px-2 py-0.5 rounded bg-[#FEE2E2] text-gray-800 hover:bg-[#FFD900] hover:text-gray-900 transition">
                  inactive
                </span>
                <span className="inline-flex items-center gap-1 text-gray-800 font-medium">
                  <FiBarChart2 className="h-4 w-4 text-gray-600" />
                  267 scans
                </span>
              </div>

              <p className="text-gray-500">Last activity: 3 days ago</p>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiEye className="h-4 w-4" /> View
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiEdit2 className="h-4 w-4" /> Edit
            </button>
            <button className="p-2 border border-red-300 bg-white text-red-500 rounded-xl hover:bg-[#FFD900] hover:text-gray-900 transition">
              <FiTrash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactProfileCards;
