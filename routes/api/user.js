const router = require("express").Router();
const userController = require("../../controllers/userController");
const { userSignupValidator } = require("../../validator");

// Matches with "/api/user"

router.post("/signup", userSignupValidator, userController.signup);

router.post("/signin", userController.signin);

router.get("/signout", userController.signout);

module.exports = router;
