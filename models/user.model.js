const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },

  age: {
    type: Number,
  },

  country: {
    type: String,
  },

  mobile: {
    type: String,
  },

  email: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
