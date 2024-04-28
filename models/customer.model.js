const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  customer_id: {
    type: String,
  },

  name: {
    type: String,
  },

  age: {
    type: Number,
  },

  city: {
    type: String,
  },

  last_purchase_amount: {
    type: String,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
