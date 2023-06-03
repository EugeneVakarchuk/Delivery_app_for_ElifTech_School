const Router = require("express").Router;
const dbController = require("../controllers/db-controller");
const shopController = require("../controllers/shop-controller");
const goodController = require("../controllers/good-controller");
const cartController = require("../controllers/cart-controller");
const OrderController = require("../controllers/order-controller");

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
router.post("/cart/addGood/:goodId/:cartId", cartController.addGoodToCart);
router.get("/cart/getGoods/:cartId", cartController.getGoodsInCart);
router.post(
	"/cart/plusQuanity/:cartId/:goodId",
	cartController.plusQuanityGoodInCart
);
router.post(
	"/cart/minusQuanity/:cartId/:goodId",
	cartController.minusQuanityGoodInCart
);
router.post(
	"/cart/removeGoodInCart/:cartId/:goodId",
	cartController.removeGoodInCart
);
router.get("/cart/totalAmount/:cartId", cartController.getTotalAmount);
router.get("/cart/:cartId/:itemId", cartController.getQuantityItemInCart);
router.post("/orgers/createOrder/:cartId", OrderController.createNewOrder);
router.post("/cart/isgoodincart/:cartId/:goodId", cartController.isGoodInCart);

module.exports = router;
