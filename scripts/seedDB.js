const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hikeTracker");

const hikeSeed = [
  {
    trail: "Heart Lake Trail",
    distance: 8.5,
    time: 48.56,
  },
];

db.Hike.deleteMany({})
  .then(() => db.Hike.collection.insertMany(hikeSeed))
  .then((data) => {
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
