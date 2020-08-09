const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const mongoose = require("mongoose");
const path = require("path");
const dev = require('../config/dev')

app.use(cors());
app.use(express.json()); // Access data sent as json @req.body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
  secret: 'Dude!',
  resave: false,
  saveUninitialized: true

}))

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(User.createStrategy());
// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });


mongoose
  .connect(dev.mongoDB
    ,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("mongodb Connected"))
  .catch((err) => console.log(err));

// passport.use(new LocalStrategy(User.authenticate()));


const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const postPage = require("./routes/postPage")
app.use("/api/users", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/news/:id",postPage)

app.listen(5000, () => {
  console.log("listening on 5000");
});
