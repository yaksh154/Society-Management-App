const express = require("express");
const router = express.Router();
const expenses_controller = require("../controllers/expenses.controller");
const { authUser } = require("../middleware/auth")
const { upload } = require("../middleware/upload")

router.post("/createexpenses",authUser, upload.fields([{ name: "Bill" }]),expenses_controller.createexpenses);
router.get("/getAllexpensess", expenses_controller.getAllexpenses);
router.put("/updateexpenses/:id", upload.fields([{ name: "Bill" }]), expenses_controller.updateexpenses);
router.delete("/deleteexpenses/:id", expenses_controller.deleteexpenses);

module.exports = router;
