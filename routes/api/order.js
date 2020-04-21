const router = require("express").Router();

const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../../controllers/authController");
const {
  userById,
  addOrderToUserHistory,
} = require("../../controllers/userController");
const { create, listOrders } = require("../../controllers/orderController");
const { decreaseQuantity } = require("../../controllers/productController");

// Matches with "/api/order"

router.post(
  "/create/:userId",
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  decreaseQuantity,
  create
);

router.get("/list/:userId", requireSignin, isAuth, isAdmin, listOrders);

router.param("userId", userById);

module.exports = router;
