// Products.jsx
import React, { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [category, setCategory] = useState("men");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products?category=${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);

  return (
    <div className="p-4">
      <FilterBar selected={category} onChange={setCategory} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mt-4">
        {products?.map((item) => (
          <ProductCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
