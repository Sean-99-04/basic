const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  age: Number,
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Pet", mySchema, "pets");
