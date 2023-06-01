const CartModel = require("../models/cart-model");
const ShopService = require("../services/shop-service");

class CartService {
  async addNewCart(shopTitle) {
    const shopId = await ShopService.getShopIdByTitle(shopTitle);

    const existingCart = await CartModel.findOne({ shop: shopId });

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

  async changeCartShop(cartId, newShopTitle) {
    const shopId = await ShopService.getShopIdByTitle(newShopTitle);

    const updatedCart = await CartModel.findByIdAndUpdate(
      cartId,
      {
        shop: shopId,
        goods: [],
      },
      { new: true }
    );

    return updatedCart;
  }
}

module.exports = new CartService();
