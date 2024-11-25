import React, { useState } from "react";
import Popup from "./Popup";

const Table = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleViewDetails = (item) => {
    console.log(item)
    setSelectedRow(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedRow(null);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse text-left text-gray-700">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-300">
              <th className="p-4 text-sm font-bold text-[#19456B]">Staff ID</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Name</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Role</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Department</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Shift Timing</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Ability Status</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Contact Info.</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-4 text-sm">{item.staffID}</td>
                <td className="p-4 text-sm">{item.name}</td>
                <td className="p-4 text-sm">{item.role}</td>
                <td className="p-4 text-sm">{item.department}</td>                
                <td className="p-4 text-sm">{item.shiftTiming}</td>
                <td className="p-4 text-sm">{item.availabilityStatus}</td>
                <td className="p-4 text-sm">{item.contactInfo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && selectedRow && (
        <Popup selectedRow={selectedRow} closePopup={closePopup} />
      )}
    </>
  );
};

export default Table;