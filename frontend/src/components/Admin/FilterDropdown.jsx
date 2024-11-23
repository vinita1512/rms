const FilterDropdown = ({ value, onChange }) => {
  return (
    <select
      className="bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded-md focus:outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="7">Last 7 Days</option>
      <option value="30">Last 30 Days</option>
      <option value="all">All Time</option>
    </select>
  );
};

export default FilterDropdown;
