const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
  name: {
    type: String,
  },

  age: {
    type: Number,
  },

  gender: {
    type: String,
  },

  occupation: {
    type: String,
  },

  city: {
    type: String,
  },

  email: {
    type: String,
  },

  phone: {
    type: String,
  },
});

module.exports = mongoose.model("People", PersonSchema);
