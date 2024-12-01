const express = require("express");
const securityController = require("../controllers/Security.controller");
const router = express.Router();
const { authUser } = require("../middleware/auth");
const { upload } = require("../middleware/upload");

// Routes
router.post("/createsecurity", authUser, upload.fields([{ name:"photo"}]), securityController.register);
router.put("/updatesecurity/:id", authUser, upload.fields([{ name:"photo"}]), securityController.update);
router.get("/security/:id", authUser, securityController.getSecurity);
router.delete("/deletesecurity/:id", authUser, securityController.deleteSecurity);
router.post("/login", securityController.login);

module.exports = router;