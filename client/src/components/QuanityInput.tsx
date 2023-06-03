import React, {useEffect, useState} from "react";
import CartService from "../services/CartService";

type props = {
	quanity: number;
	itemId: string;
	plusQuanityItem: (cartId: string, itemId: string) => void;
	minusQuanityItem: (cartId: string, itemId: string) => void;
};

const QuanityInput: React.FC<props> = (props) => {
	const cartId = localStorage.getItem("cartId");

	const plusClick = () => {
		props.plusQuanityItem(cartId, props.itemId);
	};

	const minusClick = () => {
		props.minusQuanityItem(cartId, props.itemId);
	};

	return (
		<div>
			<button onClick={minusClick}>-</button>
			<input type="number" value={props.quanity} readOnly />
			<button onClick={plusClick}>+</button>
		</div>
	);
};

export default QuanityInput;
