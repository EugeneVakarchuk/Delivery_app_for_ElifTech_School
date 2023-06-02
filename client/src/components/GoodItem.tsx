import React from "react";
import {IGood} from "../models/IGood";

const GoodItem: React.FC<IGood> = (props) => {
	return (
		<div>
			<h3>{props.goodTitle}</h3>
			<p>{props.goodPrice}</p>
		</div>
	);
};

export default GoodItem;
