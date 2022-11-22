const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = new model("User", userSchema);
