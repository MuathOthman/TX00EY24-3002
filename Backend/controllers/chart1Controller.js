require("dotenv").config();
const Chart1 = require("../models/chart1Mongoose");
const jwt = require("jsonwebtoken");

// GET
const getChart1ByID = async (req, res) => {
    const userID = req.user.userID;
  try {
    const chart1 = await Chart1.findOne({_id: req.params.id, userId: userID });
    if (!chart1) {
      return res.status(404).json({ msg: "chart1 not found" });
    }
    res.json(chart1);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET
const getAllChart1 = async (req, res) => {
    const userID = req.user.userID;
    try {
        const allChart1 = await Chart1.find({ userId: userID });
        res.json(allChart1);
    } catch (err) {
        console.log(userID)
        console.error(err);
        res.status(500).json({ message: "Server Error" });
  }
};

// POST
const createChart1 = async (req, res) => {
    const userID = req.user.userID;
  try {
      const { january, february, march, april, may, june, july, august, september, october, november, december   } = req.body;
      if (!january || !february || !march || !april || !may || !june || !july || !august || !september || !october || !november || !december) {
          return res.status(400).json({ message: "Please enter all fields" });
        }
    const newChart1 = await Chart1.create({
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december,
        userId: userID,
        });
    res.json(newChart1);
    console.log(newChart1);
    console.log(userID);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error" + error.message)
  }
};

// PUT
const updateChart1 = async (req, res) => {
    const userID = req.user.userID;
    try {
    const { january, february, march, april, may, june, july, august, september, october, november, december } = req.body;
    const updatedChart1 = await Chart1.findOneAndUpdate(
      { userId: userID },
      { january, february, march, april, may, june, july, august, september, october, november, december },
      { new: true }
    );
    console.log(updatedChart1);
    res.json(updatedChart1);
  } catch (error) {
        console.log(userID)
    res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteChart1 = async (req, res) => {
  try {
    const chart1 = await Chart1.findOneAndDelete({ _id: req.params.id });
    if (!chart1) {
      return res.status(404).json({ msg: "chart1 not found" });
    }
    res.json(chart1);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getChart1ByID,
    getAllChart1,
    createChart1,
    updateChart1,
    deleteChart1,
};