const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hikeSchema = new Schema({
  trail: {
    type: String,
  },
  distance: {
    type: Number,
  },
  time: {
    type: Number,
  },
});

const Hike = mongoose.model("Hike", hikeSchema);

module.exports = Hike;
