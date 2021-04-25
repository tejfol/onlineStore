const express = require("express");
const router = express.Router();
const logoutController = require("../controllers/logout.controller.js");

router.get("/", logoutController.get);

module.exports = router;