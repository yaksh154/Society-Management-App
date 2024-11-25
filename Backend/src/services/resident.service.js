const Resident = require("../models/resident.model")

const create = async (body) => {
    return Resident.create(body)
}

const findemail = async (email) => {
    return await Resident.findOne({ Email: email })
}

const getById = async (id) => {
    return await Resident.findById(id).populate("Society");
};

const update = async (id, data) => {
    return await Resident.findByIdAndUpdate(id, data, { new: true });
};

const deleteResident = async (id) => {
    return await Resident.findByIdAndDelete(id);
};
module.exports = {
    create,
    findemail,
    getById,
    update,
    deleteResident,
}