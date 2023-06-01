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
      const { cartId, newShopTitle } = req.body;

      const cart = await CartService.changeCartShop(cartId, newShopTitle);

      return res.json(cart);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CartController();
