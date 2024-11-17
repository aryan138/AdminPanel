import React from "react";
import DetailsSection from "./DetailsSection";
import SixDivsInLine from "./SixDivs";
import BillingTable from "./BillingTable";
import BillingDetails from "./Amount";

const Billing = () => {
  return (
    <div>
      <div className="mb-8">
        <DetailsSection />
      </div>
      <SixDivsInLine/>
      <BillingTable/>
      <BillingDetails/>
    </div>
  );
};

export default Billing;
