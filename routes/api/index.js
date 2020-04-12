const router = require("express").Router();

// API route files
const authRoutes = require("./auth");
const userRoutes = require("./user");

// routes middleware - matches "/api"
router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
