import axios from "axios";

export const getTopProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products?limit=10");
  return res.data.products;
};
