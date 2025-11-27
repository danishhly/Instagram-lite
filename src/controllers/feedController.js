const Feed = require("../models/feed");
const Post = require("../models/post");

exports.getHomeFeed = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find feed entries for user + sort newest first
    const feedEntries = await Feed.find({ userId })
      .sort({ createdAt: -1 })
      .limit(30)
      .populate("postId");

    res.json(feedEntries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
