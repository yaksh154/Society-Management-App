const importantnumber_servise = require("../services/importantnumber.service")

const createImportantNumber = async (req, res) => {
    try {
        const importantNumber = await importantnumber_servise.create(req.body);
        res.status(201).json(importantNumber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all important numbers
const getAllImportantNumbers = async (req, res) => {
    try {
        const importantNumbers = await importantnumber_servise.getAll();
        res.status(200).json(importantNumbers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single important number by ID
const getImportantNumberById = async (req, res) => {
    try {
        const importantNumber = await importantnumber_servise.getById(req.params.id);
        if (!importantNumber) return res.status(404).json({ message: "Not found" });
        res.status(200).json(importantNumber);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an important number
const updateImportantNumber = async (req, res) => {
    try {
        const updatedImportantNumber = await importantnumber_servise.update(req.params.id, req.body);
        if (!updatedImportantNumber) return res.status(404).json({ message: "Not found" });
        res.status(200).json(updatedImportantNumber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an important number
const deleteImportantNumber = async (req, res) => {
    try {
        const deletedImportantNumber = await importantnumber_servise.remove(req.params.id);
        if (!deletedImportantNumber) return res.status(404).json({ message: "Not found" });
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports ={
    createImportantNumber,
    getAllImportantNumbers,
    getImportantNumberById,
    updateImportantNumber,
    deleteImportantNumber,
}