const OrderModel = require("../models/order-model");
const cartService = require("./cart-service");

class OrderService {
	async createNewOrder(
		name,
		adress,
		tel,
		email,
		isConfirmed,
		isDelivered,
		cartId
	) {
		const totalAmount = await cartService.getTotalAmount(cartId);
		if (totalAmount) {
			const newOrder = await OrderModel.create({
				name,
				adress,
				tel,
				email,
				totalAmount,
				isConfirmed,
				isDelivered,
				cartId,
			});

			return newOrder;
		}
	}
}

module.exports = new OrderService();
