require("dotenv").config();
const notification = require("../models/noficationMongoose");

//  Get All Notifications
const getAllNotifications = async (req, res) => {
  const userID = req.user.userID;
  try {
    const notifications = await notification.find({ userId: userID});
    if (!notifications || notifications.length === 0) {
      return res.status(404).json({ message: "No notifications found" });
    } else {
      const notificationData = notifications.map(({ id, title, message }) => ({
        id,
        title,
        message,
      }));
      res.json(notificationData);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create notification
const createNotification = async (req, res) => {
  const userID = req.user.userID;
  const { title, message, date } = req.body;
  try {
    const newNotification = new notification({
      title: title,
      message: message,
      date: date,
      userId: userID,
    });
    await newNotification.save();
    res.json({ message: "Notification created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove notification
const removeNotification = async (req, res) => {
  try {
    const deleteNotification = await notification.findOneAndDelete({
      _id: req.params.id,
    });
    if (!deleteNotification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.json({ message: "Notification deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllNotifications,
  createNotification,
  removeNotification,
};
