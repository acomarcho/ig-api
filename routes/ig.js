const express = require("express");
const router = express.Router();
const igController = require("../controllers/ig");

// GET /ig/:username
router.get("/:username", igController.getUserData);

module.exports = router;
