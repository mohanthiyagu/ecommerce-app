import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../features/cartSlice";
import Loader from "./Loader"; 

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); 
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Loader />; 

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price}</h3>
        <h4>Discount: {product.discountPercentage} %</h4>
        <span style={{ fontWeight: "bold", color: "green" }}>
          {product.rating}⭐
        </span>
        <h4>{product.shippingInformation}</h4>
        <h4>
          {product.availabilityStatus} & {product.stock} stocks available
        </h4>
        <h4>{product.warrantyInformation}</h4>
        <h4>{product.returnPolicy}</h4>

        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        <button onClick={() => navigate("/cart")}>Go To Cart</button>
        <Link to="/">
          <button style={{ backgroundColor: "grey" }}>⬅ Back</button>
        </Link>
      </div>
    </div>
  );
}
