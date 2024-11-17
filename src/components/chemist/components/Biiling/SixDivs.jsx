import React from "react";

const SixDivsInLine = () => {
  return (
    <>
      <div className="flex space-x-7 justify-center items-center w-full max-w-screen-xl mx-auto">
        <div className="bg-[#EDEBEB] text-[#19456B] p-4 rounded-md shadow-md w-1/2 flex items-center justify-center">
          <p>Product Name</p>
        </div>
        <div className="bg-[#EDEBEB] text-[#19456B] p-4 rounded-md shadow-md w-1/6 flex items-center justify-center">
          <p>Quantity</p>
        </div>
        <div className="bg-[#EDEBEB] text-[#A2AEB8] p-4 rounded-md shadow-md w-1/6 flex items-center justify-center">
          <p>Price</p>
        </div>
        <div className="bg-[#EDEBEB] text-[#A2AEB8] p-4 rounded-md shadow-md w-1/6 flex items-center justify-center">
          <p>Discount(%)</p>
        </div>
        <div className="bg-[#EDEBEB] text-[#19456B] p-4 rounded-md shadow-md w-1/6 flex items-center justify-center">
          <p>Value</p>
        </div>
        <div className="bg-[#66C398] text-[#19456B] p-4 rounded-md shadow-md w-1/4 flex items-center justify-center">
          <p>Add Product</p>
        </div>
      </div>
      <div className="w-full h-[1.5px] bg-[#D7D7D7] my-8 mt-10"></div>
    </>
  );
};

export default SixDivsInLine;
