const mongoose = require("mongoose");


const propertySchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    totalInvestment: {
        type: Number,
        required: true,
    },
    monthlyRevenue: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    maintenance: {
        type: Boolean,
        default: true,
    },
    propertyType: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;