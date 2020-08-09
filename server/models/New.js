const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  title: String,
  description: String,
  category:String,
  kapakImageUrl:String,
//   author: { type: mongoose.Schema.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('New',newSchema)