var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  Name : String,
  Password : String,
  Office : String,
  Position : String,
  Expertise : Array,
  Picture : String,
  ContactInfo : {
    Phone : String,
    Fax : String,
    Email : String
  }
});

var User = module.exports = mongoose.model('User', userSchema);
