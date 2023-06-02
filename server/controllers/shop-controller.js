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

	async getShopByTitle(req, res, next) {
		try {
			const shopTitle = req.params.shopTitle;
			const shop = await ShopService.getShopByTitle(shopTitle);
			return res.json(shop);
		} catch (error) {
			console.log(error);
		}
	}

	async getShopById(req, res, next) {
		try {
			const shopId = req.params.shopId;
			const shop = await ShopService.getShopById(shopId);
			return res.json(shop);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new ShopController();
