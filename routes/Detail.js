const express = require("express");
const router = express.Router();
const { get, deleteItem } = require("../controllers/Detail.controller.js");
const verifyToken = require("../middleware/login.middleware");

router.get("/:id", get);
router.get("/:id/delete", verifyToken, deleteItem);

module.exports = router;
