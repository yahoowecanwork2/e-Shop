// ProductCard.jsx
import React from "react";

const ProductCard = ({ item }) => {
  const discountAmount = item.discount || "20%";

  return (
    <div className="border rounded-xl shadow-sm p-3 hover:shadow-lg transition cursor-pointer bg-white">
      <img
        src={item.images?.[0]}
        alt={item.name}
        className="h-44 w-full object-cover rounded-lg"
      />

      <h2 className="mt-3 font-semibold text-sm">{item.name}</h2>
      <p className="text-gray-700 text-xs">{item.brand}</p>

      <div className="flex items-center gap-2 mt-2">
        <p className="font-bold text-base">₹{item.price}</p>
        <p className="text-gray-500 line-through text-sm">₹{item.mrp}</p>
        <span className="text-green-600 text-sm font-medium">
          {discountAmount} OFF
        </span>
      </div>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-blue-600 text-white py-1.5 rounded-lg text-xs">
          Buy Now
        </button>
        <button className="flex-1 border border-blue-600 text-blue-600 py-1.5 rounded-lg text-xs">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
