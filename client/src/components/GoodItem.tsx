import React, {useEffect, useState} from "react";
import {IGood} from "../models/IGood";
import GoodItemUI from "../ui/GoodItemUI";
import CartService from "../services/CartService";

const GoodItem: React.FC<IGood> = (props) => {
	const goodId = props._id;
	const cartId = localStorage.getItem("cartId");
	const [goodAddedtoCart, setGoodAddedToCart] = useState(false);

	const addGoodToCart = async () => {
		await CartService.addGoodToCart(goodId, cartId);
		setGoodAddedToCart(true);
	};

	const checkingGoodInCart = async () => {
		await CartService.isGoodInCart(cartId, goodId).then((result) => {
			setGoodAddedToCart(result);
		});
	};

	useEffect(() => {
		checkingGoodInCart();
	}, []);

	return (
		<div>
			<GoodItemUI
				title={props.goodTitle}
				price={props.goodPrice}
				imgUrl={`${process.env.SERVER_URL}${props.imageUrl}`}
			/>

			{goodAddedtoCart ? (
				<button disabled onClick={addGoodToCart}>
					Added
				</button>
			) : (
				<button onClick={addGoodToCart}>Add to Cart</button>
			)}
		</div>
	);
};

export default GoodItem;
