import React from "react";
import ProductGrid from "./ProductGrid";

function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-[#19456B]">Dashboard</h1>
      </div>
      <ProductGrid />
    </div>
  );
}

export default DashboardPage;
