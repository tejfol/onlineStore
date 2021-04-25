const express = require("express");
const router = express.Router();
const signinController = require("../controllers/signIn.controller.js");

router.get("/", signinController.get);
router.post("/", signinController.post);

module.exports = router;
