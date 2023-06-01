const ShopModel = require("../models/shop-model");

class ShopService {
  async getShopsList() {
    const shops = await ShopModel.find();

    const shopNames = shops.map((shop) => shop.shopTitle);

    return shopNames;
  }
}

module.exports = new ShopService();
