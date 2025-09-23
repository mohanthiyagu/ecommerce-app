import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

    if (status === "loading") return <Loader/>;
  if (status === "failed") return <p>Error loading products</p>;

  return (


  <div className="product-list">
    {items.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>

  );
}
