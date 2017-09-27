var mongoose = require('mongoose');

var NamesSchema = new mongoose.Schema({
  name: String,
  birthday: Date
});

module.exports = mongoose.model("Name", NamesSchema);