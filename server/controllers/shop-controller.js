const ShopService = require("../services/shop-service");

class ShopController {
  async getShopsList(req, res, next) {
    try {
      const shops = await ShopService.getShopsList();

      return res.json(shops);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ShopController();
