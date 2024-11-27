const express = require("express");
const routes = express.Router();
const managerroute = require("./manager.route")
const societyroute = require("./society.route")
const importantnumberroute = require("./importantnumber.route")
const expensesroute = require("./expenses.route")
const residentroute = require("./resident.route")
const complaintroute = require("./complaint.route")
const facilityroute = require("./facility.route")
const maintenanceroute = require("./maintenance.route")
const noteroute = require("./note.route")
const requestroute = require("./request.route")

routes.use("/manager",managerroute)
routes.use("/society",societyroute)
routes.use("/importantnumber",importantnumberroute)
routes.use("/expenses",expensesroute)
routes.use("/resident",residentroute)
routes.use("/complaint",complaintroute)
routes.use("/facility",facilityroute)
routes.use("/maintenance",maintenanceroute)
routes.use("/note",noteroute)
routes.use("/request",requestroute)

module.exports = routes;