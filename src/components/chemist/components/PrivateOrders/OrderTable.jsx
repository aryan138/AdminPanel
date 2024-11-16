import React from "react";
import { orderData } from "./data";

const OrderTable = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-gray-700 font-bold border-b-2">
            <th className="py-4 text-lg text-left px-4">Customer Info</th>
            <th className="py-4 text-lg text-left px-4">Order Info</th>
            <th className="py-4 text-lg text-left px-4">Product</th>
            <th className="py-4 text-lg text-left px-4">Timeline</th>
            <th className="py-4 text-lg text-left px-4">Total Cost</th>
            <th className="py-4 text-lg text-left px-4"></th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((row, index) => (
            <tr className="border-b-2 hover:bg-gray-50" key={index}>
              <td className="py-4 text-left pl-4 pr-4">
                <div className="font-bold text-lg">{row.customerInfo.name}</div>
                <div>{row.customerInfo.gender}</div>
                <div className="text-[#45D3AF] mt-2 font-semibold">Details</div>
              </td>
              <td className="py-4 text-left pl-4 pr-4">
                <div className="font-bold text-lg">{row.orderInfo.orderNumber}</div>
                <div>{row.orderInfo.orderDate}</div>
                <div className="text-[#45D3AF] mt-2 font-semibold">Questionnaire</div>
              </td>
              <td className="py-4 text-left pl-4 pr-4">
                <div className="font-bold text-lg">{row.product.name}</div>
                <div>{row.product.quantity}</div>
                <div className="text-[#45D3AF] mt-2 font-semibold">Past Order</div>
              </td>
              <td className="py-4 text-left pl-4 pr-4">
                <div className="font-bold text-lg">{row.timeline.action}</div>
                <div>{row.timeline.date}</div>
                <div className="text-[#45D3AF] mt-2 font-semibold">Order Status</div>
              </td>
              <td className="py-4 text-left pl-4 pr-4 font-bold text-lg">{row.totalCost}</td>
              <td className="py-4 text-left pl-4 pr-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-2">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
