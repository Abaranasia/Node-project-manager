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

const employeePost = async (req = request, res = response) => {
  console.log("req: ", req.body)
  const {
    id,
    name,
    surname,
    email,
    profile,
    enrol_date,
    skills,
    technologies
  } = req.body;

  const employee = new Employee({
    id,
    name,
    surname,
    email,
    profile,
    enrol_date,
    skills,
    technologies
  });

  await employee.save(); // This will actually save the data in the DB

  res.status(200).json({
    msg: 'post API',
    employee
  });
}

module.exports = {
  employeesGet,
  employeeGet,
  employeePost,
};