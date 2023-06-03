import React from "react";
import CartService from "../services/CartService";

type props = {
	itemId: string;
	onRemove: (itemId: string) => void;
};

const RemoveCartItemButton: React.FC<props> = (props) => {
	const cartId = localStorage.getItem("cartId");

	const removeClickButton = async () => {
		await CartService.removeGoodInCart(cartId, props.itemId).then(() => {
			props.onRemove(props.itemId);
		});
	};

	return <button onClick={removeClickButton}>Remove Item</button>;
};

export default RemoveCartItemButton;
