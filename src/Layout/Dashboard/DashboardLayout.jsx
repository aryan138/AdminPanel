import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddUser from "../../components/dashboard/AddUser";
import EditUser from "../../components/dashboard/EditUser";
import DashboardPage from "../../components/dashboard/DashboardPage";

function DashboardLayout() {
  const [active, setActive] = useState("dashboard");

  const renderContent = () => {
    switch (active) {
      case "dashboard":
        return (
          <div className="-mt-2">
            <DashboardPage />
          </div>
        );
      case "add-user":
        return (
          <div className="-mt-10">
            <AddUser />
          </div>
        );
      case "update-user":
        return (
          <div className="-mt-10">
            <EditUser />
          </div>
        );
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row mx-4 md:mx-12 mt-4 rounded-md h-full bg-gray-50 shadow-md">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-white text-[#19456B] p-6 flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="#"
              className={() =>
                `block px-6 py-4 text-lg font-medium rounded-lg ${
                  active === "dashboard"
                    ? "bg-[#1FAB89] text-white"
                    : "bg-[#F5F6F5] text-[#19456B]"
                }`
              }
              onClick={() => setActive("dashboard")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={() =>
                `block px-6 py-4 text-lg font-medium rounded-lg ${
                  active === "add-user"
                    ? "bg-[#1FAB89] text-white"
                    : "bg-[#F5F6F5] text-[#19456B]"
                }`
              }
              onClick={() => setActive("add-user")}
            >
              Add User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={() =>
                `block px-6 py-4 text-lg font-medium rounded-lg ${
                  active === "update-user"
                    ? "bg-[#1FAB89] text-white"
                    : "bg-[#F5F6F5] text-[#19456B]"
                }`
              }
              onClick={() => setActive("update-user")}
            >
              Update User
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 h-full lg:p-8 bg-white rounded-lg shadow-md">
        {renderContent()}
      </div>
    </div>
  );
}

export default DashboardLayout;
