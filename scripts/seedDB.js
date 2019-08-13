const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/houseplants"
);

const plantSeed = [
    {
    title : "Orchid",
    light : "bright indirect light",
    water : "twice a week",
    date: new Date(Date.now())
    },
    {
    title : "Peace Lily",
    light : "medium",
    water : "once a week",
    date: new Date(Date.now())
    },
    {
    title : "Bromeliads",
    light : "high bright light",
    water : "once a week",
    date: new Date(Date.now())
    },
    {
    title : "Croton",
    light : "bright light",
    water : "consistently",
    date: new Date(Date.now()) 
    },
    {
    title : "Calathea",
    light : "bright indirect light",
    water : "regulary",
    date: new Date(Date.now())
    },
    {
    title : "Anthurium",
    light : "medium",
    water : "twice a week",
    date: new Date(Date.now())
    },
    {
    title : "Cactus",
    light : "medium",
    water : "once a week",
    date: new Date(Date.now())
    },
    {
    title : "Aloe",
    light : "medium",
    water : "once every two weeks",
    date: new Date(Date.now())
    },
    {
    title : "Spider Plant",
    light : "medium",
    water : "once per week",
    date: new Date(Date.now())
    },
    {
    title : "Snake Plant",
    light : "medium",
    water : "every two to four weeks",
    date: new Date(Date.now())
    }
];

db.Plant
    .remove({})
    .then(() => db.Plant.collection.insertMany(plantSeed))
    .then(data => {
        console.log(data.result.n + " records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

module.exports = plantSeed;