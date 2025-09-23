import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import "./App.css";


function Navbar() {
  const cart = useSelector((state) => state.cart);

  // Calculate total quantity in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      padding: " 30px 20px",
      background: "#f8f8f8",
      borderBottom: "1px solid #ddd"
    }}>
      <Link to="/" style={{ fontWeight: "bold", fontSize: "20px", textDecoration: "none" }}>
        🛍 E-Commerce
      </Link>

      <div>
        <Link to="/" style={{ marginRight: "20px", fontWeight: "bold", fontSize: "20px", textDecoration: "none" }}>🏠 Home</Link>
        <Link to="/cart" style={{ position: "relative", fontWeight: "bold", fontSize: "20px", textDecoration: "none" }}>
          🛒 Cart
          {totalItems > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-12px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 8px",
                fontSize: "12px"
              }}
            >
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
