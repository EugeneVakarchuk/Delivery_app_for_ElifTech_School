import React, {useEffect, useState} from "react";
import CartItemUI from "../ui/CartItemUI";
import QuanityInput from "./QuanityInput";
import RemoveCartItemButton from "./RemoveCartItemButton";
import CartService from "../services/CartService";

type props = {
	id: string;
	price: number;
	title: string;
	isRemoving: boolean;
	onRemove: (itemId: string) => void;
};

const CartItem: React.FC<props> = (props) => {
	const [quantity, setQuantity] = useState(1);
	const [totalPriceItem, setTotalPriceItem] = useState(quantity);
	const cartId = localStorage.getItem("cartId");

	const handleQuantityChange = async () => {
		const newValue = await CartService.getQuantityItem(cartId, props.id);
		setQuantity(newValue);
	};

	useEffect(() => {
		setTotalPriceItem(quantity * props.price);
	}, [quantity]);

	const handleRemoveItem = () => {
		props.onRemove(props.id);
	};

	return (
		<div>
			<CartItemUI
				title={props.title}
				price={props.price}
				totalPrice={totalPriceItem}
			/>
			<QuanityInput itemId={props.id} onChange={handleQuantityChange} />
			{props.isRemoving ? (
				<div>Removing...</div>
			) : (
				<RemoveCartItemButton
					onRemove={handleRemoveItem}
					itemId={props.id}
				/>
			)}
		</div>
	);
};

export default CartItem;