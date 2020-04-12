const router = require("express").Router();

// API route files
const authRoutes = require("./auth");

// routes middleware - matches "/api"
router.use("/auth", authRoutes);

module.exports = router;
