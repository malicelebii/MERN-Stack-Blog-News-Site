const router = require("express").Router();
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/User");
const { isAuthenticated } = require("../middlewares/auth");

router.post("/signup", (req, res) => {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
  });
  User.register(user, req.body.password)
    .then(passport.authenticate("local"))
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

module.exports = router;
