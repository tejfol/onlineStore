const express = require("express");
const router = express.Router();
const signupController = require("../controllers/SignUp.controller.js");

router.get("/", signupController.get);
router.post("/", signupController.post);

module.exports = router;
