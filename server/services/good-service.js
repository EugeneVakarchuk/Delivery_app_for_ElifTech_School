const ShopModel = require("../models/shop-model");
const GoodModel = require("../models/good-model");

class GoodService {
	async getGoodsByShop(shopId) {
		const shop = await ShopModel.findOne({_id: shopId});

		if (!shop) {
			throw new Error("Shop not found");
		}

		const goods = await GoodModel.find({shopId: shop._id});

		return goods;
	}
}

module.exports = new GoodService();
