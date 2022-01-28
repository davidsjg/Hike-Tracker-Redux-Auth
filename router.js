const Authentication = require("./controllers/authentication.js");
const passportService = require("./services/passport");
const passport = require("passport");
const { hikePost } = require("./controllers/hikes.js");

const requireAuth = passport.authenticate("jwt", { session: false });

//helper to intercept request
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function (app) {
  app.get("/", requireAuth, function (req, res) {
    res.send({ hi: "there" });
  });
  app.post("/signup", Authentication.signup);
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/hikePost", hikePost);
};
