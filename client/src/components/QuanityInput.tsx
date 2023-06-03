import React from "react";
import CartService from "../services/CartService";

interface QuanityInputProps {
	itemId: string;
	value: number;
	onChange: (newValue: number) => void;
}

const QuanityInput: React.FC<QuanityInputProps> = ({
	value,
	onChange,
	...props
}) => {
	const cartId = localStorage.getItem("cartId");

	const handleDecrease = () => {
		if (value > 1) {
			onChange(value - 1);
			CartService.minusQuanityGoodInCart(cartId, props.itemId);
		}
	};

	const handleIncrease = () => {
		onChange(value + 1);
		CartService.plusQuanityGoodInCart(cartId, props.itemId);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		if (!isNaN(newValue) && newValue >= 1) {
			onChange(newValue);
		}
	};

	return (
		<div>
			<button onClick={handleDecrease}>-</button>
			<input type="number" value={value} onChange={handleChange} />
			<button onClick={handleIncrease}>+</button>
		</div>
	);
};

export default QuanityInput;
