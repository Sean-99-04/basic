const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  age: Number,
});

module.exports = mongoose.model("Pet", mySchema);
