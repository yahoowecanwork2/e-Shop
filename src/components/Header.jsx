import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 md:px-16 lg:px-24 flex justify-between items-center flex-row">
          <div className="text-lg font-bold">
            <Link to="/">e-Shop</Link>
          </div>
          <div className="relative flex-1 mx-4">
            <form action="">
              <input
                type="text"
                placeholder="search products"
                className="w-full px-4 py-2  border rounded-[5px]"
              />
              <FaSearch className=" absolute top-3 right-3 text-red-500" />
            </form>
          </div>
          <div className="flex items-center space-x-4 ">
            <Link to="/cart">
              <FaShoppingCart className="text-lg" />
            </Link>
            <button className="hidden md:block">Login || Register</button>
            <button className="block md:hidden">
              <FaUser />
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-10 py-4 text-lg font-bold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/About" className="hover:underline">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
