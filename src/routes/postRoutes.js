const express = require("express");
const router = express.Router();

const { createPost, getUserPosts } = require("../controllers/postController");

router.post("/", createPost);
router.get("/:userId", getUserPosts);

module.exports = router;
