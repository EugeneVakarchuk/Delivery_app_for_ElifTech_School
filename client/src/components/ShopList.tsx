import React, {useEffect, useState} from "react";
import ShopService from "../services/ShopService";
import {useAppDispatch} from "../hooks/redux";
import CartService from "../services/CartService";
import {setShop} from "../redux/shopSlice";
import ShopToggle from "./ShopToggle";
import classes from "../styles/component.module.less";

const ShopList: React.FC = () => {
	const [shops, setShops] = useState([]);
	const [shopListLoaded, setShopListLoaded] = useState(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const getShopsList = async () => {
			try {
				const response = await ShopService.getShopList();
				if (response) {
					setShops(response);
					setShopListLoaded(true);
				}
			} catch (error) {
				console.log(error);
			}
		};

		getShopsList();
	}, []);

	useEffect(() => {
		const createNewCart = async () => {
			try {
				const newCart = await CartService.createNewCart(shops[0]);
				return newCart;
			} catch (error) {
				console.log(error);
			}
		};

		const updateShopIfHaveCart = async (cartId: string) => {
			try {
				const shopId = await CartService.getShopByCartId(cartId);
				const shop = await ShopService.getShopById(shopId);
				return shop;
			} catch (error) {
				console.log(error);
			}
		};

		const cartId = localStorage.getItem("cartId");
		if (!cartId && shopListLoaded) {
			createNewCart().then((newCart) => {
				CartService.saveCartInStorage(newCart._id);
				const shopId = newCart.shop;
				ShopService.getShopById(shopId).then((shop) => {
					dispatch(
						setShop({
							title: shop.shopTitle,
							id: shop._id,
						})
					);
				});
			});
		} else if (shopListLoaded) {
			updateShopIfHaveCart(cartId).then((shop) => {
				dispatch(
					setShop({
						title: shop.shopTitle,
						id: shop._id,
					})
				);
			});
		}
	}, [shops, shopListLoaded]);

	return (
		<aside className={classes.shopListContainer}>
			<h3 className={classes.shopListTitle}>Shops</h3>
			<div>
				{shops.map((shop, index) => (
					<ShopToggle key={index} shopTitle={shop} />
				))}
			</div>
		</aside>
	);
};

export default ShopList;
