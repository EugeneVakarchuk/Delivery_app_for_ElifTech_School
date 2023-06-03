import React, {useEffect, useState} from "react";
import CartService from "../services/CartService";
import CartItem from "./CartItem";

const CartItemsList: React.FC = () => {
	const cartId = localStorage.getItem("cartId");
	const [goodsList, setGoodsList] = useState([]);

	const getGoodsInCart = async () => {
		const goodsList = await CartService.getGoodsInCart(cartId);
		setGoodsList(goodsList);
	};

	useEffect(() => {
		if (!!cartId) {
			getGoodsInCart();
		} else {
		}
	}, []);

	return (
		<div>
			{goodsList.map((item, index) => {
				return (
					<CartItem
						key={item._id}
						id={item._id}
						title={item.good.goodTitle}
						quantity={item.quantity}
						price={item.good.goodPrice}
					/>
				);
			})}
		</div>
	);
};

export default CartItemsList;
