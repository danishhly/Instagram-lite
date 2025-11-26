require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const redis = require("./config/redis");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const feedRoutes = require("./routes/feedRoutes");

const app = express();
app.use(express.json());

//Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/feed", feedRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`server running on ${PORT}`);
    connectDB();
});