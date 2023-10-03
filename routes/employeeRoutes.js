const express = require("express");
const Router = express.Router();
const employeeController = require("../controller/employeeController");

Router.route("/add").post(employeeController.add);

module.exports = Router;