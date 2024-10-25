const auth_service = require("../services/manager.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    const UserExists = await auth_service.findemail(reqbody.Email);
    if (UserExists) {
      return res.status(400).json({ message: "email already exists" });
    }
    const bcrpass = await bcrypt.hash(reqbody.Password, 10);
    // const otpsed = send_otp(reqbody.Email, otp);
    const body = {
      Username: reqbody.Username,
      Email: reqbody.Email,
      Firstname: reqbody.Firstname,
      Lastname: reqbody.Lastname,
      Number: reqbody.Number,
      Country: reqbody.Country,
      State: reqbody.State,
      society: reqbody.societyid,
      City: reqbody.City,
      Password: bcrpass,
    };
    console.log("🚀 ~ register ~ body:", body)
    const user = await auth_service.register(body);
    const payload = {
      _id: user._id,
      email: user.Email
    };
    const token = jwt.sign(payload, process.env.SECRET_key, { expiresIn: "1d" });
    console.log("🚀 ~ register ~ user:", user)
    return res
      .status(200)
      .json({ message: "User registered successfully", user, token });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};


// login
const login = async (req, res) => {
  console.log("============login============");
  try {
    const body = req.body;
    const { Password, Email } = body;
    const user = await auth_service.findemail(Email)
    if (!user) {
      return res.status(404).json({ message: "User Not Found" })
    }
    const bcryptpass = await bcrypt.compare(Password, user.Password)
    if (bcryptpass) {
      return res.status(404).json({ message: "Incorrect Password" })
    }
    const payload = {
      _id: user._id,
      email: user.Email
    };

    const token = jwt.sign(payload, process.env.SECRET_key, { expiresIn: "1d" });
    res.cookie("token", token);

    console.log("🚀 ~ login ~ token generated:", token);
    res.status(200).json({ message: "User Login Successful", token: token });
  } catch (error) {
    console.error("🚀 ~ login ~ error:", error.message);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  register,
  login,
};
