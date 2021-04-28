const express = require("express");
const router = express.Router();
const { get, filter } = require("../controllers/Home.controller.js");

router.get("/", get);
router.get("/filter", filter);

module.exports = router;
