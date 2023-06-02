const CartModel = require("../models/cart-model");
const ShopService = require("../services/shop-service");

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
				shop: shopId,
				goods: [],
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
}

module.exports = new CartService();
