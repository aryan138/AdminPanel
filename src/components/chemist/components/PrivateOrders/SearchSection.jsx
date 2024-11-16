import React from "react";
import { HiSearch } from "react-icons/hi"; // Import search icon

const SearchSection = () => {
  return (
    <div className="flex items-center justify-between space-x-4">
      {/* Search Box */}
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 ">
        <HiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          className="w-full border-none outline-none"
          placeholder="Search prescription"
        />
      </div>

      {/* Filter By Box with Dropdown Icon */}
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 cursor-pointer">
        <span className="text-sm text-gray-500 mr-2">Filter By</span>
        <span className="text-gray-500">&#9660;</span>
      </div>
    </div>
  );
};

export default SearchSection;
