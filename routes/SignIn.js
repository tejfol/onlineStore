const express = require("express");
const router = express.Router();
const {get,post} = require("../controllers/SignIn.controller.js");

router.get("/", get);
router.post("/", post);

module.exports = router;
