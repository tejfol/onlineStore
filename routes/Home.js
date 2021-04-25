const express = require("express");
const router = express.Router();
const controller = require("../controllers/Home.controller.js");

router.get("/", controller.get);

module.exports = router;
