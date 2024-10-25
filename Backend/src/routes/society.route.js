const express = require('express');
const router = express.Router();
const Society_Controller = require('../controllers/society.controller');

router.post('/createsocieties', Society_Controller.createSociety);
router.get('/societies/:id', Society_Controller.getSocietyById);

// Add more routes if needed (e.g., PUT, DELETE)

module.exports = router;
