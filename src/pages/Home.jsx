import React from "react";
import { Categories } from "../assets/DummyData/DummyData";
import Hero from "../assets/image/blackbanner.jpg";
import InfoSection from "./InfoSection";
const Home = () => {
  return (
    <div>
      <div>
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 px-4 md:px-10 lg:px-20 py-10">
          {/* 📌 Categories Section */}
          <div className="w-full lg:w-[30%] bg-white shadow-md rounded-lg p-5">
            <h2 className="text-xl font-semibold mb-4 bg-red-700 text-white rounded-md px-2 text-center lg:text-left">
              SHOP BY CATEGORIES
            </h2>

            <ul className="flex flex-wrap lg:flex-col gap-3 justify-center lg:justify-start">
              {Categories.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white transition rounded-md px-4 py-2 w-fit"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-[70%] flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-lg px-5 py-8 gap-6">
            {/* Left Text Content */}
            <div className="text-center md:text-left flex flex-col gap-3 max-w-[500px]  transition-all duration-300 ease-in-out">
              <p className="text-sm md:text-base text-gray-600 font-medium">
                Update your wardrobe with the latest fashion
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                Welcome to <br /> e-Shop
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Millions+ Products
              </p>

              <button className="mt-3 bg-black text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-gray-700 w-fit mx-auto md:mx-0 transition-all duration-300 ease-in-out  hover:scale-105">
                Shop Now
              </button>
            </div>

            {/* Banner Image */}
            <div className="w-full md:w-[50%] flex justify-center transition-all duration-300 hover:scale-105 hover:opacity-80 hover:-translate-y-2">
              <img
                src={Hero}
                alt="hero"
                className="w-[90%] sm:w-[70%] md:w-full max-w-[450px] rounded-lg object-cover shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-80 hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>
      <InfoSection />
    </div>
  );
};

export default Home;
