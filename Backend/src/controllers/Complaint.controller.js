const complaintService = require("../services/complaint.service");

const createComplaint = async (req, res) => {
    try {
        const reqbody = req.body;
        console.log("🚀 ~ createComplaint ~ reqbody:", reqbody)
        if (!reqbody) {
            return res.status(400).json({ message: "all required" })
        }
        const body = {
            Complainer_Name: reqbody.complainername,
            Complaint_Name: reqbody.complaintname,
            Description: reqbody.description,
            Wing: reqbody.wing,
            Unit: reqbody.unit,
            Priority: reqbody.priority,
            Status: reqbody.status,
            createdBy: req.user._id,
            Society: req.user.societyid,
        };
        const complaint = await complaintService.create(body);
        return res.status(201).json(complaint);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const getAllComplaints = async (req, res) => {
    try {
        const societyid = req.user.society._id
        const complaints = await complaintService.getAll(societyid);
        return res.status(200).json(complaints);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getComplaint = async (req, res) => {
    try {
        const { id } = req.params;
        const complaint = await complaintService.getById(id);
        if (!complaint) {
            return res.status(404).json({ message: "Not found" });
        }
        return res.status(200).json(complaint);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateComplaint = async (req, res) => {
    try {
        const { id } = req.params;
        const complaint = await complaintService.getById(id);
        if (!complaint) {
            return res.status(404).json({ message: "Not found" });
        }
        const body = {}
        if (req.body) {
            body.Complainer_Name = req.body.complainername,
            body.Complaint_Name = req.body.complaintname,
            body.Description = req.body.description,
            body.Wing = req.body.wing,
            body.Unit = req.body.unit,
            body.Priority = req.body.priority,
            body.Status = req.body.status
        }
        console.log("🚀 ~ updateComplaint ~ body:", body)
        const updatedComplaint = await complaintService.update(id, body);
        return res.status(200).json(updatedComplaint);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const deleteComplaint = async (req, res) => {
    try {
        const { id } = req.params;
        const complaint = await complaintService.getById(id);
        if (!complaint) {
            return res.status(404).json({ message: "Already deleted" });
        }
        await complaintService.remove(id);
        return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createComplaint,
    getAllComplaints,
    getComplaint,
    updateComplaint,
    deleteComplaint,
};
