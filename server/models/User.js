const mongoose = require("mongoose");
const passportLocalMongoose=require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  news: Array
});


userSchema.plugin(passportLocalMongoose)


module.exports = mongoose.model('User',userSchema)