const express = require("express");
const router = express.Router();
const signinController = require("../controllers/signIn.controller.js");

router.get("/", signinController.get);

module.exports = router;
