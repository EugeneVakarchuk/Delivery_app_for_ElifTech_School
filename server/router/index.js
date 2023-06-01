const Router = require("express").Router;
const dbController = require("../controllers/db-controller");
const shopController = require("../controllers/shop-controller");
const goodController = require("../controllers/good-controller");
const cartController = require("../controllers/cart-controller");

const router = new Router();

router.post("/addShop", dbController.addShop);
router.post("/addGood", dbController.addGood);
router.get("/getShops", shopController.getShopsList);
router.get("/goods/:shopTitle", goodController.getGoodsByShops);
router.post("/cart/newCart", cartController.newCart);

module.exports = router;
