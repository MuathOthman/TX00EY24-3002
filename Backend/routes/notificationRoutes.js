const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");

const {
  getAllNotifications,
  createNotification,
  removeNotification,
} = require("../controllers/notificationController");

// Get all notifications
router.get("/", authentication, getAllNotifications);

// Create notification
router.post("/", authentication, createNotification);

// Remove notification
router.delete("/:id", authentication, removeNotification);

module.exports = router;
