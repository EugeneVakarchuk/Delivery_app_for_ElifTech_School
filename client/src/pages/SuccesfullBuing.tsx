import React from "react";
import {useNavigate} from "react-router";
import classes from "../styles/page.module.less";

const SuccesfullBuing: React.FC = () => {
	const navigate = useNavigate();

	const returnToShop = () => {
		navigate("/");
	};

	return (
		<div className={classes.succesfullPageWrapper}>
			<div className={classes.succesfullPage}>
				<h2 className={classes.succesfullPageTitle}>
					Thank you! Your order is accepted.
				</h2>
				<button
					className={classes.succesfullPageButton}
					onClick={returnToShop}>
					Return to shop
				</button>
			</div>
		</div>
	);
};

export default SuccesfullBuing;
