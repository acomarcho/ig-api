const express = require("express");
const router = express.Router();
const igController = require("../controllers/ig");

// GET /ig/user/:username
router.get("/user/:username", igController.getUserData);
// GET /ig/feeds/:username
router.get("/feeds/:username", igController.getUserFeeds);
// GET /ig/user-and-feeds/:username
router.get("/user-and-feeds/:username", igController.getUserAndFeeds);

module.exports = router;
