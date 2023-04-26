const express = require("express");
const router = express.Router();
const igController = require("../controllers/ig");

// GET /ig/user/:username
router.get("/user/:username", igController.getUserData);
// GET /ig/feeds/:username
router.get("/feeds/:username", igController.getUserFeeds);

module.exports = router;
