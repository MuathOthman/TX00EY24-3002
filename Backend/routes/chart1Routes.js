const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");
const checkRole = require("../middleware/checkRole");

const {
    getAllChart1,
    getChart1ByID,
    createChart1,
    updateChart1,
    deleteChart1,
} = require("../controllers/chart1Controller");

// Get all chart1
router.get("/", authentication, getAllChart1);

// Get chart1 by ID
router.get("/:id", authentication, getChart1ByID);

// Create chart1
router.post("/", authentication, checkRole('user'), createChart1);

// Update chart1
router.patch("/", authentication, updateChart1);

// Delete chart1
router.delete("/:id", deleteChart1);

module.exports = router;
