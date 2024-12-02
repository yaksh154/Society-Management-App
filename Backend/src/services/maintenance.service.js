const Maintenance = require("../models/Maintenance.model");

const create = async (data) => {
    return await Maintenance.create(data);
};

const getAll = async (id) => {
    return await Maintenance.find({Society: id});
};

const getById = async (id) => {
    return await Maintenance.findById(id);
};

const update = async (id, data) => {
    return await Maintenance.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id) => {
    return await Maintenance.findByIdAndDelete(id);
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
};
