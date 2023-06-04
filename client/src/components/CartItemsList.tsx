import React, {useEffect, useState} from "react";
import CartService from "../services/CartService";
import CartItem from "./CartItem";
import classes from "../styles/component.module.less";

const CartItemsList: React.FC = () => {
	const cartId = localStorage.getItem("cartId");
	const [goodsList, setGoodsList] = useState([]);
	const [isRemoving, setIsRemoving] = useState(false);
	const [isUpdated, setIsUpdated] = useState(false);
	const [totalAmount, setTotalAmount] = useState(0);

	const getGoodsInCart = async () => {
		try {
			const goodsList = await CartService.getGoodsInCart(cartId);
			setGoodsList(goodsList);
			const totalAmount = await CartService.getTotalAmount(cartId);
			setTotalAmount(totalAmount);
		} catch (error) {
			console.log("Error fetching goods:", error);
		}
	};

	const removeGoodsList = async (itemId: string) => {
		setIsRemoving(true);
		try {
			const updatedGoodsList = goodsList.filter(
				(item) => item._id !== itemId
			);
			setGoodsList(updatedGoodsList);
			const totalAmount = await CartService.getTotalAmount(cartId);
			setTotalAmount(totalAmount);
		} catch (error) {
			console.log("Error removing item from cart:", error);
		} finally {
			setIsRemoving(false);
		}
	};

	const onUpdateItemsList = async (cartId: string) => {
		setIsUpdated(true);
		try {
			await CartService.getTotalAmount(cartId).then((newTotalAmount) => {
				setTotalAmount(newTotalAmount);
			});
		} catch (error) {
			console.log("Error from updating cart items list", error);
		} finally {
			setIsUpdated(false);
		}
	};

	useEffect(() => {
		if (isUpdated) {
			onUpdateItemsList(cartId);
		}
	}, [isUpdated]);

	useEffect(() => {
		if (isRemoving) {
			getGoodsInCart();
		}
	}, [isRemoving]);

	useEffect(() => {
		if (!!cartId) {
			getGoodsInCart();
		}
	}, []);

	return (
		<div className={classes.cartItemsListWrapper}>
			<div className={classes.cartItemsListContainer}>
				{isRemoving ? (
					<div>Loading...</div>
				) : (
					goodsList.map((item, index) => (
						<CartItem
							key={item._id}
							id={item._id}
							title={item.good.goodTitle}
							price={item.good.goodPrice}
							imageUrl={item.good.imageUrl}
							isRemoving={isRemoving}
							onRemove={removeGoodsList}
							onUpdateItemsList={onUpdateItemsList}
						/>
					))
				)}
			</div>
			<p className={classes.totalAmount}>
				Total amount:{" "}
				<span className={classes.totalAmountValue}>{totalAmount}</span>
			</p>
		</div>
	);
};

export default CartItemsList;
