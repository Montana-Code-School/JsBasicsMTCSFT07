var mongoose = require('mongoose');

var NamesSchema =new mongoose.Schema({
  name: String,
  dob: Date,
  starredIn: String
});

module.exports = mongoose.model("Name", NamesSchema);