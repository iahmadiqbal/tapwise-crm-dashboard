const LeadsOverview = () => {
  const items = [
    { label: "New Leads", value: 127 },
    { label: "Pending", value: 84 },
    { label: "Converted", value: 245 },
  ];

  return (
    <div className="w-full max-w-[580px] bg-[#FFFFFF] border border-gray-200 rounded-xl shadow-md mt-6 p-6">
      {items.map((item) => (
        <div key={item.label} className="pb-3">
          <div className="flex items-center justify-between  mt-4">
            <h2 className="text-base font-semibold text-gray-800">
              {item.label}
            </h2>

            <span className="text-lg font-bold tracking-tight tabular-nums text-gray-900">
              {item.value}
            </span>
          </div>

          {/* Yellow line */}
          <hr className="border-2 border-[#FFD900] rounded" />
        </div>
      ))}
    </div>
  );
};

export default LeadsOverview;
