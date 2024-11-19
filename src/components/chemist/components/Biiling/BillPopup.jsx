import React from "react";
import { BillingData } from "./BillingData";
const numberToWords = (num) => {
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  if (num === 0) return "Zero";

  let word = "";

  if (num > 99) {
    word += ones[Math.floor(num / 100)] + " Hundred ";
    num %= 100;
  }

  if (num > 19) {
    word += tens[Math.floor(num / 10)] + " ";
    num %= 10;
  }

  if (num > 0) {
    word += ones[num] + " ";
  }

  return word.trim();
};

const BillPopup = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const totalBilledQuantity = BillingData.length;
  const subtotal = BillingData.reduce(
    (acc, item) => acc + parseFloat(item.Value),
    0
  );
  const tradeDiscount = 0; // Static value as per your previous implementation
  const gst = (12 / 100) * subtotal;
  const netTotal = subtotal + gst;
  const netTotalInWords = numberToWords(Math.round(netTotal));

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 w-full md:w-4/5 lg:w-3/4 max-w-5xl min-h-[60vh] max-h-[90vh] rounded-lg shadow-lg relative overflow-scroll">
        {/* Close Button (Cross Icon) */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-900"
        >
          &times; {/* This is the "×" symbol for close */}
        </button>

        <div className="text-center text-[#19456B]">
          {/* Clinic Information */}
          <div className="text-xl font-semibold">XYZ Clinic</div>
          <div className="text-md">123 Clinic St., City, Country</div>
          <div className="text-md">contact@xyzclinic.com</div>
          <div className="text-md">+123 456 7890</div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Customer Details */}
        <div className="text-[#19456B]">
          {/* First Row: Name, ID, Sex */}
          <div className="flex justify-between">
            <p>
              <strong>Name:</strong> Akhil
            </p>
            <p>
              <strong>ID:</strong> 100001
            </p>
            <p>
              <strong>Sex:</strong> Male
            </p>
          </div>

          {/* Second Row: Date, Bill ID */}
          <div className="flex justify-between mt-2">
            <p>
              <strong>Date:</strong> Date
            </p>
            <p>
              <strong>Bill ID:</strong> #123
            </p>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Bill/Receipt Text */}
        <div className="text-2xl font-semibold text-center my-4 text-[#19456B]">
          Bill / Receipt
        </div>

        {/* Billing Table */}
        <div className="overflow-x-auto">
          <table className="text-lg min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-[#19456B]">
                <th className="p-4 border border-gray-300 text-md font-bold text-center">
                  S.no
                </th>
                <th className="p-2 border border-gray-300 text-md font-bold text-center">
                  Batch No
                </th>
                <th className="p-2 border border-gray-300 text-md font-bold text-center">
                  Product Name
                </th>
                <th className="p-4 border border-gray-300 text-md font-bold text-center">
                  Size
                </th>
                <th className="p-4 border border-gray-300 text-md font-bold text-center">
                  Units
                </th>
                <th className="p-4 border border-gray-300 text-md font-bold text-center">
                  Quantity
                </th>
                <th className="p-4 border border-gray-300 text-md font-bold text-center">
                  Price
                </th>
                <th className="p-4 border border-gray-300 text-md font-bold text-center">
                  MRP
                </th>
                <th className="p-4 border border-gray-300 text-md font-bold text-center">
                  Disc
                </th>
                <th className="p-4 border border-gray-300 text-md font-bold text-center">
                  Tax
                </th>
                <th className="p-4 border border-gray-300 text-md font-bold text-center">
                  Tax Value
                </th>
                <th className="p-4 border border-gray-300 text-md font-bold text-center">
                  Exp
                </th>
                <th className="p-4 border border-gray-300 text-md font-bold text-center">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {BillingData.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {index + 1}
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {item.BatchNo}
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {item.ProductName}
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {item.Size}
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {item.Units}
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    1
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {item.PRICE}
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {item.MRP}
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {item.Disc}
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {item.Tax}
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {item.TaxValue}
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {item.Exp}
                  </td>
                  <td className="p-2 border border-gray-300 text-sm text-center">
                    {item.Value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Amount Component */}
        <div className="w-full bg-gray-100 p-4 mt-4 text-[#19456B]">
          <div className="flex justify-between text-lg font-semibold">
            <p>Total Billed Quantity:</p>
            <p>{totalBilledQuantity}</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>SubTotal:</p>
            <p>₹{subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Trade Discount:</p>
            <p>{tradeDiscount}%</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>GST (12%):</p>
            <p>₹{gst.toFixed(2)}</p>
          </div>
          <hr className="border-t my-4" />
          <div className="flex justify-between text-lg font-semibold">
            <p>Net Total:</p>
            <p className="text-[#03B462]">₹{netTotal.toFixed(2)}</p>
          </div>
          <div className="mt-2 text-lg text-right text-[#03B462]">
            <strong>{netTotalInWords} Only</strong>
          </div>
        </div>

        {/* New Payment Information */}
        <div className="flex justify-start mt-4 text-md text-[#19456B]">
          <p>16/11/2024 09:15AM - Recieved Rs. 129 (By Cash) as Payment</p>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Signature */}
        <div className="text-right text-lg">Sign: ____________________</div>
      </div>
    </div>
  );
};

export default BillPopup;
