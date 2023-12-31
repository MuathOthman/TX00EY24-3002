require("dotenv").config();
const users = require("../models/usersMongoose");
const jwt = require("jsonwebtoken");

const {
  createChart1,
} = require("../controllers/chart1Controller");

// GET
const getUserByID = async (req, res) => {
  try {
    const user = await users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await users.find();
    res.json(allUsers);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

// PATCH
const updateuser = async (req, res) => {
  try {
    const user = await users.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user
const userLogin = async (req, res) => {
  const { email, password } = req.body;
    try {
      console.log(email, password)
        const user = await users.login(email, password);
        const token = jwt.sign({ userID: user._id, role: user.role }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "2d",
        });
        res.status(200).json({  AuthenticateToken:token });
        console.log("token",token)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Register user
const userRegisteration = async (req, res) => {
  const { firstName, lastName, email, password, image } = req.body;
  try {
    const user = await users.register(firstName, lastName, email, password, image);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// POST
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, image } = req.body;
    if (!firstName || !lastName || !email || !password, !image) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    const newUser = new users({
      firstName,
      lastName,
      email,
      password,
      image,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

// DELETE
const deleteuser = async (req, res) => {
  try {
    const user = await users.findOneAndDelete({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.json({ msg: "user deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  userLogin,
  userRegisteration,
  getUserByID,
  getAllUsers,
  updateuser,
  createUser,
  deleteuser,
};
