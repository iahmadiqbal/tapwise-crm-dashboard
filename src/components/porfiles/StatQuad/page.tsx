const StatQuad: React.FC = () => {
  const stats = [
    { label: "Total Profiles", value: 4 },
    { label: "Active", value: 2 },
    { label: "Pending", value: 1 },
    { label: "Total Scans", value: 535 },
  ];

  const getColor = (value: number) => {
    switch (value) {
      case 4:
        return "#FFD900"; // Yellow
      case 2:
        return "#4BC55E"; // Green
      case 1:
        return "#EAB308"; // Orange
      case 535:
        return "#000000"; // Black
      default:
        return "#374151"; // Fallback gray
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-5">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center text-center"
        >
          <p
            className="text-3xl font-bold"
            style={{ color: getColor(stat.value) }}
          >
            {stat.value}
          </p>
          <p className="text-sm font-medium text-gray-500 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatQuad;
