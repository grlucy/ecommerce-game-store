const router = require("express").Router();
const { userById } = require("../../controllers/userController");
const { requireSignin, isAuth } = require("../../controllers/authController");
const { generateToken } = require("../../controllers/braintreeController");

// Matches with "/api/braintree"
router.get("/getToken/:userId", requireSignin, isAuth, generateToken);

router.param("userId", userById);

module.exports = router;
