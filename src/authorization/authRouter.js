const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { username, password, passwordCheck, email } = req.body;

    //validation
    if (!username || !password || !passwordCheck || !email) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Please enter at least 6 characters" });
    }

    if (password !== passwordCheck) {
      return res.status(400).json({
        msg: "It seems your passwords dont match",
      });
    }
    //Finding existing users
    const existingUser = await User.findOne({ email: email });
    const existingUsername = await User.findOne({ username: username });

    console.log(existingUser);
    if (existingUser || existingUsername)
      return res.status(400).json({
        msg: "This user already exists in my database",
      });

    //Hashing out password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    console.log(passwordHash);

    // Creating new user
    const newUser = new User({
      email,
      password: passwordHash,
      username,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Creating login router
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    //validate
    if (!username || !password)
      return res.status(400).json({ msg: "Please enter all fields" });

    //find users profile
    const user = await User.findOne({
      username: username,
    });
    if (!user)
      return res.status(400).json({ msg: "This account doen't exist" });

    //matching passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        msg: "You have entered an inaccurate password please try again",
      });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
    console.log(token);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
