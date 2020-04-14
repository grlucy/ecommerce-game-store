const router = require("express").Router();

// API route files
const authRoutes = require("./auth");
const userRoutes = require("./user");
const productRoutes = require("./product");

// routes middleware - matches "/api"
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/product", productRoutes);

module.exports = router;
