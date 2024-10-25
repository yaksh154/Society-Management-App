const express = require("express");
const routes = express.Router();
const authroute = require("./auth.route")
const societyroute = require("./society.route")

routes.use("/auth",authroute)
routes.use("/society",societyroute)

module.exports = routes;
