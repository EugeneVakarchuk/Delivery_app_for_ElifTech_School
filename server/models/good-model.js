const {Schema, model} = require("mongoose");

const GoodSchema = new Schema({
	goodTitle: {type: String, required: true},
	goodPrice: {type: Number, required: true},
	shopId: {type: Schema.Types.ObjectId, ref: "Shops"},
	imageUrl: {type: String, required: true},
});

module.exports = model("Good", GoodSchema);
