const express = require("express");
const resident_controller = require("../controllers/resident.controller");
const router = express.Router();
const { authUser } = require("../middleware/auth")
const { upload } = require("../middleware/upload")

router.post("/create",authUser, upload.fields([
    { name: "residentphoto", maxCount: 1 },
    { name: "AadharCard_FrontSide", maxCount: 1 },
    { name: "AadharCard_BackSide", maxCount: 1 },
    { name: "VeraBill_OR_LightBill", maxCount: 1 },
    { name: "Rent_Agreement", maxCount: 1 },
]), resident_controller.createResident)
router.get("/getall/:id",authUser, resident_controller.getResident)
router.put("/update/:id",authUser, upload.fields([
    { name: "residentphoto", maxCount: 1 },
    { name: "AadharCard_FrontSide", maxCount: 1 },
    { name: "AadharCard_BackSide", maxCount: 1 },
    { name: "VeraBill_OR_LightBill", maxCount: 1 },
    { name: "Rent_Agreement", maxCount: 1 },
]),resident_controller.updateResident)
router.delete("/delete/:id",authUser,resident_controller.deleteResident)

module.exports = router;