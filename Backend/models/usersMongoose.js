const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  attempts: {
    type: Number,
    required: false,
    default: 0,
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Example roles: 'user' and 'admin', modify as needed
    default: 'user', // Default role assigned to a new user
  }
});

// Static signup method
userSchema.statics.register = async function (
  firstName,
  lastName,
  email,
  password,
  image,
  attempts,

) {
  if (!validator.isEmail(email)) {
    throw new Error("Email is invalid");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("Email already exists");
  }
  const hash = await bcrypt.hash(password, 10);
  const newUser = await this.create({
    email,
    firstName,
    lastName,
    password: hash,
    image,
    attempts,
  });
  return newUser;
};

// Static login method
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("Email does not exist");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Password does not match");
  }
  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
