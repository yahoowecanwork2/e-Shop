import React from "react";
import Manimg from "../assets/image/mens section.jpg";
import Womenimg from "../assets/image/women section.jpeg";
import Kidimg from "../assets/image/kids section.jpg";
function CategorySection() {
  const category = [
    {
      title: "Man",
      imgUrl: Manimg,
    },
    {
      title: "Women",
      imgUrl: Womenimg,
    },
    {
      title: "Kid",
      imgUrl: Kidimg,
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {category.map((item, index) => (
        <div
          key={index}
          className="relative h-65 transition-all duration-300 ease-in-out  hover:scale-105 cursor-pointer "
        >
          <img
            src={item.imgUrl}
            alt=""
            className="w-full h-full  shadow-md rounded-lg"
          />
          <div className="absolute top-20 left-70">
            <p className="text-xl font-bold">{item.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
