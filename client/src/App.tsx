import React from "react";
import {Navigate, Route, Routes} from "react-router";
import MainLayout from "./pages/MainLayout";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import SuccesfullBuing from "./pages/SuccesfullBuing";

const App: React.FC = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="/" element={<Navigate to={"/shop"} />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/cart" element={<CartPage />} />
				</Route>
				<Route path="/succesfullbuing" element={<SuccesfullBuing />} />
			</Routes>
		</div>
	);
};

export default App;
