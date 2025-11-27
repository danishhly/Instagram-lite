require("dotenv").config();
const path = require("path");
const dotenv = require("dotenv");

// Explicitly point to the .env file in the root directory (one level up)
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const express = require("express");
// ... rest of your code
const connectDB = require("./config/db");
const redis = require("./config/redis");


const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const feedRoutes = require("./routes/feedRoutes");

console.log("DEBUGGING ROUTES:", userRoutes);

const app = express();
app.use(express.json());

//Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
//app.use("/api/feed", feedRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`server running on ${PORT}`);
    connectDB();
});