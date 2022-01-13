//logic to process a request
const User = require("../models/user");

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  //make sure both email and password were sent from front end user
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }

  //see if a user with the given email exists
  //existingUser = true if an email already exists, if they do not exist, returns null
  User.findOne({ email: email }, function (err, existingUser) {
    //if no database connection
    if (err) {
      return next(err);
    }

    //if user with email does exist, return error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    //if user email does not exist, create and save user
    const user = new User({
      email: email,
      password: password,
    });

    //save user to database
    user.save(function (err) {
      if (err) {
        return next(err);
      }

      //respond to request indicating the user was created
      res.json({ password: password });
    });
  });
};
