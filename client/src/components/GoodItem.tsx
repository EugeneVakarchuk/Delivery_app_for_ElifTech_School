import React, {useState} from "react";
import {IGood} from "../models/IGood";
import GoodItemUI from "../ui/GoodItemUI";
import CartService from "../services/CartService";

const GoodItem: React.FC<IGood> = (props) => {
	const goodId = props._id;
	const cartId = localStorage.getItem("cartId");
	const [goodAddedtoCart, setGoodAddedToCart] = useState(false);

	const addGoodToCart = async () => {
		console.log(goodId);
		console.log(cartId);
		const updatedCart = await CartService.addGoodToCart(goodId, cartId);
		console.log(updatedCart);
	};

	return (
		<div>
			<GoodItemUI title={props.goodTitle} price={props.goodPrice} />
			<button onClick={addGoodToCart}>Add to cart</button>
		</div>
	);
};

export default GoodItem;
