const visitor_service = require('../services/Visitor.service');

const createVisitor = async (req, res) => {
    try {
        const reqbody = req.body;
        if (!reqbody) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const body = {
            Visitor_Name: reqbody.Visitor_Name,
            Wing: reqbody.Wing,
            Unit: reqbody.Unit,
            Date: reqbody.Date,
            Time: reqbody.Time,
            Phone: reqbody.Phone,
            createdBy: req.user._id,
            Society: req.user.societyid
        };
        const visitor = await visitor_service.create(body);
        res.status(201).json(visitor);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const getAllVisitors = async (req, res) => {
    try {
        const societyid = req.user.societyid
        const visitors = await visitor_service.getAll(societyid);
        res.status(200).json(visitors);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}


module.exports = {
    createVisitor,
    getAllVisitors,
};