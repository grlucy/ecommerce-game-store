const router = require("express").Router();
const { create } = require("../../controllers/productController");
const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../../controllers/authController");
const { userById } = require("../../controllers/userController");

// Create new product
router.post("/create/:userId", requireSignin, isAuth, isAdmin, create);

router.param("userId", userById);

module.exports = router;
