const express = require("express");
const router = express.Router();
const User = require("../../models/userModel");

router.get("/allUsers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/newUser", async (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
