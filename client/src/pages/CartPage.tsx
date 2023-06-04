import React from "react";
import CartItemsList from "../components/CartItemsList";
import CartForm from "../components/CartForm";
import classes from "../styles/page.module.less";

const CartPage: React.FC = () => {
	return (
		<div className={classes.cartPageContainer}>
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
