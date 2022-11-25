const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

//static signup method
userSchema.statics.signup = async function signUp(name, email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password must have at least one uppercase character, one special character and one number"
    );
  }
  if (!validator.isEmail(email)) {
    throw Error("Not a valid email");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hash });
  return user;
};

//static login method
userSchema.statics.login = async function logIn(email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

module.exports = new model("User", userSchema);
