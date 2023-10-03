const Employee = require("../models/Employee");

exports.add = async (req, res) => {
    console.log(req.body);
  try {
    const newEmployee = new Employee(req.body);
    console.log("ok");
    await newEmployee.save();
    console.log("nice");
    res.send(newEmployee);
    console.log("hello");
  } catch (err) {
    res.status(400).json(err.message);
  }
};