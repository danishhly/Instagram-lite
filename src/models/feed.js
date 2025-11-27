const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  },
  { timestamps: true }
);

feedSchema.index({ userId: 1, postId: -1 });

module.exports = mongoose.model("Feed", feedSchema);
