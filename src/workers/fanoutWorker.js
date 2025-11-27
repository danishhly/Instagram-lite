const Follow = require("../models/follow");
const Feed = require("../models/feed");

async function fanoutPost(post) {
  try {
    const followers = await Follow.find({ following: post.userId });

    const feedEntries = followers.map(f => ({
      userId: f.follower,
      postId: post._id,
    }));

    if (feedEntries.length > 0) {
      await Feed.insertMany(feedEntries);
      console.log("Fan-out complete for post:", post._id);
    } else {
      console.log("No followers to fan-out.");
    }
  } catch (err) {
    console.error("Fan-out error:", err);
  }
}

module.exports = fanoutPost;
