const mongoose = require('mongoose')
const paymentShema = new mongoose.Schema({
    residentid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resident',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    paymenttype: {
        type: String,
        enum: ['FinancialIncome', 'otherIncome'],
        required: true
    },
    incomeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'paymenttype'
    },
    societyid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Society',
        required: true
    },
    residentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Resident'
    },
    haspaid: {
        type: Boolean,
        default: false
    },
    penaltyamount: {
        type: Number,
        default: 0
    },
    paymentdate: {
        type: Date,
    },
    paymentMethod: {
        type: String,
        enum: ['cash', 'online'],
        required: true
    }
},
    {
        timestamps: true,
    }
)

const Payment = mongoose.model('Payment', paymentShema)

module.exports = Payment