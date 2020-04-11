const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.get("/:id", userController.sayHi);

module.exports = router;
