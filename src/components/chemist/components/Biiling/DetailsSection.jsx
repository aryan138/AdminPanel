import React, { useState } from "react";
const DetailsSection = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    gender: "",
    dob: "",
    mobileNumber: "",
    invoiceType: "",
    paymentType: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full h-[1.5px] bg-[#D7D7D7] my-10 mt-16"></div>
      <div className="h-[12rem] w-full sm:w-[96%] lg:w-[96%] flex flex-col sm:flex-row items-center justify-center p-6 bg-[#F3FCF6] shadow rounded-lg border-2 mx-auto">
        {/* Form Section */}
        <form className="w-full h-auto space-y-6 text-[#19456B]">
          {/* First Row: Customer Name, Gender, DOB */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="customerName"
                className="block text-sm font-medium text-[#19456B]"
              >
                Customer Name
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FF1D4]"
                placeholder="Enter Customer Name"
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-[#19456B]"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FF1D4]"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-[#19456B]"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FF1D4]"
              />
            </div>
          </div>

          {/* Second Row: Mobile Number, Invoice Type, Payment Type */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-[#19456B]"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FF1D4]"
                placeholder="Enter Mobile Number"
              />
            </div>

            <div>
              <label
                htmlFor="invoiceType"
                className="block text-sm font-medium text-[#19456B]"
              >
                Invoice Type
              </label>
              <select
                id="invoiceType"
                name="invoiceType"
                value={formData.invoiceType}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FF1D4]"
              >
                <option value="">GST</option>
                <option value="Digital">Digital</option>
                <option value="Physical">Physical</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="paymentType"
                className="block text-sm font-medium text-[#19456B]"
              >
                Payment Type
              </label>
              <select
                id="paymentType"
                name="paymentType"
                value={formData.paymentType}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FF1D4]"
              >
                <option value="">Select Payment Type</option>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DetailsSection;
