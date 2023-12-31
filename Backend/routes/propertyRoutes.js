const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");
const checkRole = require("../middleware/checkRole");
const propertyOwner = require("../middleware/propertyOwner");




const {
    getAllProperties,
    getPropertyByID,
    createProperty,
    updateProperty,
    deleteProperty,
} = require("../controllers/propertyController");

// Get all properties
router.get("/", authentication, getAllProperties);

// Get property by ID
router.get("/:id", authentication, getPropertyByID);

// Create property
router.post("/",  authentication, checkRole('user') , createProperty);

// Update property
router.patch("/:id", updateProperty);

// Delete property
router.delete("/:id", deleteProperty);

module.exports = router;

