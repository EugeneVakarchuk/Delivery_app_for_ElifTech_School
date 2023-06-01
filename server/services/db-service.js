const ShopModel = require("../models/shop-model");
const GoodModel = require("../models/good-model");

class DBService {
  async addShop(shopTitle) {
    const newShop = await ShopModel.create({
      shopTitle,
    });

    return newShop;
  }

  async addGood(goodTitle, goodPrice, shopTitle) {
    const shop = await ShopModel.findOne({ shopTitle: shopTitle });

    if (!shop) {
      throw new Error("Shop not found");
    }

    const shopId = shop._id;

    const newGood = await GoodModel.create({
      goodTitle,
      goodPrice,
      shopId,
    });

    return newGood;
  }
}

module.exports = new DBService();
