import React, {useEffect, useState} from "react";
import ShopButton from "../ui/ShopButton";
import ShopService from "../services/ShopService";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setShop} from "../redux/shopSlice";
import CartService from "../services/CartService";
import {configureStore} from "@reduxjs/toolkit";

type props = {
	shopTitle: string;
};

const ShopToggle: React.FC<props> = (props) => {
	const [shopId, setShopId] = useState();
	const dispatch = useAppDispatch();
	const [isThisShopSelected, setIsThisShopSelected] = useState(false);
	const selectedShop = useAppSelector((state) => state.shopReducer.title);

	useEffect(() => {
		const getShopIdByTitle = async (shopTitle: string) => {
			const shopId = await ShopService.getShopByTitle(shopTitle);
			return shopId;
		};

		const fetchShopId = async () => {
			const shopId = await getShopIdByTitle(props.shopTitle);
			setShopId(shopId);
		};

		fetchShopId();
	}, []);

	const getShopByCartId = async (cartId: string) => {
		const shopId = await CartService.getShopByCartId(cartId);
		return shopId;
	};

	const changeShopInCart = async (cartId: string, shopTitle: string) => {
		const updatedCart = await CartService.changeShopInCart(
			cartId,
			shopTitle
		);
		return updatedCart;
	};

	const changeShop = async () => {
		const cartId = localStorage.getItem("cartId");
		const cartShopId = await getShopByCartId(cartId);
		const cartItems = await CartService.getGoodsInCart(cartId);
		if (cartItems.length === 0 && shopId !== cartShopId) {
			console.log("work");
			await changeShopInCart(cartId, props.shopTitle);
			dispatch(
				setShop({
					id: shopId,
					title: props.shopTitle,
				})
			);
		} else {
			if (shopId !== cartShopId) {
				const confirm = window.confirm(
					"You can select products from only one shop. When changing the store, the shopping cart will be cleaned. Do you want to change shop?"
				);
				if (confirm) {
					await changeShopInCart(cartId, props.shopTitle);
					dispatch(
						setShop({
							id: shopId,
							title: props.shopTitle,
						})
					);
				} else {
					console.log("error in changing shop functionality");
				}
			}
		}
	};

	useEffect(() => {
		if (selectedShop === props.shopTitle) {
			setIsThisShopSelected(true);
		} else {
			setIsThisShopSelected(false);
		}
	}, [selectedShop]);

	return (
		<div onClick={changeShop}>
			<ShopButton shopTitle={props.shopTitle} />
		</div>
	);
};

export default ShopToggle;
