import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    // <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
    //   <div style={{ border: "1px solid #ddd", padding: "10px", cursor: "pointer" }}>
    //     <img
    //       src={product.thumbnail}
    //       alt={product.title}
    //       style={{ width: "100%", height: "200px", objectFit: "cover" }}
    //     />
    //     <h3>{product.title}</h3>
    //      <h4>{product.brand}</h4>
    //     <span>{product.rating}⭐ </span><br/>
       
    //             <span>{product.category}  </span>
    //     <p>₹{product.price}</p>
    //   </div>
    // </Link>

    <Link to={`/products/${product.id}`} className="product-card">
  <img src={product.thumbnail} alt={product.title} />
  <h3>{product.title}</h3>
  <p>₹{product.price}</p>
</Link>

  );
}
