const router = require("express").Router();

const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../../controllers/authController");
const { userById, addOrderToUserHistory } = require("../../controllers/userController");
const { create } = require("../../controllers/orderController");

// Matches with "/api/order"

router.post(
  "/order/create/userId",
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  create
);

router.param("userId", userById);

module.exports = router;
