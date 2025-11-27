const express = require("express");
const router = express.Router();
const { getHomeFeed } = require("../controllers/feedController");

router.get("/:userId", getHomeFeed);

module.exports = router;