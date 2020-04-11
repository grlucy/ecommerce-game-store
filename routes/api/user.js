const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.post("/signup", userController.signup);

module.exports = router;
