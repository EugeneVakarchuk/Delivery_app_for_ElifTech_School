const ShopService = require("../services/shop-service");

class ShopController {
  async getShopsList(req, res, next) {
    try {
      const shops = await ShopService.getShopsList(req.params.shopName);

      return res.json(shops);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ShopController();
