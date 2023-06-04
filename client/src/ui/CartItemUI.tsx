import React from "react";
import classes from "../styles/ui.module.less";

type props = {
	title: string;
	price: number;
	imageUrl: string;
	totalPrice: number;
};

const CartItemUI: React.FC<props> = (props) => {
	return (
		<div className={classes.cartItem}>
			<img
				className={classes.catrItemImg}
				src={props.imageUrl}
				alt={props.title}></img>
			<div className={classes.cartItemInfoWrapper}>
				<h3 className={classes.cartItemTitle}>{props.title}</h3>
				<div className={classes.cartItemPriceWrapper}>
					<p className={classes.cartItemPrice}>
						For one:{" "}
						<span className={classes.cartPriceValue}>
							{props.price}
						</span>
					</p>
					<p className={classes.cartItemTotalPrice}>
						For all of this:{" "}
						<span className={classes.cartPriceValue}>
							{props.totalPrice}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CartItemUI;
