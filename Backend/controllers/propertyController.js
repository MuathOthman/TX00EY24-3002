require("dotenv").config();
const Property = require("../models/propertyMongoose");
const jwt = require("jsonwebtoken");
const propertyOwner = require("../middleware/propertyOwner");

// GET
const getPropertyByID = async (req, res) => {
    const userID = req.user.userID;
  try {
    const property = await Property.findOne({_id: req.params.id, userId: userID });
    if (!property) {
      return res.status(404).json({ msg: "property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET
const getAllProperties = async (req, res) => {
    const userID = req.user.userID;
    try {
        const allProperties = await Property.find({ userId: userID });
        res.json(allProperties);
    } catch (err) {
        console.log(userID)
        console.error(err);
        res.status(500).json({ message: "Server Error" });
  }
};

// POST
const createProperty = async (req, res) => {

    const userID = req.user.userID;
  try {
      const { address, city, zipcode, country, area, totalInvestment, monthlyRevenue, image, available, maintenance, propertyType } = req.body;
      if (!address || !city || !zipcode || !country || !area || !totalInvestment || !monthlyRevenue || !image) {
          return res.status(400).json({ message: "Please enter all fields" });
        }
    const newProperty = await Property.create({
        address,
        city,
        zipcode,
        country,
        area,
        totalInvestment,
        monthlyRevenue,
        image,
        available,
        maintenance,
        propertyType,
        userId: userID,
        });
    res.json(newProperty);
    console.log(newProperty);
    console.log(userID);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PATCH
const updateProperty = async (req, res) => {
  try {
    const property = await Property.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!property) {
      return res.status(404).json({ msg: "property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findOneAndDelete({ _id: req.params.id });
    if (!property) {
      return res.status(404).json({ msg: "property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  getPropertyByID,
  getAllProperties,
  createProperty,
  updateProperty,
  deleteProperty,
};