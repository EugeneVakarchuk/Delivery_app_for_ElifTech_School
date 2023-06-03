import React from "react";
import CartItemsList from "../components/CartItemsList";
import CartForm from "../components/CartForm";

const CartPage: React.FC = () => {
	return (
		<div>
			<div>
				<CartForm />
			</div>
			<div>
				<CartItemsList />
			</div>
		</div>
	);
};

export default CartPage;
