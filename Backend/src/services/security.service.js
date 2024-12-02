const Security = require("../models/Security.model");

const register = async (body) => {
    return await Security.create(body);
};

const update = async (id, body) => {
    return await Security.findByIdAndUpdate(id, body, { new: true });
};

const findById = async (id) => {
    return await Security.findById(id).populate("createdBy").populate("Society");
};

const deleteSecurity = async (id) => {
    return await Security.findByIdAndDelete(id);
};

const findByEmail = async (email) => {
    return await Security.findOne({ email });
};
const getAll = async (societyid) =>{
    return await Security.find({ Society: societyid }).populate("createdBy").populate("Society");
}

module.exports = {
    register,
    update,
    findById,
    deleteSecurity,
    findByEmail,
    getAll
};