const Router = require("express").Router;
const dbController = require("../controllers/db-controller");
const shopController = require("../controllers/shop-controller");
const goodController = require("../controllers/good-controller");
const cartController = require("../controllers/cart-controller");

const router = new Router();

router.post("/addShop", dbController.addShop);
router.post("/addGood", dbController.addGood);
router.get("/getshops", shopController.getShopsList);
router.get("/shop/title/:shopTitle", shopController.getShopByTitle);
router.get("/shop/id/:shopId", shopController.getShopById);
router.get("/goods/:shopId", goodController.getGoodsByShops);
router.post("/cart/newCart", cartController.newCart);
router.post(
	"/cart/changeShop/:cartId/:shopTitle",
	cartController.changeCartShop
);
router.get("/cart/getShop/:cartId", cartController.getShopByCartId);

module.exports = router;
