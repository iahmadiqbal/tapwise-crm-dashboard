"use client";

import React from "react";

type Review = {
  quote: string;
  name: string;
  company: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    quote: "Tapwise NFC cards have revolutionized our networking!",
    name: "Sarah Johnson",
    company: "Tech Solutions Inc.",
    avatar: "https://i.pravatar.cc/96?img=47",
  },
  {
    quote: "Easy to customize and fantastic customer support.",
    name: "Michael Chen",
    company: "Creative Agency",
    avatar: "https://i.pravatar.cc/96?img=15",
  },
  {
    quote: "Professional looking cards with amazing functionality.",
    name: "Emily Davis",
    company: "Marketing Pro",
    avatar: "https://i.pravatar.cc/96?img=32",
  },
];

const Stars = () => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-yellow-400 animate-pulse"
      >
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const FeedbackRow: React.FC = () => {
  return (
    <section className="w-full">
      <ul className="flex w-full gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reviews.map((r, idx) => (
          <li
            key={r.name}
            className={`w-[360px] list-none opacity-0 animate-slideIn`}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md">
              <div className="flex items-start gap-3">
                <img
                  src={r.avatar}
                  alt={`${r.name} avatar`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border border-gray-200 object-cover"
                />
                <div className="flex-1">
                  <Stars />
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-800">
                    “{r.quote}”
                  </p>
                  <div className="mt-3 text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">
                      {r.name}
                    </span>
                    <span className="mx-1">•</span>
                    <span>{r.company}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeedbackRow;
