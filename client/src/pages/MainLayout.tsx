import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      <div>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
