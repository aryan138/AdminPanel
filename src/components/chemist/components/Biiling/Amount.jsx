import React, { useState } from "react";
import { BillingData } from "./BillingData";
import BillPopup from "./BillPopup"; // Import BillPopup component
import PreviousBillsPopup from "./PBPopup"; // Import the existing PreviousBillsPopup

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

const BillingDetails = () => {
  const [isBillPopupOpen, setIsBillPopupOpen] = useState(false); // State for BillPopup
  const [isPreviousBillsPopupOpen, setIsPreviousBillsPopupOpen] = useState(false); // State for PreviousBillsPopup

  const totalBilledQuantity = BillingData.length;
  const subtotal = BillingData.reduce(
    (acc, item) => acc + parseFloat(item.Value),
    0
  );
  const tradeDiscount = 0;  // Static value as per your previous implementation
  const gst = (12 / 100) * subtotal;
  const netTotal = subtotal + gst;
  const netTotalInWords = numberToWords(Math.round(netTotal));

  const openBillPopup = () => {
    setIsBillPopupOpen(true);  // Open BillPopup when Print button is clicked
  };

  const closeBillPopup = () => {
    setIsBillPopupOpen(false);  // Close BillPopup
  };

  const openPreviousBillsPopup = () => {
    setIsPreviousBillsPopupOpen(true);  // Open PreviousBillsPopup when Previous Bills button is clicked
  };

  const closePreviousBillsPopup = () => {
    setIsPreviousBillsPopupOpen(false);  // Close PreviousBillsPopup
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-0">
      <div className="flex justify-end items-start space-x-6">
        {/* Total Billed Quantity */}
        <div className="p-4 text-lg text-[#19456B] w-1/5">
          <p>Total Billed Quantity: {totalBilledQuantity}</p>
        </div>

        {/* Billing Details (SubTotal, Trade Discount, GST) */}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between p-2 text-[#19456B] text-lg">
            <p className="pr-48">SubTotal:</p>
            <p>₹{subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between p-2 text-[#19456B] text-lg">
            <p>Trade Discount</p>
            <p className="pr-16">{tradeDiscount}%</p>
            <p>{(tradeDiscount / 100) * subtotal}</p>
          </div>
          <div className="flex justify-between p-2 text-[#19456B] text-lg">
            <p>GST (12%)</p>
            <p>{(12 / 100) * 100}%</p>
            <p>₹{gst.toFixed(2)}</p>
          </div>
          <hr className="border-t border-[#D7D7D7] mt-2" />
          <div className="flex justify-between p-2 text-[#19456B] font-semibold text-lg">
            <p>Net Total:</p>
            <p className="text-[#03B462]">₹{netTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="mt-2 p-0 text-[#03B462] text-right text-lg">
        <p>
          <strong>{netTotalInWords} Only</strong>
        </p>
      </div>

      <div className="mt-6 flex justify-end space-x-2">
        <button
          onClick={openPreviousBillsPopup} // Open PreviousBillsPopup on clicking this button
          className="px-8 py-2 bg-[#66C398] text-[#19456B] rounded-md shadow-md w-[12rem]"
        >
          Previous Bills
        </button>
        <button className="px-8 py-2 bg-[#66C398] text-[#19456B] rounded-md shadow-md w-[12rem]">
          Save
        </button>
        <button
          onClick={openBillPopup} // Open BillPopup when Print button is clicked
          className="px-8 py-2 bg-[#66C398] text-[#19456B] rounded-md shadow-md w-[12rem]"
        >
          Print
        </button>
        <button className="px-8 py-2 bg-[#66C398] text-[#19456B] rounded-md shadow-md w-[12rem]">
          Next Bill
        </button>
      </div>

      {/* Bill Popup Modal */}
      <BillPopup isOpen={isBillPopupOpen} closeModal={closeBillPopup} />

      {/* Previous Bills Popup Modal */}
      <PreviousBillsPopup
        isOpen={isPreviousBillsPopupOpen}
        closeModal={closePreviousBillsPopup}
      />
    </div>
  );
};

export default BillingDetails;
