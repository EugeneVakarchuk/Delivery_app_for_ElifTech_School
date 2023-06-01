const CartModel = require("../models/cart-model");
const ShopService = require("../services/shop-service");

class CartService {
  async addNewCart(shop) {
    const shopId = await ShopService.getShopIdByTitle(shop);

    if (!shopId) {
      throw new Error("Shop not found");
    }

    const existingCart = await CartModel.findOne({ shop: shopId });

    if (existingCart) {
      throw new Error("Cart for this shop already exists");
    }

    const newCart = await CartModel.create({ shop: shopId, totalAmount: 0 });

    return newCart;
  }
}

module.exports = new CartService();
