const express = require("express");
const router = express.Router();
const importantnumber_controller = require("../controllers/importantnumber.controller");
const { authUser } = require("../middleware/auth")

router.post("/createImportantNumber", importantnumber_controller.createImportantNumber);
router.get("/getAllImportantNumbers", importantnumber_controller.getAllImportantNumbers);
router.put("/updateImportantNumber/:id", importantnumber_controller.updateImportantNumber);
router.delete("/deleteImportantNumber/:id", importantnumber_controller.deleteImportantNumber);

module.exports = router;
