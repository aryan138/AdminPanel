import React from "react";

const FilterTags = ({
  filterStatus,
  setFilterStatus,
  filterDepartment,
  setFilterDepartment,
  filterUrgency,
  setFilterUrgency,
  filterTestType,
  setFilterTestType,
}) => {
  // Check if any filter arrays have items
  const hasFilters =
    filterStatus.length > 0 ||
    filterUrgency.length > 0 ||
    filterDepartment.length > 0 ||
    filterTestType.length > 0;

  return (
    <div>
      {/* Only render the tags container if there are any filters */}
      {hasFilters && (
        <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-md shadow-md">
          {/* Status Tags */}
          {filterStatus.map((status, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-md hover:bg-blue-200 transition duration-300"
            >
              <span>{status}</span>
              <button
                onClick={() =>
                  setFilterStatus(filterStatus.filter((s) => s !== status))
                }
                className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none transition duration-200"
              >
                &times;
              </button>
            </div>
          ))}

          {/* Urgency Tags */}
          {filterUrgency.map((urgency, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-md hover:bg-green-200 transition duration-300"
            >
              <span>{urgency}</span>
              <button
                onClick={() =>
                  setFilterUrgency(filterUrgency.filter((u) => u !== urgency))
                }
                className="ml-2 text-green-500 hover:text-green-700 focus:outline-none transition duration-200"
              >
                &times;
              </button>
            </div>
          ))}

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

          {/* Test Type Tags */}
          {filterTestType.map((test, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium shadow-md hover:bg-red-200 transition duration-300"
            >
              <span>{test}</span>
              <button
                onClick={() =>
                  setFilterTestType(filterTestType.filter((t) => t !== test))
                }
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none transition duration-200"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Line Below, rendered only if filters are applied */}
      {hasFilters && (
        <div className="my-4 border-t border-gray-300"></div>
      )}
    </div>
  );
};

export default FilterTags;
