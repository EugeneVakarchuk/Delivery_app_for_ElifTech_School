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

	async addGoodToCart(req, res, next) {
		try {
			const goodId = req.params.goodId;
			const cartId = req.params.cartId;

			const updatedCart = await CartService.addGoodToCart(goodId, cartId);

			return res.json(updatedCart);
		} catch (error) {
			console.log(error);
		}
	}

	async getGoodsInCart(req, res, next) {
		try {
			const cartID = req.params.cartId;
			const cartItems = await CartService.getGoodsInCart(cartID);

			return res.json(cartItems);
		} catch (error) {
			console.log(error);
		}
	}

	async plusQuanityGoodInCart(req, res, next) {
		try {
			const {cartId, goodId} = req.params;

			const updateCart = await CartService.plusQuanityGoodInCart(
				cartId,
				goodId
			);

			return res.json(updateCart);
		} catch (error) {
			console.log(error);
		}
	}

	async minusQuanityGoodInCart(req, res, next) {
		try {
			const {cartId, goodId} = req.params;

			const updateCart = await CartService.minusQuanityGoodInCart(
				cartId,
				goodId
			);

			return res.json(updateCart);
		} catch (error) {
			console.log(error);
		}
	}

	async removeGoodInCart(req, res, next) {
		try {
			const {cartId, goodId} = req.params;

			const updatedCart = await CartService.removeGoodInCart(
				cartId,
				goodId
			);

			return res.json(updatedCart);
		} catch (error) {
			console.log(error);
		}
	}

	async getTotalAmount(req, res, next) {
		try {
			const cartId = req.params.cartId;

			const totalAmount = await CartService.getTotalAmount(cartId);

			return res.json(totalAmount);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new CartController();
