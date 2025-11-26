const User = require("../models/user");
const Follow = require("../models/follow");

// REGISTER USER
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const exists = await User.findOne({ username });
        if(exists) return res.status(400).json({ message: "Username already taken" });

        const user = await User.create({ username, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// LOGIN USER

exports.login = async (req, res) => {
    try {
        const { username, password} = req.body

        const user = await User.findOne({ username, password });
        if (!user) return res.status(400).json({ message: "Invalid credentials "});

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// FOLLOW USER
exports.follow = async (req, res) => {
  try {
    const { followerId, followingId } = req.body;

    if (followerId === followingId)
      return res.status(400).json({ message: "You cannot follow yourself" });

    await Follow.create({ follower: followerId, following: followingId });

    res.json({ message: "Followed successfully" });
  } catch (error) {
    if (error.code === 11000)
      return res.status(400).json({ message: "Already following" });

    res.status(500).json({ error: error.message });
  }
};

// UNFOLLOW USER
exports.unfollow = async (req, res) => {
  try {
    const { followerId, followingId } = req.body;

    await Follow.findOneAndDelete({ follower: followerId, following: followingId });

    res.json({ message: "Unfollowed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET FOLLOWERS
exports.getFollowers = async (req, res) => {
  try {
    const { userId } = req.params;
    const followers = await Follow.find({ following: userId }).populate("follower", "username");
    res.json(followers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET FOLLOWING
exports.getFollowing = async (req, res) => {
  try {
    const { userId } = req.params;
    const following = await Follow.find({ follower: userId }).populate("following", "username");
    res.json(following);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};