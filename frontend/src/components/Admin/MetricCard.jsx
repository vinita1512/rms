const MetricCard = ({ colorFrom, colorTo, value, label }) => {
  return (
    <div
      className={`bg-gradient-to-r from-${colorFrom} to-${colorTo} text-white p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300`}
    >
      <h2 className="text-4xl font-bold">{value}</h2>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  );
};

export default MetricCard;
