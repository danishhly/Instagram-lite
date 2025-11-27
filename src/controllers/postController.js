const Post = require("../models/post");
const fanoutPost = require("../workers/fanoutWorker");

// CREATE POST
exports.createPost = async (req, res) => {
  try {
    const { userId, content } = req.body;

    if (!userId || !content)
      return res.status(400).json({ message: "Missing fields" });

    const post = await Post.create({ userId, content });

    // TRIGGER FAN-OUT WORKER
    fanoutPost(post);

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET A USER'S POSTS
exports.getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;

    const posts = await Post.find({ userId }).sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
