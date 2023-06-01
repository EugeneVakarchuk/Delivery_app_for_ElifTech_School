const ShopModel = require("../models/shop-model");
const GoodModel = require("../models/good-model");

class GoodService {
  async getGoodsByShop(shopTitle) {
    const shop = await ShopModel.findOne({ shopTitle: shopTitle });

    if (!shop) {
      throw new Error("Shop not found");
    }

    const goods = await GoodModel.find({ shopId: shop._id });

    return goods;
  }
}

module.exports = new GoodService();
