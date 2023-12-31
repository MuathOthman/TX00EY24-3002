const mongoose = require("mongoose");


const chart1Schema = new mongoose.Schema({
    january: {
        type: Number,
        required: true,
    },
    february: {
        type: Number,
        required: true,
    },
    march: {
        type: Number,
        required: true,
    },
    april: {
        type: Number,
        required: true,
    },
    may: {
        type: Number,
        required: true,
    },
    june: {
        type: Number,
        required: true,
    },
    july: {
        type: Number,
        required: true,
    },
    august: {
        type: Number,
        required: true,
    },
    september: {
        type: Number,
        required: true,
    },
    october: {
        type: Number,
        required: true,
    },
    november: {
        type: Number,
        required: true,
    },
    december: {
        type: Number,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

});

const Chart1 = mongoose.model("Chart1", chart1Schema);
module.exports = Chart1;