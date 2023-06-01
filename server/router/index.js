const Router = require("express").Router;
const dbController = require("../controllers/db-controller");
const shopController = require("../controllers/shop-controller");
const goodController = require("../controllers/good-controller");
const cartController = require("../controllers/cart-controller");

const router = new Router();

router.post("/addShop", dbController.addShop);
router.post("/addGood", dbController.addGood);
router.get("/getshops", shopController.getShopsList);
router.get("/goods/:shopName", goodController.getGoodsByShops);
router.post("/cart/newCart", cartController.newCart);
router.post("/cart/changeShop", cartController.changeCartShop);

module.exports = router;
