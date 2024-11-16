import React, { useState } from "react";
import {
  FaSearch,
  FaUserAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfilePopup from "./Popup"; // Import the ProfilePopup

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control the popup visibility

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const handleSaveProfile = (profileData) => {
    console.log("Profile Data Saved:", profileData);
    // You can handle profile saving here, like calling an API to save the data
  };

  const UserProfile = () => {
    return (
      <div
        className="relative group cursor-pointer"
        onClick={() => setIsPopupOpen(true)} // Open popup on profile click
      >
        <FaUserAlt className="w-6 h-12 text-[#1fab89]" />
      </div>
    );
  };

  // Check if user is logged in based on token existence
  const isLoggedIn = !!localStorage.getItem("accessToken");

  return (
    <nav className="w-full h-[10%] m-1 p-2">
      <div className="container mx-auto lg:px-20 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="bg-[#1fab89] font-bold text-white text-lg p-2">
          LOGO
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 relative max-w-[800px]">
          <div className="flex items-center border-2 border-[#1fab89] rounded-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full focus:outline-none"
            />
            <button className="bg-[#1fab89] text-white px-4 py-2 rounded-full mr-1">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right Side - Profile and Logout */}
        <div className="flex items-center space-x-4 ml-auto">
            <>
              <UserProfile />
              <button
                onClick={handleLogout}
                className="text-[#1fab89] border-[#1fab89] border-2 px-4 py-2 rounded-full flex items-center space-x-2"
              >
                <span>Logout</span>
              </button>
            </>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#1fab89]">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          {/* Mobile search bar */}
          <div className="px-4 mb-4">
            <div className="flex items-center border-2 border-[#1fab89] rounded-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full focus:outline-none"
              />
              <button className="bg-[#1fab89] text-white px-4 py-2 rounded-full mr-1">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Mobile Auth Section */}
            <div className="px-4 py-2 border-t">
              <div className="space-y-2 flex flex-col items-center">
                <UserProfile />
                <button
                  onClick={handleLogout}
                  className="w-full text-[#1fab89] border-[#1fab89] border-2 px-4 py-2 rounded-full flex items-center justify-center space-x-2"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            </div>
        </div>
      )}

      {/* Profile Popup */}
      <ProfilePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSave={handleSaveProfile}
      />

      <hr className="bg-white h-0 md:bg-gray-300 md:h-[0.15rem] md:mx-12 md:mt-1 opacity-35" />
    </nav>
  );
};

export default Navbar;
