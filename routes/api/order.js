const router = require("express").Router();

const { requireSignin, isAuth } = require("../../controllers/authController");
const {
  userById,
  addOrderToUserHistory,
} = require("../../controllers/userController");
const { create } = require("../../controllers/orderController");

// Matches with "/api/order"

router.post(
  "/create/:userId",
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  create
);

router.param("userId", userById);

module.exports = router;
