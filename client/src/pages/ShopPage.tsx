import React from "react";
import ShopList from "../components/ShopList";
import GoodsList from "../components/GoodsList";

const ShopPage: React.FC = () => {
	return (
		<div>
			ShopPage
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
