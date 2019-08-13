const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlantSchema = new Schema({

    title: { type: String, required: true },

    light: { type: String, required: true },

    water: { type: String, required: true },

    temperature: { type: Number, required: false },

    // image: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Plant = mongoose.model("Plant", PlantSchema);

module.exports = Plant;