import React from "react";

const UserProfileDiv = ({ name = "User", email = "user@email.com", role = "Role" }) => {
  return (
    <div className="h-auto flex flex-col sm:flex-row items-center justify-between p-6 bg-[#CBFAEE] shadow rounded-lg border-2 mx-4 sm:mx-12">
      {/* Avatar */}
      <div className="flex items-center space-x-4">
        <div className="bg-[#A0BB8C] rounded-full w-14 h-14 flex items-center justify-center text-white font-semibold text-xl">
          {name.charAt(0).toUpperCase()}
        </div>
        {/* User Info */}
        <div className="text-[#19456B]">
          <p className="text-lg font-medium">Welcome, {name}</p>
          <div className="flex space-x-4 text-sm">
            <p>{email}</p>
            <p className="italic">{role}</p>
          </div>
        </div>
      </div>
      {/* Edit Button */}
      <button
        className="mt-4 sm:mt-0 bg-[#1FAB89] text-white px-4 py-2 rounded hover:bg-[#17A07C] transition duration-300"
        aria-label="Edit Profile"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default UserProfileDiv;
