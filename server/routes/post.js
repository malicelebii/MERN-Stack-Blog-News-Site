const router = require("express").Router();
const mongoose = require("mongoose");
const New = require("../models/New");
const { isAuthenticated } = require("../middlewares/auth");

router.post("/new", (req, res) => {
  let newPost = new New({
    title: req.body.title,
    description: req.body.description,
    category:req.body.category,
    createdAt: Date.now(),
  });

  newPost
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("err" + err));
});

router.get("/", (req, res) => {
  let posts = New.find()
  .then(posts=>res.json(posts))
  .catch(err=>res.json(err))
});




module.exports = router;
