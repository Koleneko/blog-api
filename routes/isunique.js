const express = require("express");
const router = express.Router();
const IsUniqueController = require('../controllers/IsUnique')

router.get('/', IsUniqueController.unique)

module.exports.uniqueRoutes = router;
