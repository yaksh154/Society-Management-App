const securityService = require("../services/security.service");
const { uploadFile } = require("../middleware/upload")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new security personnel
const register = async (req, res) => {
    try {
        const registersecurity = req.body;
        console.log("🚀 ~ register ~ registersecurity:", registersecurity)

        console.log("🚀 ~ register ~ req.files:", req.files)
        const photopath = req.files.photo[0].path;
        const aadharcardpath = req.files.Aadhar_Card[0].path;

        const photo = await uploadFile(photopath);
        console.log("🚀 ~ register ~ photo:", photo)
        const Aadhar_Card = await uploadFile(aadharcardpath);
        console.log("🚀 ~ register ~ Aadhar_Card:", Aadhar_Card)
        const body = {
            photo: photo.secure_url,
            Full_Name: registersecurity.Full_Name,
            phone_Number: registersecurity.phone_Number,
            Gender: registersecurity.Gender,
            Shift: registersecurity.Shift,
            Shift_Data: registersecurity.Shift_Data,
            Shift_Time: registersecurity.Shift_Time,
            Aadhar_Card: Aadhar_Card.secure_url,
            createdBy: req.user._id,
            Society: req.user.societyid
        }
        console.log("🚀 ~ register ~ photo.secure_url:", photo.secure_url)
        console.log("🚀 ~ register ~ Aadhar_Card.secure_url,:", Aadhar_Card.secure_url,)
        // assuming auth middleware adds user info
        const security = await securityService.register(body);
        res.status(201).json({ message: "Security personnel registered", data: security });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update security personnel details
const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updatesecurity = req.body;

        const body = {}
        if (req.body) {
            body.Full_Name = updatesecurity.Full_Name,
                body.phone_Number = updatesecurity.phone_Number,
                body.Gender = updatesecurity.Gender,
                body.Shift = updatesecurity.Shift,
                body.Shift_Data = updatesecurity.Shift_Data,
                body.Shift_Time = updatesecurity.Shift_Time

        }
        if (req.files) {
            if (req.files.residentphoto) {
                const photopath = req.files.photo[0].path;
                const photo = await uploadFile(photopath);
                body.photo = photo.secure_url;
            }
            if (req.files.AadharCard_FrontSide) {
                const aadharcardpath = req.files.Aadhar_Card[0].path;
                const Aadhar_Card = await uploadFile(aadharcardpath);
                body.Aadhar_Card = Aadhar_Card.secure_url;
            }
        }
        const updatedSecurity = await securityService.update(id, body);
        if (!updatedSecurity) {
            return res.status(404).json({ message: "Security personnel not found" });
        }
        res.status(200).json({ message: "Security personnel updated", data: updatedSecurity });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a security personnel's details
const getSecurity = async (req, res) => {
    try {
        const id = req.params.id;
        const security = await securityService.findById(id);
        if (!security) {
            return res.status(404).json({ message: "Security personnel not found" });
        }
        res.status(200).json(security);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a security personnel
const deleteSecurity = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await securityService.deleteSecurity(id);
        if (!deleted) {
            return res.status(404).json({ message: "Security personnel not found" });
        }
        res.status(200).json({ message: "Security personnel deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const security = await securityService.findByEmail(email);
        if (!security) {
            return res.status(404).json({ message: "Security personnel not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, security.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const payload = {
            _id: security._id,
            email: security.Email,
            role: security.Role,
            societyid: security.Society
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getgetallsecurity = async (req, res) => {
    try {
        const societyid = req.user.societyid
        const security = await securityService.getAll(societyid);
        return res.status(200).json(security);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    register,
    update,
    getSecurity,
    deleteSecurity,
    login,
    getgetallsecurity
};
