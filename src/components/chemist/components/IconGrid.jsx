import React, { useState } from "react";
import { FaBox, FaRobot, FaChartBar, FaMoneyBillAlt } from "react-icons/fa"; // Importing necessary FontAwesome icons
import PrivateOrders from "./PrivateOrders/PrivateOrders";
import Bill from "./Bill";
import AI from "./AI";
import Statistics from "./Statistics";
import Upload from "./Upload/Upload";
import { MdOutlineFileUpload } from "react-icons/md";

// Define your icons with the corresponding components
const icons = [
  {
    name: "Private Orders",
    icon: <FaBox className="text-white text-6xl" />,
    component: <PrivateOrders />,
  },
  {
    name: "Upload",
    icon: <MdOutlineFileUpload className="text-white text-6xl" />,
    component: <Upload />,
  },
  {
    name: "AI",
    icon: <FaRobot className="text-white text-6xl" />,
    component: <AI />,
  },
  {
    name: "Statistics",
    icon: <FaChartBar className="text-white text-6xl" />,
    component: <Statistics />,
  },
  {
    name: "Billing",
    icon: <FaMoneyBillAlt className="text-white text-6xl" />,
    component: <Bill />,
  },
];

function IconGrid() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null); // Track the active index for styling

  const handleClick = (component, index) => {
    setActiveComponent(component); // Set the active component to render
    setActiveIndex(index); // Set the active index for styling purposes
  };

  return (
    <div className="m-20">
      {/* Container for the grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {icons.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer 
            ${
              activeIndex === index ? "bg-[#45D3AF] scale-110" : "bg-[#7FF1D4]"
            } 
             `}
            onClick={() => handleClick(item.component, index)} // Handle the click
          >
            {/* Large Icon on Top */}
            {item.icon}
            {/* Heading below Icon */}
            <h3 className={`mt-8 text-xl font-semibold text-[#19456B]`}>
              {item.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Render the active component */}
      <div className="mt-8">
        {activeComponent ? activeComponent : <PrivateOrders />}
      </div>
    </div>
  );
}

export default IconGrid;
