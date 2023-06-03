import React from "react";

type props = {
	title: string;
	price: number;
	imageUrl: string;
	totalPrice: number;
};

const CartItemUI: React.FC<props> = (props) => {
	return (
		<div>
			<img src={props.imageUrl} alt={props.title}></img>
			<h3>{props.title}</h3>
			<p>{props.price}</p>
			<>totalPrice {props.totalPrice}</>
		</div>
	);
};

export default CartItemUI;
