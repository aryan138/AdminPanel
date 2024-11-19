import React, { useState } from 'react';

const EditUser = () => {
  return (
    <div className=" flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[1200px]">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center text-[#19456B] mb-6">Edit User</h2>
        <hr className="mb-6 border-t-2 border-gray-200" />
        
        <form>
          {/* Input Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* User Role */}
            <div>
              <label htmlFor="userrole" className="block text-sm font-medium text-gray-700">
                User Role
              </label>
              <select
                id="userrole"
                name="userrole"
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1FAB89] focus:border-[#1FAB89] bg-gray-50"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="John">John</option>
                <option value="Jane">Jane</option>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter user email"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1FAB89] focus:border-[#1FAB89] bg-gray-50"
              />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter user name"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1FAB89] focus:border-[#1FAB89] bg-gray-50"
              />
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter username"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1FAB89] focus:border-[#1FAB89] bg-gray-50"
              />
            </div>

            {/* DOB */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                DOB [Date of Birth]
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1FAB89] focus:border-[#1FAB89] bg-gray-50"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter password"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1FAB89] focus:border-[#1FAB89] bg-gray-50"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                required
                placeholder="Enter mobile number"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1FAB89] focus:border-[#1FAB89] bg-gray-50"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="Enter user address"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1FAB89] focus:border-[#1FAB89] bg-gray-50"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#1FAB89] text-white font-semibold rounded-md hover:bg-[#178F78] focus:outline-none focus:ring-4 focus:ring-[#1FAB89] focus:ring-opacity-50 transition-all"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
