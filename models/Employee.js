const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});
module.exports = mongoose.model("Employee", employeeSchema);