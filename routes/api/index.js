const router = require("express").Router();

// API route files
const authRoutes = require("./auth");
const userRoutes = require("./user");
const productRoutes = require("./product");
const productsRoutes = require("./products");
const braintreeRoutes = require("./braintree");

// routes middleware - matches "/api"
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/products", productsRoutes);
router.use("/braintree", braintreeRoutes);

module.exports = router;
