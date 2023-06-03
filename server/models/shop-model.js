const {Schema, model} = require("mongoose");

const ShopSchema = new Schema({
	shopTitle: {type: String, required: true},
});

module.exports = model("Shop", ShopSchema);
