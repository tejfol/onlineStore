const express = require("express");
const router = express.Router();
const {get} = require("../controllers/Search.controller.js");

router.get("/", get);

module.exports = router;