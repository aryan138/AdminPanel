import React from "react";

const Filters = ({
  filteredData,
  filterStatus,
  setFilterStatus,
  filterDepartment,
  setFilterDepartment,
  filterTestType,
  setFilterTestType,
}) => {
  const handleStatusChange = (event) => {
    const value = event.target.value;
    setFilterStatus((prev) =>
      prev.includes(value)
        ? prev.filter((status) => status !== value)
        : [...prev, value]
    );
  };

  const handleDepartmentChange = (event) => {
    const value = event.target.value;
    setFilterDepartment((prev) =>
      prev.includes(value)
        ? prev.filter((dept) => dept !== value)
        : [...prev, value]
    );
  };

  const handleTestTypeChange = (event) => {
    const value = event.target.value;
    setFilterTestType((prev) =>
      prev.includes(value)
        ? prev.filter((test) => test !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="flex flex-wrap p-6 pb-1 bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <div className="text-[#19456B] w-full text-2xl md:text-3xl font-semibold">
            <p>Staff ({filteredData.length})</p>
          </div>
          <div className="mt-4 w-full md:mt-0 flex gap-2 mr-2">
            {/* Search Input Container */}
            <input
              type="text"
              placeholder="Search..."
              className="text-[#666666] text-lg border border-gray-300 rounded-md p-3 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
              // The 'flex-grow' class ensures that the input takes all available space in its container
            />
          </div>
          {/* Status Filter */}
          <div className="w-full md:w-2/3">
            {" "}
            <select
              className="w-full bg-white border border-gray-300 rounded-3xl text-gray-700 text-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              value={filterStatus}
              onChange={handleStatusChange}
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Rescheduled">Rescheduled</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
