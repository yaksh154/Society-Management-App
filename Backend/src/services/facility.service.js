const Facility = require("../models/Facility.model");

const create = async (data) => {
  return await Facility.create(data);
};

const getAll = async () => {
  return await Facility.find();
};

const getById = async (id) => {
  return await Facility.findById(id);
};

const update = async (id, data) => {
  return await Facility.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id) => {
  return await Facility.findByIdAndDelete(id);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
