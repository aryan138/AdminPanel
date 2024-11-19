import React from "react";
import { PreviousBillData } from "./PreviosBillData";
import { SlArrowDown } from "react-icons/sl";

const PreviousBillsPopup = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50 text-[#19456B]">
      <div className="bg-white p-6 rounded-md w-[80%] max-w-6xl h-[80vh] shadow-lg overflow-y-auto relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[2.5rem] text-[#19456B] text-center w-full border-b pb-2">
            Previous Bills
          </h2>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-5xl font-semibold text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-[#19456B] text-[1.50rem] text-center">
                  Bill #
                </th>
                <th className="py-4 px-6 text-[#19456B] text-[1.50rem] text-center">
                  ID
                </th>
                <th className="py-4 px-6 text-[#19456B] text-[1.50rem] text-center">
                  Date
                </th>
                <th className="py-4 px-6 text-[#19456B] text-[1.50rem] text-center">
                  Name/Contact
                </th>
                <th className="py-4 px-6 text-[#19456B] text-[1.50rem] text-center">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {PreviousBillData.map((bill, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 px-6 text-center text-[1.15rem]">{bill.Bill}</td>
                  <td className="py-4 px-6 text-center text-[1.15rem]">{bill.ID}</td>
                  <td className="py-4 px-6 text-center text-[1.15rem]">{bill.DATE}</td>
                  <td className="py-4 px-6 text-center text-[1.15rem]">{bill.Name}</td>
                  <td className="py-4 px-6 text-center text-[1.15rem] text-[#03B462]">
                    {bill.Amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Down Arrow */}
        <div className="flex justify-center items-center mt-16">
          <SlArrowDown size={40} className="text-[#19456B]" />
        </div>
      </div>
    </div>
  );
};

export default PreviousBillsPopup;
