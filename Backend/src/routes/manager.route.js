const express = require("express");
const auth_controller = require("../controllers/manager.controller");
const router = express.Router();



router.post("/createmanager", auth_controller.register);
router.post("/login", auth_controller.login);

module.exports = router;
