const Popup = ({ selectedRow, closePopup }) => {
    if (!selectedRow) return null; // Prevent rendering if selectedRow is not defined
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg w-[600px] shadow-md">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <div className="bg-[#1fab89] font-bold text-white text-lg p-2">
              LOGO
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-[#19456B]">XYZ Hospital</h1>
              <p className="text-sm">Address</p>
              <p className="text-sm">xyz@gmail.com</p>
              <p className="text-sm">www.xyz.com</p>
            </div>
          </div>
  
          {/* Patient Details */}
          <div className="mb-4">
            <div className="flex justify-between">
              <p><strong>Name/Contact:</strong> {selectedRow?.patientName} / N/A</p>
              <p><strong>Appointment ID:</strong> {selectedRow?.appointmentId}</p>
            </div>
            <div className="flex justify-between">
              <p><strong>Date:</strong> {selectedRow?.dateTime}</p>
              <p><strong>Booking ID:</strong> {selectedRow?.bookingId}</p>
            </div>
          </div>
  
          {/* Test Details */}
          <h2 className="text-center text-lg font-semibold border-t border-gray-300 pt-4">Test Details</h2>
          <table className="w-full text-sm text-left mt-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Test Type</th>
                <th className="border border-gray-300 px-4 py-2">Department</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Amount Paid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  {selectedRow?.testType?.join(", ")}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {selectedRow?.department}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {selectedRow?.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {selectedRow?.amountPaid}
                </td>
              </tr>
            </tbody>
          </table>
  
          {/* Footer */}
          <div className="mt-4 text-xs text-gray-600">
            <p>Note:</p>
            <ol className="list-decimal pl-4">
              <li>This is a Computerized Bill and does not require Seal & Sign.</li>
              <li>For cancellations or rescheduling, visit [website/app link] or contact us at [helpline number].</li>
            </ol>
          </div>
  
          {/* Close Button */}
          <div className="text-right mt-6">
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