import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [data, setData] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const filteredData = data
    .filter((item) =>
      filterCategory === "all" ? true : item.category === filterCategory
    )
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "low") return a.price - b.price;
      if (sortType === "high") return b.price - a.price;
      if (sortType === "discount")
        return parseInt(b.discount) - parseInt(a.discount);
      return 0;
    });

  return (
    <div className="p-6">
      <div className=" flex flex-row justify-between">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-1/2 mb-4"
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Filters & Sorting */}
        <div className="flex flex-wrap gap-4 mb-4">
          <select
            className="border p-2 rounded"
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="child">Kids</option>
          </select>

          {/* ↕ Sorting */}
          <select
            className="border p-2 rounded"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="discount">Discount</option>
          </select>
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {filteredData.length > 0 ? (
          filteredData.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
