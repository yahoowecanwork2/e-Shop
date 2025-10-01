import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">e-Shop</Link>
        </div>
        <div>
          <form action="">
            <input type="text" placeholder="search products" />
            <FaSearch />
          </form>
        </div>
        <div>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <button>Login || Register</button>
          <button>
            <FaUser />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
