import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./pages/MainLayout";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <header>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </header>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
