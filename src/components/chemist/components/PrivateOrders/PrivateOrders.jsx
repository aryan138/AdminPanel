import React from "react";
import StatusGrid from "./StatusGrid";
import SearchSection from "./SearchSection";
import PrescriptionCardBody from "./OrderTable";

function PrivateOrders() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
    <div className="border-b mb-8">
      <StatusGrid />
    </div>
    <div className="mb-8">
        <SearchSection />
    </div>
        <PrescriptionCardBody />
    </div>
  );
}

export default PrivateOrders;
