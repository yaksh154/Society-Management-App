const express = require("express");
const routes = express.Router();
const managerroute = require("./manager.route")
const societyroute = require("./society.route")
const importantnumberroute = require("./importantnumber.route")

routes.use("/manager",managerroute)
routes.use("/society",societyroute)
routes.use("/importantnumber",importantnumberroute)

module.exports = routes;