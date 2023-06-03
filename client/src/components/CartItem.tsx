import React, {useEffect, useState} from "react";
import CartItemUI from "../ui/CartItemUI";
import QuanityInput from "./QuanityInput";

type props = {
	id: string;
	price: number;
	title: string;
	quantity: number;
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
		</div>
	);
};

export default CartItem;
