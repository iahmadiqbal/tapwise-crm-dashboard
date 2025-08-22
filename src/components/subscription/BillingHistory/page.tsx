"use client";

const BillingHistory: React.FC = () => {
  const history = [
    {
      plan: "Professional Plan",
      date: "February 15, 2024",
      amount: "$79.00",
      status: "Paid",
    },
    {
      plan: "Professional Plan",
      date: "January 15, 2024",
      amount: "$79.00",
      status: "Paid",
    },
    {
      plan: "Professional Plan",
      date: "December 15, 2023",
      amount: "$79.00",
      status: "Paid",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full mt-10">
      {/* ↑ mt-10 = aur zyada upar se space */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h2 className="text-xl font-bold text-gray-800">Billing History</h2>
      </div>

      <div className="space-y-4">
        {history.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b last:border-none pb-3"
          >
            <div>
              <p className="font-semibold text-gray-900">{item.plan}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
            <div className="flex items-center gap-6 mt-2 sm:mt-0">
              <p className="font-medium text-gray-700">{item.amount}</p>
              <span className="text-green-600 font-semibold">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingHistory;
