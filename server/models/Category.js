const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: String,
  kapakImageUrl:String,
//   author: { type: mongoose.Schema.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('New',newSchema)