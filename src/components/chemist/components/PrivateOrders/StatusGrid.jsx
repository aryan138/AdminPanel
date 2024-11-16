import React from "react";

const StatusGrid = () => {
  const statusData = [
    { label: "New", count: 6 },
    { label: "Approved", count: 15 },
    { label: "Awaiting", count: 100 },
    { label: "Shipped", count: 60 },
    { label: "Rejected", count: 60 },
    { label: "Quired", count: 60 },
    { label: "Cancelled", count: 60 }
  ];

  return (
    <div className="grid grid-cols-7 gap-4 mb-6">
      {statusData.map(({ label, count }) => (
        <div key={label} className="col-span-1 flex items-center text-gray-500">
          <span>{label}</span>
          <span className={` bg-gray-500 text-white ml-2 px-2 py-1 rounded-full`}>
            {count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatusGrid;
