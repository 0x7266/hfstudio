const User = require("../models/users.model.js");
const jwt = require("jsonwebtoken");

function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, {
    expiresIn: "3d",
  });
}

module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.login(email, password);
      const token = createToken(user._id);
      res.status(200).json({ email, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  signUpUser: async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    try {
      const user = await User.signup(name, email, password);
      const token = createToken(user._id);
      res.status(200).json({ email, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
