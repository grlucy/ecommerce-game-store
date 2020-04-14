const router = require("express").Router();
const { create } = require("../../controllers/productController");
const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../../controllers/authController");
const { userById } = require("../../controllers/userController");
const { productValidator } = require("../../validator");

// Create new product
router.post(
  "/create/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  productValidator,
  create
);

router.param("userId", userById);

module.exports = router;
