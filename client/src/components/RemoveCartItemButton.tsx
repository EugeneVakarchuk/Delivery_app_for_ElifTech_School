import React from "react";
import CartService from "../services/CartService";

type props = {
	itemId: string;
	onRemove: (itemId: string) => void;
};

const RemoveCartItemButton: React.FC<props> = (props) => {
	const cartId = localStorage.getItem("cartId");

	const removeItemInCart = async () => {
		props.onRemove(props.itemId);

		const updateCart = await CartService.removeGoodInCart(
			cartId,
			props.itemId
		);
		console.log(updateCart);
	};

	return <button onClick={removeItemInCart}>Remove Item</button>;
};

export default RemoveCartItemButton;
