const manager_service = require("../services/manager.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const { uploadFile } = require("../middleware/upload")
// register
const register = async (req, res) => {
  console.log(
    "==================================== registr ===================================="
  );
  const reqbody = req.body;
  console.log("🚀 ~ register ~ reqbody:", reqbody);
  try {
    if (!reqbody) {
      return res.status(400).json({ message: "Invalid request body" });
    }
    const managerExists = await manager_service.findemail(reqbody.Email);
    if (managerExists) {
      return res.status(400).json({ message: "email already exists" });
    }
    const bcrpass = await bcrypt.hash(reqbody.Password, 10);
    const body = {
      Lastname: reqbody.Lastname,
      Firstname: reqbody.Firstname,
      Email: reqbody.Email,
      Number: reqbody.Number,
      Country: reqbody.Country,
      State: reqbody.State,
      society: reqbody.societyid,
      City: reqbody.City,
      Password: bcrpass,
    };
    console.log("🚀 ~ register ~ body:", body)
    const manager = await manager_service.register(body);
    const payload = {
      _id: manager._id,
      email: manager.Email
    };
    const token = jwt.sign(payload, process.env.SECRET_key, { expiresIn: "1d" });
    console.log("🚀 ~ register ~ manager:", manager)
    return res
      .status(200)
      .json({ message: "manager registered successfully", manager, token });
  } catch (error) {
    console.log("🚀 ~ register ~ error:", error)
    return res.status(404).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const id  = req.user._id;
    const manager = await manager_service.findById(id);
    if (!manager) {
      return res.status(404).json({ message: "Not found" });
    }
    const body = {}
    if (req.body) {
      body.Firstname = req.body.Firstname
      body.Lastname = req.body.Lastname
      body.Number = req.body.Number
      body.Email = req.body.Email
      body.society = req.body.societyid
      body.Country = req.body.Country
      body.State = req.body.State
      body.City = req.body.City
    }
    console.log("🚀 ~ update ~ req.file:", req.files)
    if(req.files){
      const upload = await uploadFile(req.files.Image[0].path);
      console.log("🚀 ~ update ~ upload:", upload)
      body.Image = upload.secure_url
    }
    const updatedmanager = await manager_service.update(id, body);
    res.status(200).json(updatedmanager);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// login
const login = async (req, res) => {
  console.log("============login============");
  try {
    const body = req.body;
    const { Password, Email } = body;
    const manager = await manager_service.findemail(Email)
    if (!manager) {
      return res.status(404).json({ message: "manager Not Found" })
    }
    const bcryptpass = await bcrypt.compare(Password, manager.Password)
    if (bcryptpass) {
      return res.status(404).json({ message: "Incorrect Password" })
    }
    const payload = {
      _id: manager._id,
      email: manager.Email
    };

    const token = jwt.sign(payload, process.env.SECRET_key, { expiresIn: "1d" });
    res.cookie("token", token);
    // res.WriteHeader('managerorization', `Bearer ${token}`);
    console.log("🚀 ~ login ~ token generated:", token);
    res.status(200).json({ message: "manager Login Successful", token: token });
  } catch (error) {
    console.error("🚀 ~ login ~ error:", error.message);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  register,
  update,
  login,
};
