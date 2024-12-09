const Payment = require('../models/Payment.model'); // Assuming your model is in a models directory
const { payment, downloadInvoice } = require('../services/razorpay.service'); // Path to the Razorpay service

// Create a new payment record and initiate payment
const createPayment = async (req, res) => {
    const { residentId, amount, paymentType, incomeId, societyId, paymentMethod } = req.body;

    try {
        // Validate input and create a payment record
        const paymentRecord = new Payment({
            residentid: residentId,
            amount,
            paymenttype: paymentType,
            incomeId,
            societyid: societyId,
            paymentMethod
        });

        await paymentRecord.save();

        // Initiate payment order with Razorpay
        const order = await payment(amount * 100, 'INR', paymentRecord._id.toString());

        res.status(201).json({ success: true, order, paymentRecord });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Fetch and download an invoice
const fetchInvoice = async (req, res) => {
    const { invoiceId } = req.params;

    try {
        const filePath = await downloadInvoice(invoiceId);

        res.download(filePath, (err) => {
            if (err) {
                throw new Error('Error sending file');
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


module.exports = {
    createPayment,
    fetchInvoice
};
