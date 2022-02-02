const express = require("express");
const router = express.Router();
const IsUniqueController = require('../controllers/IsUnique')

router.get('/email', IsUniqueController.email);
router.get('/username', IsUniqueController.username);

module.exports.uniqueRoutes = router;
