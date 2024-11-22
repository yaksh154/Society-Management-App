const express = require("express");
const resident_controller = require("../controllers/resident.controller");
const router = express.Router();
const { authUser } = require("../middleware/auth")
const { upload } = require("../middleware/upload")

router.post("/create", upload.fields([
    { name: "residentphoto", maxCount: 1 },
    { name: "AadharCard_FrontSide", maxCount: 1 },
    { name: "AadharCard_BackSide", maxCount: 1 },
    { name: "VeraBill_OR_LightBill", maxCount: 1 },
    { name: "Rent_Agreement", maxCount: 1 },
]), resident_controller.createResident)
router.get("/getall", resident_controller.getAllResident)
router.put("/update", upload.fields([
    { name: "residentphoto", maxCount: 1 },
    { name: "AadharCard_FrontSide", maxCount: 1 },
    { name: "AadharCard_BackSide", maxCount: 1 },
    { name: "VeraBill_OR_LightBill", maxCount: 1 },
    { name: "Rent_Agreement", maxCount: 1 },
]),resident_controller.updateresident)
router.delete("/delete",resident_controller.deleteresident)

/* ------------------------ module.exports = router; ------------------------ */