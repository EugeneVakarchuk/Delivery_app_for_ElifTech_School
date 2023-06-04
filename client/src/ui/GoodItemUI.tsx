import React from "react";
import classes from "../styles/ui.module.less";

type props = {
	title: string;
	price: number;
	imgUrl: string;
};

const GoodItemUI: React.FC<props> = (props) => {
	return (
		<div className={classes.goodItem}>
			<img
				className={classes.goodItemImg}
				src={props.imgUrl}
				alt={props.title}></img>
			<div className={classes.goodInfoContainer}>
				<h3 className={classes.goodItemTitle}>{props.title}</h3>
				<p className={classes.goodItemPrice}>{props.price}</p>
			</div>
		</div>
	);
};

export default GoodItemUI;
