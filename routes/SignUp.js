const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signUp.controller.js");

router.get("/", signupController.get);

module.exports = router;