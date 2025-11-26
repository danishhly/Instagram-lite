const express = require("express");
const router = express.Router();

const {
  register,
  login,
  follow,
  unfollow,
  getFollowers,
  getFollowing
} = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);

router.post("/follow", follow);
router.post("/unfollow", unfollow);

router.get("/:userId/followers", getFollowers);
router.get("/:userId/following", getFollowing);

module.exports = router;
