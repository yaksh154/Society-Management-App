const resident_service = require("../services/resident.service")

const createResident = async (req, res) => {
    try {
        const residentData = req.body;
        if (!residentData) {
            return res.status(404).json({ message: "all field is required" })
        }
        const newResident = await resident_service.createResident(residentData);
        return res.status(201).json({ message: "create Successful", data: newResident });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createResident
};