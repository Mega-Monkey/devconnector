const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: "sting",
    require: true,
  },
  email: {
    type: "sting",
    require: true,
  },
  password: {
    type: "sting",
    require: true,
  },
  date: {
    type: "sting",
    require: true,
  },
});
