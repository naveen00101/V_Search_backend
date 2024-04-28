var fs = require("fs");
const User = require("../models/user.model");
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://rajanaveen926:naveen123@backenddbveera.ogwbipa.mongodb.net/veeraDB";

mongoose
  .connect(uri)
  .then(() => console.log("connected to db"))
  .catch((e) => console.log(e.message));

const data = fs.readFileSync("./txt/NxtWave_Raw", "utf-8");

const lines = data.split("\n");

const users = lines.map((line) => {
  const [_, name, age, country, mobile, email] = line
    .split("|")
    .map((field) => field.trim());

  return {
    name,
    age,
    country,
    mobile,
    email,
  };
});

var i = 0;

// users.forEach(async (user) => {
//   const newUser = new User(user);
//   await newUser
//     .save()
//     .then(() => console.log("user " + i + " saved successfully"))
//     .catch((e) => console.error(e));
//   i += 1;
// });

// console.log(users);
