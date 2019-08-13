const express = require('express');

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// app.use('/api/plants', proxy({ target: "http://localhost:3001/", changeOrigin: true }));

const db = require("./models");
// const plantSeed = require("./scripts/seedDB")

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/houseplants");
//   db.Plant.create(plantSeed)
//   .then(function(dbPlant){
//     console.log(dbPlant);
//   })
//   .catch(function(err) {
//     console.log(err.message);
// });

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(PORT);
    console.log(`API Server now listening on http://localhost/${PORT}`);
});