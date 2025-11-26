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

