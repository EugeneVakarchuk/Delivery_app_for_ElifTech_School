import React, {useEffect, useState} from "react";
import {useAppSelector} from "../hooks/redux";
import GoodService from "../services/GoodService";
import {IGood} from "../models/IGood";
import GoodItem from "./GoodItem";
import classes from "../styles/component.module.less";

const GoodsList: React.FC = () => {
	const selectedShopIdInState = useAppSelector(
		(state) => state.shopReducer.id
	);
	const [selectedShopId, setSelectedShopId] = useState("");
	const [shopIdIsLoaded, setShopIdIsLoaded] = useState(false);
	const [goodsList, setGoodsList] = useState<IGood[]>([]);

	const getGoodsList = async (shopId: string) => {
		const goodsList = await GoodService.getGoodsByShop(shopId);
		setGoodsList(goodsList);
	};

	useEffect(() => {
		if (selectedShopIdInState === null) {
			setShopIdIsLoaded(false);
		} else {
			setSelectedShopId(selectedShopIdInState);
			setShopIdIsLoaded(true);
		}
	}, [selectedShopIdInState]);

	useEffect(() => {
		if (shopIdIsLoaded) {
			getGoodsList(selectedShopId);
		}
	}, [selectedShopId, shopIdIsLoaded]);

	return (
		<div>
			{shopIdIsLoaded ? (
				<div className={classes.goodItemsWrapper}>
					<div className={classes.goodItemsContainer}>
						{goodsList.map((goodItem, index) => {
							console.log(goodItem);
							return (
								<GoodItem
									key={index}
									goodTitle={goodItem.goodTitle}
									goodPrice={goodItem.goodPrice}
									_id={goodItem._id}
									imageUrl={goodItem.imageUrl}
								/>
							);
						})}
					</div>
				</div>
			) : (
				<>loading...</>
			)}
		</div>
	);
};

export default GoodsList;
