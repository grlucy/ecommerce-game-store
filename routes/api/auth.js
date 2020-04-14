const router = require("express").Router();
const authController = require("../../controllers/authController");
const { userSignupValidator } = require("../../validator");

// Matches with "/api/auth"

router.post("/signup", userSignupValidator, authController.signup);

router.post("/signin", authController.signin);

router.get("/signout", authController.signout);

module.exports = router;
