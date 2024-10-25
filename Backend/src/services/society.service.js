const Society = require('../models/society.model');

const createSociety = async (societyData) => {
  return await Society.create(societyData);
};

const getSocietyById = async (id) => {
  return await Society.findById(id);
};



module.exports = {
  createSociety,
  getSocietyById,
};
