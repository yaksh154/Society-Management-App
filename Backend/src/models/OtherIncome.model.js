const mongoose = require("mongoose");

const otherincomeSchema = new mongoose.Schema(
    {
        Title: {
            type: string,
            require: true
        },
        Date: {
            type: Date,
            require: true
        },
        Due_Date: {
            type: Date,
            require: true
        },
        Description: {
            type: string,
            require: true
        },
        Amount: {
            type: Number,
            require: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Manager'
        },
        Society: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Society'
        }
    },
    {
        timestamps: true,
    }
);



const Otherincome = mongoose.model("Otherincome", otherincomeSchema);

module.exports = Otherincome;
