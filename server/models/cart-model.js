const {Schema, model} = require("mongoose");

const CartSchema = new Schema({
	shop: {type: Schema.Types.ObjectId, ref: "Shop", required: true},
	totalAmount: {type: Number, required: true},
	items: [
		{
			good: {type: Schema.Types.ObjectId, ref: "Good", required: true},
			quantity: {type: Number, required: true},
		},
	],
});

module.exports = model("Cart", CartSchema);
