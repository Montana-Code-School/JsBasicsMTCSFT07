var mongoose = require('mongoose');

var NamesSchema =new mongoose.Schema({
  name: String,
  birthday: Date,
  email: String
});

module.exports = mongoose.model("Name", NamesSchema);