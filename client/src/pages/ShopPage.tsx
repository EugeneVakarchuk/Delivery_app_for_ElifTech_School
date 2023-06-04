import React from "react";
import ShopList from "../components/ShopList";
import GoodsList from "../components/GoodsList";
import classes from "../styles/page.module.less";

const ShopPage: React.FC = () => {
	return (
		<div className={classes.shopPageContainer}>
			<div>
				<ShopList />
			</div>
			<div>
				<GoodsList />
			</div>
		</div>
	);
};

export default ShopPage;
