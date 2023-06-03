const OrderService = require("../services/order-service");

class OrderController {
	async createNewOrder(req, res, next) {
		try {
			const cartId = req.params.cartId;
			const {name, adress, tel, email} = req.body;
			const isConfirmed = false;
			const isDelivered = false;
			const newOrder = await OrderService.createNewOrder(
				name,
				adress,
				tel,
				email,
				isConfirmed,
				isDelivered,
				cartId
			);

			return res.json(newOrder);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new OrderController();
