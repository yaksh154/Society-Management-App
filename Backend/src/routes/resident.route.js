const express = require("express");
const resident_controller = require("../controllers/");
const router = express.Router();
const {authUser} = require("../middleware/auth")
const {upload} = require("../middleware/upload")