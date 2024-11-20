const express = require("express");
const routes = express.Router();
const managerroute = require("./manager.route")
const societyroute = require("./society.route")
const importantnumberroute = require("./importantnumber.route")
const expensesroute = require("./expenses.route")

routes.use("/manager",managerroute)
routes.use("/society",societyroute)
routes.use("/importantnumber",importantnumberroute)
routes.use("/expenses",expensesroute)

module.exports = routes;