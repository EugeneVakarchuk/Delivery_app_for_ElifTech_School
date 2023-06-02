import React from "react";

type props = {
	title: string;
	price: number;
};

const GoodItemUI: React.FC<props> = (props) => {
	return (
		<div>
			<h3>{props.title}</h3>
			<p>{props.price}</p>
		</div>
	);
};

export default GoodItemUI;
