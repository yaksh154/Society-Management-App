const Importantnumber = require("../models/importantnumber.model")


const create = async (data) => {
  const importantNumber = new Importantnumber(data);
  return await importantNumber.save();
};


const getAll = async () => {
  return await Importantnumber.find();
};


const getById = async (id) => {
  return await Importantnumber.findById(id);
};


const update = async (id, data) => {
  return await Importantnumber.findByIdAndUpdate(id, data, { new: true });
};


const remove = async (id) => {
  return await Importantnumber.findByIdAndDelete(id);
};

module.exports ={
  create,
  getAll,
  getById,
  update,
  remove,
}