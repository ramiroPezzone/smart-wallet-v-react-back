const User = require("../models/user");
const controllers = {
  root: (req, res) => {
    res.send("Todo ok ✔️");
  },
  user: async (req, res) => {
    const user = await User.find();
    res.json(user);
  },
};

module.exports = controllers;
