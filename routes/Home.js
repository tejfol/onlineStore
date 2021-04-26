const express = require("express");
const router = express.Router();
const homeController = require("../controllers/Home.controller.js");
const verifyToken = require("../middleware/login.middleware");

router.get("/", homeController.get);
router.post("/", verifyToken, homeController.post);

module.exports = router;
