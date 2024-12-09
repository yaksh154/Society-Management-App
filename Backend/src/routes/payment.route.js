const express = require('express');
const { createPayment, fetchInvoice, updatePaymentStatus } = require('../controllers/payment.controller');

const router = express.Router();

// Route to create a new payment and initiate Razorpay order
router.post('/create', createPayment);

// Route to download an invoice
router.get('/invoice/:invoiceId', fetchInvoice);



module.exports = router;
