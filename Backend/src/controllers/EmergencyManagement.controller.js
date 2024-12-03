const Alert_servise = require("../services/EmergencyManagement.service")

// Create a new alert
const createAlert = async(req,res)=>{
    try{
        const alertData = req.body;
        if(!alertData){
            return res.status(400).json({ message: "all required" })
        }
        const body = {
            Alert_Type: alertData.Alert_Type,
            Description: alertData.Description,
            createdBy: req.user._id,
            Society: req.user.societyid
        }
        const alert = await Alert_servise.create(body)
        res.status(201).json(alert)
    }catch(error){
        res.status(500).json({ message: error.message })
    }
}

// Get all alerts
const getAllAlerts = async (req, res) => {
    try {
        const societyid = req.user.societyid
        const alerts = await Alert_servise.getAll(societyid);
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a single alert
const getAlert = async (req, res) => {
    try {
        const { id } = req.params;
        const alert = await Alert_servise.getById(id);
        if (!alert) {
            return res.status(404).json({ message: "Not found" });
        }
        res.status(200).json(alert);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update an alert
const updateAlert = async (req, res) => {
    try {
        const { id } = req.params;
        const alert = await Alert_servise.getById(id);
        if (!alert) {
            return res.status(404).json({ message: "Not found" });
        }
        const updetbody = {}
        if (req.body) {
            updetbody.Alert_Type = req.body.Alert_Type,
            updetbody.Description = req.body.Description
        }
        const updatedAlert = await Alert_servise.update(id, updetbody);
        res.status(200).json(updatedAlert);
    }catch(err) {
        res.status(500).json({ message: err.message})
    }
}

// Delete an alert
const deleteAlert = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAlert = await Alert_servise.delete(id);
        if (!deletedAlert) {
            return res.status(404).json({ message: "Not found" });
        }
        res.status(200).json({ message: "Alert deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createAlert,
    getAllAlerts,
    getAlert,
    updateAlert,
    deleteAlert,
};