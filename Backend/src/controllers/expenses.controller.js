const expenses_servise = require("../services/expenses.service")
const { uploadFile } = require("../middleware/upload")

const createexpenses = async (req, res) => {
    try {
        const reqbody = req.body
        if (reqbody) {
            return res.status(400).json({ message: "all field required" });
        }
        const img = req.files.Image[0].path
        const upload = await uploadFile(img);
        const body = {
            Title : reqbody.title,
            Description : reqbody.description,
            Date : reqbody.date,
            Amount : reqbody.amount,
            Bill: upload.secure_url,
            createdBy: req.user._id,
            Society: req.user.societyid
        }
        const expenses = await expenses_servise.create(body);
        res.status(201).json(expenses);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all expenses 
const getAllexpenses = async (req, res) => {
    try {
        const expensess = await expenses_servise.getAll();
        res.status(200).json(expensess);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Update an expenses

const updateexpenses = async (req, res) => {
    try {
        const { id } = req.params
        const expenses = await expenses_servise.getById(id);
        if (!expenses) {
            return res.status(404).json({ message: "Not found" });
        }
        const updatedexpenses = await expenses_servise.update(id, req.body);
        if (!updatedexpenses) return res.status(404).json({ message: "Not found" });
        res.status(200).json(updatedexpenses);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an expenses 
const deleteexpenses = async (req, res) => {
    try {
        const { id } = req.params
        const expenses = await expenses_servise.getById(id);
        if (!expenses) {
            return res.status(404).json({ message: "already deleted" });
        }
        const deletedexpenses = await expenses_servise.remove(req.params.id);
        if (!deletedexpenses) return res.status(404).json({ message: "Not found" });
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createexpenses,
    getAllexpenses,
    updateexpenses,
    deleteexpenses,
}