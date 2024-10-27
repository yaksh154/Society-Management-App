const User = require("../models/Manager.model");

const register = async (body) => {
  return User.create(body);
};

const findemail = async (email) => {
  return await User.findOne({ Email: email });
};

const findById = async (id) => {
  return await User.findById(id);
}

const update = async (id,body)=>{
  return await User.findByIdAndUpdate(id, body, {new: true});
}

module.exports = {
  register,
  findemail,
  findById,
  update
};
