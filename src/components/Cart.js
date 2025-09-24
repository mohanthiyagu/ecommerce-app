import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 && <p className="cart-empty">No items in cart!!!! Add Products to the cart </p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          <div style={{ flex: 1 }}>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
          </div>

          <div className="cart-item-controls">
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{ background: "red" }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total Items: {totalItems}</h3>
          <h2>Total Amount: ₹{totalAmount}</h2>
              <Link to="/"> <button style={{backgroundColor:"#3A9B95", marginRight:"10px"}}>⬅ Back to products </button></Link>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}
