import React from "react";
import classes from "../styles/ui.module.less";

type props = {
	shopTitle: string;
};

const ShopButton: React.FC<props> = (props) => {
	return (
		<div className={classes.shopButtonTitleContainer}>
			<h3 className={classes.shopButtonTitle}>{props.shopTitle}</h3>
		</div>
	);
};

export default ShopButton;
