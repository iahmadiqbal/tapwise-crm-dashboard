"use client";

interface Review {
  quote: string;
  name: string;
  company: string;
  avatar: string;
}

const data: Review[] = [
  {
    quote: "Tapwise NFC cards have revolutionized our networking!",
    name: "Sarah Johnson",
    company: "Tech Solutions Inc.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote: "Easy to customize and fantastic customer support.",
    name: "Michael Chen",
    company: "Creative Agency",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    quote: "Professional looking cards with amazing functionality.",
    name: "Emily Davis",
    company: "Marketing Pro",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    quote: "Great value and very professional design!",
    name: "David Lee",
    company: "Startup Hub",
    avatar: "https://i.pravatar.cc/150?img=56",
  },
];

const Stars = () => (
  <div className="flex items-center gap-1" aria-label="5 star rating">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400">
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const FeedbackBox: React.FC<{ reviews?: Review[]; title?: string }> = ({
  reviews = data,
  title = "Client Feedback",
}) => {
  return (
    <section className="w-full">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-md">
        <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight text-gray-900">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col items-center border border-gray-100 bg-gray-50 p-6 text-center shadow-sm hover:shadow-md"
            >
              <img
                src={r.avatar}
                alt={`${r.name} avatar`}
                width={96}
                height={96}
                className="mb-3 h-24 w-24 rounded-full object-cover"
              />
              <Stars />
              <p className="mt-3 max-w-[36ch] text-base leading-relaxed text-gray-800">
                “{r.quote}”
              </p>
              <div className="mt-4">
                <div className="text-lg font-semibold text-gray-900">
                  {r.name}
                </div>
                <div className="text-gray-500">{r.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackBox;
