import React from "react";

const Filters = ({
  filteredData,
  filterDepartment,
  setFilterDepartment,
  filterSchedule,
  setFilterSchedule,
}) => {
  const handleDepartmentChange = (event) => {
    const value = event.target.value;
    setFilterDepartment((prev) =>
      prev.includes(value)
        ? prev.filter((dept) => dept !== value)
        : [...prev, value]
    );
  };

  const handleScheduleChange = (event) => {
    const value = event.target.value;
    setFilterSchedule((prev) =>
      prev.includes(value)
        ? prev.filter((schedule) => schedule !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <div className="mt-12 mb-4 border-t-2 border-gray-300"></div>
      <div className="flex flex-wrap gap-6 p-6 pl-0 bg-white rounded-lg">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <div className="text-[#19456B] w-full text-2xl md:text-3xl font-semibold">
            <p>AVAILABLE DOCTORS ({filteredData.length})</p>
          </div>
          <div className="mt-4 w-full md:mt-0 flex flex-grow gap-3 mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="text-[#666666] text-lg border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="flex justify-end w-full gap-4">

          {/* Specialization Filter */}
          <div className="w-full md:w-1/4">
            <select
              className="w-full bg-white border border-gray-300 rounded-3xl text-gray-700 text-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              value={filterDepartment}
              onChange={handleDepartmentChange}
            >
              <option value="">Select Specialization</option>
              <option value="Radiology">Radiology</option>
              <option value="Pathology">Pathology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
            </select>
          </div>

          {/* Department Filter */}
          <div className="w-full md:w-1/4">
            <select
              className="w-full bg-white border border-gray-300 rounded-3xl text-gray-700 text-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              value={filterDepartment}
              onChange={handleDepartmentChange}
            >
              <option value="">Select Department</option>
              <option value="Radiology">Radiology</option>
              <option value="Pathology">Pathology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
            </select>
          </div>

          {/* Available Filter */}
          <div className="w-full md:w-1/4">
            <select
              className="w-full bg-white border border-gray-300 rounded-3xl text-gray-700 text-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              value={filterSchedule}
              onChange={handleScheduleChange}
            >
              <option value="">Select Availability</option>
              <option value="Available">Available</option>
              <option value="Available">Available</option>
            </select>
          </div>

          {/* Schedule Filter */}
          <div className="w-full md:w-1/4">
            <select
              className="w-full bg-white border border-gray-300 rounded-3xl text-gray-700 text-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              value={filterSchedule}
              onChange={handleScheduleChange}
            >
              <option value="">Select Schedule</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>
        </div>
      </div>
      <div className="my-4 border-t-2 border-gray-300"></div>
    </>
  );
};

export default Filters;
