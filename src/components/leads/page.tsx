"use client";
import React, { useMemo, useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiSearch, FiChevronDown, FiMaximize, FiPlus } from "react-icons/fi";

interface LeadsHeaderProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onStatusSelect?: (status: string) => void;
}

const STATUSES = [
  "All status",
  "new",
  "pending",
  "interested",
  "converted",
] as const;

const LeadsHeader: React.FC<LeadsHeaderProps> = ({
  className = "",
  placeholder = "Search...",
  value,
  onChange,
  onStatusSelect,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("All status");
  const menuRef = useRef<HTMLDivElement | null>(null);

  // close dropdown on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const statusBtnLabel = useMemo(() => status, [status]);

  return (
    <div className={`w-full ${className}`}>
      {/* Row: Left (Search + Status) | Right (Actions) */}
      <div className="flex flex-col sm:flex-row items-stretch justify-between gap-3">
        {/* Left side */}
        <div className="flex items-stretch gap-3">
          {/* Search box */}
          <div className="relative w-64">
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-[#FFD900] focus:outline-none"
            />
          </div>

          {/* Status dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-between gap-2 px-3 py-2 border rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <span className="text-sm font-medium">{statusBtnLabel}</span>
              <FiChevronDown
                className={`h-4 w-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div
                role="listbox"
                tabIndex={-1}
                className="absolute z-10 mt-2 w-44 bg-white border rounded-md shadow-md p-1"
              >
                {STATUSES.map((s) => (
                  <button
                    key={s}
                    role="option"
                    aria-selected={status === s}
                    onClick={() => {
                      setStatus(s);
                      onStatusSelect?.(s);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      status === s ? "bg-[#FFD900]/20" : "hover:bg-gray-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side: Actions */}
        <div className="flex items-stretch gap-2">
          {/* Profiles icon */}
          <button
            type="button"
            onClick={() => router.push("/profiles")}
            title="Open Profiles"
            className="inline-flex items-center justify-center px-3 py-2 border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
          >
            <FiMaximize className="h-5 w-5" />
          </button>

          {/* Add Lead button */}
          <button
            type="button"
            onClick={() => router.push("/leads/new")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium text-black"
            style={{ backgroundColor: "#FFD900" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#e6c500")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#FFD900")
            }
          >
            <FiPlus className="h-5 w-5" />
            Add Lead
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadsHeader;
