const router = require("express").Router();
const userController = require("../../controllers/userController");
const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../../controllers/authController");

// Matches with "/api/user"

router.get("/:userId", requireSignin, isAuth, userController.read);

router.get(
  "/order-history/:userId",
  requireSignin,
  isAuth,
  userController.purchaseHistory
);

router.param("userId", userController.userById);

module.exports = router;
