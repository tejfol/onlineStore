const express = require("express");
const router = express.Router();
const { get, post } = require("../controllers/AddItem.controller.js");
const verifyToken = require("../middleware/login.middleware");

router.get("/", get);
router.post("/", verifyToken, post);

module.exports = router;
