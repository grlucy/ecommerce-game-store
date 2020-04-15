const router = require("express").Router();
const { list, listCategories } = require("../../controllers/productController");

// Matches with "/api/products"

// Find multiple products
router.get("/list", list);

// Get names of all product categories
router.get("/categories", listCategories);

module.exports = router;
