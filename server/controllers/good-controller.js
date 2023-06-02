const GoodService = require("../services/good-service");

class GoodController {
	async getGoodsByShops(req, res, next) {
		try {
			const shopId = req.params.shopId;

			const goods = await GoodService.getGoodsByShop(shopId);

			return res.json(goods);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new GoodController();
