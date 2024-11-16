import React from 'react';

const AddUser = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[1200px]">
        {/* Title and divider */}
        <h2 className="text-2xl font-semibold text-center text-[#19456B] mb-6">Add User</h2>
        <hr className='mb-3 mt-1' />

        {/* Form */}
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* User Role */}
            <div>
              <label htmlFor="userrole" className="block text-sm font-medium text-gray-600">User Role</label>
              <select
                id="userrole"
                name="userrole"
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#1FAB89]"
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="guest">Guest</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#19456B]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#1FAB89]"
              />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#19456B]">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#1FAB89]"
              />
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-[#19456B]">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#1FAB89]"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-[#19456B]">DOB [Date of Birth]</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#1FAB89]"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#19456B]">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#1FAB89]"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="number" className="block text-sm font-medium text-[#19456B]">Mobile Number</label>
              <input
                type="tel"
                id="number"
                name="number"
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#1FAB89]"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-[#19456B]">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#1FAB89]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#CBFAEE] text-[#19456B] font-semibold rounded-md hover:bg-[#1FAB89] hover:text-white"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
