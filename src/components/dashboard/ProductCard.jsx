import React from 'react';

const ProductCard = ({ name, username }) => {
  return (
    <div className="w-64 p-6 bg-[#7FF1D4] rounded-lg shadow-lg h-[14rem] flex flex-col items-center">
      <div className="w-24 h-24 bg-[#A0BB8C] rounded-full mb-4" /> {/* Added margin-bottom to create space between image and text */}
      
      <p className="text-md font-medium text-[#19456B]">
        {name}
      </p>
      
      <p className="mt-2 text-lg text-[#19456B] font-bold">
        {username}
      </p>
    </div>
  );
};

export default ProductCard;
