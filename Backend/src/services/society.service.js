const Society = require('../models/society.model');

const createSociety = async (societyData) => {
  return await Society.create(societyData);
};

const getSociety = async () => {
  return await Society.find();
};



module.exports = {
  createSociety,
  getSociety,
};
