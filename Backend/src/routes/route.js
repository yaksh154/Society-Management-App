const express = require("express");
const routes = express.Router();
const managerroute = require("./manager.route")
const societyroute = require("./society.route")
const importantnumberroute = require("./importantnumber.route")
const expensesroute = require("./expenses.route")
const residentroute = require("./resident.route")

routes.use("/manager",managerroute)
routes.use("/society",societyroute)
routes.use("/importantnumber",importantnumberroute)
routes.use("/expenses",expensesroute)
routes.use("/resident",residentroute)

module.exports = routes;