import React, {useEffect, useState} from "react";
import CartItemUI from "../ui/CartItemUI";
import QuanityInput from "./QuanityInput";
import RemoveCartItemButton from "./RemoveCartItemButton";

type props = {
	id: string;
	price: number;
	title: string;
	quantity: number;
	isRemoving: boolean;
	onRemove: (itemId: string) => void;
};

const CartItem: React.FC<props> = (props) => {
	const [quantity, setQuantity] = useState(props.quantity);
	const [totalPriceItem, setTotalPriceItem] = useState(quantity);

	const handleQuantityChange = (newValue: number) => {
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
			<QuanityInput
				itemId={props.id}
				onChange={handleQuantityChange}
				value={quantity}
			/>
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
