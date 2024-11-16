import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { name: "akhil", username: "akhil123" },
  { name: "aryan", username: "aryan123" },
  { name: "mike", username: "mike123" },
];

function ProductGrid() {
  return (
    <div className="bg-[#CBFAEE] rounded-lg p-4 h-[29rem]">
      <div className="text-[#19456B] text-lg mb-4">Partner Delegates</div>
      
      {/* Adjusting layout for responsiveness */}
      <div className="flex flex-wrap justify-evenly items-center gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            username={product.username}
          />
        ))}
      </div>
      
      {/* Adjusting button layout */}
      <div className="flex justify-center mt-4">
        <button className="w-[10rem] border-2 border-[#19456B] px-6 py-2 text-[#19456B] rounded-md">
          More
        </button>
      </div>
    </div>
  );
}

export default ProductGrid;
