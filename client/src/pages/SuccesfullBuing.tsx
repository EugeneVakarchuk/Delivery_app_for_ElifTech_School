import React from "react";
import {useNavigate} from "react-router";

const SuccesfullBuing: React.FC = () => {
	const navigate = useNavigate();

	const returnToShop = () => {
		navigate("/");
	};

	return (
		<div>
			<h2>SUCCESFULL</h2>
			<button onClick={returnToShop}>Return to shop</button>
		</div>
	);
};

export default SuccesfullBuing;
