"use client";

type Plan = {
  name: "Starter" | "Professional" | "Enterprise";
  price: string;
  blurb: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$29/month",
    blurb: "Perfect for individuals and small teams",
    features: [
      "Up to 5 NFC cards",
      "Basic customization",
      "Email support",
      "Analytics dashboard",
      "Mobile app access",
    ],
  },
  {
    name: "Professional",
    price: "$79/month",
    blurb: "Best for growing businesses",
    features: [
      "Up to 25 NFC cards",
      "Advanced customization",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
      "Lead management",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    price: "$199/month",
    blurb: "For large organizations",
    features: [
      "Unlimited NFC cards",
      "Full customization",
      "24/7 phone support",
      "White-label solution",
      "API access",
      "Advanced integrations",
      "Dedicated account manager",
      "Custom development",
    ],
  },
];

const AvailablePlans: React.FC = () => {
  return (
    <section className="w-full mt-5">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-5">
        Available Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Starter */}
        <div className="relative bg-white rounded-2xl shadow-md border p-6 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">$29/month</p>
            <p className="text-sm text-gray-500 mt-1">
              Perfect for individuals and small teams
            </p>
          </div>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            {plans[0].features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-black shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <button className="w-full rounded-xl bg-[#FFD900] font-semibold py-2.5 hover:brightness-95 transition">
              Upgrade
            </button>
          </div>
        </div>

        {/* Professional */}
        <div className="relative bg-white rounded-2xl shadow-md border-4 border-[#FFD900] p-6 flex flex-col">
          {/* Badges */}
          <div className="absolute -top-3 right-4 flex items-center gap-2 select-none">
            <span className="rounded-full px-3 py-1 text-xs font-semibold bg-[#FFD900]">
              Most Popular
            </span>
            <span className="rounded-full px-3 py-1 text-xs font-semibold bg-green-500 text-white">
              Current Plan
            </span>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Professional
            </h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">$79/month</p>
            <p className="text-sm text-gray-500 mt-1">
              Best for growing businesses
            </p>
          </div>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            {plans[1].features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-black shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <button
              disabled
              className="w-full cursor-default rounded-xl bg-[#CBCBCB] text-black font-semibold py-2.5"
            >
              Current Plan
            </button>
          </div>
        </div>

        {/* Enterprise */}
        <div className="relative bg-white rounded-2xl shadow-md border p-6 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">$199/month</p>
            <p className="text-sm text-gray-500 mt-1">
              For large organizations
            </p>
          </div>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            {plans[2].features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-black shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <button className="w-full rounded-xl bg-[#FFD900] font-semibold py-2.5 hover:brightness-95 transition -mt-4">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailablePlans;
