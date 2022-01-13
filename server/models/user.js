//local definition of what a user is

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

//Define our model
const userSchema = new Schema({
  //mongo does not check for case, so we use lowercase
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

//On save hook, encrypt password
//before saving a model, run this function (pre-save)
userSchema.pre("save", function (next) {
  //context of this function is the user model. gaining access to the user model
  //user is an instance of the user model (can acccess email and password off of it)
  const user = this;

  //generate a salt, then run callback
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    //hash our password using the salt, then run callback
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      //overwrite plain text password with encrypted password (hash + salt)
      user.password = hash;

      //end of 'pre', go ahead and save model
      next();
    });
  });
});

//adding an instance to userSchema called comparePassword
userSchema.methods.comparePassword = function (candidatePassword, callback) {
  //           submitted password,   hashed and salted password
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

//Create the model class, with collection named 'user'
const ModelClass = mongoose.model("user", userSchema);

//Export the model
module.exports = ModelClass;
