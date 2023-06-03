import React from "react";

type props = {
	title: string;
	price: number;
	totalPrice: number;
};

const CartItemUI: React.FC<props> = (props) => {
	return (
		<div>
			<h3>{props.title}</h3>
			<p>{props.price}</p>
			<>totalPrice {props.totalPrice}</>
		</div>
	);
};

export default CartItemUI;
