import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ProfilePopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    // Save logic here (e.g., save to localStorage or call an API)
    console.log({ name, mobile, email, address, photo });
    onClose(); // Close the popup after save
  };

  if (!isOpen) return null; // Do not render if the popup is not open

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        {/* Cross Icon to Close Popup */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 text-2xl"
        >
          <FaTimes />
        </button>

        {/* Profile Section */}
        <div className="text-center mb-6">
          <h2 className=" text-[#19456B] pb-2 text-2xl font-bold">Profile</h2>
          <hr></hr>
        </div>

        {/* Photo Input */}
        <div className="flex flex-col justify-center items-center mb-4">
          <label htmlFor="photo">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
              {photo ? (
                <img
                  src={photo}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-gray-600">Upload</span>
              )}
            </div>
          </label>
          <input
            type="file"
            id="photo"
            onChange={handlePhotoChange}
            className="hidden"
            accept="image/*"
          />
          {/* Change Profile text */}
          <p className="text-center text-[#19456B] cursor-pointer mt-2">
            Change Profile
          </p>
        </div>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="pb-1 w-1/4 text-md text-[#19456B]">
            Name:
          </label>
          <br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter your name"
          />
        </div>

        {/* Mobile and Email Inputs */}
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="mobile" className="pb-1 text-md text-[#19456B]">
              Mobile:
            </label>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter your mobile"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="email" className="pb-1 text-md text-[#19456B]">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Address Input */}
        <div className="mb-6">
          <label htmlFor="address" className="pb-1 text-md text-[#19456B]">
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter your address"
          />
        </div>
        <hr className="mb-4"></hr>
        {/* Save Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="w-full bg-[#1fab89] border border-gray-300 p-2 rounded-md text-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
