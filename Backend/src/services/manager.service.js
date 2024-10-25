const User = require("../models/Manager.model");

const register = async (body) => {
  return User.create(body);
};

const findemail = async (email) => {
  return await User.findOne({ Email: email });
};
module.exports = {
  register,
  findemail,
};
