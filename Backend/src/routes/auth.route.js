const express = require("express");
const auth_controller = require("../controllers/auth.controller");
const router = express.Router();



router.post("/register", auth_controller.register);
router.post("/login", auth_controller.login);

module.exports = router;
