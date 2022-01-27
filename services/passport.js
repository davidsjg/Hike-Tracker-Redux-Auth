const passport = require("passport");
const User = require("../models/user.js");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

//passport is an ecosystem of strategies
//strategy is a method for authenticating a user

//Create local strategy

//localStrategy by default is passed userName and password, need to change userName to email
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, function (
  //after localStrategy parses the request, we get email and password below
  email,
  password,
  done
) {
  //verify email and password correct, call done with the user if it is the correct email and password.  otherwise, call done with false
  User.findOne({ email: email }, function (err, user) {
    //error in search
    console.log(email);
    if (err) {
      return done(err);
    }
    //error if user was not found, user thinks they have an account but they dont
    if (!user) {
      return done(null, false);
    }
    //user exists, compare passwords
    user.comparePassword(password, function (err, isMatch) {
      //catch any errors
      if (err) {
        return done(err);
      }
      //no error, but password is wrong
      if (!isMatch) {
        return done(null, false);
      }
      //no error, correct credentials
      return done(null, user);
    });
  });
});

//Create JWT strategy

//set up options for JWT strategy, specifically tell strategy where to look on request to find this key
//whenever a request comes in, and we want passport to handle it, needs to look at the requests header authorization property
const jwtOptions = {
  //first option is where to look, second option is to tell secret needed to decode the token
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret,
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

passport.use(jwtLogin);

passport.use(localLogin);
