const ShopModel = require("../models/shop-model");

class ShopService {
	async getShopsList() {
		const shops = await ShopModel.find();

		const shopNames = shops.map((shop) => shop.shopTitle);

		return shopNames;
	}

	async getShopIdByTitle(shopTitle) {
		const shop = await ShopModel.findOne({shopTitle: shopTitle});

		if (shop) {
			return shop._id.toString();
		} else {
			return null;
		}
	}

	async getShopByTitle(shopTitle) {
		const shop = await ShopModel.findOne({shopTitle: shopTitle});
		if (shop) {
			return shop;
		} else {
			return null;
		}
	}

	async getShopById(shopId) {
		const shop = await ShopModel.findById(shopId);
		if (shop) {
			return shop;
		} else {
			return null;
		}
	}
}

module.exports = new ShopService();
