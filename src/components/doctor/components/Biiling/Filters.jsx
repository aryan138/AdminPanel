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
    <div className="flex flex-wrap gap-2 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <div className="text-[#19456B] w-full text-2xl md:text-3xl font-semibold">
            <p>LAB TEST BOOKINGS ({filteredData.length})</p>
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
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex w-full gap-4">
        {/* Test Type Filter */}
        <div className="w-full md:w-1/4">
          <select
            className="w-full bg-white border border-gray-300 rounded-3xl text-gray-700 text-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            value={filterTestType}
            onChange={handleTestTypeChange}
          >
            <option value="" disabled>
              Select Test Type
            </option>
            <option value="Blood Test">Blood Test</option>
            <option value="CT">CT</option>
            <option value="MRI">MRI</option>
          </select>
        </div>

        {/* Urgency Filter */}
        <div className="w-full md:w-1/4">
          <select
            className="w-full bg-white border border-gray-300 rounded-3xl text-gray-700 text-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            value={filterDepartment}
            onChange={handleDepartmentChange}
          >
            <option value="" disabled>
              Select Urgency
            </option>
            <option value="Same Day">Same Day</option>
            <option value="Same Day">Same Day</option>
          </select>
        </div>

        {/* Department Filter */}
        <div className="w-full md:w-1/4">
          <select
            className="w-full bg-white border border-gray-300 rounded-3xl text-gray-700 text-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            value={filterDepartment}
            onChange={handleDepartmentChange}
          >
            <option value="" disabled>
              Select Department
            </option>
            <option value="Radiology">Radiology</option>
            <option value="Pathology">Pathology</option>
          </select>
        </div>

        {/* Date Range Filter */}
        <div className="w-full md:w-1/4">
          <select className="w-full bg-white border border-gray-300 rounded-3xl text-gray-700 text-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer">
            <option value="" disabled>
              Select Date Range
            </option>
            <option value="Last Week">Last Week</option>
            <option value="Last Month">Last Month</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
