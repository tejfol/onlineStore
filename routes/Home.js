const express = require("express");
const router = express.Router();
const { get } = require("../controllers/Home.controller.js");

router.get("/", get);

module.exports = router;
