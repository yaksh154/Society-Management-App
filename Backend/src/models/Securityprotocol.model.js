const mongoose = require("mongoose");

const securityprotocolSchema = new mongoose.Schema(
    {
        photo: {
            type: String,
            require: true
        },
        Full_Name: {
            type: String,
            require: true
        },
        phone_Number: {
            type: Date,
            require: true
        },
        Gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            require: true
        },
        Shift: {
            type: String,
            enum: ["night ", "day"],
            require: true
        },
        Shift_Data: {
            type: date,
            require: true
        },
        Shift_Time: {
            type: String,
            require: true
        },
        Aadhar_Card: {
            type: String,
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



const Securityprotocol = mongoose.model("Securityprotocol", securityprotocolSchema);

module.exports = Securityprotocol;
