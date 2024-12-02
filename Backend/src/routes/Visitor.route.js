const express = require('express');
const router = express.Router();
const Visitor_Controller = require('../controllers/Visitor.controller');
const { authUser } = require("../middleware/auth")

router.post('/createVisitor', authUser, Visitor_Controller.createVisitor);
router.get('/getallVisitors', authUser, Visitor_Controller.getAllVisitors);



module.exports = router;
