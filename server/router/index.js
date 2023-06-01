const Router = require("express").Router;
const dbController = require("../controllers/db-controller");

const router = new Router();

router.post("/addShop", dbController.addShop);
router.post("/addGood", dbController.addGood);

module.exports = router;
