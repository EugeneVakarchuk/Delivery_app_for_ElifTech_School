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
	onUpdateItemsList: (cartId: string) => void;
};

const CartItem: React.FC<props> = (props) => {
	const [quantityItems, setQuantityItems] = useState<number>(1);
	const [totalPriceItem, setTotalPriceItems] = useState<number>();
	const cartId = localStorage.getItem("cartId");

	const calculateTotalPrice = (quantityItems: number, price: number) => {
		return quantityItems * price;
	};

	const fetchQuanity = async () => {
		const actualQuanity = await CartService.getQuantityItem(
			cartId,
			props.id
		);
		setQuantityItems(actualQuanity);
		return actualQuanity;
	};

	useEffect(() => {
		fetchQuanity().then((actualQuantity) => {
			setTotalPriceItems(
				calculateTotalPrice(actualQuantity, props.price)
			);
		});
	}, []);

	const plusQuanityItem = async (cartId: string, itemId: string) => {
		const updatedCart = await CartService.plusQuanityGoodInCart(
			cartId,
			itemId
		);
		if (updatedCart) {
			await fetchQuanity().then((newQuanity) => {
				setQuantityItems(newQuanity);
				setTotalPriceItems(
					calculateTotalPrice(newQuanity, props.price)
				);
				props.onUpdateItemsList(cartId);
			});
		}
	};

	const minusQuanityItem = async (cartId: string, itemId: string) => {
		if (quantityItems > 1) {
			const updatedCart = await CartService.minusQuanityGoodInCart(
				cartId,
				itemId
			);
			if (updatedCart) {
				const newQuantity = quantityItems - 1;
				setQuantityItems(newQuantity);
				await fetchQuanity().then((newQuanity) => {
					setQuantityItems(newQuanity);
					setTotalPriceItems(
						calculateTotalPrice(newQuanity, props.price)
					);
					props.onUpdateItemsList(cartId);
				});
			}
		}
	};

	return (
		<div>
			<CartItemUI
				title={props.title}
				price={props.price}
				totalPrice={totalPriceItem}
			/>
			<QuanityInput
				quanity={quantityItems}
				itemId={props.id}
				plusQuanityItem={plusQuanityItem}
				minusQuanityItem={minusQuanityItem}
			/>
			{props.isRemoving ? (
				<div>Removing...</div>
			) : (
				<RemoveCartItemButton
					itemId={props.id}
					onRemove={props.onRemove}
				/>
			)}
		</div>
	);
};

export default CartItem;
