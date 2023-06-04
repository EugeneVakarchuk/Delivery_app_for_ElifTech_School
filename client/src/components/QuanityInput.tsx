import React, {useEffect, useState} from "react";
import classes from "../styles/component.module.less";

type props = {
	quanity: number;
	itemId: string;
	plusQuanityItem: (cartId: string, itemId: string) => void;
	minusQuanityItem: (cartId: string, itemId: string) => void;
};

const QuanityInput: React.FC<props> = (props) => {
	const cartId = localStorage.getItem("cartId");

	const plusClick = () => {
		props.plusQuanityItem(cartId, props.itemId);
	};

	const minusClick = () => {
		props.minusQuanityItem(cartId, props.itemId);
	};

	return (
		<div className={classes.quanityInputContainer}>
			<button className={classes.quanityButton} onClick={minusClick}>
				-
			</button>
			<input
				className={classes.quanityInput}
				type="number"
				value={props.quanity}
				readOnly
			/>
			<button className={classes.quanityButton} onClick={plusClick}>
				+
			</button>
		</div>
	);
};

export default QuanityInput;
