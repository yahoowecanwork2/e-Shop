import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ item }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
      <img
        src={item?.images[0]}
        alt={item?.name}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="font-semibold text-lg mt-3">{item?.name}</h3>

      <div className="mt-1">
        <span className="text-xl font-bold">₹{item?.price}</span>
        <span className="line-through text-gray-500 ml-2">₹{item?.mrp}</span>
        <span className="text-green-600 font-semibold ml-2">
          {item?.discount} OFF
        </span>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3">
          <FaStar className="text-amber-300" />
          <FaStar className="text-amber-300" />
          <FaStar className="text-amber-300" />
          <FaStar className="text-amber-300" />
        </div>
        <div className=" botton-4 right-2 flex items-center justify-center w-8 h-8 bg-red-500 text-white group  text-sm rounded-3xl hover:w-32 hover:bg-red-700 transition-all shadow-lg">
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">add to cart</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
