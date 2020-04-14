const router = require("express").Router();
const {
  create,
  productById,
  read,
  remove,
} = require("../../controllers/productController");
const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../../controllers/authController");
const { userById } = require("../../controllers/userController");
const { productValidator } = require("../../validator");

// Matches with "/api/product"

// Find one product
router.get("/:productId", read);

// Create one product
router.post(
  "/create/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  productValidator,
  create
);

// Delete one product
router.delete("/:productId/:userId", requireSignin, isAuth, isAdmin, remove);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
