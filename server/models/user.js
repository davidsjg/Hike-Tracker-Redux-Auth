//local definition of what a user is

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define our model
const userSchema = new Schema({
  //mongo does not check for case, so we use lowercase
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

//Create the model class, with collection named 'user'
const ModelClass = mongoose.model("user", userSchema);

//Export the model
module.exports = ModelClass;
