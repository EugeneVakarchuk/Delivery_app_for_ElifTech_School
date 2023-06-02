const DBService = require("../services/db-service");
const ShopModel = require("../models/shop-model");

class DBController {
	async addShop(req, res, next) {
		try {
			const {shopCandidate} = req.body;
			const newShop = await DBService.addShop(shopCandidate);

			return res.json(newShop);
		} catch (error) {
			console.log(error);
		}
	}

	async addGood(req, res, next) {
		try {
			const {goodTitle, goodPrice, shopTitle} = req.body;
			const newGood = await DBService.addGood(
				goodTitle,
				goodPrice,
				shopTitle
			);

			return res.json(newGood);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new DBController();
