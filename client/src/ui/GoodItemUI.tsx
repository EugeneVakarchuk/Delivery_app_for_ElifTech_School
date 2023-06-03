import React from "react";

type props = {
	title: string;
	price: number;
	imgUrl: string;
};

const GoodItemUI: React.FC<props> = (props) => {
	return (
		<div>
			<h3>{props.title}</h3>
			<p>{props.price}</p>
			<img src={props.imgUrl} alt={props.title}></img>
		</div>
	);
};

export default GoodItemUI;
