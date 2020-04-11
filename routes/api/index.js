const router = require("express").Router();

// API route files
const userRoutes = require("./user");

// routes middleware - matches "/api"
router.use("/user", userRoutes);

module.exports = router;
