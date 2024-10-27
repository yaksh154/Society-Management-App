const express = require("express");
const manager_controller = require("../controllers/manager.controller");
const router = express.Router();
const {authUser} = require("../middleware/auth")
const {upload} = require("../middleware/upload")


router.post("/createmanager", manager_controller.register);
router.put("/updatemanger",authUser, upload.fields([{ name: "Image" }]), manager_controller.update)
router.post("/login", manager_controller.login);

module.exports = router;
