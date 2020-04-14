const router = require("express").Router();
const { list } = require("../../controllers/productController");

// Find multiple products
router.get("/list", list);

module.exports = router;
