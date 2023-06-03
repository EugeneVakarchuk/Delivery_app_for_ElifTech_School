const {Schema, model} = require("mongoose");

const OrderShema = new Schema({
	name: {type: String, required: true},
	adress: {type: String, required: true},
	tel: {type: String, required: true},
	email: {type: String, required: true},
	totalAmount: {type: Number, required: true},
	isConfirmed: {type: Boolean, required: true},
	isDelivered: {type: Boolean, required: true},
	cartId: {type: Schema.Types.ObjectId, ref: "Shop", required: true},
});

module.exports = model("Order", OrderShema);
