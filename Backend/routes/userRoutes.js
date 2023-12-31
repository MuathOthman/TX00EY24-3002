const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");

const {
  userLogin,
  userRegisteration,
  getUserByID,
  getAllUsers,
  updateuser,
  createUser,
  deleteuser,
} = require("../controllers/usersController");

// Login user
router.post("/login", userLogin);

// Signup user
router.post("/register", userRegisteration);

// Get user by ID
router.get("/:id", getUserByID);

// Get all users
router.get("/", authentication, getAllUsers);

// Update user
router.patch("/:id", updateuser);

// Create user
router.post("/", createUser);

// Delete user
router.delete("/:id", deleteuser);

module.exports = router;
