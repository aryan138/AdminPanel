import React from "react";

const FilterTags = ({
  filterDepartment,
  setFilterDepartment,
  filterSchedule,
  setFilterSchedule,
}) => {
  // Check if any filter arrays have items
  const hasFilters = filterDepartment.length > 0 || filterSchedule.length > 0;

  return (
    <div>
      {/* Only render the tags container if there are any filters */}
      {hasFilters && (
        <div className="flex flex-wrap gap-4 p-4">
          {/* Department Tags */}
          {filterDepartment.map((dept, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium shadow-md hover:bg-yellow-200 transition duration-300"
            >
              <span>{dept}</span>
              <button
                onClick={() =>
                  setFilterDepartment(filterDepartment.filter((d) => d !== dept))
                }
                className="ml-2 text-yellow-500 hover:text-yellow-700 focus:outline-none transition duration-200"
              >
                &times;
              </button>
            </div>
          ))}

          {/* Schedule Tags */}
          {filterSchedule.map((schedule, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-md hover:bg-blue-200 transition duration-300"
            >
              <span>{schedule}</span>
              <button
                onClick={() =>
                  setFilterSchedule(filterSchedule.filter((s) => s !== schedule))
                }
                className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none transition duration-200"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Line Below, rendered only if filters are applied */}
      {hasFilters && <div className="my-4 border-t-2 border-gray-300"></div>}
    </div>
  );
};

export default FilterTags;
