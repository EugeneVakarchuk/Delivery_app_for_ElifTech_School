const CartModel = require("../models/cart-model");
const ShopService = require("../services/shop-service");
const GoodModel = require("../models/good-model");

class CartService {
	async addNewCart(shopTitle) {
		const shopId = await ShopService.getShopIdByTitle(shopTitle);

		const existingCart = await CartModel.findOne({shop: shopId});

		if (existingCart) {
			return existingCart;
		}

		const newCart = await CartModel.create({
			shop: shopId,
			totalAmount: 0,
			goods: [],
		});

		return newCart;
	}

	async changeCartShop(cartId, shopTitle) {
		const shopId = await ShopService.getShopIdByTitle(shopTitle);

		const updatedCart = await CartModel.findByIdAndUpdate(
			cartId,
			{
				$set: {
					shop: shopId,
					totalAmount: 0,
					items: [],
				},
			},
			{new: true}
		);

		return updatedCart;
	}

	async getShopByCartId(cartId) {
		const cart = await CartModel.findById(cartId).populate("shop");
		if (cart) {
			return cart.shop._id;
		} else {
			return null;
		}
	}

	async addGoodToCart(goodId, cartId) {
		try {
			const good = await GoodModel.findById(goodId);
			const cart = await CartModel.findById(cartId);

			if (!good || !cart) {
				throw new Error("No good or cart found");
			}
			const newItem = {
				good: goodId,
				quantity: 1,
			};

			cart.items.push(newItem);

			cart.totalAmount += good.goodPrice;

			await cart.save();

			return cart;
		} catch (error) {
			console.log(error);
		}
	}

	async getGoodsInCart(cartId) {
		try {
			const cart = await CartModel.findById(cartId).populate(
				"items.good"
			);
			if (!cart) {
				throw new Error("Cart not found");
			}
			return cart.items;
		} catch (error) {
			console.log(error);
		}
	}

	async plusQuanityGoodInCart(cartId, itemId) {
		try {
			const cart = await CartModel.findById(cartId);
			if (!cart) {
				throw new Error("Cart not found");
			}

			const item = cart.items.find(
				(item) => item._id.toString() === itemId
			);
			if (!item) {
				throw new Error("Item not found in cart");
			}

			const good = await GoodModel.findById(item.good);
			if (!good) {
				throw new Error("Good not found");
			}

			item.quantity++;

			cart.totalAmount += good.goodPrice;

			await cart.save();

			return cart;
		} catch (error) {
			console.log(error);
		}
	}

	async minusQuanityGoodInCart(cartId, itemId) {
		try {
			const cart = await CartModel.findById(cartId);
			if (!cart) {
				throw new Error("Cart not found");
			}

			const item = cart.items.find(
				(item) => item._id.toString() === itemId
			);
			if (!item) {
				throw new Error("Item not found in cart");
			}

			const good = await GoodModel.findById(item.good);
			if (!good) {
				throw new Error("Good not found");
			}

			item.quantity++;

			cart.totalAmount -= good.goodPrice;

			await cart.save();

			return cart;
		} catch (error) {
			console.log(error);
		}
	}

	async removeGoodInCart(cartId, itemId) {
		try {
			const cart = await CartModel.findById(cartId);
			if (!cart) {
				throw new Error("Cart not found");
			}
			const itemIndex = cart.items.findIndex(
				(item) => item._id.toString() === itemId
			);
			if (itemIndex === -1) {
				throw new Error("Item not found in cart");
			}

			const item = cart.items[itemIndex];

			const good = await GoodModel.findById(item.good);
			if (!good) {
				throw new Error("Good not found");
			}

			cart.items.splice(itemIndex, 1);

			cart.totalAmount -= good.goodPrice;

			await cart.save();

			return cart;
		} catch (error) {
			console.log(error);
		}
	}

	async getTotalAmount(cartId) {
		try {
			const cart = await CartModel.findById(cartId);
			if (!cart) {
				throw new NotFoundException("Cart not found");
			}
			return cart.totalAmount;
		} catch (error) {
			console.log("Error retrieving total amount:", error);
			throw error;
		}
	}
}

module.exports = new CartService();
