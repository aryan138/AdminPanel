import React from "react";

const Popup = ({ selectedRow, closePopup }) => {
  if (!selectedRow) return null; // Prevent rendering if selectedRow is not defined

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-[600px] shadow-md">
        {/* Profile Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="bg-[#1fab89] text-white text-3xl p-4 rounded-full">
            <span className="font-bold">LOGO</span>
          </div>
          <div className="text-right">
            <h1 className="text-xl font-bold text-[#19456B]">Dr. {selectedRow?.name}</h1>
            <p className="text-sm text-gray-500">Specialization: {selectedRow?.specialization}</p>
            <p className="text-sm text-gray-500">Department: {selectedRow?.department}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mb-6 border-b pb-4">
          <div className="flex justify-between mb-2">
            <p><strong>Doctor ID:</strong> {selectedRow?.doctorId}</p>
            <p><strong>Contact:</strong> {selectedRow?.contactInfo}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p><strong>Availability:</strong> {selectedRow?.availability}</p>
            <p><strong>Schedule:</strong> {selectedRow?.schedule}</p>
          </div>
        </div>

        {/* About the Doctor */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#19456B]">About Dr. {selectedRow?.name}</h2>
          <p className="text-sm text-gray-600">
            Dr. {selectedRow?.name} is a highly skilled {selectedRow?.specialization} with expertise in {selectedRow?.department}. With over a decade of experience, Dr. {selectedRow?.name} is dedicated to providing exceptional care to patients. Their commitment to health and well-being is reflected in their availability for consultations and treatment.
          </p>
        </div>

        {/* Close Button */}
        <div className="text-right">
          <button
            onClick={closePopup}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
