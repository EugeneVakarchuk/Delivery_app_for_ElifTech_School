const GoodService = require("../services/good-service");

class GoodController {
	async getGoodsByShops(req, res, next) {
		try {
			const shopTitle = req.params.shopName;

			const goods = await GoodService.getGoodsByShop(shopTitle);

			return res.json(goods);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new GoodController();
