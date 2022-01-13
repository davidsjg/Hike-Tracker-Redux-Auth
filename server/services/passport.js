const passport = require("passport");
const User = require("../models/user.js");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

//passport is an ecosystem of strategies
//strategy is a method for authenticating a user

//set up options for JWT strategy, specifically tell strategy where to look on request to find this key
//whenever a request comes in, and we want passport to handle it, needs to look at the requests header authorization property
const jwtOptions = {
    //first option is where to look, second option is to tell secret needed to decode the token
    jwtFromRequest = ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//create JWT strategy
//first arg is jwtOptions, callback function to authenticate  a user with a JWT token
//            payload= decoded JWT token from tokenForUser function in authentication.js, done = callback on whether we can auth user
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  //see if the user ID in the payload exists in DB
  //if it does, acll 'done' with that user
  //otherwise, call done without a user object
  User.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      //not an error, and we found the user
      done(null, user);
    } else {
      //not an error, but we didn't find the user
      done(null, false);
    }
  });
});


passport.use(jwtLogin)