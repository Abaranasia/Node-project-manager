const { response, request } = require('express');

const Employee = require('../models/employee');

// Lists all projects
const employeesGet = async (req = request, res = response) => {

  const employees = await Employee.find({});
  res.status(200).json({
    employees
  });
};

// Lists one specific project by id
const employeeGet = async (req = request, res = response) => {
  const { id } = req.params; // Reading URLparams with Express
  console.log(id)
  const employee = await Employee.findOne({ "id": id }, {});
  res.status(200).json({
    employee
  });
};

module.exports = {
  employeesGet,
  employeeGet
};