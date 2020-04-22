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
const {
  create,
  listOrders,
  updateOrderStatus,
  orderById,
} = require("../../controllers/orderController");
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

router.put(
  "/:orderId/status/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  updateOrderStatus
);

router.param("userId", userById);

router.param("orderId", orderById);

module.exports = router;
