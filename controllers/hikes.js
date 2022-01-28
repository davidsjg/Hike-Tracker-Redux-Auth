const mongoose = require("mongoose");
const Hike = require("../models/Hike");

exports.hikePost = async (req, res) => {
  const { trail, distance, time } = req.body;

  const hike = new Hike({
    trail,
    distance,
    time,
  });

  try {
    let saveHike = await hike.save();

    console.log(saveHike);

    res.json(saveHike);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
