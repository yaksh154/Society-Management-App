const importantnumber_servise = require("../services/importantnumber.service")

const createImportantNumber = async (req, res) => {
    try {
        const num = req.body.Phonenumber
        console.log("🚀 ~ createImportantNumber ~ num:", num)
        const number = await importantnumber_servise.findbynumber(num)
        console.log("🚀 ~ createImportantNumber ~ number:", number)
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



// Update an important number
const updateImportantNumber = async (req, res) => {
    try {
        const { id } = req.params
        const importantNumber = await importantnumber_servise.getById(id);
        if (!importantNumber) {
            return res.status(404).json({ message: "Not found" });
        }
        const updatedImportantNumber = await importantnumber_servise.update(id, req.body);
        if (!updatedImportantNumber) return res.status(404).json({ message: "Not found" });
        res.status(200).json(updatedImportantNumber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an important number
const deleteImportantNumber = async (req, res) => {
    try {
        const { id } = req.params
        const importantNumber = await importantnumber_servise.getById(id);
        if (!importantNumber) {
            return res.status(404).json({ message: "already deleted" });
        }
        const deletedImportantNumber = await importantnumber_servise.remove(req.params.id);
        if (!deletedImportantNumber) return res.status(404).json({ message: "Not found" });
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createImportantNumber,
    getAllImportantNumbers,
    updateImportantNumber,
    deleteImportantNumber,
}