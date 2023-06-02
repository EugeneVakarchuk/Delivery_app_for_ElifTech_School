const CartService = require("../services/cart-service");

class CartController {
	async newCart(req, res, next) {
		try {
			const shopTitle = req.body.shopTitle;

			const newCart = await CartService.addNewCart(shopTitle);

			return res.json(newCart);
		} catch (error) {
			console.log(error);
		}
	}

	async changeCartShop(req, res, next) {
		try {
			const {cartId, shopTitle} = req.params;

			const cart = await CartService.changeCartShop(cartId, shopTitle);

			return res.json(cart);
		} catch (error) {
			console.log(error);
		}
	}

	async getShopByCartId(req, res, next) {
		try {
			const cartId = req.params.cartId;
			const shopId = await CartService.getShopByCartId(cartId);
			if (shopId) {
				res.status(200).json({shopId: shopId});
			} else {
				res.status(404).json({error: "Cart not found"});
			}
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new CartController();
