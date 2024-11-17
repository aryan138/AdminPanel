import React from "react";
import { BillingData } from "./BillingData";
const BillingTable = () => {
  return (
    <>
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
      <div className="w-full h-[1.5px] bg-[#D7D7D7] my-8 mt-10"></div>
    </>
  );
};

export default BillingTable;
