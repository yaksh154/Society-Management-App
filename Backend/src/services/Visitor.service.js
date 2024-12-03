const Visitor = require("../models/Visitor.model")

const create = async (data) => {
    return await Visitor.create(data);
};

const getAll = async (id) => {
    return await Visitor.find({ Society: id }).populate("createdBy");
};

module.exports = {
    create,
    getAll
}