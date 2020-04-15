const router = require("express").Router();
const { list, listCategories } = require("../../controllers/productController");

// Matches with "/api/products"

// Find multiple products
// Optionally filter by category, availability, or search term
// Sort by popularity (default) or price
router.get("/list", list);

// Get names of all product categories
router.get("/categories", listCategories);

module.exports = router;
