import React, {useEffect, useState} from "react";
import CartService from "../services/CartService";
import CartItem from "./CartItem";

const CartItemsList: React.FC = () => {
	const cartId = localStorage.getItem("cartId");
	const [goodsList, setGoodsList] = useState([]);
	const [isRemoving, setIsRemoving] = useState(false);

	const getGoodsInCart = async () => {
		try {
			const goodsList = await CartService.getGoodsInCart(cartId);
			setGoodsList(goodsList);
		} catch (error) {
			console.log("Error fetching goods:", error);
		}
	};

	const removeItemFromCart = async (itemId: string) => {
		setIsRemoving(true);
		try {
			await CartService.removeGoodInCart(cartId, itemId);
			const updatedGoodsList = goodsList.filter(
				(item) => item._id !== itemId
			);
			setGoodsList(updatedGoodsList);
		} catch (error) {
			console.log("Error removing item from cart:", error);
		} finally {
			setIsRemoving(false);
		}
	};

	useEffect(() => {
		if (!!cartId) {
			getGoodsInCart();
		}
	}, [cartId]);

	return (
		<div>
			{isRemoving ? (
				<div>Loading...</div>
			) : (
				goodsList.map((item, index) => (
					<CartItem
						key={item._id}
						id={item._id}
						title={item.good.goodTitle}
						quantity={item.quantity}
						price={item.good.goodPrice}
						isRemoving={isRemoving}
						onRemove={removeItemFromCart}
					/>
				))
			)}
			<div></div>
		</div>
	);
};

export default CartItemsList;
