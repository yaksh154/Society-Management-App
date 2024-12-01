const securityService = require("../services/security.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); 

// Register a new security personnel
const register = async (req, res) => {
    try {
        const body = req.body;
        if (req.file) {
            body.photo = req.file.path;
        }
        body.createdBy = req.user._id; // assuming auth middleware adds user info
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
        const body = req.body;
        if (req.file) {
            body.photo = req.file.path;
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

        const token = jwt.sign({ id: security._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    register,
    update,
    getSecurity,
    deleteSecurity,
    login
};
