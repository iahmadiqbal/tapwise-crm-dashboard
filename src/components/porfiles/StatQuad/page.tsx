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
    <section
      className="
        w-full mt-5
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        gap-4
      "
      role="list"
      aria-label="Stats overview"
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          role="listitem"
          className="
            bg-white rounded-2xl shadow-md
            p-4
            flex flex-col items-center justify-center text-center
            min-h-28 sm:min-h-32   /* purana height */
          "
        >
          <p
            className="font-bold leading-none text-3xl sm:text-4xl lg:text-5xl"
            style={{ color: getColor(stat.value) }}
          >
            {stat.value}
          </p>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base font-medium text-gray-600">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
};

export default StatQuad;
