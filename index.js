const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/user.model.js");
const People = require("./models/people.model.js");
const Customer = require("./models/customer.model.js");
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://rajanaveen926:naveen123@backenddbveera.ogwbipa.mongodb.net/veeraDB";

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to DataBase ");
    app.listen(3001, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/users/:searchText", async (req, res) => {
  try {
    const searchText = req.params.searchText;
    // Use regular expression to perform a case-insensitive search
    const regex = new RegExp(searchText, "i");

    // Find users matching the search criteria
    const users = await User.find({
      $or: [
        { name: { $regex: regex } },
        { country: { $regex: regex } },
        { email: { $regex: regex } },
        { mobile: { $regex: regex } },
        // You can add more fields to search here
      ],
    });

    const people = await People.find({
      $or: [
        { name: { $regex: regex } },
        { occupation: { $regex: regex } },
        { city: { $regex: regex } },
        { email: { $regex: regex } },
        { phone: { $regex: regex } },
        // You can add more fields to search here
      ],
    });

    const customers = await Customer.find({
      $or: [
        { customer_id: { $regex: regex } },
        { name: { $regex: regex } },
        { city: { $regex: regex } },
        // You can add more fields to search here
      ],
    });

    res.json({ users, people, customers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// const PORT = process.env.PORT || 3001;
