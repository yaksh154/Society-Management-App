const fs = require('fs');
const razorpay = require('razorpay');
const path = require('path');

// Read configuration from a separate file
const config = JSON.parse(fs.path('../config/config.js', 'utf8'));

// Initialize Razorpay with configuration
const razorpayInstance = new razorpay({
  key_id: config.razorpay_key_id,
  key_secret: config.razorpay_key_secret,
});
  console.log("🚀 ~ key_id: ",  config.razorpay_key_id, config.razorpay_key_secret,)

// Function to create a new dynamic order
const payment = async (amount, currency = 'INR', receipt, paymentCapture = 1, notes = {}) => {
  try {
    const options = {
      amount,
      currency,
      receipt,
      payment_capture: paymentCapture,
      notes
    };
    const order = await razorpayInstance.orders.create(options);
    return order;
  } catch (error) {
    throw new Error('Error Payment: ' + error.message);
  }
};

// Function to fetch and download an invoice
const downloadInvoice = async (invoiceId) => {
  try {
    const invoice = await razorpayInstance.invoices.fetch(invoiceId);

    // Prepare invoice data for downloading
    const filePath = path.join(__dirname, 'invoices', `invoice_${invoiceId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(invoice, null, 2));

    return filePath;
  } catch (error) {
    throw new Error('Error fetching invoice: ' + error.message);
  }
};

module.exports = {
  payment,
  downloadInvoice
};
