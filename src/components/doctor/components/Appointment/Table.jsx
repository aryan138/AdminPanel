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
              <th className="p-4 text-sm font-bold text-[#19456B]">Appointment ID</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Customer Name</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Doctor Name</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Date & Time</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Category</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Status</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Staff Assigned</th>
              <th className="p-4 text-sm font-bold text-[#19456B]">Actions</th>
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
                <td className="p-4 text-sm">{item.appointmentID}</td>
                <td className="p-4 text-sm">{item.customerName}</td>
                <td className="p-4 text-sm">{item.doctorName}</td>
                <td className="p-4 text-sm">{item.dateTime}</td>                
                <td className="p-4 text-sm">{item.category}</td>
                <td className="p-4 text-sm">{item.status}</td>
                <td className="p-4 text-sm">{item.staffAssigned}</td>
                <td className="p-4 text-sm">
                  <button
                    onClick={() => handleViewDetails(item)}
                    className="text-[#10BE67] underline"
                  >
                    View More
                  </button>
                </td>
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