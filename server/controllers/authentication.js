//logic to process a request
const User = require("../models/user");

const jwt = require("jwt-simple");
const config = require("../config");

//create function that takes user ID and encode it with secret
function tokenForUser(user) {
  //first argument is data we want to encode, second arg is secret used to encrypt it
  const timestamp = new Date().getTime();
  //sub = subject, iat = issued at time (both conventions of jason web tokens)
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function (req, res, next) {
  //user has already had user and password auth'd, just need to give them a token
  //need acces to current user model = supplied by passport localLogin, when we return done(null, user), user is assigned to req.user
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  console.log(req);

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
      res.json({ token: tokenForUser(user) });
    });
  });
};
