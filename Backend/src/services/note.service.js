const Note = require("../models/Note.model");

const create = async (data) => {
    return await Note.create(data);
};

const getAll = async (id) => {
    return await Note.find({Society: id});
};

const getById = async (id) => {
    return await Note.findById(id);
};

const update = async (id, data) => {
    return await Note.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id) => {
    return await Note.findByIdAndDelete(id);
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
};
