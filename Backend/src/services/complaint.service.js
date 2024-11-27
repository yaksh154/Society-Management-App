const Complaint = require("../models/Complaint.model");

const create = async (data) => {
    return await Complaint.create(data);
};

const getAll = async () => {
    return await Complaint.find();
};

const getById = async (id) => {
    return await Complaint.findById(id);
};

const update = async (id, data) => {
    return await Complaint.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id) => {
    return await Complaint.findByIdAndDelete(id);
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
};
