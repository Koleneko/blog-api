const express = require("express");
const router = express.Router();
const UserController = require("../controllers/User");

router.get("/", UserController.all);
router.get("/:id", UserController.show);
router.get("/by_username/:username", UserController.getByName)

module.exports.usersRoutes = router;
