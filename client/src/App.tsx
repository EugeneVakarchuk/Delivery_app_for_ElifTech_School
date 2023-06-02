import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./pages/MainLayout";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
